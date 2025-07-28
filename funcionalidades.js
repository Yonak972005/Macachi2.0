// Funcionalidades del slider
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
    // Ocultar todas las slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Mostrar la slide actual
    if (slides[index]) slides[index].classList.add('active');
    if (indicators[index]) indicators[index].classList.add('active');
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

// Auto-play del slider (opcional)
if (totalSlides > 0) {
    setInterval(() => {
        changeSlide(1);
    }, 5000); // Cambia cada 5 segundos
}

// ============================================
// FUNCIONALIDAD BOTÓN "IR ARRIBA"
// ============================================

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar/ocultar botón "ir arriba"
    window.addEventListener('scroll', function() {
        const btnArriba = document.getElementById('btn-arriba');
        if (btnArriba) {
            // Solo mostrar en móviles (768px o menos)
            if (window.innerWidth <= 768) {
                if (window.pageYOffset > 300) {
                    btnArriba.classList.add('show');
                } else {
                    btnArriba.classList.remove('show');
                }
            } else {
                // En desktop, asegurar que esté oculto
                btnArriba.classList.remove('show');
            }
        }
    });
});

// Función para ir arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==========================
// Acordeón del footer
// ==========================
document.querySelectorAll('.accordion-title').forEach(btn => {
    btn.addEventListener('click', function () {
        const isActive = this.classList.contains('active');
        document.querySelectorAll('.accordion-title').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.accordion-content').forEach(c => {
            c.style.maxHeight = '0px';
            c.classList.remove('open');
        });
        if (!isActive) {
            this.classList.add('active');
            const content = this.nextElementSibling;
            content.classList.add('open');
            const padding = 32;
            content.style.maxHeight = (content.scrollHeight + padding) + "px";
        }
    });
});
