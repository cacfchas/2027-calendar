// The calendar year this build renders. Bump this and the sheetId in config.js
// to roll the calendar over to a new year.
export const YEAR = 2027;

// Color lookup ONLY. This is not a list of categories.
//
// Which categories exist is decided entirely by the sheet: buildCategoryMap in
// CategoryContext.jsx derives them from the loaded events. A name listed here
// never creates a filter pill on its own, and a name missing from here still
// renders, with a color assigned from DYNAMIC_PALETTE.
//
// Add an entry here only to pin a category to a specific color.
export const CATEGORY_COLORS = {
  'Office Closed': { color: '#7D8C8E', textColor: '#fff' },
  'Events': { color: '#D35400', textColor: '#fff' },
  'Governing Board': { color: '#2471A3', textColor: '#fff' },
  'Committees': { color: '#5499C7', textColor: '#fff' },
  'Communications': { color: '#C0392B', textColor: '#fff' },
  'Grants & Programs': { color: '#27AE60', textColor: '#fff' },
  'Scholarships': { color: '#AF7AC5', textColor: '#fff' },
  'Deep Work Weeks': { color: '#6C3483', textColor: '#fff' },
  'School Closed/Office Open': { color: '#F5B041', textColor: '#333' },
  'PE/Strategic Growth': { color: '#17A589', textColor: '#fff' },
  'Conference': { color: '#34495E', textColor: '#fff' },
};

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const BRAND = {
  crimson: '#A11E21',
  warmGray: '#9E9B95',
  dayBg: '#FAF8F5',
  weekendBg: '#F2EFEB',
  palette: ['#A11E21', '#C25C28', '#5F9B94', '#9E9B95', '#B3AB51', '#4C7137', '#CFB055'],
};

export const MONTH_LEVEL_THRESHOLD = 20;
