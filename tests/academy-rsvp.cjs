const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const crypto = require("node:crypto");
const env = { ACADEMY_RSVP_APPS_SCRIPT_URL:"https://script.google.com/macros/s/test/exec", ACADEMY_RSVP_SHARED_SECRET:"test-secret" };
let fetches=0, payload, mode="ok";
const modules={};
function load(file) {
  if (modules[file]) return modules[file];
  const box={ exports:{},require:name=>name.startsWith("@/")?load(name.slice(2)+".ts"):require(name),Request,Response,URL,Buffer,AbortSignal,TextEncoder,process:{env},
    fetch:async(url,options)=>{fetches++;payload=JSON.parse(options.body);if(mode==="network")throw Error("offline");if(mode==="html")return new Response("<html>Error</html>");return Response.json({success:mode==="ok"});}
  };
  vm.runInNewContext(ts.transpileModule(fs.readFileSync(file,"utf8"),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,box);
  return modules[file]=box.exports;
}
const route=load("app/api/academy-rsvp/route.ts");
const valid={attendance:"attending",name:"Test Guest",email:"TEST@example.com",phone:"+60123456789",organisation:"",designation:"",website:""};
let ip=0;
const send=(body,origin="http://localhost")=>route.POST(new Request("http://localhost/api/academy-rsvp",{method:"POST",headers:{"Content-Type":"application/json","Origin":origin,"x-forwarded-for":String(++ip)},body:JSON.stringify(body)}));
(async()=>{
  assert.equal((await send(valid)).status,200);
  assert.equal(payload.email,"test@example.com");
  assert.equal(payload.eventId,"lka-academy-launch-2026-11-11");
  await send({...valid,attendance:"declined"});
  assert.equal(payload.phone,"+60123456789");
  assert.equal("dietary" in payload,false);
  const before=fetches;
  for(const edit of [{name:""},{email:"invalid"},{attendance:"maybe"},{website:"bot"},{name:"x".repeat(161)},{unexpected:true}])assert.equal((await send({...valid,...edit})).status,400);
  assert.equal(fetches,before);
  assert.equal((await send(valid,"https://other.example")).status,403);
  for(const value of ["network","html","rejected"]){mode=value;assert.equal((await send(valid)).status,502);}
  delete env.ACADEMY_RSVP_SHARED_SECRET;
  assert.equal((await send(valid)).status,503);
  const calendar=await load("app/academylaunch/calendar/route.ts").GET().text();
  assert.ok(calendar.includes("DTSTART;TZID=Asia/Kuala_Lumpur:20261111T150000"));
  assert.ok(calendar.includes("DTEND;TZID=Asia/Kuala_Lumpur:20261111T180000"));
  assert.ok(calendar.split("\r\n").every(line=>Buffer.byteLength(line)<=75));

  // Execute the actual Apps Script with an in-memory Sheet, never a live guest sheet.
  const rows=[["Submission timestamp","Event identifier","Attendance status","Full name","Email","Phone number","Organisation","Designation"]];
  let locked=false,formatted=false;
  const sheet={getLastRow:()=>rows.length,getRange:(r,c,h,w)=>({
    getValues:()=>rows.slice(r-1,r-1+h).map(row=>row.slice(c-1,c-1+w)),
    getDisplayValues:()=>rows.slice(r-1,r-1+h).map(row=>row.slice(c-1,c-1+w)),
    setNumberFormat(){formatted=true;return this;},
    setValues(values){values.forEach((value,i)=>{rows[r-1+i]=value;});return this;}
  })};
  const gs={
    ContentService:{MimeType:{JSON:"json"},createTextOutput:value=>({setMimeType:()=>JSON.parse(value)})},
    PropertiesService:{getScriptProperties:()=>({getProperty:key=>({RSVP_SHARED_SECRET:"test-secret",RSVP_SPREADSHEET_ID:"test-id",RSVP_SHEET_NAME:"Test"}[key])})},
    Utilities:{DigestAlgorithm:{SHA_256:"sha256"},computeDigest:(_,value)=>[...crypto.createHash("sha256").update(value).digest()]},
    LockService:{getScriptLock:()=>({tryLock:()=>{assert.equal(locked,false);locked=true;return true;},hasLock:()=>locked,releaseLock:()=>{locked=false;}})},
    SpreadsheetApp:{openById:()=>({getSheetByName:()=>sheet}),flush:()=>{}}
  };
  vm.createContext(gs);vm.runInContext(fs.readFileSync("docs/academy-rsvp.gs","utf8"),gs);
  const save=data=>gs.doPost({postData:{contents:JSON.stringify({ ...valid, ...data,secret:"test-secret",eventId:"lka-academy-launch-2026-11-11" })}});
  assert.equal(save({name:"=SUM(A1:A2)"}).success,true);
  assert.equal(rows.length,2);assert.ok(rows[1][3].startsWith("'="));assert.ok(formatted);
  assert.equal(save({email:"test@EXAMPLE.COM",attendance:"declined",phone:"0123456789"}).success,true);
  assert.equal(rows.length,2);assert.equal(rows[1][2],"declined");assert.equal(rows[1][5],"0123456789");assert.equal(locked,false);
  console.log("PASS: API validation, honeypot, failures, calendar, literal text, locked RSVP upsert and phone mapping.");
})().catch(error=>{console.error(error);process.exitCode=1;});
