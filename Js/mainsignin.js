function studentLogin(){
    document.getElementById("buttondiv").style.display="none";
    document.getElementById("studentsigninform").style.display="flex";
    document.getElementById("previous_button").style.color = "rgb(216, 214, 214)";
}

function teacherLogin(){
    document.getElementById("buttondiv").style.display="none";
    document.getElementById("teachersigninform").style.display="flex";
    document.getElementById("previous_button").style.color = "rgb(216, 214, 214)";
}

function adminLogin(){
    document.getElementById("buttondiv").style.display="none";
    document.getElementById("adminsigninform").style.display="flex";
    document.getElementById("previous_button").style.color = "rgb(216, 214, 214)";
}
function previous(){
  document.getElementById("buttondiv").style.display="flex";
  document.getElementById("adminsigninform").style.display="none";
  document.getElementById("teachersigninform").style.display="none";
  document.getElementById("studentsigninform").style.display="none";
  document.getElementById("previous_button").style.color = "rgb(255, 255, 255)";

}

function goToHome(){
  window.location.href = "homepage.html";
}

function closeLogin(){
  this.style.display="none";
  document.getElementById("buttondiv").style.display="none";
}

//run at start
document.getElementById("studentsigninform").style.display="none";
document.getElementById("teachersigninform").style.display="none";
document.getElementById("adminsigninform").style.display="none";