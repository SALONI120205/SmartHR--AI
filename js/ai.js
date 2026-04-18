function analyze(){

    let userSkills = document.getElementById("skills").value.toLowerCase().split(",");
    let jobSkills = document.getElementById("jobSkills").value.toLowerCase().split(",");
    let experience = parseInt(document.getElementById("experience").value) || 0;
    let resumeText = document.getElementById("resumeText").value.toLowerCase();

    let score = 0;
async function analyze() {
  let file = document.getElementById("resumeFile").files[0];

  let formData = new FormData();
  formData.append("resume", file);

  let res = await fetch("/analyze", {
    method: "POST",
    body: formData
  });

  let data = await res.json();

  document.getElementById("result").innerHTML =
    "Score: " + data.score + "%<br>" + data.result;
}
    // 🔹 Skill Matching (50%)
    jobSkills.forEach(skill=>{
        if(userSkills.includes(skill.trim())){
            score += 10;
        }
    });

    // 🔹 Experience (30%)
    if(experience >= 5) score += 30;
    else if(experience >= 2) score += 20;
    else score += 10;
    let missingSkills = jobSkills.filter(skill => !userSkills.includes(skill.trim()));

console.log("Missing Skills:", missingSkills);
    // 🔹 Keyword Matching (20%)
    let keywords = ["teamwork","leadership","project","communication","ai","ml"];

    keywords.forEach(word=>{
        if(resumeText.includes(word)){
            score += 3;
        }
    });

    if(score > 100) score = 100;

    document.getElementById("score").innerText = "Score: " + score + "%";

    // 🎯 Final Decision
    if(score >= 70){
        document.getElementById("result").innerText = "✅ Selected";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "❌ Rejected";
        document.getElementById("result").style.color = "red";
    }
}