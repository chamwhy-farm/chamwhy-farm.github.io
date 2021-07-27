(()=>{
    const projectBtn = document.querySelector('#projectBtn');
    const projectMenu = document.querySelector('#projectMenu');
    const infoBtn = document.querySelector('#infoBtn');
    const infoMenu = document.querySelector('#infoMenu');

    projectBtn.addEventListener('click', function(){
        window.scrollTo({top: projectMenu.offsetTop-30, behavior: 'smooth'})
    });
    infoBtn.addEventListener('click', function(){
        window.scrollTo({top: infoMenu.offsetTop-30, behavior: 'smooth'})
    });
})();