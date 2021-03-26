// TOPBAR//
const button = document.getElementsByTagName("button")[0];
const L = document.getElementById("L");
const R = document.getElementById("R");
const ol = document.getElementById("Menu")
let clicks = 0;
button.addEventListener('click', ()=>{
     clicks+=1
     if(clicks === 1){
          L.style.animation = "ClickL 0.5s 0s ease-in-out both";
          R.style.animation = "ClickR 0.5s 0s ease-in-out both";
          button.style.border="none"
          ol.style.display="flex";
     }

     if(clicks === 2){
          L.style.animation = "ClickL 0.5s 0s ease-in-out both";
          L.style.animationDirection = "reverse";
          R.style.animation = "ClickR 0.5s 0s ease-in-out both ";
          R.style.animationDirection = "Reverse";
          button.style.borderBottom="3px solid #1B7EFF"
          clicks = 0
          ol.style.display="none";
     }
})