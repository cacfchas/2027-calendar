import { createContext, useContext } from 'react';
import { CATEGORY_COLORS } from './constants';

// Empty until events load, because the sheet decides which categories exist.
export const CategoryContext = createContext({});

export function useCategories() {
  return useContext(CategoryContext);
}

/**
 * Colors for categories with no entry in CATEGORY_COLORS.
 * These are visually distinct and avoid clashing with the preset colors.
 */
const DYNAMIC_PALETTE = [
  { color: '#E91E63', textColor: '#fff' },  // Pink
  { color: '#3F51B5', textColor: '#fff' },  // Indigo
  { color: '#009688', textColor: '#fff' },  // Teal
  { color: '#FF5722', textColor: '#fff' },  // Deep Orange
  { color: '#795548', textColor: '#fff' },  // Brown
  { color: '#607D8B', textColor: '#fff' },  // Blue Grey
  { color: '#8BC34A', textColor: '#333' },  // Light Green
  { color: '#FF9800', textColor: '#333' },  // Orange
  { color: '#00BCD4', textColor: '#fff' },  // Cyan
  { color: '#9C27B0', textColor: '#fff' },  // Purple
  { color: '#CDDC39', textColor: '#333' },  // Lime
  { color: '#F44336', textColor: '#fff' },  // Red
  { color: '#2196F3', textColor: '#fff' },  // Blue
  { color: '#4CAF50', textColor: '#fff' },  // Green
  { color: '#FFC107', textColor: '#333' },  // Amber
];

/**
 * Build the category map from the loaded events.
 *
 * The sheet is the only source of which categories exist: a category appears
 * here if and only if at least one loaded event carries it. Nothing is seeded
 * from CATEGORY_COLORS, so a category the sheet has stopped using disappears,
 * and one the sheet adds shows up with no code change.
 *
 * Names are sorted before colors are assigned, so both the filter order and a
 * category's fallback color depend only on which categories are present, not
 * on the order the sheet happens to list its rows.
 */
export function buildCategoryMap(events) {
  const names = [...new Set(events.map((ev) => ev.category).filter(Boolean))].sort();

  const categories = {};
  let paletteIndex = 0;

  for (const name of names) {
    if (CATEGORY_COLORS[name]) {
      categories[name] = CATEGORY_COLORS[name];
    } else {
      categories[name] = DYNAMIC_PALETTE[paletteIndex % DYNAMIC_PALETTE.length];
      paletteIndex++;
    }
  }

  return categories;
}
