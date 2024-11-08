// JavaScript for dynamic campus spots section
document.addEventListener('DOMContentLoaded', () => {
    const spots = document.querySelectorAll('.spot');
    const images = document.querySelectorAll('.spot-img');
  
    spots.forEach((spot, index) => {
      spot.addEventListener('click', () => {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
      });
    });
  });
  