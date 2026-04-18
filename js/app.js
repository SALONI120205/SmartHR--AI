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