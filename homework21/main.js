const getRandomNumber = () => {
  return Math.floor(Math.random() * 101);
};

const createTable = (rows, columns, fillerFunc = undefined) => {
  // Creating a table
  const table = document.createElement("table");
  for (let currentRow = 0; currentRow < rows; currentRow++) {
    // Filling with the table with new rows
    const row = document.createElement("tr");
    for (let currentColumn = 0; currentColumn < columns; currentColumn++) {
      // Filling every row with columns
      const column = document.createElement("th");
      if (fillerFunc !== undefined) column.innerHTML = fillerFunc();
      row.append(column);
    }
    table.append(row);
  }
  return table;
};

const body = document.body;
body.append(createTable(10, 10, getRandomNumber));
