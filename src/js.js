const footerSocialImg = document.querySelector(".social-item__img");
const headerBarBurger = document.querySelector(".nav-mobile__burger");
const headerBar = document.querySelector(".nav-mobile__menu");
const mediaQuvery = window.matchMedia('(max-width: 768px)');
const overhidenBar = document.querySelector(".overhiden-baar");
const closeBar = document.querySelector(".nav-mobile__desktop-close");
const openModal = document.querySelector(".modal-window");
const openModalDesktop = document.querySelector(".modal-window-desktop");
const modalWindow = document.querySelector(".modal-login__desktop");
const closeModalDesktop = document.querySelector(".modal-login__desktop-close");



let offset = 0;

headerBarBurger.addEventListener('click', function(){
    headerBar.style.marginRight = offset + "px";
    headerBar.style.display = "block";
    if(headerBar.style.display == "block"){
        overhidenBar.style.display = "block"
    };
    if(headerBar.style.display == "block"){
        document.querySelector(".body").style.overflow = "hidden"
    }
})

closeBar.addEventListener('click', function(){
    headerBar.style.display = "none";
    overhidenBar.style.display = "none";
    document.querySelector(".body").style.overflow = "scroll"
})

openModal.addEventListener('click', function(){
    modalWindow.style.display = "block";
    document.querySelector(".body").style.overflow = "hidden"
})

openModalDesktop.addEventListener('click', function(){
    modalWindow.style.display = "block";
    document.querySelector(".body").style.overflow = "hidden"
})
closeModalDesktop.addEventListener('click', function(){
    modalWindow.style.display = "none";
    document.querySelector(".body").style.overflow = "scroll"
})


let a = 15;
let b = 15; 

for( var i = 1; i <= 10; i++ ){

function foo (e){
    setTimeout(()=>{
    console.log(e)
}, 10000)};
}
foo(i)

for( var i = 1; i <= 10; i++ ){
setTimeout((y)=>{
    console.log(y)
}, 1000)};

console.log(a+b);







