const loginbutton = document.getElementById("login");

const popUp = document.querySelector(".popup")
const loginForm = document.querySelector(".login")
const homePageContent = document.querySelector(".homePage");

loginbutton.onclick = function() {
    console.log("There")
    homePageContent.setAttribute('style', 'filter: blur(0px) brightness(1)')
    loginForm.setAttribute('style', 'visibility: hidden;')
    popUp.setAttribute('style', 'z-index: 0;')
}