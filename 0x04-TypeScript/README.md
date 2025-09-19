// Define the Student interface interface Student { firstName: string; lastName: string; age: number; location: string; }

// Create two students const student1: Student = { firstName: "Alice", lastName: "Johnson", age: 20, location: "New York" };

const student2: Student = { firstName: "Bob", lastName: "Smith", age: 22, location: "Los Angeles" };

// Array containing the students const studentsList: Student[] = [student1, student2];// Create a table element const table = document.createElement("table"); table.style.borderCollapse = "collapse"; table.style.width = "50%";

// Create table header const header = table.createTHead(); const headerRow = header.insertRow(); const headers = ["First Name", "Location"]; headers.forEach(text => { const th = document.createElement("th"); th.textContent = text; th.style.border = "1px solid black"; th.style.padding = "8px"; headerRow.appendChild(th); });

// Create table body const tbody = table.createTBody();

// Populate table rows with students data studentsList.forEach(student => { const row = tbody.insertRow();

const firstNameCell = row.insertCell(); firstNameCell.textContent = student.firstName; firstNameCell.style.border = "1px solid black"; firstNameCell.style.padding = "8px";

const locationCell = row.insertCell(); locationCell.textContent = student.location; locationCell.style.border = "1px solid black"; locationCell.style.padding = "8px"; });

// Append table to the document body document.body.appendChild(table);