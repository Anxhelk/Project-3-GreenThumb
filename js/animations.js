// animations.js

document.addEventListener('DOMContentLoaded', () => {
    // JavaScript animations
    const jumbotron = document.querySelector('.jumbotron');
    const jumbotronImage = jumbotron.querySelector('img');
  
    // Fade in animation for the jumbotron
    jumbotron.style.opacity = 0;
    jumbotron.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
      jumbotron.style.opacity = 1;
    }, 100);
  
    // Slide in animation for the jumbotron image
    jumbotronImage.style.transform = 'translateX(100%)';
    jumbotronImage.style.transition = 'transform 1s ease-in-out';
    setTimeout(() => {
      jumbotronImage.style.transform = 'translateX(0)';
    }, 300);
  
    // Additional animations for other elements can be added here
  });
  