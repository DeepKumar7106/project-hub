import projects from "./data.js";

const categories = [
    'Tools',
    'Games',
    'Mini-Project',
    'Real-Projects'
]

categories.forEach((title)=> {
    const main = document.getElementById('main-box');
    const box = document.createElement('section');
    const h2 = document.createElement('h2');
    
    box.classList.add("box");
    box.setAttribute('id',title);

    h2.classList.add("section-title");
    h2.innerHTML = title;

    box.appendChild(h2);
    main.appendChild(box);
});

// render individual projects

projects.forEach((project)=> {
    const container = document.getElementById(project.category);
    const projectBox = document.createElement('div');
    projectBox.classList.add("project-box");


    projectBox.innerHTML = `
        <div class="project">
            <div class="project-img-box">
                <img src="${project.img}" alt="${project.img}" class="project-img">
            </div>
            <div class="project-text-box">
                <a href="${project.url}" class="project-name">${project.name}</a>
                <p class="project-description">${project.description}</p>
            </div>
        </div>
    `;

    container.appendChild(projectBox);
});