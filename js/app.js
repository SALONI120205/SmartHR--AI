function go(page){
    window.location.href = page;
}

function toggleDark(){
    document.body.classList.toggle("dark");
}
function analyze(){

    document.getElementById("score").innerText = "Analyzing...";

    setTimeout(()=>{
        // existing logic here
    },1000);
}
function showToast(){
    let toast = document.getElementById("toast");

    if(!localStorage.getItem("welcomeShown")){
        toast.style.display = "block";

        setTimeout(()=>{
            toast.style.display = "none";
        },3000);

        localStorage.setItem("welcomeShown","true");
    }
}

window.onload = showToast;
if(!localStorage.getItem("welcomeShown")){
    setTimeout(()=>{
        alert("Welcome to SmartHR AI 🚀");
        localStorage.setItem("welcomeShown", "true");
    },1000);
}