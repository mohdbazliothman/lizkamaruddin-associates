const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const env = { ACADEMY_RSVP_APPS_SCRIPT_URL:"https://script.google.com/macros/s/test/exec" };
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
  assert.equal("secret" in payload,false);
  assert.equal(payload.eventId,"lka-academy-launch-2026-11-11");
  await send({...valid,attendance:"declined"});
  assert.equal(payload.phone,"+60123456789");
  assert.equal("dietary" in payload,false);
  const before=fetches;
  for(const edit of [{name:""},{email:"invalid"},{attendance:"maybe"},{website:"bot"},{name:"x".repeat(161)},{unexpected:true}])assert.equal((await send({...valid,...edit})).status,400);
  assert.equal(fetches,before);
  assert.equal((await send(valid,"https://other.example")).status,403);
  for(const value of ["network","html","rejected"]){mode=value;assert.equal((await send(valid)).status,502);}
  delete env.ACADEMY_RSVP_APPS_SCRIPT_URL;
  assert.equal((await send(valid)).status,503);
  const calendar=await load("app/academylaunch/calendar/route.ts").GET().text();
  assert.ok(calendar.includes("DTSTART;TZID=Asia/Kuala_Lumpur:20261111T150000"));
  assert.ok(calendar.includes("DTEND;TZID=Asia/Kuala_Lumpur:20261111T180000"));
  assert.ok(calendar.split("\r\n").every(line=>Buffer.byteLength(line)<=75));

  // Execute the actual Apps Script with an in-memory Sheet, never a live guest sheet.
  const rows=[];
  const properties={};
  let locked=false,formatted=false;
  const sheet={setFrozenRows:()=>{},getLastRow:()=>rows.length,getRange:(r,c,h,w)=>({
    getValues:()=>rows.slice(r-1,r-1+h).map(row=>row.slice(c-1,c-1+w)),
    getDisplayValues:()=>rows.slice(r-1,r-1+h).map(row=>row.slice(c-1,c-1+w)),
    setNumberFormat(){formatted=true;return this;},
    setValues(values){values.forEach((value,i)=>{rows[r-1+i]=Array.from(value);});return this;}
  })};
  const gs={
    ContentService:{MimeType:{JSON:"json"},createTextOutput:value=>({setMimeType:()=>JSON.parse(value)})},
    PropertiesService:{getScriptProperties:()=>({getProperty:key=>properties[key],setProperties:values=>Object.assign(properties,values)})},
    LockService:{getScriptLock:()=>({tryLock:()=>{assert.equal(locked,false);locked=true;return true;},hasLock:()=>locked,releaseLock:()=>{locked=false;}})},
    SpreadsheetApp:{getActiveSpreadsheet:()=>({getId:()=>"test-id",getSheetByName:()=>null,insertSheet:()=>sheet}),openById:id=>{assert.equal(id,"test-id");return {getSheetByName:()=>sheet};},flush:()=>{}}
  };
  vm.createContext(gs);vm.runInContext(fs.readFileSync("docs/academy-rsvp.gs","utf8"),gs);
  gs.setupRsvpSheet();
  assert.equal(properties.RSVP_SPREADSHEET_ID,"test-id");
  assert.equal(rows.length,1);
  const save=data=>gs.doPost({postData:{contents:JSON.stringify({ ...valid,eventId:"lka-academy-launch-2026-11-11", ...data })}});
  assert.equal(save({eventId:"wrong"}).success,false);
  assert.equal(save({name:"=SUM(A1:A2)"}).success,true);
  assert.equal(rows.length,2);assert.ok(rows[1][3].startsWith("'="));assert.ok(formatted);
  assert.equal(save({email:"test@EXAMPLE.COM",attendance:"declined",phone:"0123456789"}).success,true);
  assert.equal(rows.length,2);assert.equal(rows[1][2],"declined");assert.equal(rows[1][5],"0123456789");assert.equal(locked,false);
  gs.setupRsvpSheet();
  assert.equal(rows.length,2);
  rows[0][0]="Existing unrelated data";
  assert.throws(()=>gs.setupRsvpSheet(),/Existing headings differ/);
  assert.equal(save({}).success,false);
  assert.equal(rows[0][0],"Existing unrelated data");
  assert.equal(rows.length,2);
  assert.equal(locked,false);
  console.log("PASS: API validation, honeypot, failures, calendar, literal text, locked RSVP upsert and phone mapping.");
})().catch(error=>{console.error(error);process.exitCode=1;});
