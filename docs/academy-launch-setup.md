# Academy launch invitation

Preview: http://localhost:3054/academylaunch
Public route (not deployed by this change): https://www.lizkamaruddinassociates.com/academylaunch

## Separate RSVP storage

Do not reuse the contact enquiry webhook. No event credentials have been configured.
The form returns an error until these are configured; it never simulates a save.

1. Create a private Google spreadsheet and a blank tab named **Academy Launch RSVPs**.
2. Open Extensions > Apps Script. Paste the full contents of `docs/academy-rsvp.gs` into a separate project. Keep `doPost` at the top level.
3. Under Project Settings > Script Properties, add:
   - `RSVP_SPREADSHEET_ID`: the ID between /d/ and /edit in the spreadsheet URL.
   - `RSVP_SHEET_NAME`: Academy Launch RSVPs.
   - `RSVP_SHARED_SECRET`: a randomly generated secret of at least 32 bytes. Generate with `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`.
4. Run `setupRsvpSheet` once on the empty tab and authorise access. It creates eight headings in the required order. Never run it over existing data.
5. Deploy > New deployment > Web app. Execute as owner; access Anyone. The sheet itself stays private. The script authenticates server requests using the shared secret.
6. Add the following to ignored local `.env.local` and to Vercel Production environment variables:
   - `ACADEMY_RSVP_APPS_SCRIPT_URL`: the new web app HTTPS URL ending /exec.
   - `ACADEMY_RSVP_SHARED_SECRET`: exactly the same secret as the script property.
7. Restart the local server. Deploy/redeploy Vercel only when publication is authorised. Apps Script edits require Manage deployments > Edit > New version > Deploy.

The script writes the timestamp itself, formats entries as text, escapes formula prefixes,
and updates the row identified by event ID and lowercased email under a script lock.
Phone number is optional and stored after Email, as literal text to preserve leading zeros.
Timestamp is the latest response time.
If you already created the previous sheet template, back up existing data and change the
headings/order to Timestamp, Event identifier, Attendance status, Full name, Email,
Phone number, Organisation, Designation (use "Submission timestamp" for the first heading).
Do not overwrite existing dietary data as phone numbers. Update and redeploy the Apps Script.
Email is a deduplication key, not identity verification. The shared link and noindex metadata
are not access control. Never put webhook URLs or secrets in NEXT_PUBLIC variables.
Best-effort per-instance API rate limiting supplements the honeypot; this is not a global rate limit.
No emails are sent.

## Verify storage with a designated test sheet

Use a test spreadsheet ID in a separate test script deployment before production setup.
Submit a clearly marked attending test, then decline using the same email with different casing.
Expect one row, updated to declined with the latest phone number.
Test missing fields, invalid email, a populated honeypot, and temporarily unavailable storage.
No success message should appear for an error. Inspect the calendar: 11 November 2026,
15:00 to 18:00 Asia/Kuala_Lumpur (07:00 to 10:00 UTC).

## Design and assets

Both supplied invitation pages were rendered and reviewed. Original source files remain
unchanged in C:/Users/user/Downloads/Academy Launching Web.
Image 1 is optimised to WebP; the logo SVGs extract the original outlined paths from the
logo guide. No poster-sized raster text or additional gallery is used.
Georgia is the temporary serif fallback. Editor's Note is not installed or bundled.
Provide licensed Editor's Note Regular and Italic WOFF2 files (and Bold if licensed/needed)
for an exact font match; the PDF's outlined lettering is not a licensed web font.
Poppins uses the site's existing font setup.
The salutation and optional RSVP deadline live in `lib/academy-launch.ts`.
No guest query parameters are interpreted.
