let returnButton = document.getElementById('returnBtn');

function onScroll() {
  if (scrollY > 500) {
    returnButton.classList.remove('hideBtn');
  } else {
    returnButton.classList.add('hideBtn');
  }
}

ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 1000,
}).reveal(`
  #header,
  #about .about-info,
  #skills .skills-items,
  #skills .skills-items .skill,
  #projects .projects-items,
  #projects .projects-items .project`);