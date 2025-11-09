//Define the student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

//Create two student objects
const student1: Student = {
    firstName: "Enya",
    lastName: "Elvis",
    age: 30,
    location: "Plateau"
};

const student2: Student = {
    firstName: "Goodness",
    lastName: "Okon",
    age: 24,
    location: "Enugu"
};

// Creating an array of students
const studentsList: Student[] = [student1, student2];

// Render a table in the DOM
const table = document.createElement("table");
const headerRow = document.createElement("tr");

const header1 = document.createElement("th");
header1.textContent = "First Name";

const header2 = document.createElement("th");
header2.textContent = "Location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);

});
document.body.appendChild(table);
