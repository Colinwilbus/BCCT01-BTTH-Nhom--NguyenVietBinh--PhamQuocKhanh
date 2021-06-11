// button open navbar hidden
document.getElementById("header__openNav").onclick = function () {
  document.getElementById("header__NavHidden").style.animation =
    "openNav 0.2s linear 0s";
  document.getElementById("header__NavHidden").style.display = "block";
};
// button close navbar hidden
document.getElementById("header__closeNav").onclick = function () {
  document.getElementById("header__NavHidden").style.animation =
    "closeNav 0.2s linear 0s";
  setTimeout(function () {
    document.getElementById("header__NavHidden").style.display = "none";
  }, 150);
};
// dark mode
document.getElementById("darkMode").onclick = function () {
  document.getElementById("darkMode").style.display = "none";
  document.getElementById("lightMode").style.display = "inline-block";
  document.getElementById("dM__input").style.backgroundColor = "#232220";
  document.getElementById("dM__AboutUs").style.backgroundColor = "#232220";
  document.getElementById("dM__AboutUs").style.color = "white";
  document.getElementById("dM__BookEasly").style.color = "white";
  document.getElementById("dM__BookEa").style.color = "white";
  document.getElementById("dM__BookEb").style.color = "white";
  document.getElementById("dM__WhatsNew").style.backgroundColor = "#282828";
  document.getElementById("dM__WhatsNew").style.color = "white";
  document.getElementById("dM__Service").style.background =
    "linear-gradient(to bottom, #232220, #232220)";
  document.getElementById("dM__Service").style.color = "white";
  var dMItemService = document.getElementsByClassName("service__item");
  dMItemService[0].style.backgroundColor = "#232220";
  dMItemService[1].style.backgroundColor = "#232220";
  dMItemService[2].style.backgroundColor = "#232220";
  dMItemService[3].style.backgroundColor = "#232220";
  dMItemService[4].style.backgroundColor = "#232220";
  dMItemService[5].style.backgroundColor = "#232220";

  var dMService = document.getElementById("dM__Service");
  dMiconService = dMService.getElementsByTagName("i");
  dMiconService[0].style.backgroundColor = "#282828";
  dMiconService[1].style.backgroundColor = "#282828";
  dMiconService[2].style.backgroundColor = "#282828";
  dMiconService[3].style.backgroundColor = "#282828";
  dMiconService[4].style.backgroundColor = "#282828";
  dMiconService[5].style.backgroundColor = "#282828";
};
// light mode
document.getElementById("lightMode").onclick = function () {
  document.getElementById("lightMode").style.display = "none";
  document.getElementById("darkMode").style.display = "inline-block";
  document.getElementById("dM__input").style.backgroundColor = "white";
  document.getElementById("dM__AboutUs").style.backgroundColor = "white";
  document.getElementById("dM__AboutUs").style.color = "black";
  document.getElementById("dM__BookEasly").style.color = "black";
  document.getElementById("dM__BookEa").style.color = "black";
  document.getElementById("dM__BookEb").style.color = "black";
  document.getElementById("dM__WhatsNew").style.backgroundColor = "#f7f7f7";
  document.getElementById("dM__WhatsNew").style.color = "black";
  document.getElementById("dM__Service").style.background =
    "linear-gradient(to bottom, #fff, #f9f9f9, #fdfdfd)";
  document.getElementById("dM__Service").style.color = "black";
  var dMItemService = document.getElementsByClassName("service__item");
  dMItemService[0].style.backgroundColor = "white";
  dMItemService[1].style.backgroundColor = "white";
  dMItemService[2].style.backgroundColor = "white";
  dMItemService[3].style.backgroundColor = "white";
  dMItemService[4].style.backgroundColor = "white";
  dMItemService[5].style.backgroundColor = "white";
  var dMService = document.getElementById("dM__Service");
  dMiconService = dMService.getElementsByTagName("i");
  dMiconService[0].style.backgroundColor = "#f9f9f9";
  dMiconService[1].style.backgroundColor = "#f9f9f9";
  dMiconService[2].style.backgroundColor = "#f9f9f9";
  dMiconService[3].style.backgroundColor = "#f9f9f9";
  dMiconService[4].style.backgroundColor = "#f9f9f9";
  dMiconService[5].style.backgroundColor = "#f9f9f9";
};
