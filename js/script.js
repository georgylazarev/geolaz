'use strict';

(function () {
  const MAX_VARIANTS = 3;
  const skills = document.querySelectorAll('.skills__item');

  skills.forEach((skill) => {
    let randomWidth = Math.floor(Math.random() * MAX_VARIANTS);
    switch (randomWidth) {
      case 0:
        skill.classList.add('skills__item--thin');
        break;
      case 1:
        skill.classList.add('skills__item--mid');
        break;
      case 2:
        skill.classList.add('skills__item--bold');
        break;
    }
  });
  
  
})();