function openFullscreenImage(imageSrc) {
    // Créer un élément pour l'image en plein écran
    const fullscreenImage = document.createElement('div');
    fullscreenImage.classList.add('fullscreen-image');

    // Créer un élément pour l'image
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Fullscreen Image';

    // Ajouter l'image à l'élément en plein écran
    fullscreenImage.appendChild(img);

    // Ajouter l'élément en plein écran au body
    document.body.appendChild(fullscreenImage);

    // Afficher l'image en plein écran
    fullscreenImage.style.display = 'flex';

    // Fermer l'image en plein écran en cliquant dessus
    fullscreenImage.addEventListener('click', function () {
        fullscreenImage.style.display = 'none';
    });
}

// Récupérer toutes les images et ajouter un événement de clic pour les ouvrir en plein écran
const images = document.querySelectorAll('.image img');
images.forEach(function (img) {
    img.addEventListener('click', function () {
        openFullscreenImage(this.src);
    });
});
