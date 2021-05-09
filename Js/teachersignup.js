    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {myFunction()};

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }

    function proceed(){
        if (document.getElementById("agreetermsandcon").checked == true){
            document.getElementById("instructionForm").style.display="none";
            document.getElementById("maincontainer").style.display="flex";
            document.getElementById("footer").style.display="block";
        }
    }

    function cancelproceed(){
        if (window.confirm("Do you really want to leave?")) {
            window.location.href = "homepage.html";
        }
    }

    function home(){
        window.location.href = "homepage.html";
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
        document.getElementById("maincontainer").style.display="none";
        document.getElementById("footer").style.display="none";
        document.getElementById("instructionForm").style.display="block";
        document.getElementById("agreetermsandcon").checked = false;
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
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (username!="" && re.test(String(useremail).toLowerCase())){
            displayemailverify.style.display="block";
            displayemailverify.style.display="flex";
            displayemailverify.style.paddingTop="95px";
            displayemailverify.style.justifyContent="center";
            displayemailverify.style.alignItems="center";
            var introstr = `<span style="text-align:center;font-family:ubuntu;font-size:1.5rem">Hi.. <span style="font-size:1.5rem;color:rgb(11, 105, 212);weight:bold">${username}</span> kindly verify your email address!!! </div>`;
            var email=`<span style="padding-top: 0.2rem;margin-left: 2rem; letter-spacing: 2px ;font-size: 1.2rem;font-family: 'Antic Slab', serif;color:#000;font-weight: bold;">Verification code sent on : ${useremail}</span>`;
            intro.style.textAlign="center";
            $("#introduction").empty();
            $("#introduction").append($(introstr));
            $("#verifyemailtext2").empty();
            $("#verifyemailtext2").append($(email));
        } else 
            alert("Please Enter a valid First name and Email-Id\n  To proceed for the email verification!");    //The pop up alert for an invalid email address
    }

    // Get the <span> element that cancel the email verification
    var displayemailverify=document.getElementById("emailcenter");
    // When the user clicks on <span> (x), cancel and close the email verification box
    function cancelverification() {
        displayemailverify.style.display = "none";
    }

    var spancancel = document.getElementsByClassName("close")[0];
        // When the user clicks anywhere outside of the emailbox, close it
        window.onclick = function(event) {
        if (event.target == cancel) {
            spancancel.style.display = "none";
        }
    }

    var modal = document.getElementById("emailcenter");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
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
        //   document.getElementById("eyepass").innerHTML=visibleElement;
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

    //subject
    var subjKG = [ "Maths", "English", "General_Awareness", "Environmental_Science", "Hindi", "Language_Arts", "Character_Building", "Art","Practical_Life","Physical_Education"];
    var subjlowerprimarycls = [ "Maths", "Moral_Science", "English", "Hindi", "Computer_Science", "General_Knowledge", "Environmental_Studies", "Science"];
    var subjhigherprimarycls = [ "Maths", "Moral_Science", "Social_Science", "English", "Hindi", "Computer_Science", "General_Knowledge", "Environmental_Studies"];
    var subjlowersecoundarycls = [ "Maths", "Moral_Science", "Social_Science", "English", "Hindi", "Sanskrit", "French", "German", "Computer_Science", "General_Knowledge", "Environmental_Studies"];
    var subjhighcls = [ "Science", "Hindi", "English", "Computer_Science", "Social_Science", "Biology", "Chemistry", "French", "German", "Physics"];
    var subjcommerce = [ "Physical_Education", "Accountancy", "Economics", "Business_Studies","French", "German", "Mathematics", "Informatics_Practices", "English", "Hindi"];
    var subjpcm = [ "Physics", "Chemistry", "English", "Mathematics", "Computer_Science","French", "German", "Hindi", "Physical_Education"];
    var subjpcb = [ "Biology", "Physics", "Chemistry", "English", "Computer_Science", "Hindi","French", "German", "Physical_Education"];
    var subjpcmb = [ "Mathematics", "Biology", "Physics", "Chemistry", "English", "Computer_Science", "French", "German", "Hindi", "Physical_Education"];
    var subjhumanities = [ "History", "Geography", "Political_Science", "Psychology", "Sociology", "English", "Hindi", "Sanskrit", "French", "German", "Physical_Education"];
    
    var addClassCount=0;

    //for xi and xii hide-unhide        
    function forselect(addClassCount){
        var classteach = document.getElementById(`${"classteach"+addClassCount}`);        
        var for_xi_xii = document.getElementById(`${"for_xi_xii"+addClassCount}`);
        if (classteach.value==="XI" || classteach.value==="XII")
            for_xi_xii.style.display="flex";
        else
            for_xi_xii.style.display="none";
    }

    //update span on selected class
    function changeClass(addClassCount){
        var classteach = document.getElementById(`${"classteach"+addClassCount}`);
        var spanclassteachselected= document.getElementById(`${"spanclassteachselected"+addClassCount}`);
        var streamhigher=document.getElementById(`${"streamhigher"+addClassCount}`);  
        spanclassteachselected.innerText="";
        spanclassteachselected.innerText= classteach.value;
        if (classteach.value=="XI" || classteach.value=="XII"){
            spanclassteachselected.innerText = classteach.value+" "+streamhigher.value;
        }
    }


    function forselectsubj(addClassCount){
        var subj=null;
        var classteach = document.getElementById(`${"classteach"+addClassCount}`); 
        var streamhigher = document.getElementById(`${"streamhigher"+addClassCount}`);
        var teachsubj =document.getElementById(`${"teachsubj"+addClassCount}`);
        if (classteach.value==="Pre-KG" || classteach.value==="KG" || classteach.value==="UKG")
            subj=subjKG;   
        else if (classteach.value==="I" || classteach.value==="II" || classteach.value==="III")
            subj=subjlowerprimarycls;
        else if (classteach.value==="IV" || classteach.value==="V")
            subj=subjhigherprimarycls;
        else if (classteach.value==="VI" || classteach.value==="VII" || classteach.value==="VIII")
            subj=subjlowersecoundarycls;
        else if (classteach.value==="IX" || classteach.value==="X")
            subj=subjhighcls;
        else if (classteach.value==="XI" || classteach.value==="XII"){
            if (streamhigher.value==="PCM")
                subj=subjpcm;
            else if (streamhigher.value==="PCB")
                subj=subjpcb;
            else if (streamhigher.value==="Commerce")
                subj=subjcommerce;
            else if (streamhigher.value==="Humanities")
                subj=subjhumanities;
            else
                subj=subjpcmb;
            }
        teachsubj.innerHTML='';
        var checkBox='';
        for (var i = 0; i < subj.length; i++) {
            checkBox=checkBox+`<input type="checkbox" id="${subj[i]+addClassCount}" value="${subj[i]+addClassCount}" 
            name="${subj[i]+addClassCount}" onclick=ifchecked(${addClassCount},'${subj}')>
            <label for="${subj[i]+addClassCount}">${subj[i]}</label><br/>`;
        }
        teachsubj.innerHTML=checkBox;
    }


    function ifchecked(addClassCount, ...subj){
        var showsubj_title=document.getElementById(`${"showsubj_title"+addClassCount}`);
        var showsubj=document.getElementById(`${"showsubj"+addClassCount}`);
        var showsubjhtml='';
        var countsubj=0;
        subj = subj[0].split(",");
        for(var i=0;i<subj.length;i++){
            if(document.getElementById(`${subj[i]+addClassCount}`).checked == true){
                showsubjhtml=showsubjhtml+`<label class="subcodelabel" id='${subj[i]}${addClassCount}'>${subj[i]} </label><input type="text"  id="code${subj[i]}${addClassCount}" name="code${subj[i]}${addClassCount}" placeholder=" ${subj[i]} subject code" style="padding-bottom:0.5rem;"><br>`;
                countsubj++;               
            }
        }
        var id=`${"#showsubj"+addClassCount}`;
        $(id).empty();
        $(id).append($(showsubjhtml));
        showsubj.style.display = "block";
        showsubj_title.style.display = "block";
        if (countsubj==0){
            showsubj.style.display = "none";
            showsubj_title.style.display = "none";
        }
    }

    function ifDisplayAdd(addClassCount){
        var othershowsubj='';
        var countsubj=0;
        for(var i=0;i<subjarray[addClassCount].length;i++){
            othershowsubj=othershowsubj+`<label class="subcodelabel" id='subjectname${i}'>${subjarray[addClassCount][i]} </label><input type="text" id="subjectcodeinput${i}" placeholder=" ${subjarray[addClassCount][i]} subject code" style="padding-bottom:0.5rem;"><br>`;               
            countsubj++;
        }
        var showsubj_title=document.getElementById(`${"extrashowsubj_title"+addClassCount}`);
        var showsubj=document.getElementById(`${"extrashowsubj"+addClassCount}`);    
        var id=`${"#extrashowsubj"+addClassCount}`;
        $(id).empty();        
        $(id).append($(othershowsubj));
        showsubj.style.display = "block";
        showsubj_title.style.display = "block";
        if (countsubj==0){
            showsubj.style.display = "none";
            showsubj_title.style.display = "none";
        }
    }

    //other-subject
    var subjarray=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    
    function addsubjfunc(addClassCount,subjid){
        console.log("addsubjfunc");
        var getvalue = document.getElementById(subjid).value;
        if (getvalue!=""){
            subjarray[addClassCount].push(getvalue);
            subjarray[addClassCount] = [... new Set(subjarray[addClassCount])];
        }
        console.log(subjarray);
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
    
    function removesubjfunc(addClassCount,subjid){
        console.log("removesubjfunc");
        subjarray[addClassCount].remove(document.getElementById(subjid).value);
        console.log(subjarray);
    }

    function onclickadd(addClassCount){
        var addsubj='';
        var extrasubj=document.getElementById(`${"extrasubj"+addClassCount}`);
        extrasubj.style.display="flex";
        extrasubj.style.flexDirection="column";
        extrasubj.style.padding="1rem";  
        addsubj = addsubj+`<label style="padding:0.5rem;"> Subject Name </label><div style="display:flex;flex-direction:row-reverse;">
                <input type="button" value=" Remove " style="width:15rem;" onclick="removesubjfunc(${addClassCount},'extrasubject${addClassCount}');ifDisplayAdd(${addClassCount});">
                <input type="button" value=" Add " style="width:10rem;" onclick="addsubjfunc(${addClassCount},'extrasubject${addClassCount}');ifDisplayAdd(${addClassCount});">
                <input type="text" id="extrasubject${addClassCount}" name="extrasubject${addClassCount}" placeholder=" Enter Subject Name " style="width:100%;"></div><br>`;
        $(`${"#extrasubj"+addClassCount}`).empty();
        $(`${"#extrasubj"+addClassCount}`).append($(addsubj));
    }

    var addAClass ="";
    $("#addClassHere").empty();
    function addClass() {
        addClassCount++;
        addAClass = `<label for="classteach${addClassCount}">Classes Teach<span>*</span></label>
                    <select name="classesteach${addClassCount}" id="classteach${addClassCount}" onclick="forselect(${addClassCount});forselectsubj(${addClassCount});changeClass(${addClassCount});" class="countrydropdown"  autocomplete="off" required>
                        <option value="Pre-KG">Pre-KG</option><option value="KG">KG</option><option value="UKG">UKG</option><option value="I">I</option>showsubj_title0<option value="II">II</option><option value="III">III</option><option value="IV">IV</option><option value="V">V</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="X">X</option><option value="XI">XI</option><option value="XII">XII</option>
                    </select>
                    <div class="for_xi_xii" id="for_xi_xii${addClassCount}">
                        <label for="streamhigher${addClassCount}">Higher Classes Branch</label>
                        <select name="streamhigher${addClassCount}" id="streamhigher${addClassCount}" class="countrydropdown" onclick="forselectsubj(${addClassCount});changeClass(${addClassCount});" autocomplete="off">
                            <option value="PCM">PCM</option><option value="PCB">PCB</option><option value="PCMB">PCMB</option><option value="Commerce">Commerce</option><option value="Humanities">Arts/Humanities</option>
                        </select>
                    </div>
                    <label for="Subjectuteach${addClassCount}" required >Subject you Teach<span>*</span></label>
                    <div class="Subject_teach" id="Subject_teach${addClassCount}">
                        <div class="subjectteach" id="teachsubj${addClassCount}"></div>
                    </div>
                    <div class="extrasubj" id="extrasubj${addClassCount}">
                        <label for="otherspecify${addClassCount}">Not in list? Specify others subject for class <span id='spanclassteachselected${addClassCount}'></span>?</label><br/>
                        <input type="button" id="otherspecify${addClassCount}" value="Click here to add it!" onclick="onclickadd(${addClassCount})" autocomplete="off"/>
                    </div>        
                    <label class="showsubj_title" id="showsubj_title${addClassCount}">Subject Code</label>
                    <div class="showsubj" id="showsubj${addClassCount}"></div>
                    <label class="showsubj_title" id="extrashowsubj_title${addClassCount}">Extra Subject Code</label>
                    <div class="showsubj" id="extrashowsubj${addClassCount}"></div>`;
        $("#addClassHere").append($(addAClass));
        forselect(addClassCount);
        forselectsubj(addClassCount);
        changeClass(addClassCount);
    }
    

    //always run at beginning
    generate();
    forselect(0);
    forselectsubj(0);
    changeClass(0);