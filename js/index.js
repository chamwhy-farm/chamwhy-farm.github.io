const projectHTML = 

(()=>{
    const projectBtn = document.querySelector('#projectBtn');
    const projectMenu = document.querySelector('#projectMenu');
    
    const infoBtn = document.querySelector('#infoBtn');
    const infoMenu = document.querySelector('#wiseBlock');

    const wiseBlock = document.querySelector('#wiseBlock');
    const wiseSaying1 = wiseBlock.childNodes[1];
    const wiseSaying2 = wiseBlock.childNodes[3];



    projectBtn.addEventListener('click', function(){
        window.scrollTo({top: projectMenu.offsetTop-30, behavior: 'smooth'})
    });
    infoBtn.addEventListener('click', function(){
        window.scrollTo({top: infoMenu.offsetTop, behavior: 'smooth'})
    });
    wiseBlock.addEventListener('click', function(){
        console.log(wiseBlock.childNodes);
        if(wiseSaying1.classList.contains("hideSaying")){
            wiseSaying1.classList.remove("hideSaying");
        }else{
            wiseSaying1.classList.add("hideSaying");
        }

        if(wiseSaying2.classList.contains("hideSaying")){
            wiseSaying2.classList.remove("hideSaying");
        }else{
            wiseSaying2.classList.add("hideSaying");
        }

    });

    data.projects.forEach(project => {

    });

})();

