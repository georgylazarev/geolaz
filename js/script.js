'use strict';

(function () {
  const MAX_VARIANTS = 3;
  const LIST_OF_SKILLS = ['PHP',
  'HTML5',
  'CSS3',
  'JavaScript',
  'SASS',
  'Zimbra',
  'Cbpolicyd',
  'Git',
  'Linux',
  'Ubuntu',
  'CentOS',
  'Joomla',
  'iRedMail',
  'DNS',
  'DHCP',
  'macOS',
  'Windows',
  'Active Directory',
  'RDP',
  'DOM',
  'Apache',
  'NGINX',
  'MySQL',
  'Shell Scripting',
  'Docker',
  'etc.',];
  const skillsList = document.querySelector('.skills_list');
  const skillsItem = document.querySelector('#skills-element').content;

  skillsList.innerHTML = null;
  LIST_OF_SKILLS.forEach((skill) => {
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
