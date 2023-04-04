let closevideo = document.getElementById('close');
let openvideo =   document.getElementById('demo');
let myvideo = document.getElementById('video_player');
openvideo.addEventListener('click',() =>{
    myvideo.setAttribute("style","width:70%;height:40vh;transition:all .5s linear");
    closevideo.style.display = "block"
})
closevideo.addEventListener('click',() =>{
    myvideo.setAttribute("style","width:0%;height:0vh;transition:all .5s linear");
    closevideo.style.display = "none"
})
//slideshow//
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//form validation//
var satisfy=0;
   const email = document.getElementById("email");
const password = document.getElementById("password");

email.addEventListener('input',()=>{
    const emailbox = document.querySelector('.emailbox');
    const emailtext = document.querySelector('.emailtext');
    const emailpattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

    if(email.value.match(emailpattern)){
        emailbox.classList.add('valid');
        emailbox.classList.remove('invalid');
        emailtext.innerHTML = "your email address is valid";
        satisfy=satisfy+1;
        
    }else{
        emailbox.classList.add('invalid');
        emailbox.classList.remove('valid');
        emailtext.innerHTML = "please enter a valid email";
    }
});
password.addEventListener('input',()=>{
    const passbox = document.querySelector('.passbox');
    const passtext = document.querySelector('.passtext');
    const passpattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if(password.value.match(passpattern)){
        passbox.classList.add('valid');
        passbox.classList.remove('invalid');
        passtext.innerHTML = "your password is valid";
        satisfy=satisfy+1;
        
    }else{
        passbox.classList.add('invalid');
        passbox.classList.remove('valid');
        passtext.innerHTML = "Your password must be atleast 6 characters as well as contain at least one uppercase,one lowercase, and one number.";
    }
});

firstname.addEventListener('input',()=>{
    const firstbox = document.querySelector('.firstbox');
    const firsttext = document.querySelector('.firsttext');
    const passpattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if(firstname.value.match(firstpattern)){
        firstboxclassList.add('valid');
        firstbox.classList.remove('invalid');
        firsttext.innerHTML = "your firstname is valid";
        satisfy=satisfy+1;
        
    }else{
        firstbox.classList.add('invalid');
        firstbox.classList.remove('valid');
        firsttext.innerHTML = "Your firstname must be atleast 6 characters as";
    }
});

lastname.addEventListener('input',()=>{
    const lastbox = document.querySelector('.lastbox');
    const lasttext = document.querySelector('.lasttext');
    const lastpattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if(lastname.value.match(lastpattern)){
        lastbox.classList.add('valid');
        lastbox.classList.remove('invalid');
        lasttext.innerHTML = "your lastname is valid";
        satisfy=satisfy+1;
        
    }else{
        lastbox.classList.add('invalid');
        lastbox.classList.remove('valid');
        lasttext.innerHTML = "Your lastname must be atleast 6 characters.";
    }
});

//welcome message//
let popup = document.getElementById("popup");
function openpopup(){
   popup.classList.add("open-popup");
}
function closepopup(){
   popup.classList.remove("open-popup");
}
//cannot blank validation//
function validate(event){
  event.preventDefault();
  //Validate each form input
  $("form input[data-required]").each(function(index){
    var $_this = $(this);
    var $_error = $_this.next(".error");
    if($_this.val().length == 0) {
      if($_error.length == 0){
         $_this.after('<p class="error">'+$_this.data("error-message")+'</p>');
      }
    } else
         $_error.remove();
  });
}
//popup//

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


$("form").on({
  "submit": function(){
    validate(event);
  },
  "change": function(){
     validate(event);
  }
});
//login//
function setAction(form) {

if(satisfy>=2){
return openpopup();
}
else if(satisfy==1 || satisfy==0){
    satisy = 0;
    // validation();
    // validation2();
    text4.innerHTML="please fill correctly all credentials";
    text4.style.color="red"; 
    
}
}
