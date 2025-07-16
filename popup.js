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
    'Lujo-para-botella': {
        title: 'Lujo para botella PAR',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/LUJOPARABOTELLA.png',
        sizes: ['Roja', 'Azul', 'Verde', 'Amarilla', 'Humo', 'Negra', 'Blanca', 'Naranja', 'Fucsia', 'Morado', 'Neon']
    },
    'medias-para-barras': {
        title: 'Medias para barras',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/MEDIASPARABARRA.png',
        sizes: ['Pequeña', 'Mediana', 'Larga']
    },
    'mangos': {
        title: 'Mangos',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/MANGOS.png',
        sizes: ['Univerasal (Color)', 'PROTAPER']
    },
    'tapa-tornillos': {
        title: 'Tapa tornillos',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/TAPATORNILLOS.png',
        sizes: ['Roja', 'Azul', 'Verde', 'Dorado', 'Morado', 'Negra', 'Plateada', 'Tornasol']
    },
    'Cuelleros': {
        title: 'Cuelleros',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/CUELLEROS.png',
        sizes: ['Corto 50cm', 'Mediano 75cm', 'Largo 100cm']
    },
    'reatas-moto': {
        title: 'Reatas moto',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/REATAS.png',
        sizes: ['Único']
    },
    'Cinta-Cinta-rines': {
        title: 'Cinta rines',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/CINTARINES.png',
        sizes: ['Único']
    },
    'slider-para-rueda': {
        title: 'Slider para rueda',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/SLIDER.png',
        sizes: ['Roja', 'Azul', 'Verde', 'Plateado', 'Morado', 'Dorado', 'Naranja', 'Tornasol', 'Negro']
    },
    'slider-bombon': {
        title: 'Slider Bombon',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/SLIDERBONBON.png',
        sizes: ['Roja', 'Azul', 'Verde', 'Plateado', 'Morado', 'Dorado', 'Naranja', 'Tornasol', 'Negro']
    },
    'llavero-elastico-largo': {
        title: 'Llavero elastico largo',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/LLAVEROELASTICOLARGO.png',
        sizes: ['Universal (Color)']
    },
    'tillavero-elastico-corto': {
        title: 'Tipo neon',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/LLAVEROELASTICOCORTO.png',
        sizes: ['Universal (Color)']
    },
    'llavero-manilla': {
        title: 'Llavero manilla',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/LLAVEROMANILLA.png',
        sizes: ['Universal (Color)']
    },
    'llavero-con-motivos': {
        title: 'Llavero con motivos',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/LLAVEROMOTIVOS.png',
        sizes: ['Universal (Diseño)']
    },
    'Cortavientos': {
        title: 'Cortavientos',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/CORTAVIENTOS.png',
        sizes: ['Roja', 'Azul', 'Verde', 'Plateado', 'Morado', 'Dorado', 'Tornasol', 'Negro']
    },
    'pitillo-pitillo-radio': {
        title: 'Pitillo radio',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/PITILLORADIO.png',
        sizes: ['Roja', 'Azul', 'Verde', 'Plateado', 'Morado', 'Dorado', 'Naranja', 'Tornasol', 'Negro']
    },
    'pato-motero': {
        title: 'Pato motero',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/PATOMOTERO.png',
        sizes: ['Único']
    },
    'forro-para-tanque': {
        title: 'Forro para tanque',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'lujos-varios/FORRO.png',
        sizes: ['Único']
    },
    // TUERCAS
    'tuerca-flange': {
        title: 'Tuerca Flange',
        description: 'Tuerca para motocicletas, diseñada para ofrecer seguridad.',
        image: 'tuerca/TUERCAFLANGE.png',
        sizes: ['5MM (100uni)', '6MM (100uni)', '8MM (100uni)', '10MM (50uni)', '12MM (30uni)', '14MM (20uni)']
    },
    'tuerca-con-teflon': {
        title: 'Tuerca con teflon',
        description: 'Tuerca para motocicletas, diseñada para ofrecer seguridad.',
        image: 'tuerca/TUERCACONTEFLON.jpeg',
        sizes: ['4MM (100uni)', '5MM (100uni)', '6MM (100uni)', '8MM (100uni)', '10MM (50uni)', '12MM (30uni)', '14MM (20uni)', '16MM (20uni)']
    },
    'tuerca-especial': {
        title: 'Tuerca especial con seguridad',
        description: 'Tuerca para motocicletas, diseñada para ofrecer seguridad.',
        image: 'tuerca/TUERCAESPECIAL.png',
        sizes: ['6MM (20uni)', '8MM (20uni)', '10MM (20uni)', '12MM (20uni)', '14MM (20uni)', '16MM (20uni)']
    },
    'tuerca-hexagonal': {
        title: 'Tuerca hexagonal',
        description: 'Tuerca para motocicletas, diseñada para ofrecer seguridad.',
        image: 'tuerca/TUERCAHEXAGONAL.png',
        sizes: ['4MM (100uni)', '5MM (100uni)', '6MM (100uni)', '8MM (50uni)', '10MM (30uni)', '12MM (50uni)']
    },
    'tuerca-ciega': {
        title: 'Tuerca ciega',
        description: 'Tuerca para motocicletas, diseñada para ofrecer seguridad.',
        image: 'tuerca/CIEGAS.png',
        sizes: ['6MM (20uni)', '9MM (20uni)', '10MM (20uni)', '12MM (20uni)']
    },
    // TUERCAS
    'tornillo-flange-hexagonal-5mm': {
        title: 'Tornillo Flange hexagonal 5mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/5 MM ROSCA TOTAL LLAVE 8.png',
        sizes: ['5x10MM (50uni)', '5x15MM (50uni)', '5x20MM (50uni)', '5x25MM (50uni)', '5x30MM (50uni)', '5x35MM (50uni)']
    },
    'tornillo-flange-hexagonal-6mm': {
        title: 'Tornillo Flange hexagonal 6mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/6 MM ROSCA TOTAL IRIS LLAVE 10.png',
        sizes: ['6x8MM (50uni)', '6x10MM (50uni)','6x12MM (50uni)', '6x15MM (50uni)', '6x20MM (50uni)', '6x25MM (50uni)', '6x30MM (50uni)', '6x35MM (50uni)', '6x40MM (50uni)', '6x45MM (50uni)', '6x50MM (50uni)', '6x60MM (50uni)']
    },
    'tornillo-flange-hexagonal-8mm': {
        title: 'Tornillo Flange hexagonal 8mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/8 MM ROSCA PARCIAL LLAVE 12.png',
        sizes: ['8x12MM (50uni)', '8x15MM (50uni)', '8x20MM (50uni)', '8x25MM (50uni)', '8x30MM (50uni)', '8x35MM (30uni)', '8x40MM (30uni)', '8x45MM (30uni)', '8x50MM (30uni)', '8x55MM (30uni)', '8x60MM (30uni)', '8x70MM (30uni)', '8x80MM (20uni)', '8x90MM (20uni)', '8x100MM (20uni)', '8x110MM (10uni)', '8x120MM (10uni)']
    },
    'tornillo-flange-hexagonal-10mm': {
        title: 'Tornillo Flange hexagonal 10mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/10 MM R.P. LLAVE 14 1.25.png',
        sizes: ['10x15MM (30uni)', '10x20MM (30uni)', '10x25MM (30uni)', '10x30MM (30uni)', '10x35MM (20uni)', '10x40MM (20uni)', '10x45MM (20uni)', '10x50MM (20uni)', '10x60MM (20uni)', '10x70MM (20uni)', '10x80MM (20uni)', '10x90MM (20uni)', '10x100MM (20uni)', '10x110MM (20uni)', '10x120MM (20uni)']
    },
    'tornillo-flange-ep': {
        title: 'Tornillo Flange EP',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/tornillospor.jpg',
        sizes: ['6x10MM (30uni)', '6x12MM (30uni)', '6x15MM (30uni)', '6x20MM (30uni)', '6x25MM (30uni)', '6x30MM (30uni)', '6x35MM (30uni)', '6x40MM (30uni)', '6x45MM (30uni)', '6x50MM (30uni)', '6x55MM (30uni)', '6x60MM (30uni)', '6x65MM (30uni)', '6x70MM (30uni)', '6x80MM (20uni)', '6x90MM (10uni)', '6x100MM (10uni)']
    },
    'tornillo-paragua': {
        title: 'Tornillo Paragua Phillips 5mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/TORNILLOPARAGUA.png',
        sizes: ['6x10MM (50uni)', '6x15MM (50uni)', '6x20MM (50uni)', '6x25MM (50uni)', '6x30MM (50uni)']
    },
    'tornillo-alleen-ep': {
        title: 'Tornillo Allen EP',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/ALLEN EP CROMADO.png',
        sizes: ['5x10MM (30uni)', '5x15MM (30uni)', '6x10MM (30uni)', '6x15MM (30uni)', '6x20MM (30uni)', '6x25MM (30uni)']
    },
    'tornillo-lenteja': {
        title: 'Tornillo lenteja cromado',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/LENTEJA PHILIPS CROMADO.png',
        sizes: ['5x10MM (50uni)', '5x12MM (50uni)', '5x15MM (50uni)', '5x20MM (50uni)', '5x25MM (50uni)', '5x30MM (50uni)']
    },
    'tornillo-hexagonal-milimetrico-llave-13': {
        title: 'Tornillo hexagonal milimétrico llave 13',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/ROSCA TOTAL 8.8 LLAVE 13.png',
        sizes: ['8x50MM (30uni)', '8x55MM (30uni)', '8x60MM (30uni)', '8x70MM (30uni)', '8x80MM (30uni)']
    },
    'tornillo-hexagonal-milimetrico-llave-12': {
        title: 'Tornillo hexagonal milimétrico llave 12',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/ROSCA TOTAL 10.9 LLAVE 12.png',
        sizes: ['8x15MM (50uni)', '8x20MM (50uni)', '8x25MM (50uni)', '8x30MM (50uni)', '8x35MM (30uni)', '8x40MM (30uni)', '8x45MM (30uni)', '8x50MM (30uni)', '8x55MM (30uni)', '8x60MM (30uni)']
    },
    'tornillo-hexagonal-milimetrico-especial-7mm': {
        title: 'Tornillo hexagonal milimétrico especial 7mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/ESPECIAL 7 MM.png',
        sizes: ['7x15MM (30uni)', '7x20MM (30uni)', '7x25MM (30uni)', '7x30MM (30uni)', '7x35MM (30uni)', '7x40MM (30uni)']
    },
    'tornillo-hexagonal-milimetrico-6mm': {
        title: 'Tornillo hexagonal milimétrico 6mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/HEXAGONAL 6 MM.png',
        sizes: ['6x10MM (50uni)', '6x15MM (50uni)', '6x20MM (50uni)', '6x25MM (50uni)', '6x30MM (50uni)', '6x35MM (30uni)', '6x40MM (30uni)']
    },
    'tornillo-hexagonal-milimetrico-10mm': {
        title: 'Tornillo hexagonal milimétrico 10mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/10 MM ROSCA PARCIAL 10.9 LLAVE 14.png',
        sizes: ['10x20MM (30uni)', '10x25MM (30uni)', '10x30MM (30uni)', '10x35MM (30uni)', '10x40MM (30uni)', '10x45MM (30uni)', '10x50MM (20uni)', '10x55MM (20uni)', '10x60MM (20uni)', '10x70MM (20uni)', '10x80MM (20uni)', '10x90MM (20uni)', '10x100MM (20uni)']
    },
    'tornillo-bristol-5mm': {
        title: 'Tornillo Bristol 5mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/BRISTROL.png',
        sizes: ['5x10MM (50uni)', '5x12MM (50uni)', '5x15MM (50uni)', '5x20MM (50uni)', '5x25MM (50uni)', '5x30MM (50uni)', '5x35MM (50uni)', '5x40MM (50uni)', '5x45MM (50uni)', '5x50MM (50uni)']
    },
    'tornillo-bristol-6mm': {
        title: 'Tornillo Bristol 6mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/BRISTROL.png',
        sizes: ['6x10MM (50uni)', '6x12MM (50uni)', '6x15MM (50uni)', '6x20MM (50uni)', '6x25MM (50uni)', '6x30MM (50uni)', '6x35MM (30uni)', '6x40MM (30uni)', '6x45MM (30uni)', '6x50MM (30uni)', '6x55MM (30uni)', '6x60MM (30uni)', '6x65MM (30uni)', '6x70MM (30uni)', '6x75MM (30uni)']
    },
    'tornillo-bristol-8mm': {
        title: 'Tornillo Bristol 8mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/BRISTROL.png',
        sizes: ['8x10MM (50uni)', '8x15MM (50uni)', '8x20MM (50uni)', '8x25MM (50uni)', '8x30MM (50uni)', '8x35MM (30uni)', '8x40MM (30uni)', '8x45MM (30uni)', '8x50MM (30uni)', '8x55MM (30uni)', '8x60MM (30uni)', '8x70MM (20uni)', '8x80MM (20uni)', '8x90MM (20uni)', '8x100MM (20uni)']
    },
    'tornillo-cilindro-phillips-4mm': {
        title: 'Tornillo Cilindro Phillips 4mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/4 MM ROSCA TOTAL.png',
        sizes: [ '4x10MM (50uni)', '4x12MM (50uni)', '4x15MM (50uni)', '4x20MM (50uni)', '4x25MM (50uni)', '4x30MM (50uni)', '4x35MM (30uni)', '4x40MM (30uni)', '4x45MM (30uni)', '4x50MM (30uni)']
    },
    'tornillo-cilindro-phillips-5mm': {
        title: 'Tornillo Cilindro Phillips 5mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/4 MM ROSCA TOTAL.png',
        sizes: [ '5x10MM (50uni)', '5x12MM (50uni)', '5x15MM (50uni)', '5x20MM (50uni)', '5x25MM (50uni)', '5x30MM (50uni)', '5x35MM (30uni)', '5x40MM (30uni)', '5x45MM (30uni)', '5x50MM (30uni)', '5x60MM (30uni)', '5x70MM (30uni)']
    },
    'tornillo-cilindro-phillips-6mm': {
        title: 'Tornillo Cilindro Phillips 6mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/4 MM ROSCA TOTAL.png',
        sizes: [ '6x10MM (50uni)', '6x12MM (50uni)', '6x15MM (50uni)', '6x20MM (50uni)', '6x25MM (50uni)', '6x30MM (50uni)', '6x35MM (30uni)', '6x40MM (30uni)', '6x45MM (30uni)', '6x50MM (30uni)', '6x60MM (30uni)',  '6x70MM (30uni)']
    },
    'tornillo-conico-avellanado-phillips-4mm': {
        title: 'Tornillo Cónico Avellanado Phillips 4mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/AVELLANADO 4 MM ROSCA TOTAL.png',
        sizes: [ '4x10MM (50uni)', '4x12MM (50uni)', '4x15MM (50uni)', '4x20MM (50uni)']
    },
    'tornillo-conico-avellanado-phillips-5mm': {
        title: 'Tornillo Cónico Avellanado Phillips 5mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.', 
        image: 'tornillos/AVELLANADO 5 MM ROSCA TOTAL.png',
        sizes: [ '5x10MM (50uni)', '5x12MM (50uni)', '5x15MM (50uni)', '5x20MM (50uni)', '5x25MM (50uni)', '5x30MM (50uni)']
    },
    'tornillo-conico-avellanado-phillips-6mm': {
        title: 'Tornillo Cónico Avellanado Phillips 6mm',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/AVELLANADO 6 MM ROSCA TOTAL.png',
        sizes: [ '6x10MM (50uni)', '6x15MM (50uni)', '6x20MM (50uni)', '6x25MM (50uni)', '6x30MM (50uni)']
    },
    'tornillo-goloso-cabeza-lenteja-#8': {
        title: 'Tornillo Goloso Cabeza Lenteja #8',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/GOLOSO LAMINA 8.png',
        sizes: [ '8x1/2MM (50uni)', '8x5/8MM (50uni)', '8x3/4MM (50uni)', '8x1,5MM (50uni)']
    },
    'tornillo-goloso-cabeza-lenteja-#10': {
        title: 'Tornillo Goloso Cabeza Lenteja #10',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/GOLOSO LAMINA 8.png',
        sizes: [ '10x1/2MM (50uni)', '10x5/8MM (50uni)', '10x3/4MM (50uni)', '10x1,5MM (50uni)']
    },
    'tornillo-goloso-cabeza-lenteja-#12': {
        title: 'Tornillo Goloso Cabeza Lenteja #12',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/GOLOSO LAMINA 8.png',
        sizes: [ '12x1/2MM (50uni)', '12x5/8MM (50uni)', '12x3/4MM (50uni)', '12x1,5MM (50uni)']
    },
    'tornillo-goloso-cabeza-lenteja-#14': {
        title: 'Tornillo Goloso Cabeza Lenteja #14',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/GOLOSO LAMINA 8.png',
        sizes: [ '14x5/8MM (50uni)', '14x3/4MM (50uni)', '14x1,5MM (50uni)']
    },
    'tornillo-con-buje': { 
        title: 'Tornillo con Buje 5MM-6MM',
        description: 'Tornillo para motocicletas, diseñado para ofrecer seguridad.',
        image: 'tornillos/TORNILLOBUJE.png',
        sizes: [ '5x12MM (20uni)', '5x15MM (20uni)', '5x20MM (20uni)', '5x25MM (20uni)', '6x13MM (20uni)', '6x15MM (20uni)', '6x19MM (20uni)', '6x25MM (20uni)']
    },
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
        // Si hay muchas medidas, aplicar clase para scroll
        if (product.sizes.length > 8) {
            sizesContainer.classList.add('sizes-scroll');
        } else {
            sizesContainer.classList.remove('sizes-scroll');
        }
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

// --- Estilos para barra de desplazamiento en medidas (inserta en el head si no existe) ---
function injectSizesScrollStyle() {
    if (document.getElementById('sizes-scroll-style')) return;
    const style = document.createElement('style');
    style.id = 'sizes-scroll-style';
    style.textContent = `
        /* Centrado y estilo de la X de cierre del modal de producto */
        #productModal .close {
            position: absolute;
            top: 16px;
            right: 24px;
            font-size: 2rem;
            font-weight: bold;
            color: #c53030;
            cursor: pointer;
            z-index: 10;
            background: none;
            border: none;
            line-height: 1;
            transition: color 0.2s;
        }
        #productModal .close:hover {
            color: #ffffffff;
            scale: 1.1;
        }

        .sizes-scroll {
            max-height: 220px;
            overflow-y: auto;
            padding-right: 6px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
        }
        .sizes-scroll::-webkit-scrollbar {
            width: 8px;
            background: #eee;
            border-radius: 4px;
        }
        .sizes-scroll::-webkit-scrollbar-thumb {
            background: #c53030;
            border-radius: 4px;
        }
        .sizes-scroll .size-option {
            min-width: 0;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
}
injectSizesScrollStyle();

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
