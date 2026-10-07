// Deploy this as a separate Apps Script Web App for the event RSVP sheet.
const EVENT_ID = "lka-academy-launch-2026-11-11";
const HEADERS = ["Submission timestamp", "Event identifier", "Attendance status", "Full name", "Email", "Phone number", "Organisation", "Designation"];

function json(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}
function clean(value, max, required) {
  if (typeof value !== "string") throw new Error("Invalid value");
  const result = value.trim();
  if ((required && !result) || result.length > max) throw new Error("Invalid length");
  return result;
}
function literal(value) {
  // Prefix potentially executable input; the column is also formatted as text.
  return /^[=+\-@\t\r]/.test(value) ? "'" + value : value;
}
function getSheet() {
  const properties = PropertiesService.getScriptProperties();
  const sheet = SpreadsheetApp.openById(properties.getProperty("RSVP_SPREADSHEET_ID"))
    .getSheetByName(properties.getProperty("RSVP_SHEET_NAME") || "Academy Launch RSVPs");
  if (!sheet) throw new Error("RSVP sheet missing");
  return sheet;
}
function setupRsvpSheet() {
  // Run once from the editor opened through the RSVP spreadsheet's Extensions menu.
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) throw new Error("Open Apps Script from your RSVP spreadsheet via Extensions > Apps Script.");
  const properties = PropertiesService.getScriptProperties();
  const name = properties.getProperty("RSVP_SHEET_NAME") || "Academy Launch RSVPs";
  const sheet = spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
  ensureHeaders(sheet);
  sheet.setFrozenRows(1);
  properties.setProperties({ RSVP_SPREADSHEET_ID:spreadsheet.getId(), RSVP_SHEET_NAME:name });
}
function ensureHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    return;
  }
  const headers = sheet.getRange(1,1,1,HEADERS.length).getValues()[0];
  if (!HEADERS.every((heading,index) => heading === headers[index])) {
    throw new Error("Existing headings differ. Use an empty RSVP tab; existing data has not been overwritten.");
  }
}
function doPost(e) {
  let lock;
  try {
    if (!e || !e.postData || e.postData.contents.length > 12000) return json({ success:false });
    const data = JSON.parse(e.postData.contents);
    if (data.eventId !== EVENT_ID) return json({ success:false });
    if (data.attendance !== "attending" && data.attendance !== "declined") return json({ success:false });
    const name = clean(data.name,160,true);
    const email = clean(data.email,254,true).toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ success:false });
    const organisation = clean(data.organisation,160,false);
    const designation = clean(data.designation,160,false);
    const phone = clean(data.phone,50,false);
    lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) return json({ success:false });
    const sheet = getSheet();
    ensureHeaders(sheet);
    const count = sheet.getLastRow();
    const records = count > 1 ? sheet.getRange(2,2,count-1,4).getDisplayValues() : [];
    const existing = records.findIndex(row => row[0] === EVENT_ID && row[3].trim().replace(/^'/,"").toLowerCase() === email);
    const row = existing >= 0 ? existing + 2 : count + 1;
    const values = [new Date().toISOString(),EVENT_ID,data.attendance,name,email,phone,organisation,designation].map(literal);
    sheet.getRange(row,1,1,HEADERS.length).setNumberFormat("@").setValues([values]);
    SpreadsheetApp.flush();
    return json({ success:true });
  } catch {
    // Avoid returning spreadsheet details or logging guests' personal information.
    return json({ success:false, error:"Unable to save RSVP." });
  } finally {
    if (lock && lock.hasLock()) lock.releaseLock();
  }
}
