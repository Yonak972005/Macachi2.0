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
    // CHAPETAS
    'chapeta-tornillo-goloso': {
        title: 'Chapeta Tornillo Goloso',
        description: 'Chapeta para motocicletas, diseñada para ofrecer seguridad.',
        image: 'chapetas/CHAPETA TORNILLO GOLOSO.png',
        sizes: ['N8 Corta (30uni)', 'N8 Larga (30uni)', 'N10 Corta (30uni)', 'N10 Larga (30uni)', 'N12 Corta (30uni)', 'N12 Larga (30uni)']
    },
    'chapeta-especial': {
        title: 'Chapeta Especial',
        description: 'Chapeta para motocicletas, diseñada para ofrecer seguridad.',
        image: 'chapetas/CHAPETAESPECIAL.png',
        sizes: ['N5 Corta (20uni)', 'N5 Larga (20uni)', 'N6 Corta (20uni)', 'N6 Larga (20uni)', 'Chapeta Farola Honda (20uni)']
    },
    'chapeta-milimetrica': {
        title: 'Chapeta Milimétrica',
        description: 'Chapeta para motocicletas, diseñada para ofrecer seguridad.',
        image: 'chapetas/CHAPETAMILIMETRICA.png',
        sizes: ['N4 Corta (20uni)', 'N5 Corta (20uni)', 'N5 Larga (20uni)', 'N6 Corta (20uni)', 'N6 Larga (20uni)', 'N8 Corta (20uni)', 'N8 Larga (20uni)']
    },
    // TORNILLOS ESPECIALES
    'tornillo-cadenilla-tvs': {
        title: 'Tornillo Cadenilla TVS',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/TORNILLOCADENILLA.png',
        sizes: ['Único (5uni)']
    },
    'tornillo-manigueta': {
        title: 'Tornillo Manigueta',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/TORNILLOMANIGUETA.png',
        sizes: ['5MM BOXER-DISCOVER (10uni)', '5MM Pulsar izq (10uni)', '6MM Pulsar der (10uni)', 'Fz-Pulsar (10uni)', '6MM DT (10uni)', '5MM TT (10uni)', 'GN 125 (10uni)','6MM TS (10uni)', '6MM Honda izq (10uni)', '6MM Evo der (10uni)', '6MM NKD (10uni)', '5MM AX100 (10uni)', '6MM Eco, C90, XL 10 (10uni)', 'yamaha (10uni)', '6MM Rx (10uni)']
    },
    'tornillo-bamba-de-lubricacion': {
        title: 'Tornillo Bamba de Lubricación',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/TORNILLOLUBRICACION.png',
        sizes: ['BOXER 8MM (10uni)', 'AKT 10MM (10uni)']
    },
    'tornillo-tapa': {
        title: 'Tornillo Tapa',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/TORNILLOTAPAAKT.png',
        sizes: ['CR4 5X20 (10uni)']
    },
    'tornillo-mordaza': {
        title: 'Tornillo Mordaza',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/TORNILLOS PASADOR MORDAZA.png',
        sizes: ['Universal (5uni)', 'Xtz-best (5uni)', 'Akt Universal (5uni)', 'Pulsar 125 (5uni)', 'TT (5uni)', 'NKD Corto (5uni)', 'Honda universal (5uni)','Invicta (5uni)', 'Xt Xm (5uni)', 'NKD Largo (5uni)', 'Pulsar ns, FZ 180 (5uni)', 'NS Nueva (5uni)', 'NS Vieja (5uni)', 'TS (5uni)', 'YBR Libero crypton (5uni)', 'NS Vieja (5uni)', 'RX 115 (5uni)', 'NMax (5uni)']
    },
    'tornillo-portabanda': {
        title: 'Tornillo Portabanda',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/TORNILLOPORTABANDA.png',
        sizes: ['N8 Corto (20uni)', 'N8 Medio (20uni)', 'N8 Largo (20uni)', '10x35 boxer (20uni)']
    },
    'tornillo-pata-lateral': {
        title: 'Tornillo Pata Lateral',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/TORNILLOPATALATERAL.png',
        sizes: ['N10 Corto (20uni)', 'N10 Largo (20uni)', '10 A 8 (20uni)']
    },
    'grapa-para-defensa': {
        title: 'Grapa para defensa',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/GUIAPARADEFENSA.png',
        sizes: ['8MM X 2 1/4" X 1 1/2"(5uni)', '8MM X 2 1/4" X 2" (6uni)',]
    },
    'tornillo-pasante-motor': {
        title: 'Tornillo Pasante Motor',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/TORNILLOPASANTEMOTOR.png',
        sizes: [ '8x130 (5uni)', '8x140 (5uni)', '8x150 (5uni)', '8x160 (5uni)', '8x170 (5uni)', '8x180 (5uni)', '8x190 (5uni)', '8x200 (5uni)', '8x210 (5uni)', '8x220 (5uni)']
    },
    'tornillo-balancin': {
        title: 'Tornillo Balancín',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/TORNILLOBALANCIN.png',
        sizes: ['Auteco Eco 100 (10uni)','Auteco Deluxe (10uni)','Auteco C70 C90 (10uni)','Akt (10uni)']
    },
    'tornillo-barra-telescopica': {
        title: 'Tornillo Barra Telescópica',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/TORNILLOBARRATELESCOPICA.png',
        sizes: ['Universal (10uni)','AKT (10uni)']
    },
    'adaptador-de-espejo': {
        title: 'Adaptador de Espejo',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/ADAPTADORDEESPEJO.png',
        sizes: [
            '10 der / 10 izq (5uni)',
            '10 izq / 10 der (5uni)',
            '10 der / 10 der (5uni)',
            '8 der / 7/16 rf (5uni)',
            '10 der / 7/16 rf (5uni)',
            '8 der / 8 der (5uni)',
            '8 izq / 8 izq (5uni)',
            '10 der / 8 izq (5uni)',
            '10 izq / 8 der (5uni)',
            '8 izq / 10 der (5uni)',
            '8 izq / 7/16rf (5uni)',
            '8 izq / 7/16ro (5uni)',
            '8 der / 10 der (5uni)',
            '10 der / 8 der (5uni)',
            '10 izq / 7/16 ro (5uni)',
            '8 der  /10 izq (5uni)',
            '8 der / 7/16 ro (5uni)',
            '8 izq / 8 der (5uni)',
            '8 der / 8 izq (5uni)',
            '10izq / 10izq (5uni)',
            '10 izq / 7/16 rf (5uni)',
            '10 der / 7/16 ro (5uni)'
        ]
    },
    'tuerca-de-cigueñal-derecha': {
        title: 'Tuerca de Cigueñal Derecha',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/TUERCACIGUEÑAL.png',
        sizes: ['Pulsar derecha (20uni)']
    },
    'tuerca-para-freno': {
        title: 'Tuerca para varilla de Freno',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/TUERCACIGUEÑAL1.png',
        sizes: ['5MM (20uni)', '6MM (20uni)', '7MM (20uni)', '8MM (20uni)']
    },
    'bulon-varilla-de-freno': {
        title: 'Bulon varilla de Freno',
        description: 'Lujos para motocicletas, diseñados para ofrecer un estilo elegante.',
        image: 'tornillosespeciales/BULLONFRENO.png',
        sizes: ['5MM (10uni)', '6MM (10uni)', '7MM (10uni)', '8MM (10uni)']
    },
    'kit-varilla-de-freno': {
        title: 'Kit varilla de Freno',
        description: 'Esparragos para motocicletas.',
        image: 'tornillosespeciales/KITVARILLAFRENO.png',
        sizes: ['5MM (5uni)', '6MM (5uni)', '7MM (5uni)', '8MM (5uni)']
    },
    // TORNILLOS ESPECIALES
    'esparragos-combinados': {
        title: 'Esparragos Combinados',
        description: 'Esparragos para motocicletas.',
        image: 'esparragos/ESPARRAGOS10.png',
        sizes: [
            '1/4 X 6 X 40 (5uni)',
            '1/4 X 6 X 50 (5uni)',
            '1/4 X 6 X 60 (5uni)',
            '8 X 3/8 X 40 (5uni)',
            '18 X 3/8 X 50 (5uni)',
            '8 X 3/8 X 60 (5uni)',
            '8 X 7/16 X 40 (5uni)',
            '8 X 7/16 X 50 (5uni)',
            '8 X 7/16 X 60 (5uni)',
            '8 X 1/2 X 40 (5uni)',
            '8 X 1/2 X 50 (5uni)',
            '8 X 1/2 X 60 (5uni)',
            '6 X 8 X 40 (5uni)',
            '6 X 8 X 45 (5uni)',
            '6 X 8 X 50 (5uni)',
            '6 X 8 X 60 (5uni)'
        ]
    },
    'esparragos-parejos': {
        title: 'Esparragos parejos',
        description: 'Esparragos para motocicletas.',
        image: 'esparragos/ESPARRAGOS8.png',
        sizes: [
            '6 X 30 (10uni)',
            '6 X 35 (10uni)',
            '6 X 40 (10uni)',
            '6 X 45 (10uni)',
            '6 X 50 (10uni)',
            '6 X 60 (10uni)',
            '6 X 60 (10uni)',
            '6 X 80 (10uni)',
            '6 X130 (5uni)',
            '8 X 30 (10uni)',
            '8 X 35 (10uni)',
            '8 X 40 (10uni)',
            '8 X 45 (10uni)',
            '8 X 50 (10uni)',
            '8 X 60 (10uni)',
            '8 X 70 (10uni)',
            '8 X 80 (10uni)',
            '8 X 140 (5uni)',
            '10 X 30 (5uni)',
            '10 X 35 (5uni)',
            '10 X 40 (5uni)',
            '10 X 45 (5uni)',
            '10 X 50 (5uni)',
            '10 X 60 (5uni)',
            '10 X 70 (5uni)',
            '10 X 80 (5uni)'
        ]
    },
    'perno-moto-carro': {
        title: 'Perno moto carro',
        description: 'Perno moto carro.',
        image: 'esparragos/PERNOMOTOCARRO.png',
        sizes: ['10x30 (20uni)', '10MM (20uni)']
    },
    'perno-moto-carguero': {
        title: 'Perno moto carguero',
        description: 'Perno moto carguero.',
        image: 'esparragos/ESPARRAGOMOTOCARGUERO.png',
        sizes: ['12x32 (20uni)', '12MM (20uni)']
    },
    //ARRANDELASGUIAS
    'guias-cilindro': {
        title: 'Guías Cilindro',
        description: 'Guías cilindro para motocicletas.',
        image: 'arandelas/GUIACILINDRO.png',
        sizes: ['UNICO (10uni)']
    },
    'uniones-cadena': {
        title: 'Uniones de Cadena',
        description: 'Uniones para cadenas de motocicletas.',
        image: 'arandelas/UNIONES DE CADENA.png',
        sizes: ['420H (10uni)', '428H (10uni)', '520H (10uni)']
    },
    'arandelas-piñon': {
        title: 'Arandelas Piñón',
        description: 'Arandelas para piñones de motocicletas.',
        image: 'arandelas/ARANDELASPIÑON.png',
        sizes: ['DT-AX (10uni)', 'BOXER (10uni)', 'YBR (10uni)', 'FZ (10uni)', 'GN125 (10uni)', 'HAYATE (10uni)', 'APACHE (10uni)', 'XT 660 (10uni)', 'SZR (10uni)', 'XL 125 (10uni)', 'ECO (10uni)',]
    },
    'arandelas-amplias': {
        title: 'Arandelas Amplias',
        description: 'Arandelas amplias para motocicletas.',
        image: 'arandelas/ARANDELASAMPLIAS.png',
        sizes: ['AA5 5MM (100uni)', 'AA6 6MM (100uni)', 'AA8 8MM(100uni)', 'AA10 10MM(100uni)', 'AA12 12MM(100uni)']
    },
    'arandelas-milimetricas': {
        title: 'Arandelas Milimétricas AP',
        description: 'Arandelas milimétricas para motocicletas.',
        image: 'arandelas/ARANDELASMILIMETRICAS.png',
        sizes: ['4MM (100uni)', '5MM (100uni)', '6MM (100uni)', '8MM (100uni)', '10MM (50uni)', '12MM (30uni)', '14MM (30uni)', '16MM (20uni)', '18MM (20uni)', '20MM (20uni)', '22MM (20uni)']
    },
    'arandelas-presion': {
        title: 'Arandelas de Presión W',
        description: 'Arandelas de presión para motocicletas.',
        image: 'arandelas/ARANDELAPRESION.png',
        sizes: ['5MM (100uni)', '6MM (100uni)', '8MM (100uni)', '10MM (50uni)', '12MM (30uni)', '14MM (20uni)']
    },
    'arandelas-cobre': {
        title: 'Arandelas de Cobre AC',
        description: 'Arandelas de cobre para motocicletas.',
        image: 'arandelas/ARANDELACOBRE.png',
        sizes: ['5MM (10uni)', '6MM (10uni)', '8MM (10uni)', '10MM (10uni)', '12MM (10uni)', '14MM (10uni)', '16MM (10uni)', '18MM (10uni)', '20MM (10uni)', '22MM (10uni)', '24MM (10uni)',
            '1/4" (10uni)', '5/16" (10uni)', '3/8" (10uni)', '7/16" (10uni)', '1/2" (10uni)', '9/16" (10uni)', '5/8" (10uni)', '3/4" (10uni)', '7/8" (10uni)', '1" (10uni)'
        ]
    },
    'arandelas-de-aluminio': {
        title: 'Arandelas de Aluminio AL',
        description: 'Arandelas de aluminio para motocicletas.',
        image: 'arandelas/ARANDELASDEALUMINIO.png',
        sizes: ['6MM (100uni)', '8MM (100uni)', '10MM (50uni)', '12MM (30uni)', '14MM (30uni)']
    },
    'arandelas-balancin': {
        title: 'Arandelas de Balancín',
        description: 'Arandelas de balancín para motocicletas.',
        image: 'arandelas/ARANDELASBALANCIN.png',
        sizes: ['BALAN (10uni)']
    },
    //RESORTES
    'pata-lateral-boxer': {
        title: 'Resorte Pata lateral Boxer',
        description: 'Resorte Pata Boxer Pulsar Win Discover Akt Eco.',
        image: 'resortes/RPB.png',
        sizes: ['Unica']
    },
    'pata-lateral-gn-gs-gixxer': {
        title: 'Resorte Pata Y Gato Gn Gs 125 Dr 200, Gixxer, Rtx150',
        description: 'Resorte Pata lateral GN125/GS125/Gixxer/DR200/RTX150.',
        image: 'resortes/RPGN.png',
        sizes: ['Unica']
    },
    'pata-lateral-akt-nkd-evo-cbr-kimko-vivas-cbz': {
        title: 'Resorte Pata Akt 125, Nkd Sl, Evo, Cbr, Kimko, Vivas, Cbz',
        description: 'Resorte Pata Akt 125, Nkd Sl, Evo, Cbr, Kimko, Vivas, Cbz',
        image: 'resortes/RPSL.png',
        sizes: ['Unica']
    },
    'pata-lateral-Fz-Ax-Rx-Libero-Cripton-Ts-C90': {
        title: 'Resorte Pata Libero Fz Ax Rx Libero Cripton Ts C90',
        description: 'Resorte Pata Libero Fz Ax Rx Libero Cripton Ts C90',
        image: 'resortes/RPFZ.png',
        sizes: ['Unica']
    },
    'pata-lateral-Szr-150-Xtz-125-150-Dr-Xr-Enduro': {
        title: 'Resorte Pata Szr 150, Xtz 125, 150 Dr, Xr, Enduro',
        description: 'Resorte Pata Szr 150, Xtz 125, 150 Dr, Xr, Enduro.',
        image: 'resortes/RPSZR.png',
        sizes: ['Unica']
    },
    'pata-lateral-dt': {
        title: 'Resorte pata lateral Dt',
        description: 'Resorte pata lateral Dt para motocicletas.',
        image: 'resortes/RPDT.png',
        sizes: ['Unica']
    },
    'pedal-freno-discover': {
        title: 'Resorte Pedal Freno Discover, Pulsar 135 - 180',
        description: 'Resorte Pedal Freno Discover, Pulsar 135 - 180.',
        image: 'resortes/RPFD.png',
        sizes: ['Unica']
    },
    'pedal-freno-honda': {
        title: 'Resorte Pedal Honda Cbz Cbf Eco',
        description: 'Resorte Pedal Honda Cbz Cbf Eco.',
        image: 'resortes/RPFH.png',
        sizes: ['Unica']
    },
    'pedal-freno-evo': {
        title: 'Resorte Pedal Freno Evo, Ne 125 - 150, Akt 110, Tvs 160',
        description: 'Resorte Pedal Freno Evo, Ne 125 - 150, Akt 110, Tvs 160.',
        image: 'resortes/RPFE.png',
        sizes: ['Unica']
    },
    'pedal-freno-fz': {
        title: 'Resorte Pedal Freno  Fz 16, Szr, Fazer',
        description: 'Resorte Pedal Freno  Fz 16, Szr, Fazer.',
        image: 'resortes/RPFFZ.png',
        sizes: ['Unica']
    },
    'pedal-freno-akt125': {
        title: 'Resorte Pedal Freno Akt 125, Nkd Sl',
        description: 'Resorte Pedal Freno Akt 125, Nkd Sl.',
        image: 'resortes/RPFSL.png',
        sizes: ['Unica']
    },
    'pedal-freno-gn': {
        title: 'Resorte Pedal Freno Gn, Gs, Evo 125 1-2',
        description: 'Resorte Pedal Freno Gn, Gs, Evo 125 1-2.',
        image: 'resortes/RPFGN.png',
        sizes: ['Unica']
    },
    'pedal-freno-rpfb': {
        title: 'Resorte Pedal Freno Boxer Win Platino',
        description: 'Resorte Pedal Freno Boxer Win Platino.',
        image: 'resortes/RPFB.png',
        sizes: ['Unica']
    },
    'pedal-freno-ybr': {
        title: 'Resorte Pedal Freno Ybr Libero Crypton',
        description: 'Resorte Pedal Freno Ybr Libero Crypton.',
        image: 'resortes/RPFYBR.png',
        sizes: ['Unica']
    },
    'pedal-freno-eco': {
        title: 'Resorte Pedal Freno Ax 100, 115',
        description: 'Resorte Pedal Freno Ax 100, 115.',
        image: 'resortes/RPFAX.png',
        sizes: ['Unica']
    },
    'resorte-especial-rlv': {
        title: 'Resorte Especial larga vida',
        description: 'Resorte Especial larga vida.',
        image: 'resortes/RLV.png',
        sizes: ['Unica']
    },
    'resorte-especial-rae': {
        title: 'Resorte Para Varilla Freno',
        description: 'Resorte Para Varilla Freno.',
        image: 'resortes/RAE.png',
        sizes: ['Unica']
    },
    'resorte-especial-rvf': {
        title: 'Resorte Pera Freno Universal',
        description: 'Resorte Pera Freno Universal.',
        image: 'resortes/RVF.png',
        sizes: ['Unica']
    },
    'resorte-especial-rp': {
        title: 'Resorte Pedal Freno Gixxer',
        description: 'Resorte Pedal Freno Gixxer.',
        image: 'resortes/RP.png',
        sizes: ['Unica']
    },
    'pedal-especial-rlc': {
        title: 'Resorte Leva Clutch Pulsar 180',
        description: 'Resorte Leva Clutch Pulsar 180.',
        image: 'resortes/RLC.png',
        sizes: ['Unica']
    },
    'pedal-especial-rga': {
        title: 'Resorte Gato Central Auteco',
        description: 'Resorte Gato Central Auteco.',
        image: 'resortes/RGA.png',
        sizes: ['Unica']
    },
    'pedal-especial-cg': {
        title: 'Resorte Gato Akt Sl,Nkd',
        description: 'Resorte Gato Akt Sl,Nkd.',
        image: 'resortes/RGSL.png',
        sizes: ['Unica']
    },
    'pin-de-ojo': {
        title: 'Pin de ojo',
        description: 'Pin de ojo.',
        image: 'resortes/PINDEOJO.png',
        sizes: ['Primario (20uni)','Araña clutch (20uni)','Piñon loco y salida (20uni)','Crank Yamaha (20uni)','Eje crack interno (20uni)','Campana Honda (10uni)','Campana akt (10uni)']
    },
    'pin-medialuna': {
        title: 'Pin medialuna',
        description: 'Pin medialuna.',
        image: 'resortes/PINMEDIALUNA.png',
        sizes: ['Agujas carburador (20uni)','Automatico Fz(20uni)','Automatico Suzuki (20uni)','Crank DT (20uni)','Selectro Cambios RX (20uni)','Pata RX (10uni)','Pata DT (10uni)']
    },
    'pines-telescopicos': {
        title: 'Pin telescópico',
        description: 'Pin telescópico.',
        image: 'resortes/PINTELESCOPIO.png',
        sizes: ['FZ (20uni)','Pulsar (20uni)']
    },
    'chavetta': {
        title: 'Chavetta',
        description: 'Chavetta.',
        image: 'resortes/CHAVETTA.png',
        sizes: ['1/16 x 1/2" (50uni)','1/16 x 1" (50uni)','3/32 x 1" (50uni)','1/8 x 1" (50uni)']
    },
    'pin-rr': {
        title: 'Pin RR',
        description: 'Pin RR.',
        image: 'resortes/PINRR.png',
        sizes: ['Plano (10uni)','Doblado (10uni)']
    },
    'pin-plastico': {
        title: 'Pin plástico',
        description: 'Pin plástico.',
        image: 'resortes/PINPLASTICO.png',
        sizes: ['Pequeño (20uni)','Mediano (20uni)','Grande (20uni)']
    },
    //FUELLOS Y CAUCHOS
    'fuelle-delantero': {
        title: 'Fuelle delantero PAR',
        description: 'Fuelle delantero para motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/FUELLES.png',
        sizes: ['BROSS', 'DT', 'AKT', 'PULSAR/GN', 'AX', 'BOXER', 'DISCOVER', 'BWS', 'ENDURO']
    },
    'caucho-pasaguayas': {
        title: 'Caucho pasaguayas 5uni',
        description: 'Caucho pasaguayas para motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/CAUCHOPASAGUAYAS.png',
        sizes: ['Roja', 'Azul', 'Negro', 'Gris', 'Naranja', 'Amarillo', 'Verde', 'Morado', 'Rosado', 'Verde Neon']
    },
    'caucho-para-crank': {
        title: 'Caucho para crank 5uni',
        description: 'Caucho para crank de motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/CAUCHOPARACRANK.png',
        sizes: ['Roja', 'Azul', 'Negro', 'Gris', 'Naranja', 'Amarillo', 'Verde', 'Morado', 'Rosado', 'Verde Neon']
    },
    'caucho-para-palanca-cambio': {
        title: 'Caucho para palanca de cambio 5uni',
        description: 'Caucho para palanca de cambio de motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/CAUCHOPARAPALANCACAMBIO.png',
        sizes: ['Roja', 'Azul', 'Negro', 'Gris', 'Naranja', 'Amarillo', 'Verde', 'Morado', 'Rosado', 'Verde Neon']
    },
    'caucho-para-palanca-cambio-curvo': {
        title: 'Caucho para palanca de cambios curvo 5uni',
        description: 'Caucho para palanca de cambios curvo de motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/CAUCHOPARAPALANCACAMBIOCURVO.png',
        sizes: ['Roja', 'Azul', 'Negro', 'Gris', 'Naranja', 'Amarillo', 'Verde', 'Morado', 'Rosado', 'Verde Neon']
    },
    'caucho-para-manigueta-colores': {
        title: 'Caucho para manigueta colores 5uni',
        description: 'Caucho para manigueta de motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/CAUCHOMANIGUETA.png',
        sizes: ['Roja', 'Azul', 'Negro', 'Gris', 'Naranja', 'Amarillo', 'Verde', 'Morado', 'Rosado', 'Verde Neon']
    },
    'caucho-para-manigueta-liso': {
        title: 'Caucho para manigueta liso 5uni',
        description: 'Caucho para manigueta de motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/CAUCHOMANIGUETA.png',
        sizes: ['Roja', 'Azul', 'Negro', 'Gris', 'Naranja', 'Amarillo', 'Verde', 'Morado', 'Rosado', 'Verde Neon']
    },
    'caucho-protector-palanca': {
        title: 'Caucho protector de palanca 5uni',
        description: 'Caucho protector de palanca de motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/CAUCHOPROTECTORDEPALANCA.png',
        sizes: ['Roja', 'Azul', 'Negro', 'Gris', 'Naranja', 'Amarillo', 'Verde', 'Morado', 'Rosado', 'Verde Neon']
    },
    'caucho-protector': {
        title: 'Caucho protector 5uni',
        description: 'Caucho protector de motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/CAUCHOPROTECTOR.png',
        sizes: ['Roja', 'Azul', 'Negro', 'Gris', 'Naranja', 'Amarillo', 'Verde', 'Morado', 'Rosado', 'Verde Neon']
    },
    'caucho-pasaguayas-2': {
        title: 'Caucho pasaguayas 5uni',
        description: 'Caucho pasaguayas 2 de motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/CAUCHOPASAGUAYAS2.png',
        sizes: ['Mediano', 'Doble NKD 125']
    },
    'correas-bateria': {
        title: 'Correas de batería 5uni',
        description: 'Correas de batería de motocicletas, diseñadas para ofrecer un estilo elegante.',
        image: 'cauchos/CORREASBATERIA.png',
        sizes: ['14CM', '18CM', '21CM']
    },
    'caucho-reposapies': {
        title: 'Caucho reposapies delantero PAR',
        description: 'Caucho reposapies de motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/CAUCHOREPOSAPIES.png',
        sizes: ['Universal', 'Akt 125', 'Akt 110', 'GS 125', 'Pulsar', 'Boxer', 'Eco', 'Libero', 'AX 100 115 COLORES']
    },
    'caucho-reposapies-traseros': {
        title: 'Caucho reposapies traseros PAR',
        description: 'Caucho reposapies traseros de motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/REPOSAPIESTRASERO.png',
        sizes: ['Negro']
    },
    'deslizador-cadena': {
        title: 'Deslizador de cadena',
        description: 'Deslizador de cadena de motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/DESLIZADOR CADENA.png',
        sizes: ['AKT Unidad']
    },
    'guarda-polvos': {
        title: 'Guarda polvos',
        description: 'Guarda polvos de motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/GUARDAPOLVOS.png',
        sizes: ['En pasta', 'Sin marca de moto', 'Marca de moto', 'Refuerzo de acero', 'Suzuki kit del/tras']
    },
    'pulpos': {
        title: 'Pulpos',
        description: 'Pulpos de motocicletas, diseñado para ofrecer un estilo elegante.',
        image: 'cauchos/PULPOS.png',
        sizes: ['Malla tejida', 'Malla caucho', 'Plano caucho', 'Redondo caucho']
    },
    //FUELLOS Y CAUCHOS
    'caucho-tapa-lateral': {
        title: 'Caucho tapa lateral',
        description: 'Cauchos internos para motocicletas, diseñados para ofrecer seguridad.',
        image: 'cauchosinternos/CAUCHOTAPALATERAL.png',
        sizes: ['GN,AX,AKT (50uni)', 'DT,RX (50uni)', 'Discover, pulsar (50uni)', 'NS,Exosto (50uni)', 'Boxer,Pulsar,Discover (50uni)', 'Guarda barros (50uni)', 'Ovalado, Akt corto (50uni)', 'Akt largo 125,Tt,Xl 250 (50uni)', 'NKD (50uni)', 'Gs, Suzuki (50uni)', 'Con buje (50uni)', 'Sin buje carenaje (50uni)', 'Sin buje carnaje cruz (50uni)']
    },
    'caucho-sillin-gato': {
        title: 'Caucho',
        description: 'Cauchos internos para motocicletas, diseñados para ofrecer seguridad.',
        image: 'cauchosinternos/CAUCHOSILLIN.png',
        sizes: ['Sillin Gs grande (20uni)', 'Sillin Muescado (20uni)', 'Sillin Acanalado (20uni)', 'Sillin gn (20uni)', 'Burro Bws, Auteco, Boxer, Pulsar (20uni)', 'Gato central agility (20uni)', 'Burro alto (30uni)', 'Burro corto (30uni)', 'Sillin, Gato pulsar corto (30uni)', 'Sillin auteco/nkd (30uni)']
    },
    'caucho-varios': {
        title: 'Cauchos varios',
        description: 'Cauchos internos para motocicletas, diseñados para ofrecer seguridad.',
        image: 'cauchosinternos/CAUCHOSVARIOS.png',
        sizes: ['Tapa cadena eco (20uni)', 'Caucho antivibrante (10 juegos)', 'Kit de farola AKT (5 juegos)', 'Kit de mordaza universal (5 juegos)', 'Caucho tapa cadena (20uni)', 'Combo tornillo carenaje (20uni)', 'cauchos maletero (30uni)', 'cauchos tacometro (30uni)', 'cauchos flauta cadenilla (20uni)']
    },
    'caucho-para-tanque': {
        title: 'Caucho',
        description: 'Cauchos internos para motocicletas, diseñados para ofrecer seguridad.',
        image: 'cauchosinternos/CAUCHOSTANQUE.png',
        sizes: ['tanque Buje Gn 125, Suzuki (20unid)', 'Exosto ns200 (20unid)', 'Tope manubrio largo (50unid)', 'tope manubrio interno auteco (50uni)', 'Amortiguador 4 tiempos (30uni)', 'Amortiguador 2 tiempos (30uni)', 'Tanque Dt (10uni)', 'Tanque Boxer, Pulsar (10uni)', 'Tanque Ax, Gn (10uni)', 'Tanque RX (10uni)', 'Tanque Akt, XI (10uni)']
    },
    'caucho-campana': {
        title: 'Caucho campana 5uni',
        description: 'Cauchos internos para motocicletas, diseñados para ofrecer seguridad.',
        image: 'cauchosinternos/CAUCHOCAMPANA.png',
        sizes: ['campana 4 huecos bajaj', 'GN GS AKT EVO RTX RTR', 'AX100-115, AKT 100, VIVAS, GR80', '6 huecos pulsar, ns', 'Suzuki gixer', 'Boxer ct100 platino ', 'Exo 100, Akt 110, C70, C90', 'Honda cb 110, Ax4, wave', 'Honda cbf 125', 'cbf 150-160', 'Rx 100-115, Cirpton 115', 'FZ 2.0', 'Fz 1ibero 125', 'cr4', 'cr5', 'Gs Akt Evo 150', 'Akt Nkd' ]
    },
    //PARTES ACELERADOR
    'cable-de-guaya': {
        title: 'Cable de guaya',
        description: 'Partes de acelerador',
        image: 'guaya/GUAYA.png',
        sizes: ['Acelerador 1.5MT (20uni)', 'Closh 1.5MT  (20uni)', 'Ax 1.5MT (20uni)', 'Choke 2MT (20uni)', 'Acelerador 3MT (20uni)', 'Closh 3MT (20uni)']
    },
    'Tensor-de-guaya': {
        title: 'Tensor de Manigueta',
        description: 'Partes de acelerador',
        image: 'guaya/TENSORGUAYA.png',
        sizes: ['longitud 27mm (10uni)', 'Tensor Boxer/Ct-100/PLatino 35mm(10uni)']
    },
    'micos': {
        title: 'Caucho campana 5uni',
        description: 'Partes de acelerador',
        image: 'guaya/MICO.png',
        sizes: ['Mico acelerador 3/16 pequeño (100uni)', 'Mico clutch 1/4 mediano (100uni)', 'Mico clutch 5/16 Grande (100uni)', 'Mico acelerador (100uni)', 'Mico clutch 5/16 grande (100uni)' ]
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
