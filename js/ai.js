function analyze(){

    let file = document.getElementById("resumeFile").files[0];

    if(!file){
        alert("Upload resume first");
        return;
    }

    document.getElementById("score").innerText = "Analyzing...";

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
}