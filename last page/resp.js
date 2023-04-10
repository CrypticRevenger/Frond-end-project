burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');


})

const button = document.getElementById("Submit");
const username =  document.getElementById("Name");
const Email = document.getElementById("email");
const number = document.getElementById("phone");

username.addEventListener('keyup',(e) => {
    const value = e.currentTarget.value;
    if (value == ""){
        Submit.disabled = true;
    }else {
        Submit.disabled = false;
    }
})

Email.addEventListener('keyup',(e) => {
    const value = e.currentTarget.value;
    if (value == ""){
        Submit.disabled = true;
    }else {
        Submit.disabled = false;
    }
})

number.addEventListener('keyup',(e) => {
    const value = e.currentTarget.value;
    if (value == ""){
        Submit.disabled = true;
    }else {
        Submit.disabled = false;
    }
})

