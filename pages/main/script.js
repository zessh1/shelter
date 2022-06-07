const bigData = []
const data_copy = []
fetch('../../tsconfig.json') //path to the file with json data
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
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
            console.log(data[x].name);

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
            console.log(dataLength);


        }


    });


const body = document.querySelector("body")

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
    // console.log(getRandomNumberBetweenPag(0, 6), 'asdasda');
    for (let i = 0; i < amount; i++) {
        bigData.push(data[getRandomNumberBetweenPag(0, count)])
        console.log('aee' , bigData)
    }
}

let lis = [];

function getRandomNumberBetween(min, max) {
    number = Math.floor(Math.random() * (max - min + 1) + min);

    if (!lis.includes(number)) {
        lis.push(number)
        return number;
    } else {
        if (lis.length <= max) {
            return getRandomNumberBetween(min, max)
        } else {
            console.log("amoiwura")
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
            console.log("amoiwura")
            liss = [];
            return false;
        }
    }

}



const slideLeft = document.getElementById('slideLeft');
const slideRight = document.getElementById('slideRight');

slideRight.onclick = function () {
    document.getElementById('sliderView').scrollLeft += 220;
};
slideLeft.onclick = function () {
    document.getElementById('sliderView').scrollLeft -= 220;
};
const slideLeftMobile = document.getElementById('slideLeftMobile');
const slideRightMobile = document.getElementById('slideRightMobile');

slideRightMobile.onclick = function () {
    document.getElementById('sliderView').scrollLeft += 220;
};
slideLeftMobile.onclick = function () {
    document.getElementById('sliderView').scrollLeft -= 220;
};
var element = document.getElementById('overlay');
var element_two = document.querySelector('.slider-popup')

function return_menu() {
    var element = document.getElementById('overlay');
    var element_two = document.querySelector('.slider-popup')
    element.classList.remove("active");
    element_two.classList.remove("active");
    body.style.overflow = "unset"
}


const burgerMenu = document.getElementById('burgerLogo');
burgerMenu.onclick = function () {
    document.querySelector('.burger').classList.add('active');
    element.classList.add("active");
    document.getElementById("logo").style.display = "none";

}
const burgerExit = document.getElementById('burger-exit-menu')
burgerExit.onclick = function () {
    document.querySelector('.burger').classList.remove('active');
    element.classList.remove("active");
    document.getElementById("logo").style.display = "flex";
    document.getElementById("logo").style.flexDirection = "column";
}

function hideburger() {
    document.querySelector('.burger').classList.remove('active');
    element.classList.remove("active");
}
