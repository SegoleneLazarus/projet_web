document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('soleil');
  
    // Ajoute un gestionnaire d'événements pour le clic sur l'image
    document.addEventListener('click', function() {
      // Agrandit l'image en ajoutant la classe 'large'
      image.classList.add('large');
  
      // Utilise setTimeout pour que l'image disparaisse après 2 secondes
      setTimeout(function() {
        // Ajoute une classe pour cacher l'image
        image.classList.add('hidden');
      }, 2000);
    });
  });