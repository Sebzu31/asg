const pictureContainer = document.getElementsByClassName("pictureContainer")[0];
for (let i=1; i<=22; i++){
     const image = document.createElement("img");
     image.src=`./Imgs/GalleryPage/${i}.png`
     image.setAttribute("data-aos", "fade-in");
     image.setAttribute("data-aos-duration", "1000");
     image.setAttribute("data-aos-delay", "0");
     pictureContainer.appendChild(image)
}
