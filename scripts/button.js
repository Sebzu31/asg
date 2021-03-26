const buttonToTop = document.getElementById("goTop");
buttonToTop.addEventListener('click', ()=>{
     window.scrollTo({top: 0, behavior: 'smooth'});
})