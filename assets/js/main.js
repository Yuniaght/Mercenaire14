"use strict";

const $navlink = document.getElementById("navlink")
const $navmenu = document.getElementById("navmenu")


function navmenu(){
  if ($navlink.className === "navlink"){
    $navlink.className += " navopened"
    $navmenu.innerHTML = "<i class='icofont-close'></i>"
  } else {
    $navlink.className = "navlink"
    $navmenu.innerHTML = '<i class="icofont-navigation-menu"></i>'
  }
}

function resetnav() {
  if(window.innerWidth >= 968){
  $navlink.className = "navlink"
  $navmenu.innerHTML = '<i class="icofont-navigation-menu"></i>'
  }
}
window.addEventListener("resize", resetnav)