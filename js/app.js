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
function addEmployee(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let role = document.getElementById("role").value;
    let salary = document.getElementById("salary").value;

    if(!name || !age || !city || !role || !salary){
        alert("Fill all fields");
        return;
    }

    let list = JSON.parse(localStorage.getItem("employees")) || [];

    list.push({name, age, city, role, salary});

    localStorage.setItem("employees", JSON.stringify(list));

    showEmployees();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("role").value = "";
    document.getElementById("salary").value = "";
}

// SHOW
function showEmployees(){
    let list = JSON.parse(localStorage.getItem("employees")) || [];

    let table = document.getElementById("empTable").querySelector("tbody");

    table.innerHTML = "";

    list.forEach((emp, index)=>{
        table.innerHTML += `
        <tr>
            <td>${emp.name}</td>
            <td>${emp.age}</td>
            <td>${emp.city}</td>
            <td>${emp.role}</td>
            <td>₹${emp.salary}</td>
            <td style="text-align:center;">
              <button onclick="deleteEmployee(${index})" class="delete-btn">
    ❌ Delete
</button> 
            </td>
        </tr>
        `;
    });
}

// DELETE
function deleteEmployee(index){
    let list = JSON.parse(localStorage.getItem("employees")) || [];

    list.splice(index, 1); // remove item

    localStorage.setItem("employees", JSON.stringify(list));

    showEmployees(); // refresh table
}
// AUTO LOAD
window.onload = function () {
    showEmployees();
};