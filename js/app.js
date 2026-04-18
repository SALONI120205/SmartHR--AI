let employees = JSON.parse(localStorage.getItem("employees")) || [];

function display(data){
    let table = document.getElementById("table");
    if(!table) return;

    table.innerHTML = "";

    data.forEach((e, i) => {
        table.innerHTML += `
        <tr>
            <td>${e.name}</td>
            <td>${e.role}</td>
            <td>${e.salary}</td>
            <td><button onclick="deleteEmp(${i})">❌</button></td>
        </tr>`;
    });
}
function go(page){
    window.location.href = page;
}

function toggleDark(){
    document.body.classList.toggle("dark");
}
function addEmployee(){
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let salary = document.getElementById("salary").value;

    if(!name || !role || !salary){
        alert("Fill all fields");
        return;
    }

    employees.push({name, role, salary});
    localStorage.setItem("employees", JSON.stringify(employees));

    display(employees);
}

function deleteEmp(i){
    employees.splice(i,1);
    localStorage.setItem("employees", JSON.stringify(employees));
    display(employees);
}

function searchEmployee(){
    let q = document.getElementById("search").value.toLowerCase();
    let filtered = employees.filter(e => e.name.toLowerCase().includes(q));
    display(filtered);
}

display(employees);
// NAVIGATION
function go(path) {
    window.location.href = path;
}

// ================= EMPLOYEES =================

// ADD
function addEmployee() {
    let name = document.getElementById("name").value.trim();
    let role = document.getElementById("role").value.trim();

    if (!name || !role) {
        alert("Fill all fields");
        return;
    }

    let list = JSON.parse(localStorage.getItem("employees")) || [];

    list.push({ name, role });

    localStorage.setItem("employees", JSON.stringify(list));

    showEmployees();
}

// SHOW
function showEmployees() {
    let list = JSON.parse(localStorage.getItem("employees")) || [];
    let table = document.getElementById("empTable");

    if (!table) return;

    table.innerHTML = "";

    list.forEach((e, i) => {
        table.innerHTML += `
            <tr>
                <td>${e.name}</td>
                <td>${e.role}</td>
                <td><button onclick="deleteEmp(${i})">Delete</button></td>
            </tr>
        `;
    });
}

// DELETE
function deleteEmp(i) {
    let list = JSON.parse(localStorage.getItem("employees")) || [];
    list.splice(i, 1);
    localStorage.setItem("employees", JSON.stringify(list));
    showEmployees();
}

// AUTO LOAD
window.onload = function () {
    showEmployees();
};