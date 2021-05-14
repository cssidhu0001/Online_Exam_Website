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

function randImage(){
  var files = [            
    "../Homepageimages/mySticker/1.png",
    "../Homepageimages/mySticker/2.png",
    "../Homepageimages/mySticker/3.png",
    "../Homepageimages/mySticker/4.png",
    "../Homepageimages/mySticker/5.png",
    "../Homepageimages/mySticker/6.png",
    "../Homepageimages/mySticker/7.png",
    "../Homepageimages/mySticker/8.png",
    "../Homepageimages/mySticker/9.png",
    "../Homepageimages/mySticker/10.png",
    "../Homepageimages/mySticker/11.png"];
    var randIndex = Math.floor(Math.random() * files.length);
    document.getElementById("imagesslideshowdiv").style.backgroundImage = "url('" + files[randIndex] + "')";
    document.getElementById("imagesslideshowdiv").style.backgroundRepeat="no-repeat";
    document.getElementById("imagesslideshowdiv").style.backgroundSize="auto 100%";
  }
randImage();
setInterval(randImage, 5000);
//run at start
document.getElementById("studentsigninform").style.display="none";
document.getElementById("teachersigninform").style.display="none";
document.getElementById("adminsigninform").style.display="none";