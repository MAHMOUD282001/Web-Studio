let navToggler = document.getElementById('navbar-toggler');

let navCollaps = document.querySelector('.navbar-collaps');

navToggler.addEventListener('click', function(){
    navCollaps.classList.toggle('showNav');
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
