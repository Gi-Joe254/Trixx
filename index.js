let menuBar = document.querySelector('.menuBar')
let body = document.querySelector('body')
let contactBtn =document.querySelector('.contactBtn')

contactBtn.addEventListener('click',function(){
    alert('0706571416') 
})

let nav = document.querySelector('.nav')
let navBar = document.querySelector('.navbar')

menuBar.addEventListener('click', function(){    
    nav.style.display == 'block' ? nav.style.display = 'none':nav.style.display = 'block'; 
    document.body.classList.toggle('no-scroll');
})

