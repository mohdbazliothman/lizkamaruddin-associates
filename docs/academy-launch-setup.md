# Academy launch invitation

Preview: http://localhost:3054/academylaunch
Public route (not deployed by this change): https://www.lizkamaruddinassociates.com/academylaunch

## Separate RSVP storage

Do not reuse the contact enquiry webhook. The RSVP integration needs only one
server-side environment variable. It never simulates a successful save.

1. Create a private Google spreadsheet and a blank tab named **Academy Launch RSVPs**.
2. Open Extensions > Apps Script. Paste the full contents of `docs/academy-rsvp.gs` into a separate project. Keep `doPost` at the top level.
3. In the function dropdown beside Run, choose `setupRsvpSheet`, click Run and authorise access. Open this script through the spreadsheet, not as a standalone project. Setup automatically remembers that spreadsheet's ID, creates the RSVP tab if needed and adds eight headings. You do not need to enter Script Properties manually.
4. Setup is safe to rerun with the correct headings: existing responses remain unchanged. If headings differ, it stops without overwriting them. Use a new empty RSVP tab or back up and correct the headings before retrying.
5. Deploy > New deployment > Web app. Execute as owner; access Anyone. Copy the Web app URL ending `/exec`. The sheet itself stays private.
6. Add `ACADEMY_RSVP_APPS_SCRIPT_URL` to ignored local `.env.local` and Vercel Production environment variables. Its value is the complete Web app HTTPS URL ending `/exec`, without quotes. No shared-secret environment variable is needed.
7. Restart the local server. Deploy/redeploy Vercel only when publication is authorised. Apps Script edits require Manage deployments > Edit > New version > Deploy.

The script writes the timestamp itself, formats entries as text, escapes formula prefixes,
and updates the row identified by event ID and lowercased email under a script lock.
Phone number is optional and stored after Email, as literal text to preserve leading zeros.
Timestamp is the latest response time.
If you already created the previous sheet template, back up existing data and change the
headings/order to Timestamp, Event identifier, Attendance status, Full name, Email,
Phone number, Organisation, Designation (use "Submission timestamp" for the first heading).
Do not overwrite existing dietary data as phone numbers. Update and redeploy the Apps Script.
If upgrading the earlier secret-based setup, replace all of Code.gs with the current
`academy-rsvp.gs`, run setup and deploy a new Apps Script version. The website API must
also be deployed with this update. Old shared-secret properties/variables are unused and
may be removed; leave all contact-form configuration unchanged.

Email is a deduplication key, not identity verification. The shared link and noindex metadata
are not access control. Never put the webhook URL in NEXT_PUBLIC variables.
This simplified webhook has no shared-secret authentication: anyone who obtains its URL
can send requests directly, bypass the website's spam checks and update an RSVP if they
know its email address. Keep the URL private; the event ID is not a security credential.
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
