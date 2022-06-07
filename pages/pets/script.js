const burgerMenu = document.getElementById('burgerLogo');
const pagination_right_jump = document.getElementById("pagination-right-jump")
const pagination_right_full_jump = document.getElementById("pagination-right-full-jump")
const pagination_left_jump = document.getElementById("pagination-left-jump")
const pagination_left_full_jump = document.getElementById("pagination-left-full-jump")
const pagination_page = document.getElementById("pagination-page")

let bigData = []
var element = document.getElementById('overlay');
var element_two = document.querySelector('.slider-popup')
burgerMenu.onclick = function () {
    document.querySelector('.burger').classList.add('active');
    element.classList.add('active')
    document.getElementById("logo").style.display = "none";

}
const burgerExit = document.getElementById('burger-exit-menu')
burgerExit.onclick = function () {
    document.querySelector('.burger').classList.remove('active');
    element.classList.remove('active')
    document.getElementById("logo").style.display = "flex";
    document.getElementById("logo").style.flexDirection = "column";
}

function hideburger() {
    document.querySelector('.burger').classList.remove('active');
    element.classList.remove('active')
}
fetch('../../tsconfig.json') //path to the file with json data
    .then(response => {
        return response.json();
    })
    .then(data => {

        paginationDataGenerator(48, 7, data)

    });
function paginationDataGenerator(amount, count, data) {

    for (let i = 0; i < amount; i++) {
        bigData.push(data[getRandomNumberBetweenPag(0, count)])

    }
    checkdisablebtn();
    if(window.screen.availWidth >= 320) {
        drawpets(0,3)
        console.log(window.screen.availWidth)
        console.log(">780")
    }
    if( window.screen.availWidth >= 780) {
        drawpets(0,6)
        console.log(window.screen.availWidth)
        console.log("780< x >1280")
    }
    if(window.screen.availWidth >= 1280) {
        drawpets(0,8)
        console.log(window.screen.availWidth)
        console.log("1280>")
    }
}
function drawpets( startCount = 0,count ){
        const slider_view_container = document.querySelector(".our-pets-grid-box")
        slider_view_container.innerHTML = '';
    for (var i = startCount; i < count; i++) {
        const div = document.createElement("div")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const btn = document.createElement("button")

        div.classList.add("slider-view");
        img.classList.add("slider-view-img");
        p.classList.add("slider-view-name");
        btn.classList.add("learn-more", "btn");
        btn.innerHTML = "Learn more";

        img.src = bigData[i].img;
        p.innerHTML = bigData[i].name;


        (function (index) {
            btn.addEventListener("click", function () {

                element.classList.add("active");

                addInfoToPop(index)

            })
        })(i);
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(btn);
        slider_view_container.appendChild(div);


    }
}
function addInfoToPop(k) {
    const petName = document.querySelector('.pet-name');
    const petOrigin = document.querySelector('.pet-origin');
    const petBreed = document.querySelector('.breed');
    const petDescr = document.querySelector('.pet-descr');
    const petAge = document.querySelector('.pet-age');
    const petInoculations = document.querySelector('.pet-inoculations');
    const petDiseases = document.querySelector('.pet-diseases');
    const petParasites = document.querySelector('.pet-parasites');
    const petImg = document.querySelector('.about-pets-img')

    petName.innerHTML = bigData[k].name
    petOrigin.innerHTML = bigData[k].type
    petBreed.innerHTML = bigData[k].breed
    petDescr.innerHTML = bigData[k].description
    petAge.innerHTML = bigData[k].age
    petInoculations.innerHTML = bigData[k].inoculations
    petDiseases.innerHTML = bigData[k].disiases
    petParasites.innerHTML = bigData[k].parasites
    petImg.src = bigData[k].img
    element_two.classList.add('active')
}
function return_menu() {
    var element = document.getElementById('overlay');
    var element_two = document.querySelector('.slider-popup')
    element.classList.remove("active");
    element_two.classList.remove("active");

}

// let haveIt = [];
//
// function generateUniqueRandom(maxNr) {
//
//     let random = (Math.random() * maxNr).toFixed();
//
//
//     random = Number(random);
//
//     if(!haveIt.includes(random)) {
//         haveIt.push(random);
//         return random;
//     } else {
//         if(haveIt.length < maxNr) {
//
//             haveIt = []
//             return  generateUniqueRandom(maxNr);
//         }
//     }
// }

function getRandomNumberBetweenPag(min, max) {
    let liss = []
    number = Math.floor(Math.random() * (max - min + 1) + min);

    if (!liss.includes(number)) {
        liss.push(number)
        return number;
    } else {
        if (liss.length <= max) {
            return getRandomNumberBetween(min, max)
        } else {

            liss = [];
            return false;
        }
    }

}

let startnum = 0
let lastnum = 8

if (window.screen.availWidth >= 320) {
    lastnum = 3
    console.log(lastnum, "asdasdas", window.screen.availWidth)

}if (window.screen.availWidth >= 780) {
    lastnum = 6

}if (window.screen.availWidth >= 1280) {
    lastnum = 8

}

function checkdisablebtn() {
    if (lastnum >= bigData.length) {
        console.log('ss', bigData.length)
        pagination_right_jump.disabled = true;
        pagination_right_full_jump.disabled = true;
        pagination_left_jump.disabled = false;
        pagination_left_full_jump.disabled = false;
        pagination_right_jump.classList.remove("btn-clickable")
        pagination_right_full_jump.classList.remove("btn-clickable")
        pagination_left_jump.classList.add("btn-clickable")
        pagination_left_full_jump.classList.add("btn-clickable")
    }
    else if (startnum <= 0) {
        console.log('dd')
        pagination_left_jump.disabled = true;
        pagination_left_full_jump.disabled = true;
        pagination_right_jump.disabled = false;
        pagination_right_full_jump.disabled = false;
        pagination_right_jump.classList.add("btn-clickable")
        pagination_right_full_jump.classList.add("btn-clickable")
        pagination_left_jump.classList.remove("btn-clickable")
        pagination_left_full_jump.classList.remove("btn-clickable")

    }
    else {
        console.log('ae')
        pagination_left_jump.disabled = false;
        pagination_left_full_jump.disabled = false;
        pagination_right_jump.disabled = false;
        pagination_right_full_jump.disabled = false;
        pagination_right_jump.classList.add("btn-clickable")
        pagination_right_full_jump.classList.add("btn-clickable")
        pagination_left_jump.classList.add("btn-clickable")
        pagination_left_full_jump.classList.add("btn-clickable")
    }
}

pagination_right_jump.onclick = function () {
    if(window.screen.availWidth >= 1280) {
        startnum += 8
        lastnum += 8
        drawpets(startnum,lastnum)
        checkdisablebtn()
        pagination_page.innerHTML = (lastnum / 8).toString()
        console.log(lastnum,"ssaa")
        return;
    }
    if (window.screen.availWidth >= 780) {
        startnum += 6
        lastnum += 6
        drawpets(startnum,lastnum)
        checkdisablebtn()
        pagination_page.innerHTML = (lastnum / 6).toString()
        console.log(lastnum,"6saa")
        return;
    }
    if (window.screen.availWidth >= 320) {
        startnum += 3
        lastnum += 3
        drawpets(startnum,lastnum)
        checkdisablebtn()
        pagination_page.innerHTML = (lastnum / 3).toString()
        console.log(lastnum,"3saa")
        return;
    }

}
pagination_right_full_jump.onclick = function () {
    if(window.screen.availWidth >= 1280) {
        startnum = 40
        lastnum = 48
        drawpets(startnum,lastnum)
        checkdisablebtn()
        pagination_page.innerHTML = (lastnum / 8).toString()
        return;
    }
    if (window.screen.availWidth >= 780) {
        startnum = 42
        lastnum = 48
        drawpets(startnum,lastnum)
        checkdisablebtn()
        pagination_page.innerHTML = (lastnum / 6).toString()
        return;
    }
    if (window.screen.availWidth >= 320) {
        startnum = 45
        lastnum = 48
        drawpets(startnum,lastnum)
        checkdisablebtn()
        pagination_page.innerHTML = (lastnum / 3).toString()
        return;
    }
}

pagination_left_jump.onclick = function () {
    if(window.screen.availWidth >= 1280) {

        startnum -= 8
        lastnum -= 8
        drawpets(startnum,lastnum)
        checkdisablebtn()
        pagination_page.innerHTML = (lastnum / 8).toString()
        return;
    }
    if (window.screen.availWidth >= 780) {

        startnum -= 6
        lastnum -= 6
        drawpets(startnum,lastnum)
        checkdisablebtn()
        pagination_page.innerHTML = (lastnum / 6).toString()
        return
    }
    if (window.screen.availWidth >= 320) {

        startnum -= 3
        lastnum -= 3
        drawpets(startnum,lastnum)
        checkdisablebtn()
        pagination_page.innerHTML = (lastnum / 3).toString()
        console.log(lastnum,"4saa")
        return;
    }

}
pagination_left_full_jump.onclick = function () {
    if(window.screen.availWidth >= 1280) {

        startnum = 0
        lastnum = 8
        drawpets(startnum,lastnum)
        checkdisablebtn()
        pagination_page.innerHTML = (lastnum / 8).toString()
        return;
    }
    if(window.screen.availWidth >= 780) {

        startnum = 0
        lastnum = 6
        drawpets(startnum,lastnum)
        checkdisablebtn()
        pagination_page.innerHTML = (lastnum / 6).toString()
        return;
    }
    if(window.screen.availWidth >= 320) {

        startnum = 0
        lastnum = 3
        drawpets(startnum,lastnum)
        checkdisablebtn()
        pagination_page.innerHTML = (lastnum / 3).toString()
        return;
    }
}

