window.onscroll = function() {myFunction()};

let hButtonAbout = document.getElementById("h-button-about");   
let aButtonContact = document.getElementById("a-button-contact");   
let nAnchorHome = document.getElementById("n-a-home");   
let nAnchorAbout = document.getElementById("n-a-about");   
let nAnchorContact = document.getElementById("n-a-contact");   
let stickyButtonHome = document.getElementById("sticky-button-home");


/* Smooth scroll Navbar */
function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").classList.add("nav-compact")
    stickyButtonHome.style.display = "block";

  } else {
    document.getElementById("navbar").classList.remove("nav-compact") = "";
    stickyButtonHome.style.display = "none";
  }
}

/* Smooth scroll buttons/anchors */
const doScroll = (event) => {  
  let goTo = event.target.id ? event.target.id : event.target.parentElement.id;

  // let goTo = event.target.id;
  console.log(goTo)

  goTo = goTo.substring(goTo.lastIndexOf('-') + 1);


  let goToElement = document.getElementById(goTo);
  goToElement.scrollIntoView({behavior: 'smooth'});
} 

hButtonAbout.addEventListener("click", doScroll);
aButtonContact.addEventListener("click", doScroll);
nAnchorHome.addEventListener("click", doScroll);
nAnchorAbout.addEventListener("click", doScroll);
nAnchorContact.addEventListener("click", doScroll);
stickyButtonHome.addEventListener("click", doScroll);

