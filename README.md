# CACF 2027 Annual Calendar

Interactive year calendar for the Charlottesville Area Community Foundation, built
with React + Vite and deployed to GitHub Pages.

Live: https://cacfchas.github.io/2027-calendar/

Adapted from [chasmanning/cacf](https://github.com/chasmanning/cacf) (the 2026 build).

## Where the data comes from

Events load at runtime from the published 2027 Google Sheet:

`1gZSrDVHDGHpNSsTGvOxwFKF_MR5o4fvi8y9ANEoxNU4`

The sheet is re-read every 5 minutes, so edits appear without a redeploy. If the
fetch fails, the app falls back to the snapshot in
`calendar-app/public/events.json`.

Expected sheet columns in row 1: `Event Name`, `Category`, `Start Date`,
`End Date`. Extra columns are ignored. **Rows with a blank Start Date are
skipped** — that is how TBD items stay in the sheet without cluttering the
calendar.

## Password

The login gate reads from a tab named exactly `Params`:

| Key | Value |
| --- | --- |
| `password` | your-password |

**With no `Params` tab, the calendar opens with no login at all.** The 2027 sheet
does not currently have one.

## Categories

Preset colors live in `calendar-app/src/constants.js`. Any category in the sheet
that is not preset still renders, with an auto-assigned color from
`CategoryContext.jsx`. Note that every preset category shows a filter pill even
with zero events, so keep `CATEGORIES` aligned with what the sheet actually uses.

## Rolling over to a new year

1. Bump `YEAR` in `calendar-app/src/constants.js`.
2. Point `sheetId` in `calendar-app/src/config.js` at the new sheet.
3. Update the `<title>` in `index.html` and `megan.html`.
4. Regenerate `calendar-app/public/events.json` from the new sheet.
5. If the repo name changes, update `base` in `calendar-app/vite.config.js` to
   match, or Pages will 404 on assets.

## Local development

```bash
cd calendar-app
npm install
npm run dev
```

## Deployment

`.github/workflows/deploy.yml` builds `calendar-app` and publishes
`calendar-app/dist` to GitHub Pages on every push to `main`. The `org-chart/`
directory is copied into the build as `/org-chart/`.
