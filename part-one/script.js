let box = document.getElementById("box");
let firstBoxes = document.querySelectorAll(".box-container.first > .box");
let cssHide = document.getElementById("css-hide");
let jsHide = document.getElementById("js-hide");
let cssJsHide = document.getElementById("css-js-hide");

let secondBoxes = document.querySelectorAll(".box-container.second > .box");
let inputNameOfBox = document.getElementById("name");
let findButton = document.getElementById("btn-hidde");

let yellowSquare = document.getElementById("yellow-square");

let onHover = document.getElementById("on-hover");
let redSquare = document.getElementById("red-square");

let greenSquare = document.getElementById("green-square");
let greenSquareInput = document.getElementById("green-square-input");

let imageUrl = document.getElementById("image-url");
let btnShowImg = document.getElementById("show-img");
let imgContainer = document.querySelector(".img-container");

let imageUrlMany = document.getElementById("image-url-many");
let btnShowImgMany = document.getElementById("show-img-many");
let imgContainerMany = document.querySelector(".img-container.many");

let x = document.getElementById("x");
let y = document.getElementById("y");

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

findButton.addEventListener("click", () => {
    secondBoxes.forEach(el => {
        let nameOf = el.classList + "";
        if (nameOf.indexOf(inputNameOfBox.value) != -1 && inputNameOfBox.value != "") {
            el.classList.toggle("hidden");
        }
    })
})


let hiMassage = () => {
    alert("Привет");
    yellowSquare.onclick = hideYellowSquare;
}
let hideYellowSquare = () => yellowSquare.classList.toggle("hidden");

yellowSquare.onclick = hiMassage;

onHover.addEventListener("mouseover", () => {
    redSquare.classList.remove("hidden");
})
onHover.addEventListener("mouseout", () => {
    redSquare.classList.add("hidden");
})

greenSquareInput.addEventListener("focus", () => {
    greenSquare.classList.remove("hidden");
})

greenSquareInput.addEventListener("input", () => {
    greenSquare.classList.add("hidden");
})

btnShowImg.addEventListener("click", () => {
    imgContainer.innerHTML = `<img src="${imageUrl.value}">`;
})


let textarea = document.createElement("textarea")
imageUrlMany.replaceWith(textarea)

btnShowImgMany.addEventListener("click", ()=>{
    let urlStore = textarea.value.split('\n');
    urlStore.forEach(el => {
     let imgTag = document.createElement("img");
     imgTag.setAttribute("src", el);
     imgContainerMany.append(imgTag)})
})

addEventListener('mousemove', ()=>{
    x.innerText =`X: ${window.event.pageX+""}`;
    y.innerText =`Y: ${window.event.pageY+""}`;
})
