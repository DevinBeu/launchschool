function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startInteger = 2;

  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum += 1) {
    let row = createRow(startInteger, currentRowNum);
    let lastRow = rows[rows.length - 1];

    let startInteger = row[row.length - 1] + 2;

    rows.push(row);
    rowLength += 1;
  }
  return rows;
}
let finalRow = rows.pop();

let finalRowASum = 0;
finalRow.forEach(num => finalRowSum + num);
return finalRowSum;

}
function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;

  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
}
