
(()=>{
    const startView = document.querySelector("#startView");
    const chamwhyBtn = document.querySelector("#chamwhy_icon");
    chamwhyBtn.addEventListener("click", ()=>{
        startView.className += " off";
    });
})();