// ==========================================
// 1. LÓGICA DEL SLIDER DE IMÁGENES
// ==========================================
const slides = [
    "img/1.png", "img/2.png", "img/3.png", "img/4.png",
    "img/5.png", "img/6.png", "img/7.png", "img/8.png",
    "img/9.png", "img/10.png", "img/11.png"
];

let currentIndex = 0;
const slideElement = document.getElementById("current-slide");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

if (slideElement && btnPrev && btnNext) {
    function updateSlide() {
        slideElement.style.opacity = 0;
        setTimeout(() => {
            slideElement.src = slides[currentIndex];
            slideElement.style.opacity = 1;
        }, 300); 
    }

    btnNext.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
    });

    btnPrev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide();
    });
}

// ==========================================
// 2. LÓGICA DEL MENÚ FLOTANTE
// ==========================================
const floatingBtn = document.getElementById('floating-btn');
const floatingMenu = document.getElementById('floating-menu');

if (floatingBtn && floatingMenu) {
    floatingBtn.addEventListener('click', () => {
        floatingMenu.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!floatingBtn.contains(event.target) && !floatingMenu.contains(event.target)) {
            floatingMenu.classList.remove('show');
        }
    });
}

// ==========================================
// 3. LOOP DE INSTAGRAM
// ==========================================
const instagramPosts = [
    "https://www.instagram.com/p/DWZiHsVkQ6w/embed",
    "https://www.instagram.com/p/DXNXJkcEeLn/embed",
    "https://www.instagram.com/p/DYsWFgwRiZk/embed",
    "https://www.instagram.com/p/DWYhutAEdvC/embed",
    "https://www.instagram.com/p/DXgKrLujkpe/embed"
];

let currentIgIndex = 0;
const igFrame = document.getElementById("ig-frame");

if (igFrame && instagramPosts.length > 0) {
    // Carga el primer post inmediatamente
    igFrame.src = instagramPosts[0];

    // Cambia el post cada 30 segundos (30000 milisegundos)
    setInterval(() => {
        currentIgIndex = (currentIgIndex + 1) % instagramPosts.length;
        
        // Un pequeño efecto de opacidad para que el cambio no sea tan brusco
        igFrame.style.transition = "opacity 0.5s ease";
        igFrame.style.opacity = 0;
        
        setTimeout(() => {
            igFrame.src = instagramPosts[currentIgIndex];
            igFrame.style.opacity = 1;
        }, 500);

    }, 30000);
}

// ==========================================
// 4. FONDO ANIMADO (PARTICLES.JS)
// ==========================================
if(document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#00ffaa", "#b026ff", "#ffffff"]
        },
        "shape": {
          "type": "circle",
        },
        "opacity": {
          "value": 0.5,
          "random": true,
        },
        "size": {
          "value": 3,
          "random": true,
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#c5c6c7",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 0.8
            }
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    });
}
