const toTop=document.getElementById('toTop')
window.addEventListener('scroll',function(){
    if(window.pageYOffset > 400){
        toTop.classList.add('active');
    }else{
        toTop.classList.remove('active');
    }
})