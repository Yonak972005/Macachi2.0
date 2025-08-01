// ==========================
// Buscador avanzado Macachi
// ==========================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.search-form');
    const input = document.querySelector('.search-input');
    const productCards = Array.from(document.querySelectorAll('.product-card'));
    let externalResultsDiv = document.getElementById('external-search-results');
    // Colocar el div justo después del grid de productos
    if (!externalResultsDiv) {
        externalResultsDiv = document.createElement('div');
        externalResultsDiv.id = 'external-search-results';
        externalResultsDiv.style.display = 'none';
        externalResultsDiv.style.margin = '2rem 0';
        const productsGrid = document.querySelector('.products-grid');
        if (productsGrid && productsGrid.parentNode) {
            if (productsGrid.nextSibling) {
                productsGrid.parentNode.insertBefore(externalResultsDiv, productsGrid.nextSibling);
            } else {
                productsGrid.parentNode.appendChild(externalResultsDiv);
            }
        } else {
            document.body.appendChild(externalResultsDiv);
        }
    }
    // Lista de páginas de productos a buscar (agrega/quita según tus archivos)
    const productPages = [
        'tornillos-de-lujo.html', 'tapa-valvulas.html', 'lujos-varios.html', 'tuercas.html',
        'tornillos.html', 'chapetas.html', 'tornillosespeciales.html', 'esparragos.html',
        'taponescarter.html', 'arandelasguias.html', 'resortes.html', 'fuelles.html',
        'cauchos-internos.html', 'partes-acelerador.html', 'pdpp.html', 'kitsprocket.html',
        'lineadepuff.html', 'herramientas.html', 'leva.html', 'tensordecadena.html',
        'ejes.html', 'parrillas.html', 'patas.html', 'defensas.html'
    ];

    if (form && input) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = input.value.trim().toLowerCase();
            if (!query) {
                // Mostrar todos si la búsqueda está vacía
                productCards.forEach(card => card.style.display = '');
                externalResultsDiv.style.display = 'none';
                externalResultsDiv.innerHTML = '';
                return;
            }
            // Filtrar productos del index
            productCards.forEach(card => {
                const title = card.querySelector('.product-title')?.textContent.toLowerCase() || '';
                const desc = card.querySelector('.product-description')?.textContent.toLowerCase() || '';
                const features = Array.from(card.querySelectorAll('.product-features li')).map(li => li.textContent.toLowerCase()).join(' ');
                if (title.includes(query) || desc.includes(query) || features.includes(query)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
            // Buscar en los otros HTML
            fetchExternalResults(query);
        });
    }

    async function fetchExternalResults(query) {
        // Si la página es local (file://), fetch no funcionará. Solo funcionará en servidor web.
        if (location.protocol === 'file:') {
            externalResultsDiv.style.display = 'block';
            externalResultsDiv.innerHTML = '<div style="color:red">Para ver resultados de otras páginas, abre el sitio en un servidor web.</div>';
            return;
        }
        let results = [];
        await Promise.all(productPages.map(async (page) => {
            try {
                const res = await fetch(page);
                if (!res.ok) return;
                const text = await res.text();
                // Extraer productos de la página
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'text/html');
                const cards = Array.from(doc.querySelectorAll('.product-card'));
                cards.forEach(card => {
                    const title = card.querySelector('.product-title')?.textContent.toLowerCase() || '';
                    const desc = card.querySelector('.product-description')?.textContent.toLowerCase() || '';
                    const features = Array.from(card.querySelectorAll('.product-features li')).map(li => li.textContent.toLowerCase()).join(' ');
                    if (title.includes(query) || desc.includes(query) || features.includes(query)) {
                        // Clonar el nodo y ajustar enlaces relativos
                        const clone = card.cloneNode(true);
                        // Ajustar enlaces de imagen y href
                        const a = clone.querySelector('a');
                        if (a && !a.href.startsWith('http')) a.href = page;
                        const img = clone.querySelector('img');
                        if (img && img.src && !img.src.startsWith('http')) img.src = page.replace(/\.html$/, '/') + img.src;
                        results.push(clone.outerHTML);
                    }
                });
            } catch (err) { /* ignorar errores de fetch */ }
        }));
        if (results.length > 0) {
            externalResultsDiv.style.display = 'block';
            externalResultsDiv.innerHTML =
                '<h3 style="margin-bottom:1rem; text-align:center; font-size:1.1rem; font-weight:500; color:#222;">También te puede interesar:</h3>' +
                '<div class="products-grid">' + results.join('') + '</div>';
        } else {
            externalResultsDiv.style.display = 'none';
            externalResultsDiv.innerHTML = '';
        }
    }
});

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
