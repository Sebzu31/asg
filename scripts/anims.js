

 // MAIN //
const TotalHeight = document.body.scrollHeight - window.innerHeight
let progress = 0;
let loadPics = false;

// listeners //

window.addEventListener('resize', ()=>{
     const TotalHeight = document.body.scrollHeight - window.innerHeight
})
window.addEventListener('scroll', ()=>{
     progress = window.pageYOffset / TotalHeight * 100
     draw()
})



// Logika
function draw(){
     if (progress > 0.2){
          const step2 = document.getElementById("lines2")
          step2.style.display = "block";
     }

     if (progress > 25){
          const step3 = document.getElementById("lines3")
          step3.style.display = "block";
     }

     if (progress > 40){
          const step4 = document.getElementById("lines4")
          step4.style.display = "block";
     }

     if (progress > 55){
          if(loadPics === false){
               loadPics = true;
               showImages();
          }
          else{
               return
          }
     }
}



// Funkcje


function showImages(){
     const pics = [...document.querySelectorAll(".pics")]
     let counter = 0
     pics.forEach(element => {
          element.style.animation = `fadeIn 1s ${counter}s both ease-in-out`;
          counter += 0.3;
     });
}


