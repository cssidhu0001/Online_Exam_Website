// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}




//captcha
    let captcha;
    let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    var gencaptcha=document.getElementById("generated-captcha");
    var enteredcaptcha=document.getElementById("entered-captcha");

    generate = () => {
        let first = alphabets[Math.floor(Math.random() * alphabets.length)];
        let second = Math.floor(Math.random() * 10);
        let third = Math.floor(Math.random() * 10);
        let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
        let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
        let sixth = Math.floor(Math.random() * 10);
        captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
        gencaptcha.value = captcha;
        enteredcaptcha.value = '';
    }

    function resetfunction(){
        document.getElementById("signupform").reset();
        //then
        generate();
    }

    //Jquery to show the password
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#pass');

    togglePassword.addEventListener('click', function (e) {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    //Jquery to show the confirm password
    function tooglecpwd() {
        const cpassword = document.querySelector('#conpass'); 
        const ctype = cpassword.getAttribute('type') === 'password' ? 'text' : 'password';
        cpassword.setAttribute('type', ctype);
    }

    //for xi and xii hide-unhide    
    var getbranch = document.getElementById('for_xi_xii');
    var getcls = document.getElementById("classteach");
    var getstream = document.getElementById('streamhigher');

    function forselect(){
        if (getcls.value==="XI" || getcls.value==="XII"){
            getbranch.style.display="block";
            getbranch.style.display="flex";
        }
        else
            getbranch.style.display="none";
    }

    //subject
    var subj=null;
    var subjKG = [ "Maths", "English", "General_Awareness", "Environmental_Science", "Hindi", "Language_Arts", "Character_Building", "Art","Practical_Life","Physical_Education"];
    var subjlowerprimarycls = [ "Maths", "Moral_Science", "English", "Hindi", "Computer_Science", "General_Knowledge", "Environmental_Studies", "Science"];
    var subjhigherprimarycls = [ "Maths", "Moral_Science", "Social_Science", "English", "Hindi", "Computer_Science", "General_Knowledge", "Environmental_Studies"];
    var subjlowersecoundarycls = [ "Maths", "Moral_Science", "Social_Science", "English", "Hindi", "Sanskit", "French", "German", "Computer_Science", "General_Knowledge", "Environmental_Studies"];
    var subjhighcls = [ "Science", "Hindi", "English", "Computer_Science", "Social_Science", "Biology", "Chemistry", "Physics"];
    var subjcommerce = [ "Physical_Education", "Accountancy", "Economics", "Business_Studies", "Economics", "Mathematics", "Informatics_Practices", "English", "Hindi"];
    var subjpcm = [ "Physics", "Chemistry", "English", "Mathematics", "Computer_Science", "Hindi", "Physical_Education"];
    var subjpcb = [ "Biology", "Physics", "Chemistry", "English", "Computer_Science", "Hindi", "Physical_Education"];
    var subjpcmb = [ "Mathematics", "Biology", "Physics", "Chemistry", "English", "Computer_Science", "Hindi", "Physical_Education"];
    var subjhumanities = [ "History", "Geography", "Political_Science", "Psychology", "Sociology", "English", "Hindi", "Sanskrit", "Physical_Education"];

    function forselectsubj(){
        if (getcls.value==="Pre-KG" || getcls.value==="KG" || getcls.value==="UKG")
            subj=subjKG;   
        else if (getcls.value==="I" || getcls.value==="II" || getcls.value==="III")
            subj=subjlowerprimarycls;
        else if (getcls.value==="IV" || getcls.value==="V")
            subj=subjhigherprimarycls;
        else if (getcls.value==="VI" || getcls.value==="VII" || getcls.value==="VIII")
            subj=subjlowersecoundarycls;
        else if (getcls.value==="IX" || getcls.value==="X")
            subj=subjhighcls;
        else if (getcls.value==="XI" || getcls.value==="XII"){
            if (getstream.value==="PCM")
                subj=subjpcm;
            else if (getstream.value==="PCB")
                subj=subjpcb;
            else if (getstream.value==="Commerce")
                subj=subjcommerce;
            else if (getstream.value==="Humanities")
                subj=subjhumanities;
            else
                subj=subjpcmb;
            }
        $("#teachsubj").empty();
        for (var i = 0; i < subj.length; i++) {
            var checkBox=`<input type="checkbox" id="${subj[i]}" value="${subj[i]}" name="${subj[i]}" onclick=ifchecked()><label for="${subj[i]}">${subj[i]}</label><br/>`;
            $("#teachsubj").append($(checkBox));
        }
    }

    //add more subject 
    var extrasubj=document.getElementById("extrasubj");
    var moresubjCount=0;
    var addsubj='';
    function onclickadd(){
        $("#extrasubj").empty();
        extrasubj.style.display="flex";
        extrasubj.style.flexDirection="column";
        extrasubj.style.padding="1rem";  
        addsubj = addsubj+`<label style="padding:0.5rem;"> Subject Name</label><div style="display:flex;flex-direction:row-reverse;"><input type="button" value=" Remove " style="width:8rem;" onclick="removesubjfunc('extrasubject${moresubjCount}');ifchecked();"><input type="button" value=" Add " style="width:4rem;" onclick="addsubjfunc('extrasubject${moresubjCount}');ifchecked();"><input type="text" id="extrasubject${moresubjCount}" name="extrasubject${moresubjCount}" placeholder=" Enter Subject Name " style="width:100%;"></div><br>`;
        moresubjCount++;
        $("#extrasubj").append($(addsubj));
        // var button = `<br><label for="otherspecify">Not in list? Specify others subject?</label><br/><input type="button" id="otherspecify" value="Click here to add one more subject!" onclick="onclickadd()"/>`;
        // $("#extrasubj").append($(button));
    }

    //other-subject
    var subjarray=[];    
    // add subject
    function addsubjfunc(subjid){
        var getvalue = document.getElementById(subjid).value;
		if (getvalue!=""){
			subjarray.push(getvalue);
			subjarray = [... new Set(subjarray)];
		}
    }

    //remove subject function
        Array.prototype.remove = function() {
            var what, a = arguments, L = a.length, ax;
            while (L && this.length) {
                what = a[--L];
                while ((ax = this.indexOf(what)) !== -1) {
                    this.splice(ax, 1);
                    }
                }
            return this;
        };

    // remove subject working
    function removesubjfunc(subjid){
        subjarray.remove(document.getElementById(subjid).value);
    }

    //hide and show subject code
    var displayContent=document.getElementById("showsubj");
    var displayContentTitle=document.getElementById("showsubj_title");
    displayContentTitle.style.display = "none";
    displayContent.style.display = "none";

    function ifchecked() {
        var showsubj='';
        var countsubj=0;
        for(var i=0;i<subj.length;i++){
            if(document.getElementById(subj[i]).checked == true){
                showsubj=showsubj+`<label class="subcodelabel" id='subjectname${countsubj}'>${subj[i]} </label><input type="text"  id="subjectcodeinput${countsubj}" placeholder=" ${subj[i]} subject code" style="padding-bottom:0.5rem;"><br>`;
                countsubj++;               
            }
        }
        
        othershowsubj='';
        //other subject
        for(var i=0;i<subjarray.length;i++){
            othershowsubj=othershowsubj+`<label class="subcodelabel" id='subjectname${i+countsubj}'>${subjarray[i]} </label><input type="text"  id="subjectcodeinput${i+countsubj}" placeholder=" ${subjarray[i]} subject code" style="padding-bottom:0.5rem;"><br>`;
            countsubj++;               
            }
        $("#showsubj").empty();
        $("#showsubj").append($(showsubj));
        $("#showsubj").append($(othershowsubj));
        displayContentTitle.style.display = "block";
        displayContent.style.display = "block";
        
        if (countsubj==0){
        displayContent.style.display = "none";
        displayContentTitle.style.display = "none";
        }
    }    

    //files upload
    function Uploadfile(fileid,note) {
        var fileUpload = document.getElementById(fileid);
        var notice = document.getElementById(note);
        if (typeof (fileUpload.files) != "undefined") {
            var size = fileUpload.files[0].size;
			if(size < 3145728){
            	notice.style.display = "none" ;
            }
			else {
                notice.style.color="red";
            	notice.style.display = "block" ;
			}
        } 
    }

    //always run at beginning
    generate();
    forselect();
    forselectsubj();

// getting the value of city and printing it into the city coloumn in below
function forcity(){
    document.getElementById("city").value=document.getElementById("districtSel").value;
}
// getting the value of country code form the country code dropdown and printing it into the mobile number code  
    function conutrycode(){
        document.getElementById("code").value="(+"+document.getElementById("countrycodedropdown").value+")";
    }
// getting the value of country code form the country code dropdown and printing it into the mobile number code  
    function alternateconutrycode(){``
        document.getElementById("codealternate").value="(+"+document.getElementById("alternatecountrycodedropdown").value+")";
    }

    //email pop
    function emailverify(){
        var displayemailverify=document.getElementById("emailcenter");
        var username = document.getElementById("fname").value;
        var useremail = document.getElementById("usremail").value;
        var intro = document.getElementById("introduction");
        if (username!="" && useremail!=""){
            displayemailverify.style.display="flex";
            displayemailverify.style.top="2400px";

            var introstr = `<span style="text-align:center;font-family:ubuntu;font-size:1.2rem">Hi.. <span style="font-size:1.4rem;color:rgb(11, 105, 212);weight:bold">${username}</span> kindly verify your email address!!! </div>`;
            var email=`<span style="padding-top: 0.2rem;margin-left: 2rem;font-size: 1rem;font-family: 'Antic Slab', serif;color:rgb(87, 85, 85);font-weight: bold;">Verification code sent on : ${useremail}</span>`;
            intro.style.textAlign="center";
            $("#introduction").empty();
            $("#introduction").append($(introstr));
            $("#verifyemailtext2").empty();
            $("#verifyemailtext2").append($(email));
        } else {
            //username required
            console.log("log");
        }  
    }



    // Get the <span> element that cancel the email verification

var cancel = document.getElementsByClassName("emailcenter")[0];
// // When the user clicks on <span> (x), cancel and close the email verification box
function cancelverification() {
    cancel.style.display = "none";
  }

  // When the user clicks anywhere outside of the emailbox, close it
window.onclick = function(event) {
    if (event.target == cancel) {
        cancel.style.display = "none";
    }
  }


  var myInput = document.getElementById("pass");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  var schar = document.getElementById("schar");
  var message = document.getElementById("message");

  var passwdconfirm = document.getElementById("conpass");
  var cerror = document.getElementById("cerror");
  var cmessage = document.getElementById("cmessage");

  //password validation
  // When the user clicks on the password field, show the message box
  myInput.onfocus = function() {
      message.style.display = "block";
  }

  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
      message.style.display = "none";
  }

  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }

    // Validate Special char
    if(myInput.value.match(/[!@#$%^&*+`~'.=,*?\|\]\{\}\[\(\)\\\-<>/]/g)) {
      schar.classList.remove("invalid");
      schar.classList.add("valid");
    } else {
      schar.classList.remove("valid");
      schar.classList.add("invalid");
    }
      if ((schar.classList.value=="valid") && (length.classList.value=="valid") && (number.classList.value=="valid") && (capital.classList.value=="valid") && (letter.classList.value=="valid")){
          message.style.display = "none";
          document.getElementById("conpasslabel").style.display="block";
          document.getElementById("eyepass").style.display="block";
          var visibleElement = `<div class="eye" id="eyepass"><i class="far fa-eye" id="togglecPassword" onclick="tooglecpwd()"></i></div>`;
          $("#eyepass").empty();
          $("#eyepass").append($(visibleElement));
          passwdconfirm.style.display = "block";
      } else {
          message.style.display = "block";
          document.getElementById("conpasslabel").style.display="none";
          document.getElementById("eyepass").style.display="none";
          passwdconfirm.style.display = "none";
      }
  }

  //css css css css css
  document.getElementById("conpasslabel").style.display="none";
  document.getElementById("eyepass").style.display="none";
  passwdconfirm.style.display = "none";
  document.getElementById("captachdiv").style.display="none";
  document.getElementById("captchalabel").style.display="none";
  document.getElementById("entered-captcha").style.display="none";
  document.getElementById("captmessage").style.display="none";
  document.getElementById("submitform").style.display="none";
  
  //confirm password validation
  // When the user clicks on the password field, show the message box
  passwdconfirm.onfocus = function() {
      cmessage.style.display = "block";
  }

  // When the user clicks outside of the password field, hide the message box
  passwdconfirm.onblur = function() {
      cmessage.style.display = "none";
  }

  passwdconfirm.onkeyup = function() {
      if (myInput.value==passwdconfirm.value){
          cerror.classList.remove("invalid");
          cerror.classList.add("valid");
      } else {
          cerror.classList.remove("valid");
          cerror.classList.add("invalid");
    }
      if (cerror.classList.value=="valid"){
          cmessage.style.display = "none";
          document.getElementById("captachdiv").style.display="flex";
          document.getElementById("captchalabel").style.display="block";
          document.getElementById("entered-captcha").style.display="block";
          } else {
          cmessage.style.display = "block";
          document.getElementById("captachdiv").style.display="none";
          document.getElementById("captchalabel").style.display="none";
          document.getElementById("entered-captcha").style.display="none";
      }
  }

  enteredcaptcha.onkeyup = function() {
      if (enteredcaptcha.value==gencaptcha.value){
          capterror.classList.remove("invalid");
          capterror.classList.add("valid");
      } else {
          capterror.classList.remove("valid");
          capterror.classList.add("invalid");
      }
       if(capterror.classList.value=="valid"){
          document.getElementById("captmessage").style.display="none";        
          document.getElementById("submitform").style.display="block";
       }else{
          document.getElementById("captmessage").style.display="block";
          document.getElementById("submitform").style.display="none";
       }
  }