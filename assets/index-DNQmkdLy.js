(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=[{id:"p002",name:"Calculator",url:"tools/calculator/index.html",img:"public/icons/calculator.svg",description:"A personal website showcasing my projects and skills.",category:"Tools"},{id:"p003",name:"Weather",url:"tools/weather/index.html",img:"public/icons/cloud.svg",description:"A personal website showcasing my projects and skills.",category:"Tools"},{id:"p004",name:"Movi3",url:"tools/movie-app/index.html",img:"public/icons/movie.svg",description:"A personal website showcasing my projects and skills.",category:"Mini-Project"}],l=["Tools","Games","Mini-Project","Real-Projects"];l.forEach(o=>{const i=document.getElementById("main-box"),s=document.createElement("section"),r=document.createElement("h2");s.classList.add("box"),s.setAttribute("id",o),r.classList.add("section-title"),r.innerHTML=o,s.appendChild(r),i.appendChild(s)});n.forEach(o=>{const i=document.getElementById(o.category),s=document.createElement("div");s.classList.add("project-box"),s.innerHTML=`
        <div class="project">
            <div class="project-img-box">
                <img src="${o.img}" alt="${o.img}" class="project-img">
            </div>
            <div class="project-text-box">
                <a href="${o.url}" class="project-name">${o.name}</a>
                <p class="project-description">${o.description}</p>
            </div>
        </div>
    `,i.appendChild(s)});
