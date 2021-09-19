var toTop=document.getElementById('toTop')
if (window.pageYOffset>400){
    toTop.classList.add('active');
}else{
    toTop.classList.remove('active');
}