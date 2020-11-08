window.onscroll = function () {
  myFunction();
};

let navbar = document.getElementById('navbar');
let hButtonFooter = document.getElementById('h-button-footer');
// let aButtonContact = document.getElementById('a-button-contact');
let nAnchorHome = document.getElementById('n-a-home');
let nAnchorAbout = document.getElementById('n-a-about');
// let nAnchorContact = document.getElementById('n-a-contact');
let stickyButtonHome = document.getElementById('sticky-button-home');
let profileImg = document.getElementById('profile-img');

/* Smooth scroll Navbar */
function myFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.classList.add('nav-compact');
    stickyButtonHome.style.display = 'block';
  } else {
    navbar.classList.remove('nav-compact');
    stickyButtonHome.style.display = 'none';
  }
  if (document.documentElement.scrollTop > 0) {
    hButtonFooter.style.display = 'none';
  } else {
    hButtonFooter.style.display = 'block';
  }
}

/* Smooth scroll buttons/anchors */
const doScroll = (event) => {
  let goTo = event.target.id ? event.target.id : event.target.parentElement.id;

  // let goTo = event.target.id;
  console.dir(goTo);

  goTo = goTo.substring(goTo.lastIndexOf('-') + 1);

  let goToElement = document.getElementById(goTo);
  goToElement.scrollIntoView({ behavior: 'smooth' });

  // window.scroll(0, goToElement);
};

const profileImgHovered = (event) => {
  console.dir(event);
  let animateClassName = 'animate__headShake';

  if (event.type === 'mouseenter') {
    profileImg.classList.add(animateClassName);
  } else {
    profileImg.classList.remove(animateClassName);
  }

  // console.dir(profileImg);
};

hButtonFooter.addEventListener('click', doScroll);
// aButtonContact.addEventListener('click', doScroll);
nAnchorHome.addEventListener('click', doScroll);
nAnchorAbout.addEventListener('click', doScroll);
// nAnchorContact.addEventListener('click', doScroll);
stickyButtonHome.addEventListener('click', doScroll);
profileImg.addEventListener('mouseenter', profileImgHovered);
profileImg.addEventListener('mouseleave', profileImgHovered);
