function openNav() {
    
    document.getElementById("navDiv").style.width = "100%";
    document.getElementById("navDiv").style.backgroundColor = "rgba(0, 0, 0)";
    document.getElementById("kaliLogo").style.display = "none";
    document.getElementById("menuButton").style.display = "none";
    document.getElementById("socialButtons").style.display = "none";
    document.getElementById("closebtn").style.display = "unset";
}

function closeNav() {
    document.getElementById("navDiv").style.width = "0%";
    document.getElementById("navDiv").style.backgroundColor = "rgba(0, 0, 0, 0.800)";
    document.getElementById("kaliLogo").style.display = "unset";
    document.getElementById("menuButton").style.display = "unset";
    document.getElementById("socialButtons").style.display = "unset";
    document.getElementById("closebtn").style.display = "none";
}

function openNavNotMain() {
    document.getElementById("titleSecondary").style.display = "none";
    document.getElementById("navDiv").style.width = "100%";
    document.getElementById("navDiv").style.backgroundColor = "rgba(0, 0, 0)";
    document.getElementById("kaliLogo").style.display = "none";
    document.getElementById("menuButton").style.display = "none";
    document.getElementById("closebtn").style.display = "unset";
}

function closeNavNotMain() {
    document.getElementById("titleSecondary").style.display = "";
    document.getElementById("navDiv").style.width = "0%";
    document.getElementById("navDiv").style.backgroundColor = "rgba(0, 0, 0, 0.800)";
    document.getElementById("kaliLogo").style.display = "unset";
    document.getElementById("menuButton").style.display = "unset";
    document.getElementById("closebtn").style.display = "none";
}