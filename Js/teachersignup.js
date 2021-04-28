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
    generate();
    
    enteredcaptcha.onkeyup = function() {
    if (enteredcaptcha.value==gencaptcha.value){
        capterror.classList.remove("invalid");
        capterror.classList.add("valid");
        } else {
        capterror.classList.remove("valid");
        capterror.classList.add("invalid");
            }
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
    const togglecPassword = document.querySelector('#togglecPassword');
    const cpassword = document.querySelector('#conpass');

    togglecPassword.addEventListener('click', function (e) {
        const ctype = cpassword.getAttribute('type') === 'password' ? 'text' : 'password';
        cpassword.setAttribute('type', ctype);
        this.classList.toggle('fa-eye-slash');
    });

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
    forselect();

    //subject
    var subjKG = [ "Maths", "English", "General_Awareness", "Environmental_Science", "Hindi"]
    var subjlowerprimarycls = [ "Maths", "Moral_Science", "English", "Hindi", "Computer_Science", "General_Knowledge", "Environmental_Studies", "Science"]
    var subjhigherprimarycls = [ "Maths", "Moral_Science", "Social_Science", "English", "Hindi", "Computer_Science", "General_Knowledge", "Environmental_Studies"]
    var subjlowersecoundarycls = [ "Maths", "Moral_Science", "Social_Science", "English", "Hindi", "Sanskit", "French", "German", "Computer_Science", "General_Knowledge", "Environmental_Studies"]
    var subjhighcls = [ "Science", "Hindi", "English", "Computer_Science", "Social_Science", "Biology", "Chemistry", "Physics"]
    var subjcommerce = [ "Physical_Education", "Accountancy", "Economics", "Business_Studies", "Economics", "Mathematics", "Informatics_Practices", "English", "Hindi"]
    var subjpcm = [ "Physics", "Chemistry", "English", "Mathematics", "Computer_Science", "Hindi", "Physical_Education"]
    var subjpcb = [ "Biology", "Physics", "Chemistry", "English", "Computer_Science", "Hindi", "Physical_Education"]
    var subjpcmb = [ "Mathematics", "Biology", "Physics", "Chemistry", "English", "Computer_Science", "Hindi", "Physical_Education"]
    var subjhumanities = [ "History", "Geography", "Political_Science", "Psychology", "Sociology", "English", "Hindi", "Sanskrit", "Physical_Education"]

    var myDiv = document.getElementById("teachsubj");
    var subj=null;

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
            var checkBox="<input type='checkbox' id="+subj[i]+" value="+subj[i]+" name="+subj[i]+" onclick=ifchecked("+"\'"+subj[i]+"\'"+")><label for="+subj[i]+">"+subj[i]+"</label><br/>";
            $("#teachsubj").append($(checkBox));
        }
    }
    forselectsubj();


    //hide and show subject code

    function ifchecked(subj) {
        var checkBox = document.getElementById(subj);        
        var text = document.getElementById("subjectname1");
        if (checkBox.checked == true){
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    } 