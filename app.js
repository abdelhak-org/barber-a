
var links = document.querySelectorAll("nav ul li a");
links.forEach(link =>{
    link.addEventListener("click" , (e)=>{
        e.preventDefault();
        const id = e.target.getAttribute("href");
        console.log(id);
        document.querySelector(id).scrollIntoView({behavior:"smooth"});
    })
})




var menuBtn = document.querySelector("#menubtn");
var sidenav = document.querySelector("#side_nav");
var menu = document.querySelector("#menu");
menuBtn.addEventListener("click", (e)=>{
    e.preventDefault;
    if(sidenav.style.right =="-250px"){
        sidenav.style.right="0";
        menu.src="images/close.png";
    }
    else {
        sidenav.style.right ="-250px";
        menu.src ="images/menu.png";

    }
    }
    
);
