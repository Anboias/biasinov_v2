window.onscroll = function() {myFunction()};

let seeMoreButton = document.getElementById("h-button");   

let windowHeight = document.documentElement.clientWidth;

function myFunction() {
  if (document.body.scrollTop > windowHeight || document.documentElement.scrollTop > windowHeight) {
    document.getElementById("navbar").classList.add("nav-compact")
  } else {
    document.getElementById("navbar").classList.remove("nav-compact") = "";
  }
}

const doScroll = () => {  
  let about = document.getElementById("about");
  about.scrollIntoView({behavior: 'smooth'});
} 

seeMoreButton.addEventListener("click", doScroll);