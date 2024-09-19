const loginbutton = document.getElementById("login");
const Maplink = document.querySelector(".Map")
const haveWater = document.querySelector("#Yes")
const waterTree = document.querySelector(".waterTree")


const loginForm = document.querySelector(".login")
const homePageContent = document.querySelector(".homePage");
const popUp = document.querySelector(".popup")
const questionpopup = document.querySelector("#question")
const treePage = document.querySelector(".treePage")
const successPage = document.querySelector(".successPopup")

loginbutton.onclick = function() {
    homePageContent.setAttribute('style', 'filter: blur(0px) brightness(1)')
    loginForm.setAttribute('style', 'visibility: hidden;')
    popUp.setAttribute('style', 'z-index: 0;')
    console.log("There")
}

Maplink.onclick = function() {
    homePageContent.setAttribute('style', 'filter: blur(6px) brightness(0.2)')
    popUp.setAttribute('style', 'z-index: 1;')
    questionpopup.setAttribute("style", "visibility: visible;")
    console.log("the image")

}

haveWater.onclick = function() {
    popUp.setAttribute("style", "z-index: -1;")
    questionpopup.setAttribute("style", "visibility: hidden;")
    treePage.setAttribute('style', 'z-index: 1;')
    treePage.setAttribute('style', 'visibility: visible;')
    console.log("great")
}

waterTree.onclick = function () {
    successPage.setAttribute('style', 'visibility: visible;')
    successPage.setAttribute('style', 'visibility: visible;')
    console.log("Yay")
}