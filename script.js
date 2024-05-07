document.addEventListener("DOMContentLoaded", function () {
    var gallery = document.getElementById("gallery");
    var imageNames = ["image_1.jpg", "image_2.jpg", "image_3.jpg", "image_4.jpg", "image_5.jpg", "image_6.jpg", "image_7.jpg", "image_8.jpg", "image_9.jpg", "image_10.jpg", "image_11.jpg", "image_12.jpg"];

    imageNames.forEach(function (imageName) {
        var imageDiv = document.createElement("div");
        imageDiv.className = "image";

        var image = document.createElement("img");
        image.src = "images/" + imageName;
        image.alt = imageName;
        image.title = imageName;

        image.addEventListener("click", function () {
            // Mettre l'image en plein écran
            fullscreenImg.setAttribute("src", this.src);
            fullscreenImg.setAttribute("alt", this.alt);
            fullscreenImage.style.display = "block";
        });

        imageDiv.appendChild(image);
        gallery.appendChild(imageDiv);
    });

    const images = document.querySelectorAll(".image img");
    const fullscreenImage = document.querySelector(".fullscreen-image");
    const fullscreenImg = document.querySelector(".fullscreen-image img");
    const button = document.createElement("button");
    button.textContent = "Push!";
    button.classList.add("fullscreen-button");
    document.body.appendChild(button);

    let usedIndexes = JSON.parse(localStorage.getItem("usedIndexes")) || [];

    button.addEventListener("click", function () {
        // Vérifie si toutes les images ont été affichées
        if (usedIndexes.length === images.length) {
            // Ajout de la fonctionnalité reset
            const resetButton = document.createElement("button");
            resetButton.textContent = "Reset";
            resetButton.classList.add("reset-button");
            document.body.appendChild(resetButton);                
            alert("Toutes les images ont été tirées, appuyez sur le bouton reset !");

            resetButton.addEventListener("click", function () {
                localStorage.clear(); // Vide le localStorage
                location.reload(); // Actualise la page
            });
            return;
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * images.length);
        } while (usedIndexes.includes(randomIndex));

        usedIndexes.push(randomIndex);
        localStorage.setItem("usedIndexes", JSON.stringify(usedIndexes));

        const randomImage = images[randomIndex];
        const src = randomImage.getAttribute("src");
        const alt = randomImage.getAttribute("alt");
        const imageNumber = extractImageNumber(src); // Extraire le numéro de l'image

        fullscreenImg.setAttribute("src", src);
        fullscreenImg.setAttribute("alt", alt);
        fullscreenImage.style.display = "block";

        button.textContent = imageNumber;

        setTimeout(function () {
            button.textContent = "Push!";
        }, 10000); // 10000 millisecondes équivalent à 10 secondes
    });

    fullscreenImage.addEventListener("click", function () {
        fullscreenImage.style.display = "none";
    });

    function extractImageNumber(imageSrc) {
        const startIndex = imageSrc.lastIndexOf("_") + 1;
        const endIndex = imageSrc.lastIndexOf(".");
        const numberString = imageSrc.substring(startIndex, endIndex);
        return parseInt(numberString);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Au chargement de la page, attendez 3 secondes puis cachez le loader
    setTimeout(function() {
      document.querySelector('.loader').classList.remove('visible');
    }, 3000);
  });
