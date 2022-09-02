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

let userLang = navigator.language;
let fieldLang = document.querySelector(".language");

let latitudeSpan = document.querySelector(".latitude");
let longitudeSpan = document.querySelector(".longitude");

let pEditLocalStor = document.querySelector(".container.edit > p:nth-child(2)");
let pEditCookies = document.querySelector(".container.edit > p:nth-child(4)");
let pEditSessionStor = document.querySelector(".container.edit > p:nth-child(6)");

let blockOne = document.querySelector(".block.one");
let blockTwo = document.querySelector(".block.two");

let blockScroll = document.getElementById("block-scroll");
let greyBox = document.querySelector(".grey");

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

btnShowImgMany.addEventListener("click", () => {
    let urlStore = textarea.value.split('\n');
    urlStore.forEach(el => {
        let imgTag = document.createElement("img");
        imgTag.setAttribute("src", el);
        imgContainerMany.append(imgTag)
    })
})

addEventListener('mousemove', () => {
    x.innerText = `X: ${window.event.pageX + ""}`;
    y.innerText = `Y: ${window.event.pageY + ""}`;
})

fieldLang.innerText = `Language: ${userLang}`;

navigator.geolocation.getCurrentPosition((position) => {
    latitudeSpan.innerHTML = `Ш: ${position.coords.latitude}`
    longitudeSpan.innerHTML = `Д: ${position.coords.longitude}`
});



pEditLocalStor.outerHTML = '<textarea class="edit-text">';
let textAreaEditLocal = document.querySelector(".container.edit > textarea:nth-child(2)");
textAreaEditLocal.value = localStorage.getItem('textEditLocal');
textAreaEditLocal.addEventListener("blur", () => {
    localStorage.setItem('textEditLocal', textAreaEditLocal.value);
})

let setCookie = (name, value, options = {}) => {
    options = {
        path: '/',
        ...options
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
}
let getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : "";
}

pEditCookies.outerHTML = `<textarea class="edit-text">`;
let textAreaEditCookies = document.querySelector(".container.edit > textarea:nth-child(4)");
textAreaEditCookies.value = getCookie('textEditCookies');
textAreaEditCookies.addEventListener("blur", () => {
    setCookie('textEditCookies', textAreaEditCookies.value);
});

pEditSessionStor.outerHTML = `<textarea class="edit-text">`;
let textAreaEditSessionStor = document.querySelector(".container.edit > textarea:nth-child(6)");
textAreaEditSessionStor.value = sessionStorage.getItem("textEditSession");
textAreaEditSessionStor.addEventListener("blur", () => {
    sessionStorage.setItem("textEditSession", textAreaEditSessionStor.value);
});

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

let upBtn = document.querySelector(".up-btn");
let footer = document.querySelector(".footer");
upBtn.style.display = "none";

window.addEventListener("scroll", () => {
    if ((window.pageYOffset + 800) >= scrollHeight) {
        upBtn.style.display = "flex";
        upBtn.addEventListener("click", () => {
            window.scrollTo(0, 0);
        })
    } else {
        upBtn.style.display = "none";
    }
})

blockOne.addEventListener("click", (e) => {
    if (e.target.classList == "block two") return;
    alert("From Block One");
})

blockTwo.addEventListener("click", () => {
    alert("From Block Two");
})

blockScroll.addEventListener("click", () => {
    greyBox.style.display = "block";
    document.documentElement.style.overflow = "hidden";
})

greyBox.addEventListener("click", ()=> {
    greyBox.style.display = "none";
    document.documentElement.style.overflow = "auto";
})

let form = document.forms[0];
form.go.addEventListener("click", (e)=>{
    e.preventDefault();
})

let fileInput = document.getElementById("file");

fileInput.addEventListener("dragover" , (e)=>{
    e.preventDefault();
    fileInput.classList.add("anim");
})

fileInput.addEventListener("drop" , (e)=> {
    e.preventDefault();
    fileInput.className = "";
    fileInput.classList.add("anim2");
})