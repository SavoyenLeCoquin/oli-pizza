
import {
  ajouterHeader,
  ajouterFooter
} from "./functions.js";




//////////////////////////////////////////////////////////////////////////////////// Actions ///////////////////////////////////////////////////////////////

/* Script*/
ajouterHeader();
ajouterFooter();

/* Animation header */
let header = document.getElementById('header');
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if(window.scrollY!=0){
    header.style.backgroundColor = "rgba(32, 32, 32, 0.8)";
  }
  else { 
    header.style.backgroundColor = "rgba(32, 32, 32, 0)";
  }
  prevScrollpos = currentScrollPos;
}











