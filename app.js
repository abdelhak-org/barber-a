
'use strict';
var menuBtn = document.querySelector("#menubtn");
var sidenav = document.querySelector("#side_nav");
var menu = document.querySelector("#menu");
menuBtn.onclick=function (){
if(sidenav.style.right=="-250px"){
    sidenav.style.right="0";
    menu.src="images/close.png";
}
else {
    sidenav.style.right ="-250px";
    menu.src="images/menu.png";
}
}
