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
// FUNCIONALIDADES GENERALES
// ============================================

// Función para navegación (mantenida para compatibilidad con productos futuros)
function navigateToProduct(productId) {
    // Para productos que no están en el modal, mantener la funcionalidad original
    const productPages = {
        '#tornillos-de-lujo': 'tornillos-de-lujo.html',
        '#tapa-valvulas': 'tapa-valvulas.html',
        '#lujos-varios': 'lujos-varios.html',
        '#tuercas': 'tuercas.html',
        '#tuercas': 'tuercas.html',
        '#tornillos': 'tornillos.html',
        '#chapetas': 'chapetas.html',
        '#tornillos-especiales': 'tornillos-especiales.html',
        '#esparragos-pernos': 'esparragos-pernos.html'
        // Agrega más productos según necesites
    };
    
    // Obtener la URL del producto
    const productUrl = productPages[productId];
    
    if (productUrl) {
        // Redirigir en la misma pestaña
        window.location.href = productUrl;
    } else {
        // Si no existe la página, mostrar mensaje
        console.log(`Página no encontrada para: ${productId}`);
        alert('Página de producto en construcción');
    }
}