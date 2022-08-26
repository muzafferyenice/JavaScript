import { nSortDesc, nSortAsc, sSortAsc, sSortDesc } from "./sort.js";

const arr = [1, 56, 3, 67, 2, 87, 55, 33];

console.log(nSortDesc(arr));
console.log(nSortAsc(arr));

const arrNames = ["Ali", "Zeynep", "Sevgi", "Şakir", "Temel"];
console.log(sSortAsc(arrNames));
console.log(sSortDesc(arrNames));
