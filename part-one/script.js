let box = document.getElementById("box");
let firstBoxes = document.querySelectorAll(".box-container.first > .box");
let secondBoxes = document.querySelectorAll(".box-container.second > .box");
let cssHide = document.getElementById("css-hide");
let jsHide = document.getElementById("js-hide");
let cssJsHide = document.getElementById("css-js-hide");

let inputNameOfBox = document.forms[0].elements.name;
let findButton = document.forms[0].elements.btn;

cssHide.addEventListener("click", () => {
    box.style.display = "none";
})

jsHide.addEventListener("click", () => {
    box.remove();
})

// hide one element using classList
// cssJsHide.addEventListener("click", () => {
//     box.classList.toggle("hidden");
// })

cssJsHide.addEventListener("click", () => {
    firstBoxes.forEach(el => el.classList.toggle("hidden"))
})
console.log(inputNameOfBox)
console.log(findButton)
console.log(secondBoxes)

forms[0].preventDefault()
findButton.addEventListener("click", () => {

})


