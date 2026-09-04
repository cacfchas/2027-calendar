// The calendar year this build renders. Bump this and the sheetId in config.js
// to roll the calendar over to a new year.
export const YEAR = 2027;

export const CATEGORIES = {
  'Office Closed': { color: '#7D8C8E', textColor: '#fff' },
  'Events': { color: '#D35400', textColor: '#fff' },
  'Board Meeting': { color: '#2471A3', textColor: '#fff' },
  'Committee Meeting': { color: '#5499C7', textColor: '#fff' },
  'Communications': { color: '#C0392B', textColor: '#fff' },
  'Grants & Programs': { color: '#27AE60', textColor: '#fff' },
  'Scholarships': { color: '#AF7AC5', textColor: '#fff' },
  'Deep Work Weeks': { color: '#6C3483', textColor: '#fff' },
  'School Closed/Office Open': { color: '#F5B041', textColor: '#333' },
  'Strategic Growth': { color: '#17A589', textColor: '#fff' },
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
