document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('soleil');
  
    document.addEventListener('click', function() {
      image.classList.add('large');
  
      setTimeout(function() {
        image.classList.add('hidden');
      }, 2000);
    });
  });