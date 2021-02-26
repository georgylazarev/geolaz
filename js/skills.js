'use strict';

(function () {
  const MAX_VARIANTS = 3;
  const listOfSkills = window.data.mySkills();
  const skillsList = document.querySelector('.skills__list');
  const skillsItem = document.querySelector('#skills-element').content;

  skillsList.innerHTML = null;
  listOfSkills.forEach((skill) => {
    const currentSkill = skillsItem.cloneNode(true);
    let currentSkillItem = currentSkill.querySelector('li');
    const randomWidth = Math.floor(Math.random() * MAX_VARIANTS);

    currentSkillItem.textContent = skill;
    switch (randomWidth) {
        case 0:
          currentSkillItem.classList.add('skills__item--thin');
          break;
        case 1:
          currentSkillItem.classList.add('skills__item--mid');
          break;
        case 2:
          currentSkillItem.classList.add('skills__item--bold');
          break;
      }
      skillsList.appendChild(currentSkill);
  });
})();
