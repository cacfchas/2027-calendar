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
skipped**, which is how TBD items stay in the sheet without cluttering the
calendar.

### Auto-refresh

`refreshMinutes` in `calendar-app/src/config.js` controls the poll interval
(currently 5 minutes). Nothing is cached across the poll, so renamed events,
new rows, changed dates and changed categories all appear on their own. Set it
to `0` to load once per page open instead.

Category changes reconcile without disturbing the person looking at the page: a
category the sheet adds arrives switched on, one it stops using disappears, and
any filter the viewer has switched off stays off. See the `knownCategories`
reconcile in `calendar-app/src/App.jsx`.

The one piece that does NOT update itself is the fallback snapshot,
`calendar-app/public/events.json`. It is a build artifact and only gets used
when the sheet fetch fails, so it needs a commit to refresh.

## Password

The login gate reads from a tab named exactly `Params`:

| Key | Value |
| --- | --- |
| `password` | your-password |

**With no `Params` tab, the calendar opens with no login at all.**

## Categories

**The sheet is the only source of which categories exist.** `buildCategoryMap` in
`calendar-app/src/CategoryContext.jsx` derives them from the loaded events, so a
category appears if and only if at least one dated event carries it. Add a
category to the sheet and it shows up with no code change. Stop using one and it
disappears.

`CATEGORY_COLORS` in `calendar-app/src/constants.js` is a color lookup, not a
category list. A name listed there never creates a filter pill on its own; a name
missing from there still renders, with a color from `DYNAMIC_PALETTE`. Add an
entry only to pin a category to a specific color.

Category names are sorted, so filter order and fallback colors stay stable when
sheet rows are added or reordered. One thing to watch: a dated event with a blank
Category is filtered out and shows nowhere.

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
