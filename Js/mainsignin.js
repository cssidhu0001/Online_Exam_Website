function studentLogin(){
    document.getElementById("buttondiv").style.display="none";
    document.getElementById("studentsigninform").style.display="flex";
}

function teacherLogin(){
    document.getElementById("buttondiv").style.display="none";
    document.getElementById("teachersigninform").style.display="flex";
}

function adminLogin(){
    document.getElementById("buttondiv").style.display="none";
    document.getElementById("adminsigninform").style.display="flex";
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
    "../Homepageimages/mySticker/img-bg-01.png",
    "../Homepageimages/mySticker/img-bg-02.png",
    "../Homepageimages/mySticker/img-bg-03.png",
    "../Homepageimages/mySticker/img-bg-04.png",
    "../Homepageimages/mySticker/img-bg-05.png",
    "../Homepageimages/mySticker/img-bg-06.png",
    "../Homepageimages/mySticker/img-bg-07.png",
    "../Homepageimages/mySticker/img-bg-08.png",
    "../Homepageimages/mySticker/img-bg-09.png",
    "../Homepageimages/mySticker/img-bg-10.png",
    "../Homepageimages/mySticker/img-bg-11.png"];
    var randIndex = Math.floor(Math.random() * files.length);
    document.getElementById("imagesslideshowdiv").style.backgroundImage = "url('" + files[randIndex] + "')";
    document.getElementById("imagesslideshowdiv").style.backgroundRepeat="no-repeat";
    document.getElementById("imagesslideshowdiv").style.backgroundSize="auto 100%";
  }
randImage();
setInterval(randImage, 10000);
//run at start
document.getElementById("studentsigninform").style.display="none";
document.getElementById("teachersigninform").style.display="none";
document.getElementById("adminsigninform").style.display="none";