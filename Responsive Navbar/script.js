const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('#navbar');

menuBtn.addEventListener('click', function(e){
    if(e.target.name === 'menu-outline'){
        navbar.style.top = '90px'
        e.target.name = 'close'
    }
    else{
        navbar.style.top = '-750%'
        e.target.name ='menu-outline'
    }
})