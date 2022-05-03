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
function myfun() {
    console.log(element_two)
    element.classList.add("active");
    element_two.classList.add("active");
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

