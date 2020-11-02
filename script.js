window.onscroll = function() {myFunction()};

let seeMoreButton = document.getElementById("h-button");   



function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").classList.add("nav-compact")
  } else {
    document.getElementById("navbar").classList.remove("nav-compact") = "";
  }
}

const doScroll = () => {  
  let about = document.getElementById("about");
  about.scrollIntoView({behavior: 'smooth'});
  // window.scrollTo({
  //   top: 400,
  //   behavior: 'smooth'
  // }); 
} 

seeMoreButton.addEventListener("click", doScroll);