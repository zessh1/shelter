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