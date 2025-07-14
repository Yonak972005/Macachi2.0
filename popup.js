// ============================================
// FUNCIONALIDADES DE POPUP/MODAL DE PRODUCTOS
// ============================================

// Base de datos de productos con medidas

//TORNILLOS DE LUJO
const productsData = {
    // TORNILLOS DE LUJO
    'tornillos-boton5mm': {
        title: 'Tornillos Boton Plano 5MM',
        description: 'Tornillos de boton para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosdelujo/TORNILLO DE LUJO.jpg',
        sizes: ['Dorado', 'Naranja', 'Rojo', 'Fucsia', 'Morado', 'Azul', 'Verde', 'Plateado', 'Negro']
    },
    'tornillos-boton6mm': {
        title: 'Tornillos Boton Plano 6MM',
        description: 'Tornillos de boton para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosdelujo/TORNILLO DE LUJO.jpg',
        sizes: ['Dorado', 'Naranja', 'Rojo', 'Fucsia', 'Morado', 'Azul', 'Verde', 'Plateado', 'Negro']
    },
    'boton-rayitos': {
        title: 'Boton importado rayitos',
        description: 'Tornillos de lujo para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosdelujo/TORNILLORAYITOS.png',
        sizes: ['Rojo', 'Azul', 'Morado', 'Dorado', 'Negro', 'Plateado', 'Verde']
    },
    'tornillo-pesa': {
        title: 'Tornillo tipo pesa o copa',
        description: 'Tornillos de lujo para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosdelujo/TORNILLO PESA.png',
        sizes: ['Dorado', 'Naranja', 'Rojo', 'Fucsia', 'Morado', 'Azul', 'Verde', 'Plateado', 'Negro']
    },
    'tornillo-pesa-sin-rayas': {
        title: 'Tornillo tipo pesa o copa sin rayas',
        description: 'Tornillos de lujo para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosdelujo/TORNILLOPESASINRAYOS.png',
        sizes: ['Dorado', 'Naranja', 'Rojo', 'Fucsia', 'Morado', 'Azul', 'Verde', 'Plateado', 'Negro']
    },
    'tornillo-diamante': {
        title: 'Tornillos diamante',
        description: 'Tornillos de lujo para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosdelujo/TORNILLO DIAMANTE.png',
        sizes: ['Rojo', 'Plateado', 'Azul', 'Verde', 'Dorado', 'Morado', 'Negro']
    },
    'boton-allen': {
        title: 'Boton allen',
        description: 'Tornillos de lujo para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosdelujo/TORNILLO BOTON ALLEN.png',
        sizes: ['Rojo', 'Plateado', 'Azul', 'Verde', 'Dorado', 'Morado', 'Negro', 'Tornasol']
    },
    'tornillos-golosos': {
        title: 'Tornillos golosos',
        description: 'Tornillos de lujo para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosdelujo/TORNILLO GOLOSO.png',
        sizes: ['10 x 5/8"']
    },

    // TAPA VALVULAS
    'Tipo-Bala-Alta': {
        title: 'Tipo Bala Alta 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tapavalvulas/TIPO BALA ALTA.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-proyectil': {
        title: 'Tipo Proyectil 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tapavalvulas/TIPOPREYECTIL.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-bala-con-punta': {
        title: 'Tipo bala con punta 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tapavalvulas/TIPOBALACONPUNTA.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-tornasol': {
        title: 'Tipo tornasol 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tapavalvulas/MOTIVOTORNASOL.png',
        sizes: ['Cilindro', 'Hexagono', 'Proyectil corta', 'Cohete', 'Punta']
    },
    'tipo-calavera': {
        title: 'Tipo calavera 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tapavalvulas/TIPOCALAVERA.png',
        sizes: ['Negro', 'Plateado']
    },
    'tipo-cohete': {
        title: 'Tipo cohete 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tapavalvulas/TIPOCOHETE.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-granada': {
        title: 'Tipo granada 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tapavalvulas/TIPOGRANADA.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-dado': {
        title: 'Tipo dado 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tapavalvulas/TIPODADO.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-fusil': {
        title: 'Tipo fusil 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tapavalvulas/TIPOFUSIL.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-cilindro': {
        title: 'Tipo cilindro 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tapavalvulas/TIPOCILINDRO.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-neon': {
        title: 'Tipo neon 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tapavalvulas/TIPONEON.png',
        sizes: ['Verde', 'Blanco', 'Verde', 'Rosado', 'Trasparente']
    },
    'tipo-seguridad': {
        title: 'Tipo seguridad 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tapavalvulas/TIPOSEGURIDAD.png',
        sizes: ['Negro Seguridad']
    },
    // LUJOS VARIOS
    'Tipo-Bala-Alta': {
        title: 'Tipo Bala Alta 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'https://i.postimg.cc/bN2KjXrr/TIPO-BALA-ALTA.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-proyectil': {
        title: 'Tipo Proyectil 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'https://i.postimg.cc/gcfGhH6w/TIPOPREYECTIL.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-bala-con-punta': {
        title: 'Tipo bala con punta 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'https://i.postimg.cc/YCKTrXL3/TIPOBALACONPUNTA.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-tornasol': {
        title: 'Tipo tornasol 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'https://i.postimg.cc/T3VFprrX/MOTIVOTORNASOL.png',
        sizes: ['Cilindro', 'Hexagono', 'Proyectil corta', 'Cohete', 'Punta']
    },
    'tipo-calavera': {
        title: 'Tipo calavera 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'https://i.postimg.cc/25CJvVwL/TIPOCALAVERA.png',
        sizes: ['Negro', 'Plateado']
    },
    'tipo-cohete': {
        title: 'Tipo cohete 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'https://i.postimg.cc/W4Sy7TWW/TIPOCOHETE.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-granada': {
        title: 'Tipo granada 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'https://i.postimg.cc/pV92y6yb/TIPOGRANADA.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-dado': {
        title: 'Tipo dado 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'https://i.postimg.cc/SsvtwVpc/TIPODADO.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-fusil': {
        title: 'Tipo fusil 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'https://i.postimg.cc/Fzknmc98/TIPOFUSIL.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-cilindro': {
        title: 'Tipo cilindro 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'https://i.postimg.cc/KzzHqwCZ/TIPOCILINDRO.png',
        sizes: ['Verde', 'Plateado', 'Humo', 'Dorado', 'Negro', 'Azul', 'Rojo', 'Morado', 'Tornasol']
    },
    'tipo-neon': {
        title: 'Tipo neon 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'https://i.postimg.cc/vDR2mBTB/TIPONEON.png',
        sizes: ['Verde', 'Blanco', 'Verde', 'Rosado', 'Trasparente']
    },
    'tipo-seguridad': {
        title: 'Tipo seguridad 4UNI',
        description: 'Tapa valvulas para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'https://i.postimg.cc/dtrwjZ85/TIPOSEGURIDAD.png',
        sizes: ['Negro Seguridad']
    }
};

// Variables globales
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
    
    // Usar la nueva clase ShoppingCart si está disponible
    if (typeof cart !== 'undefined' && cart.addItem) {
        const productData = {
            id: currentProductId,
            title: product.title,
            image: product.image
        };
        
        cart.addItem(productData, quantity, selectedSize);
        closeProductModal();
        return;
    }
    
    // Fallback para compatibilidad (código anterior)
    const cartItem = {
        id: `${currentProductId}-${selectedSize}`,
        productId: currentProductId,
        title: product.title,
        size: selectedSize,
        quantity: quantity,
        image: product.image
    };
    
    // Inicializar carrito si no existe
    let localCart = [];
    try {
        const savedCart = localStorage.getItem('macachi_cart');
        localCart = savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
        console.error('Error cargando carrito:', e);
    }
    
    // Verificar si el item ya existe en el carrito
    const existingItemIndex = localCart.findIndex(item => 
        item.productId === currentProductId && item.size === selectedSize
    );
    
    if (existingItemIndex > -1) {
        // Si existe, incrementar la cantidad
        localCart[existingItemIndex].quantity += quantity;
    } else {
        // Si no existe, agregarlo
        localCart.push(cartItem);
    }
    
    // Guardar en localStorage
    try {
        localStorage.setItem('macachi_cart', JSON.stringify(localCart));
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
