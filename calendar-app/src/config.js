/**
 * Google Sheets Integration
 *
 * To connect your calendar to a Google Sheet:
 *
 * 1. Create a Google Sheet with these columns (row 1 = headers):
 *    Event Name | Category | Start Date | End Date
 *
 *    - Category must match exactly: Office Closed, Events, Board Meeting,
 *      Committee Meeting, Communications, Grants & Programs, Scholarships,
 *      Deep Work Weeks, School Closed/Office Open, Strategic Growth
 *      (any other value still renders, with an auto-assigned color)
 *    - Dates can be MM/DD/YYYY or YYYY-MM-DD
 *    - Rows with a blank Start Date are ignored
 *
 * 2. Publish the sheet:
 *    File > Share > Publish to web > Entire Document > CSV > Publish
 *
 * 3. Copy the Sheet ID from the sheet URL:
 *    https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
 *
 * 4. Paste it below and set enabled: true
 *
 * 5. To require a password, add a tab named exactly "Params" with headers
 *    Key | Value in row 1, and a row: password | your-password
 *    With no Params tab, the calendar opens without a login.
 */
const SHEET_DEFAULTS = {
  enabled: true,
  // 2027 CACF Visual Calendar
  sheetId: '1gZSrDVHDGHpNSsTGvOxwFKF_MR5o4fvi8y9ANEoxNU4',
  // Optional: specific tab name (leave empty for first tab)
  sheetName: '',
  // Auto-refresh interval in minutes (0 = load once on page open)
  refreshMinutes: 5,
};

// Allow per-page overrides via window.CACF_CONFIG (set before module loads)
export const SHEET_CONFIG = { ...SHEET_DEFAULTS, ...(window.CACF_CONFIG || {}) };
