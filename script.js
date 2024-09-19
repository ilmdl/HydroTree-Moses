const loginbutton = document.getElementById("login");
const Maplink = document.querySelector(".Map")
const haveWater = document.querySelector("#Yes")


const loginForm = document.querySelector(".login")
const homePageContent = document.querySelector(".homePage");
const popUp = document.querySelector(".popup")
const questionpopup = document.querySelector("#question")
const treePage = document.querySelector(".treePage")


loginbutton.onclick = function() {
    console.log("There")
    homePageContent.setAttribute('style', 'filter: blur(0px) brightness(1)')
    loginForm.setAttribute('style', 'visibility: hidden;')
    popUp.setAttribute('style', 'z-index: 0;')
}

Maplink.onclick = function() {
    homePageContent.setAttribute('style', 'filter: blur(6px) brightness(0.2)')
    popUp.setAttribute('style', 'z-index: 1;')
    questionpopup.setAttribute("style", "visibility: visible;")
    console.log("the image")

}

haveWater.onclick = function() {
    console.log("great")
    popUp.setAttribute("style", "z-index: -1;")
    questionpopup.setAttribute("style", "visibility: hidden;")
    treePage.setAttribute('style', 'z-index: 1;')
    treePage.setAttribute('style', 'visibility: visible;')
}