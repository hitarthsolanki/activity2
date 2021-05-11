function get() {
    var score=localStorage.getItem(score);
    document.getElementById("update").innerHTML="score : " + score
}
function back() {
    window.location="activity1.html";
}