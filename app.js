console.log("Hello Back to School");

// Defining some constants for later use
//Constant is something that remains the same
//Able to reference parts of our html
const viz = document.getElementById("tableauViz");
//Let is malleable
//JS uses camelCase
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

function logInfo() {
  // get the workbook
  workbook = viz.workbook;
  console.log(`The workbook name is ${workbook.name}`);
  // get the sheets
  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((cat) => {
    const index = cat.index;
    console.log(`The sheet with index ${index} is ${cat.name}`);
  });
  // find the active sheet
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is ${vizActiveSheet.name}`);

  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((dog) => {
    const index = dog.index;
    const worksheetName = dog.name;
    console.log(
      `The worksheet with index ${index} is  called ${worksheetName}`,
    );
  });
}

// log the information when the workbook becomes active
viz.addEventListener("firstinteractive", logInfo);

//defining constants for buttons
const onwButton = document.getElementById("onw");
const clearButton = document.getElementById("clear");
const undoButton = document.getElementById("undo");

function onwFunction() {
  listSheets.forEach((fish) => {
    fish.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
  });
}

function clearFunction() {
  listSheets.forEach((rat) => {
    rat.clearFilterAsync("State");
  });
}

function undoFunction() {
  viz.undoAsync();
}

onwButton.addEventListener("click", onwFunction);
clearButton.addEventListener("click", clearFunction);
undoButton.addEventListener("click", undoFunction);
