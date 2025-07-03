// ============================================
// FUNCIONALIDADES DE POPUP/MODAL DE PRODUCTOS
// ============================================

// Base de datos de productos con medidas
const productsData = {
    'tornillos-de-lujo': {
        title: 'Tornillos de lujo',
        description: 'Tornillos de lujo para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'https://i.postimg.cc/zf3N4nvd/TORNILLO-DE-LUJO.png',
        sizes: ['M6x20', 'M6x25', 'M6x30', 'M8x20', 'M8x25', 'M8x30', 'M10x20', 'M10x25']
    },
    'tapa-valvulas': {
        title: 'Tapa Válvulas',
        description: 'Tapa válvulas con estilos diferentes para personalizar tu motocicleta.',
        image: 'https://i.postimg.cc/sgx8nMf1/guantes1.jpg',
        sizes: ['Tipo Bala', 'Tipo Proyectil', 'Tipo Tornasol', 'Estándar', 'LED', 'Cromado']
    },
    'lujos-varios': {
        title: 'Lujos varios',
        description: 'Accesorios y lujos para personalizar y mejorar la apariencia de tu motocicleta.',
        image: 'https://i.postimg.cc/DynWxd8X/chaqueta1.jpg',
        sizes: ['Pequeño', 'Mediano', 'Grande', 'Universal', 'Cromado', 'Negro']
    },
    'tuercas': {
        title: 'Tuercas',
        description: 'Tuercas de alta resistencia para motocicletas, ideales para personalizar y asegurar componentes.',
        image: 'https://i.postimg.cc/sfP3jCQM/botas1.jpg',
        sizes: ['M6', 'M8', 'M10', 'M12', 'M14', 'M16', 'M18', 'M20']
    },
    'tornillos-basicos': {
        title: 'Tornillos básicos',
        description: 'Kit completo de tornillos para mantenimiento básico de motocicletas.',
        image: 'https://i.postimg.cc/YCcPnGV1/herramientas1.jpg',
        sizes: ['M5x15', 'M5x20', 'M6x15', 'M6x20', 'M8x15', 'M8x20', 'M10x15', 'M10x20']
    },
    'chapetas': {
        title: 'Chapetas',
        description: 'Chapetas de alta calidad para motocicletas, ideales para personalizar y asegurar componentes.',
        image: 'https://i.postimg.cc/J4sK5wz9/aceite1.jpg',
        sizes: ['5mm', '6mm', '8mm', '10mm', '12mm', '14mm', '16mm', '18mm']
    },
    'tornillos-especiales': {
        title: 'Tornillos especiales internos',
        description: 'Tornillos diseñados para aplicaciones específicas en motocicletas.',
        image: 'https://i.postimg.cc/Kj8GnHLd/soporte1.jpg',
        sizes: ['Pazador M6', 'Pazador M8', 'Portabanda', 'Balancín', 'Especial 1', 'Especial 2']
    },
    'esparragos-pernos': {
        title: 'Esparragos y pernos',
        description: 'Esparragos y pernos de alta calidad para motocicletas.',
        image: 'https://i.postimg.cc/3wKvKnhq/intercom1.jpg',
        sizes: ['M6x25', 'M6x30', 'M8x25', 'M8x30', 'M10x25', 'M10x30', 'M12x25', 'M12x30']
    },
    'tapones-carter': {
        title: 'Tapones de cárter',
        description: 'Tapones de cárter de alta calidad para motocicletas.',
        image: 'https://i.postimg.cc/3x3QzSGq/espejos1.jpg',
        sizes: ['M12x1.25', 'M14x1.5', 'M16x1.5', 'M18x1.5', 'M20x1.5', 'Universal']
    },
    'arandelas-guias': {
        title: 'Arandelas y guías',
        description: 'Arandelas y guías de alta calidad para motocicletas.',
        image: 'https://i.postimg.cc/8c8yQ9bF/luces1.jpg',
        sizes: ['6mm', '8mm', '10mm', '12mm', '14mm', '16mm', '18mm', '20mm']
    },
    'resortes-pines': {
        title: 'Resortes y pines',
        description: 'Resortes y pines de alta calidad para motocicletas.',
        image: 'https://i.postimg.cc/9fYwQ7wF/cadenas1.jpg',
        sizes: ['Pin 3mm', 'Pin 4mm', 'Pin 5mm', 'Resorte S', 'Resorte M', 'Resorte L']
    },
    'fuelles-cauchos': {
        title: 'Fuelles y cauchos',
        description: 'Fuelles y cauchos de alta calidad para motocicletas.',
        image: 'https://i.postimg.cc/8z8yQ9bF/discos1.jpg',
        sizes: ['Pequeño', 'Mediano', 'Grande', 'XL', 'Universal']
    },
    'cauchos-internos': {
        title: 'Cauchos internos',
        description: 'Cauchos internos de alta calidad para motocicletas.',
        image: 'https://i.postimg.cc/3JwQzSGq/manoslibres1.jpg',
        sizes: ['10mm', '12mm', '15mm', '18mm', '20mm', '25mm']
    },
    'partes-acelerador': {
        title: 'Partes de acelerador',
        description: 'Partes de acelerador de alta calidad para motocicletas.',
        image: 'https://i.postimg.cc/8c8yQ9bF/pedales1.jpg',
        sizes: ['Cable 1m', 'Cable 1.2m', 'Cable 1.5m', 'Tensor', 'Mico', 'Kit completo']
    },
    'punteras-defensas': {
        title: 'Punteras-Defensas',
        description: 'Punteras defensa, Platinas y Portaplacas.',
        image: 'https://i.postimg.cc/3JwQzSGq/cubrepuños1.jpg',
        sizes: ['Pequeña', 'Mediana', 'Grande', 'Universal', 'Deportiva']
    },
    'kit-porta-sprocket': {
        title: 'KIT PORTA SPROCKET',
        description: 'Kit de porta sprocket de alta calidad para motocicletas.',
        image: 'https://i.postimg.cc/8z8yQ9bF/candado1.jpg',
        sizes: ['Pulsar 135', 'Pulsar 150', 'Pulsar 180', 'Apache 160', 'Apache 180', 'Boxer']
    },
    'linea-puff': {
        title: 'Línea de puff',
        description: 'Línea de puff de alta calidad para motocicletas.',
        image: 'https://i.postimg.cc/3JwQzSGq/filtro1.jpg',
        sizes: ['Redondo S', 'Redondo M', 'Redondo L', 'Cuadrado S', 'Cuadrado M', 'Cuadrado L']
    },
    'herramientas-orings': {
        title: 'Herramientas y o-Rings',
        description: 'Herramientas y o-Rings de alta calidad.',
        image: 'https://i.postimg.cc/8c8yQ9bF/patinador1.jpg',
        sizes: ['O-Ring 10mm', 'O-Ring 12mm', 'O-Ring 15mm', 'Embudo', 'Copa', 'Kit básico']
    },
    'leva-eje-tornillos': {
        title: 'Leva + eje + tornillos',
        description: 'Leva + eje + tornillos de alta calidad.',
        image: 'https://i.postimg.cc/3JwQzSGq/filtro1.jpg',
        sizes: ['Pulsar 135', 'Pulsar 150', 'Apache 160', 'Apache 180', 'Boxer', 'Universal']
    },
    'tensor-cadena': {
        title: 'Tensor de cadena',
        description: 'Tensor de cadena de alta calidad.',
        image: 'https://i.postimg.cc/8c8yQ9bF/patinador1.jpg',
        sizes: ['Automático', 'Manual', 'Deportivo', 'Reforzado', 'Universal']
    },
    'ejes': {
        title: 'Ejes',
        description: 'Ejes de alta calidad para motocicletas, con diseños modernos y elegantes.',
        image: 'https://i.postimg.cc/3x3QzSGq/espejos1.jpg',
        sizes: ['Eje delantero 15mm', 'Eje delantero 17mm', 'Eje trasero 15mm', 'Eje trasero 17mm', 'Con tuerca']
    },
    'parrillas': {
        title: 'Parrillas',
        description: 'Parrillas resistentes y espaciosas para transportar tus pertenencias en la moto.',
        image: 'https://i.postimg.cc/YCcPnGV1/herramientas1.jpg',
        sizes: ['Pequeña', 'Mediana', 'Grande', 'Lateral', 'Baúl', 'Universal']
    },
    'muletas-patas': {
        title: 'Muletas o patas',
        description: 'Muletas o patas para mayor estabilidad de tu motocicleta.',
        image: 'https://i.postimg.cc/8z8yQ9bF/candado1.jpg',
        sizes: ['Corta', 'Larga', 'Ajustable', 'Reforzada', 'Universal']
    },
    'defensas': {
        title: 'Defensas',
        description: 'Defensas para proteger tu motocicleta.',
        image: 'https://i.postimg.cc/8c8yQ9bF/luces1.jpg',
        sizes: ['Motor', 'Lateral', 'Stunt', 'Con logo', 'Deportiva', 'Universal']
    }
};

// Variables globales
let cart = [];
let selectedSize = null;
let currentProductId = null;

// Función para abrir el modal de producto
function openProductModal(productId) {
    const product = productsData[productId];
    if (!product) {
        return;
    }
    
    currentProductId = productId;
    
    // Llenar la información del modal
    const titleElement = document.getElementById('modalProductTitle');
    const descElement = document.getElementById('modalProductDescription');
    const imageElement = document.getElementById('modalProductImage');
    
    if (titleElement) titleElement.textContent = product.title;
    if (descElement) descElement.textContent = product.description;
    if (imageElement) {
        imageElement.src = product.image;
        imageElement.alt = product.title;
    }
    
    // Llenar las medidas
    const sizesContainer = document.getElementById('sizesContainer');
    if (sizesContainer) {
        sizesContainer.innerHTML = '';
        
        product.sizes.forEach(size => {
            const sizeElement = document.createElement('div');
            sizeElement.className = 'size-option';
            sizeElement.textContent = size;
            sizeElement.onclick = () => selectSize(sizeElement, size);
            sizesContainer.appendChild(sizeElement);
        });
    }
    
    // Resetear cantidad y tamaño seleccionado
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) quantityInput.value = 1;
    selectedSize = null;
    
    // Mostrar el modal
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'block';
        modal.setAttribute('data-product-id', productId);
    }
}

// Función para cerrar el modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
    }
    selectedSize = null;
    currentProductId = null;
}

// Función para seleccionar tamaño
function selectSize(element, size) {
    // Remover selección anterior
    document.querySelectorAll('.size-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Agregar selección actual
    element.classList.add('selected');
    selectedSize = size;
}

// Funciones para controlar la cantidad
function incrementQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        const currentValue = parseInt(quantityInput.value) || 1;
        if (currentValue < 99) {
            quantityInput.value = currentValue + 1;
        }
    }
}

function decrementQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        const currentValue = parseInt(quantityInput.value) || 1;
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    }
}

// Función para añadir al carrito
function addToCart() {
    if (!currentProductId) {
        alert('Error: No hay producto seleccionado');
        return;
    }
    
    if (!selectedSize) {
        alert('Por favor selecciona una medida');
        return;
    }
    
    const product = productsData[currentProductId];
    const quantityInput = document.getElementById('quantity');
    const quantity = parseInt(quantityInput ? quantityInput.value : 1) || 1;
    
    // Crear item del carrito
    const cartItem = {
        id: `${currentProductId}-${selectedSize}`,
        productId: currentProductId,
        title: product.title,
        size: selectedSize,
        quantity: quantity,
        image: product.image
    };
    
    // Verificar si el item ya existe en el carrito
    const existingItemIndex = cart.findIndex(item => item.id === cartItem.id);
    
    if (existingItemIndex > -1) {
        // Si existe, incrementar la cantidad
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Si no existe, agregarlo
        cart.push(cartItem);
    }
    
    // Guardar en localStorage
    try {
        localStorage.setItem('macachi_cart', JSON.stringify(cart));
    } catch (e) {
        console.error('Error guardando en localStorage:', e);
    }
    
    // Mostrar mensaje de confirmación
    showCartNotification();
    
    // Cerrar modal
    closeProductModal();
}

// Función para mostrar notificación de carrito
function showCartNotification() {
    // Crear notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #c53030;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 10000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;
    notification.textContent = '¡Producto añadido al carrito!';
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Eventos para cerrar modal
document.addEventListener('DOMContentLoaded', function() {
    // Cargar carrito desde localStorage
    try {
        const savedCart = localStorage.getItem('macachi_cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
    } catch (e) {
        cart = [];
    }
    
    // Cerrar modal al hacer clic fuera de él
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.onclick = function(event) {
            if (event.target === modal) {
                closeProductModal();
            }
        };
    }
    
    // Manejar tecla ESC para cerrar modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeProductModal();
        }
    });
    
    // Verificar que las funciones estén disponibles globalmente
    window.openProductModal = openProductModal;
    window.closeProductModal = closeProductModal;
    window.selectSize = selectSize;
    window.incrementQuantity = incrementQuantity;
    window.decrementQuantity = decrementQuantity;
    window.addToCart = addToCart;
});
