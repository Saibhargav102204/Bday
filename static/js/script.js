// Play Music Button Handler
const playBtn = document.getElementById('play-music-btn');
const bgMusic = document.getElementById('bg-music');

if (playBtn && bgMusic) {
    playBtn.addEventListener('click', () => {
        bgMusic.play();
        playBtn.style.display = 'none';
    });
}

// Stop Music When Navigating
function stopMusic() {
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('love-letter-modal');
    const openBtn = document.getElementById('love-letter-btn');
    const closeBtn = document.querySelector('.close-btn');

    if (openBtn && modal && closeBtn) {
        openBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

function revealOnScroll() {
    const zoomTexts = document.querySelectorAll('.zoom-text');
    const scrollImages = document.querySelectorAll('.scroll-img');

    zoomTexts.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = 'scale(1)';
        }
    });

    scrollImages.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0px) scale(1)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function handleStickyScroll() {
    const stickySections = document.querySelectorAll('.sticky-story');

    stickySections.forEach(section => {
        const text = section.querySelector('.sticky-text');
        const img = section.querySelector('.sticky-img');
        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.6) {
            text.style.opacity = 1;
            text.style.transform = 'translateY(0)';
            img.style.opacity = 1;
            img.style.transform = 'scale(1)';
        }
    });
}

window.addEventListener('scroll', handleStickyScroll);
window.addEventListener('load', handleStickyScroll);

function handleParallaxLayers() {
    const layers = document.querySelectorAll('.parallax-layer');
    layers.forEach(layer => {
      const rect = layer.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = rect.top * 0.3; // adjust for speed
        layer.style.transform = `translateY(${offset}px)`;
      }
    }); 
  }
  
  window.addEventListener('scroll', handleParallaxLayers);
  window.addEventListener('load', handleParallaxLayers);
  
