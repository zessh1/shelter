const bigData = []
const data_copy = []
let lis = [];
const slideLeft = document.getElementById('slideLeft');
const slideRight = document.getElementById('slideRight');
const body = document.querySelector("body");
const slideLeftMobile = document.getElementById('slideLeftMobile');
const slideRightMobile = document.getElementById('slideRightMobile');
var element = document.getElementById('overlay');
var element_two = document.querySelector('.slide-popup');
const burgerMenu = document.getElementById('burgerLogo');
const burgerLogo = document.querySelector('.burger-title-box');
const burgerExit = document.getElementById('burger-exit-menu');
fetch('../../tsconfig.json') //path to the file with json data
    .then(response => {
        return response.json();
    })
    .then(data => {
        paginationDataGenerator(48, 6, data)

        const dataLength = data.length - 1;
        for (var i = 0; i < data.length; i++) {
            x = getRandomNumberBetween(0, 7);
            data_copy.push(data[i])
            const div = document.createElement("div")
            const img = document.createElement("img")
            const p = document.createElement("p")
            const btn = document.createElement("button")
            const slider_view_container = document.querySelector(".slider-view-container")

            div.classList.add("slider-view");
            img.classList.add("slider-view-img");
            p.classList.add("slider-view-name");
            btn.classList.add("learn-more", "btn");
            btn.innerHTML = "Learn more";

            img.src = data[x].img;
            p.innerHTML = data[x].name;

            (function (index) {
                btn.addEventListener("click", function () {
                    body.style.overflow = "hidden"
                    element.classList.add("active");

                    addInfoToPop(index)

                })
            })(x);
            div.appendChild(img);
            div.appendChild(p);
            div.appendChild(btn);
            slider_view_container.appendChild(div);


        }


    });



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

    petName.innerHTML = data_copy[k].name
    petOrigin.innerHTML = data_copy[k].type
    petBreed.innerHTML = data_copy[k].breed
    petDescr.innerHTML = data_copy[k].description
    petAge.innerHTML = data_copy[k].age
    petInoculations.innerHTML = data_copy[k].inoculations
    petDiseases.innerHTML = data_copy[k].disiases
    petParasites.innerHTML = data_copy[k].parasites
    petImg.src = data_copy[k].img
    element_two.classList.add('active')
}

function paginationDataGenerator(amount, count, data) {
    for (let i = 0; i < amount; i++) {
        bigData.push(data[getRandomNumberBetweenPag(0, count)])
    }
}


function getRandomNumberBetween(min, max) {
    number = Math.floor(Math.random() * (max - min + 1) + min);

    if (!lis.includes(number)) {
        lis.push(number)
        return number;
    } else {
        if (lis.length <= max) {
            return getRandomNumberBetween(min, max)
        } else {
            lis = [];
            return false;
        }
    }

}
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


slideRight.onclick = function () {
    document.getElementById('sliderView').scrollLeft += 290;
};
slideLeft.onclick = function () {
    document.getElementById('sliderView').scrollLeft -= 290;
};

slideRightMobile.onclick = function () {
    document.getElementById('sliderView').scrollLeft += 290;
};
slideLeftMobile.onclick = function () {
    document.getElementById('sliderView').scrollLeft -= 290;
};


function return_menu() {
    element.classList.remove("active");
    element_two.classList.remove("active");
    body.style.overflow = "unset"
}



burgerMenu.onclick = function () {
    document.querySelector('.burger').classList.add('active');
    element.classList.add("active");
    document.getElementById("logo").style.display = "none";
    burgerLogo.style.display = "block"
    body.style.overflow = "hidden"

}

burgerExit.onclick = function () {
    document.querySelector('.burger').classList.remove('active');
    element.classList.remove("active");
    document.getElementById("logo").style.display = "flex";
    document.getElementById("logo").style.flexDirection = "column";
    burgerLogo.style.display = "none"
    body.style.overflow = "unset"

}

function hideburger() {
    document.querySelector('.burger').classList.remove('active');
    element.classList.remove("active");
    document.getElementById("logo").style.display = "flex";
    document.getElementById("logo").style.flexDirection = "column";
    burgerLogo.style.display = "none"
    body.style.overflow = "unset"
}
