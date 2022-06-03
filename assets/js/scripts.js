// Hide and Show Icons
let social_icons = document.getElementById("icons");
let instagramIcon = document.getElementById("social-i-1");
let githubIcon = document.getElementById("social-i-2");
let linkedinIcon = document.getElementById("social-i-3");

social_icons.addEventListener("mouseenter", showIcons);
social_icons.addEventListener("mouseleave", hideIcons);

function showIcons() {
  instagramIcon.style.display = "block";
  githubIcon.style.display = "block";
  linkedinIcon.style.display = "block";
}

function hideIcons() {
  instagramIcon.style.display = "none";
  githubIcon.style.display = "none";
  linkedinIcon.style.display = "none";
}

// Button to the top of the page
let returnButton = document.getElementById('returnBtn');

function onScroll() {
  if (scrollY > 500) {
    returnButton.classList.remove('hideBtn');
  } else {
    returnButton.classList.add('hideBtn');
  }

  // Social Bar
  let socialBar = document.getElementById("social_bar");
  if (scrollY >= 400) {
    socialBar.style.display = "none";
  } else {
    socialBar.style.display = "block";
  }
}

// ScrollReveal API
ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 700,
}).reveal(`
  #header,
  #about .about-info,
  #skills .skills-items,
  #skills .skills-items .skill,
  #projects .projects-items,
  #projects .projects-items .project`);