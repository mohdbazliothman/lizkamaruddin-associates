export function GET() {
  const lines = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//LK&A//Comms Academy Launch//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
    "BEGIN:VTIMEZONE", "TZID:Asia/Kuala_Lumpur", "BEGIN:STANDARD", "DTSTART:19700101T000000", "TZOFFSETFROM:+0800", "TZOFFSETTO:+0800", "TZNAME:MYT", "END:STANDARD", "END:VTIMEZONE",
    "BEGIN:VEVENT", "UID:lka-academy-launch-20261111@lizkamaruddinassociates.com", "DTSTAMP:20261007T000000Z",
    "DTSTART;TZID=Asia/Kuala_Lumpur:20261111T150000", "DTEND;TZID=Asia/Kuala_Lumpur:20261111T180000",
    "SUMMARY:Comms\\, Coffee & Conversation",
    "LOCATION:Liberal Latte\\, Wisma E&C\\, 2 Lorong Dungun Kiri\\,",
    "  Damansara Heights",
    "DESCRIPTION:Launch of LK&A Comms Academy. By personal invitation.",
    "URL:https://www.lizkamaruddinassociates.com/academylaunch",
    "END:VEVENT", "END:VCALENDAR", ""
  ];
  return new Response(lines.join("\r\n"), { headers: {
    "Content-Type":"text/calendar; charset=utf-8",
    "Content-Disposition":'attachment; filename="lka-comms-academy-launch.ics"'
  }});
}
