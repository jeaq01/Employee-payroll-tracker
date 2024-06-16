// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

let employees = []

const collectEmployees = function () {
  let addMoreEmployees = true
  while (addMoreEmployees) {

    let firstName
    let lastName
    let salary

    console.log("AddMoreEmployees", addMoreEmployees)
    while (!firstName) {
      firstName = prompt("Enter your first name here");
    }

    while (!lastName) {
      lastName = prompt("Enter your last name here");

    }

    while (!salary) {
      salary = parseFloat(prompt("Enter your salary here"));
    }
    // i could've also made   if(isNaN(salary)){ salary = 0 }

    employees.push({
      firstName, lastName, salary
    })

    addMoreEmployees = confirm("Do u like to add more employees");
    console.log("Emp", firstName, lastName, salary)
  }
  return employees
  // TODO: Get user input to create and return an array of employee objects
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {

  let employeeSalary = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    employeeSalary = employeeSalary + employeesArray[i].salary
    console.log(employeeSalary)
  }
  const averageSalary = employeeSalary / employeesArray.length

  console.log(" The total salary for all our employees", employeeSalary, "the totla Number of Employees: ", employeesArray.length,
    "\n\n\nthis is the average employee salary", averageSalary.toFixed(2)); 


  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length)
  // Math.random() - gives a value 0 and 1 == 0.75 package.9  = displayAverageSalary
  console.log("Congratulation our Random drawing winner is the Employee" , employeesArray[randomIndex])
  // TODO:Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
