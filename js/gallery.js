function activateGallery() {
    //let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo img");

    thumbnails.forEach(function(thumbnail){
        thumbnail.addEventListener("click", function(){
            // Preload large images.
            largeVersion = new Image();
            largeVersion.src = thumbnail.dataset.largeVersion;

            // Set clicked image as main image.
            let newImageSrc = thumbnail.dataset.largeVersion;
            mainImage.setAttribute("src", newImageSrc);
            
            // Change which image is current.
            let currentClass = "current";
            document.querySelector(`.${currentClass}`).classList.remove(currentClass);
            thumbnail.parentNode.classList.add(currentClass);

            // Update image info.
            let galleryInfo = document.querySelector("#gallery-info");
            let title = galleryInfo.querySelector(".title");
            let description = galleryInfo.querySelector(".description");
            title.innerHTML = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;
        });
    });
  }
  