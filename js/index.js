import config from "../config.js";
(()=>{
    const startView = document.querySelector("#startView");
    const chamwhyBtn = document.querySelector("#chamwhy_icon");
    chamwhyBtn.addEventListener("click", ()=>{
        startView.className += " off";
    });
})();

(()=>{
    const body = document.querySelector('#body');
    const projectHtml = document.querySelector('link[rel="import"]').import.querySelector('.projectBox');
    console.log(config);
    for(let i in config.projects){
        projectHtml.querySelector('.projectName').textContext = i.name;
    }
})();