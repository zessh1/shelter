sliderPopInfo = {
    jennifer: {
        title: 'Jennifer',
        descrTitle: 'Dog - Labrador',
        descr: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
        age: '2 month',
        inoculations: 'none',
        disiases: 'none',
        parasites: '3',
        petImg: '../../assets/images/pets-jennifer.png'
    },
     katarine: {
        title: 'Katrine',
        descrTitle: 'Cat - British',
        descr: 'Katrine is a sweet 2 months old Cat that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
        age: '5 month',
        inoculations: 'none',
        disiases: 'none',
        parasites: 'none',
        petImg: '../../assets/images/pets-katrine.png'
    },
     woody: {
        title: 'Woody',
        descrTitle: 'dog - Golden',
        descr: 'Woody is a sweet 2 months old Dog that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
        age: '3 month',
        inoculations: 'none',
        disiases: 'none',
        parasites: '2',
        petImg: '../../assets/images/pets-woody.png'
    },
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
function callSliderPop(name) {
    switch(name) {
        case 'woody':
            addInfoToPop(name);
            break;
        case 'jennifer':
            addInfoToPop(name);
            break;
        case 'katarine':
            addInfoToPop(name);
            break;
        default:

    }
    console.log('sliderPopInfo')
    element.classList.add("active");
    element_two.classList.add("active");
}
function addInfoToPop(name) {
    const petName = document.querySelector('.pet-name');
    const petOrigin = document.querySelector('.pet-origin');
    const petDescr = document.querySelector('.pet-descr');
    const petAge = document.querySelector('.pet-age');
    const petInoculations = document.querySelector('.pet-inoculations');
    const petDiseases = document.querySelector('.pet-diseases');
    const petParasites = document.querySelector('.pet-parasites');
    const petImg = document.querySelector('.about-pets-img')

    petName.innerHTML = sliderPopInfo[name].title
    petOrigin.innerHTML = sliderPopInfo[name].descrTitle
    petDescr.innerHTML = sliderPopInfo[name].descr
    petAge.innerHTML = sliderPopInfo[name].age
    petInoculations.innerHTML = sliderPopInfo[name].inoculations
    petDiseases.innerHTML = sliderPopInfo[name].disiases
    petParasites.innerHTML = sliderPopInfo[name].parasites
    petImg.src = sliderPopInfo[name].petImg
}
function return_menu() {
    var element = document.getElementById('overlay');
    var element_two = document.querySelector('.slider-popup')
    element.classList.remove("active");
    element_two.classList.remove("active");
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

