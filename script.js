document.addEventListener("DOMContentLoaded", function() {
    // Sélection de tous les carrousels sur la page
    document.querySelectorAll('.project-carousel').forEach(carousel => {
      const images = carousel.querySelector('.project-carousel-images');
      const prevButton = carousel.querySelector('.project-carousel-prev');
      const nextButton = carousel.querySelector('.project-carousel-next');
      let currentIndex = 0; // Index de l'image actuelle
  
      function updateCarousel() {
        // Assurez-vous que les images sont chargées
        const imageWidth = images.querySelector('img').offsetWidth || images.querySelector('img').naturalWidth;
        // Mise à jour du déplacement du carrousel
        images.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
      }
  
      // Écouteurs pour les boutons Précédent et Suivant
      prevButton.addEventListener('click', () => {
        // Décrémente l'index ou revient à la dernière image si la première est atteinte
        currentIndex = currentIndex > 0 ? currentIndex - 1 : images.children.length - 1;
        updateCarousel();
      });
  
      nextButton.addEventListener('click', () => {
        // Incrémente l'index ou revient à la première image si la dernière est atteinte
        currentIndex = currentIndex < images.children.length - 1 ? currentIndex + 1 : 0;
        updateCarousel();
      });
  
      // Gestion du redimensionnement de la fenêtre pour recalculer la largeur des images
      window.addEventListener('resize', updateCarousel);
  
      // Initialisation du carrousel
      updateCarousel();
    });
  });
  