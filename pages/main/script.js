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
function myfun() {
    var element = document.getElementById('overlay');
    var element_two = document.querySelector('.slider-popup')
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

