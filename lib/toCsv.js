
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'EkulamaFacilities.xlsx');
console.log("the path: ",dirPath)

const csvFilePath= dirPath
// const csv=require('csvtojson')
// const formatToCsv = async() => {
//   const jsonArray=await csv().fromFile(csvFilePath);
//   // console.log(jsonArray)
//   return jsonArray
// }
 
// Async / await usage

// console.log(formatToCsv().then)
// formatToCsv().then(doc => console.log(doc))

const XLSX = require('xlsx');

// read file
let workbook = XLSX.readFile(csvFilePath);

// read first sheet (identified by first of SheetNames)
let sheet = workbook.Sheets[workbook.SheetNames[1]];

// convert to JSON
let json = XLSX.utils.sheet_to_json(sheet);

let data = JSON.stringify(json, null, 2);

fs.writeFile(dirPath + 'data2.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});