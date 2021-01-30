

const navToggler = document.getElementById('navbar-toggler');

const navCollaps = document.querySelector('.navbar-collaps');

navToggler.addEventListener('click', function(){

    navCollaps.classList.toggle('showNav');

    if(navToggler.firstElementChild.className =="fas fa-bars"){

        navToggler.firstElementChild.className ="fas fa-times";

        document.body.style.overflow = "hidden";

    }
    else{

        navToggler.firstElementChild.className ="fas fa-bars";

        document.body.style.overflow = "visible";

    }

});


let resizeTimer;
window.addEventListener('resize',function(){
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(function(){
        document.body.classList.remove("resize-animation-stopper");},400);
});


const links = document.querySelectorAll('.nav-link');
    links.forEach(function(link){
        link.addEventListener('click', function(){
            document.body.style.overflow = "visible";
            navCollaps.classList.remove('showNav');
            navToggler.firstElementChild.className = "fas fa-bars";
        });
        
    });















let filterBtns = document.querySelectorAll('.btns-group button');

let filterImgs = document.querySelectorAll('.imgs-group div');

filterBtns.forEach((btn)=>{
    btn.addEventListener('click',()=> {
        changeFilterBtn();
        btn.classList.add('btn-active');
        let filterId = btn.id;


        filterImgs.forEach((img)=>{
            if(img.classList.contains(filterId)){
                img.style.display = 'block';
                window.setTimeout(()=>{
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                },0)
            }
            else{
                    img.style.opacity = '0';
                    img.style.transform = 'scale(0)';
                    window.setTimeout(()=>{
                        img.style.display='none';
                    });
            }

        });
    });
});

function changeFilterBtn(){
    filterBtns.forEach((btn)=>{
        btn.classList.remove('btn-active');
    });
}
