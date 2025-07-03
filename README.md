# Macachi 2.0 - Sitio Web

## 📋 Descripción
Sitio web de Macachi - tornillos de lujo y accesorios para motocicletas.

## � Archivos principales
```
├── index.html              # Página principal
├── tornillos-de-lujo.html  # Página de producto ejemplo
├── style.css               # Estilos
├── funcionalidades.js      # JavaScript
├── manifest.json           # Para instalar como app
└── Images/                 # Imágenes
```

## � Características importantes
- ✅ Responsive (móvil, tablet, desktop)
- ✅ Se puede instalar como app móvil
- ✅ Integración con WhatsApp
- ✅ Slider automático
- ✅ Efectos hover en productos

## 🔧 Cómo agregar productos
1. Crear archivo HTML del producto (ej: `producto-nuevo.html`)
2. Agregar entrada en `funcionalidades.js`:
   ```javascript
   '#producto-nuevo': 'producto-nuevo.html'
   ```
3. Cambiar el onclick en index.html:
   ```html
   onclick="navigateToProduct('#producto-nuevo')"
   ```

## 📞 Contacto
- WhatsApp: +57 311 444 6963
- Facebook: /Macachitornillos
- Instagram: @macachitornillos

---
© 2025 Macachi SAS
