'use strict';

(function () {
  const myProjects = window.data.myProjects();
  const projectsList = document.querySelector('.projects__list');
  const projectsItem = document.querySelector('#projects-element').content;

  projectsList.innerHTML = null;
  myProjects.forEach((project) => {
    const currentProject = projectsItem.cloneNode(true);
    let projectName = currentProject.querySelector('.projects__name');
    let projectImage = currentProject.querySelector('.projects__image');
    let projectURL = currentProject.querySelector('.projects__description__link');
    let projectRole = currentProject.querySelector('.projects__description__role');
    let projectInfo = currentProject.querySelector('.projects__description__info');
    projectName.textContent = project.name;
    projectImage.src = project.image;
    projectURL.textContent = project.url;
    projectURL.href = project.url;
    projectURL.alt = project.alt;
    projectRole.textContent = project.role;
    projectInfo.textContent = project.info;
    projectsList.appendChild(currentProject);
  });
})();