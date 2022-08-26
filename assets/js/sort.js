const sSortAsc = (arr) => {
  return [...arr.sort((a, b) => a.localeCompare(b))];
};

const sSortDesc = (arr) => {
  return [...arr.sort((a, b) => b.localeCompare(a))];
};

// [12,45,2,76,9]
const nSortAsc = (arr) => {
  return [...arr.sort((a, b) => a - b)];
  // return [...arr.sort() ];
};

const nSortDesc = (arr) => {
  return [...arr.sort((a, b) => b - a)];
  // return [...arr.sort().reverse() ];
};

export { sSortAsc, sSortDesc, nSortAsc, nSortDesc };