"use strict";

let mostViewedIndex = 1;
let mostNewerIndex = 1
let t1 = null
let t2 = null

showViewed(mostViewedIndex);
showNewer(mostNewerIndex);


function plusViewed(n) {
  showViewed(mostViewedIndex += n);
}

function plusNewer(n) {
  showNewer(mostNewerIndex += n);
}

function showViewed(n) {
  clearTimeout(t1)
  let i;
  let hotproduct = document.getElementsByClassName("hotproduct");
  if (n > hotproduct.length) {mostViewedIndex = 1}
  if (n < 1) {mostViewedIndex = hotproduct.length}
  for (i = 0; i < hotproduct.length; i++) {
    hotproduct[i].style.display = "none";
  }
  hotproduct[mostViewedIndex-1].style.display = "block";
  t1 = setTimeout(plusViewed,5000,1)
}

function showNewer(n) {
  clearTimeout(t2)
  let i;
  let newproduct = document.getElementsByClassName("newproduct");
  if (n > newproduct.length) {mostNewerIndex = 1}
  if (n < 1) {mostNewerIndex = newproduct.length}
  for (i = 0; i < newproduct.length; i++) {
    newproduct[i].style.display = "none";
  }
  newproduct[mostNewerIndex-1].style.display = "block";
  t2 = setTimeout(plusNewer,5000,1)
}
