'use strict';

(function () {
  window.data = {
    myProjects() {
      const myProjects = [
        {
          'name' : 'Fond Donorov',
          'image' : 'img/projects/fond.jpg',
          'url' : 'https://fonddonorov.ru',
          'alt' : 'Screenshot of fonddonorov.ru main page',
          'role' : 'designer, developer, system administrator',
          'info' : 'Official web site for the social project Fond Donorov'
        },
        {
          'name' : 'Marrow Donor Project',
          'image' : 'img/projects/km.jpg',
          'url' : 'https://km.fonddonorov.ru',
          'alt' : 'Screenshot of km.fonddonorov.ru main page',
          'role' : 'developer, system administrator',
          'info' : 'Official web site for the marrow donor department of the social project Fond Donorov'
        },
        {
          'name' : 'Strana Pomogaet',
          'image' : 'img/projects/strana.jpg',
          'url' : 'https://stranapomogaet.com',
          'alt' : 'Screenshot of stranapomogaet.com main page',
          'role' : 'system administrator',
          'info' : 'Official web site for the endaument fund Strana Pomogaet (Nation Helps)'
        },
        {
          'name' : 'National Center for Social Help',
          'image' : 'img/projects/ncsp.jpg',
          'url' : 'https://ncsp.info',
          'alt' : 'Screenshot of ncsp.info main page',
          'role' : 'developer, system administrator',
          'info' : 'Official web site for the non-profit organization NCSH'
        },
        {
          'name' : 'O, Pizza!',
          'image' : 'img/projects/pizza.jpg',
          'url' : 'https://pizza-lavka.ru',
          'alt' : 'Screenshot of pizza-lavka.ru main page',
          'role' : 'developer, system administrator',
          'info' : 'Official web site for a small pizzeria in Saint Petersburg'
        },
        {
          'name' : 'The Monday Snobs',
          'image' : 'img/projects/tms.jpg',
          'url' : 'http://tmsband.ru',
          'alt' : 'Screenshot of tmsband.ru main page',
          'role' : 'developer, musician :)',
          'info' : 'Official web site of a local rock band from Saint Petersburg'
        }
      ];
      return myProjects;
    },
    mySkills() {
      const listOfSkills = [
          'PHP',
          'HTML5',
          'CSS3',
          'JavaScript',
          'SASS',
          'Zimbra',
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
          'Nexus',
          'Vagrant',
          'SonarQube',
          'Jenkins',
          'CI/CD',
          'etc.',
      ];
      return listOfSkills;
    }
  };
})();
