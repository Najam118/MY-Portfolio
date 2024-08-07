


var typed = new Typed(".autotype",{
    strings:["Developer","Designer","Freelancer","Photographer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop:true
});

var navLinks = document.getElementById("navlinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-270px";
}
 
let number = document.getElementById("number");

 let number1 = document.getElementById("number1");
 let number2 = document.getElementById("number2");
 let number3 = document.getElementById("number3");

let counter = 0;
let counters = 50; 
   
setInterval(()=>{
if(counter == 50){
  clearInterval();
}
else{
    counter += 1;
    number.innerHTML= counter +110;
    number1.innerHTML = counter -35;
    number2.innerHTML = counter+120;
    number3.innerHTML = counter+10;
}

},50);




const swiper = new Swiper('.swiper', {
 autoplay:{
    delay:3000,
    disableOnInteraction:false,
 },
 
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });
  

    
   var nameError= document.getElementById('name-error'); 
   var phoneError= document.getElementById('phone-error'); 
   var emailError= document.getElementById('email-error'); 
   var messageError= document.getElementById('Message-error'); 
   var SubmitError= document.getElementById('Submit-error'); 
   var PasswordError= document.getElementById('password-error'); 
   var Password2Error= document.getElementById('password2-error'); 
   var RegisterError= document.getElementById('Register-error'); 
   var RegisError= document.getElementById('Regis-error'); 

function validateName(){
  var name = document.getElementById('contact-name').value;
  

  if(name.length == 0){
    nameError.innerHTML= 'Name is required';
   return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML= 'write full Name';
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function RegisredName(){
  var Regis = document.getElementById('Regis-name').value;
  

  if(Regis.length == 0){
    RegisError.innerHTML= 'Name is required';
   return false;
  }
  if(!Regis.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    RegisError.innerHTML= 'write full Name';
    return false;
  }
  RegisError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validatephone(){
  var phone = document.getElementById('contact-phone').value;
  if(phone.length == 0){
    phoneError.innerHTML= 'phone No is required';
   return false;
}
if(phone.length !== 10){
  phoneError.innerHTML= 'phone No should be 10 digits';
 return false;
}
if(!phone.match(/^[0-9]{10}$/)){
  phoneError.innerHTML= 'only digits plese';
 return false;
}
   phoneError.innerHTML= '<i class="fas fa-check-circle"></i>';
   return true;
}

function validateEmail(){
  var email = document.getElementById('contact-email').value;
  if(email.length == 10){
    emailError.innerHTML= 'Email is required';
   return false;
}
if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  emailError.innerHTML= 'Email Invalid';
 return false;
}
emailError.innerHTML= '<i class="fas fa-check-circle"></i>';
return true;

}
function validatePassword(){
  var password = document.getElementById('contact-password').value;
  if(password.length == 8){
    PasswordError.innerHTML= ' <i class="fas fa-check-circle"></i>';
   return false;
}
if(!password.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  PasswordError.innerHTML= ' Please Password is 8 digits  ';
 return false;
}
PasswordError.innerHTML= '<i class="fas fa-check-circle"></i>';
return true;

}

function validatePassword2(){
  var password2 = document.getElementById('contact2-password').value;
  if(password2.length == 8){
    Password2Error.innerHTML= ' <i class="fas fa-check-circle"></i>';
   return false;
}
if(!password2.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  Password2Error.innerHTML= ' Please Password is 8 digits  ';
 return false;
}
Password2Error.innerHTML= '<i class="fas fa-check-circle"></i>';
return true;

}


function validateMessage(){
  var message = document.getElementById('contact-message').value; 
var required = 30;
var left = required - message.length;
 if(left>0){
  messageError.innerHTML = left + 'more Characters required';
  return false;
 }
messageError.innerHTML='<i class="fas fa-check-circle"></i>';
return true;
}

function validateform(){
  if( !validateName() || !validatephone() || !validateEmail() || !validateMessage){
   SubmitError.style.display= 'block';
 SubmitError.innerHTML = 'please fix error to submit';
 setTimeout(function(){
  SubmitError.style.display= 'none';
 }, 3000);
 return false;
  }
 
}
var succses = document.getElementById("Register-Succses");
succses.style.display = 'none';

function RegisterButton(){
  
  
  if( !validateName() || !validateEmail() || !validatePassword){
     RegisterError.style.display= 'block';
 RegisterError.innerHTML = 'please fix error to submit';
 setTimeout(function(){
  RegisterError.style.display= 'none';
  
 }, 5000);
 return false;
  }

  else{
    succses.style.display = 'block';
    succses.innerHTML = Login();
    setTimeout(function(){
      succses.style.display= 'none';
    
     }, 5000);
    return false;
  } 
}



var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");


function register(){
RegForm.style.transform = "translateX(0px)";
LoginForm.style.transform = "translateX(0px)";
Indicator.style.transform = "translateX(100px)";
 LoginForm.style.display='none';
 RegForm.style.display='block';
}
function Login(){
RegForm.style.transform = "translateX(300px)";
LoginForm.style.transform = "translateX(300px)";
Indicator.style.transform = "translateX(0px)";
RegForm.style.display='none';
LoginForm.style.display='block';
}



  
 function alertMessage(){
  alert ("You have Succsesfully Registred Please Login go to Home page ");
}

function clickAbout(){
  alert("Please Registred Your Account");
}
let container = document.querySelector(".form-container");
let popup = document.getElementById('popup');


function OpenPopup(){
 popup.style.display='block';
 container.style.display='none';
//  LoginForm.style.display= 'none';
return false;
}
function closePopup(){
  popup.style.display='none';
  // RegForm.style.display='block';
  // LoginForm.style.display= 'block';
   container.style.display='block';
   
}


// var log = document.getElementById("login");
// log.style.display= 'none';

// function LoginMe(){
 
//   log.style.display= 'block';
//   // if( !validateName() || !validatePassword){
//   //   log.style.display= 'block';
//   //   log.innerHTML = 'Plese Type userName & Password ';

//   //   setTimeout(function(){
//   //     log.style.display= 'none';
      
//   //    }, 5000);
//   //    return false;
//   // } 

  

//   // alert("hi");
  
// // }

// }

// var quez = document.getElementById("quez");
// var College = document.getElementById("College");




// function QuezApp(){
// quez.innerHTML="About.html";
// College.innerHTML= "Blog.html";

// }

// var selectfeld= document.getElementById("selectField");
// var selectText= document.getElementById("selectText");
// var options = document.getElementsByClassName("options");
// var hero = document.getElementsByClassName("hero");


// let SelectText = document.getElementById('selectText');
// let hi =document.querySelector('.hi');

// // SelectText.innerHTML='hellow';

// // for(options of options){
// //   options.onclick= function(){
// //   selectText.innerHTML= this.textContent;
// //   }
// // }


// function clickMe(){
//   hi.innerHTML='he';
//   // alert('hi');
// }




var selectfeld= document.getElementById("selectField");
var selectText= document.getElementById("selectText");
var options = document.getElementsByClassName("options");

for(options of options){
  options.onclick= function(){
  selectText.innerHTML= this.textContent;
  }
}