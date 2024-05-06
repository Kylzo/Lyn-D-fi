document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image img");
    const fullscreenImage = document.querySelector(".fullscreen-image");
    const fullscreenImg = document.querySelector(".fullscreen-image img");
    const button = document.createElement("button");
    button.textContent = "Go!"
    button.classList.add("fullscreen-button");
    document.body.appendChild(button);

    let usedIndexes = [];

    button.addEventListener("click", function () {
        if (usedIndexes.length === images.length) {
            alert("Toutes les images ont été affichées.");
            return;
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * images.length);
        } while (usedIndexes.includes(randomIndex));

        usedIndexes.push(randomIndex);
        const randomImage = images[randomIndex];
        const src = randomImage.getAttribute("src");
        const alt = randomImage.getAttribute("alt");
        const imageNumber = extractImageNumber(src); // Extraire le numéro de l'image

        fullscreenImg.setAttribute("src", src);
        fullscreenImg.setAttribute("alt", alt);
        fullscreenImage.style.display = "block";

        // Mettre à jour le texte du bouton avec le numéro de l'image
        button.textContent = imageNumber;

        // Réinitialiser le texte du bouton après 10 secondes
        setTimeout(function () {
            button.textContent = "Go!";
        }, 10000); // 10000 millisecondes équivalent à 10 secondes
    });

    fullscreenImage.addEventListener("click", function () {
        fullscreenImage.style.display = "none";
    });

    // Fonction pour extraire le numéro de l'image à partir de son URL
    function extractImageNumber(imageSrc) {
        // Exemple d'URL d'image: "images/image_1.jpg"
        // Nous allons extraire le nombre entre le dernier "_" et le ".jpg"
        const startIndex = imageSrc.lastIndexOf("_") + 1;
        const endIndex = imageSrc.lastIndexOf(".");
        const numberString = imageSrc.substring(startIndex, endIndex);
        return parseInt(numberString); // Convertir en nombre entier
    }
});
