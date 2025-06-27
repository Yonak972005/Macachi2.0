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
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
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
setInterval(() => {
    changeSlide(1);
}, 5000); // Cambia cada 5 segundos

// ============================================
// FUNCIONALIDADES DE PRODUCTOS
// ============================================

// Función para navegar a un producto específico
function navigateToProduct(link) {
    // Aquí puedes definir hacia dónde redirigir
    // Por ahora, abrirá en una nueva pestaña con un enlace de ejemplo
    const productUrl = `producto.html${link}`;
    window.open(productUrl, '_blank');
    
    // Alternativa: Redirigir en la misma pestaña
    // window.location.href = productUrl;
    
    // Para debug: mostrar en consola
    console.log(`Navegando a: ${link}`);
}