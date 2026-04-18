function analyze(){
    let score = Math.floor(Math.random() * 100);

    document.getElementById("score").innerText = "Score: " + score + "%";

    if(score >= 70){
        document.getElementById("result").innerText = "✅ Selected";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "❌ Rejected";
        document.getElementById("result").style.color = "red";
    }
}

    setTimeout(() => {

        let score = Math.floor(Math.random() * 100);

        document.getElementById("score").innerText = "Score: " + score + "%";

        if(score >= 70){
            document.getElementById("result").innerText = "✅ Selected";
            document.getElementById("result").style.color = "green";
        } else {
            document.getElementById("result").innerText = "❌ Rejected";
            document.getElementById("result").style.color = "red";
        }

    }, 1000);
    function go(path) {
    window.location.href = path;
}
function analyzeResume(){
    let score = Math.floor(Math.random() * 100);

    let resultBox = document.getElementById("resultBox");
    let scoreText = document.getElementById("scoreText");
    let statusText = document.getElementById("statusText");
    let progressBar = document.getElementById("progressBar");

    resultBox.classList.remove("hidden");

    scoreText.innerText = "Score: " + score + "%";
    progressBar.style.width = score + "%";

    if(score >= 60){
        statusText.innerText = "✅ Selected";
        statusText.style.color = "green";
        progressBar.style.background = "green";
    }else{
        statusText.innerText = "❌ Rejected";
        statusText.style.color = "red";
        progressBar.style.background = "red";
    }
}
 
