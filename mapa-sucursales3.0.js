// Array that has every store location of SuperColchones.
var LocsA = [{
        title: 'Durango - 20 de noviembre ',
        html: 'Ave. 20 de Noviembre No. 1329, esq. con Benito Crespo, Col. Nueva Vizcaya, Durango Dgo.<br>Teléfonos: 16188189078 - 01 800 724 0240',
        clase: 'durango',
        lat: 24.0284435,
        lon: -104.6516564,
        zoom: 19
    },
    {
        title: 'Ciudad Acuña - Acuña Centro',
        html: 'Guerrero No. 1000 Sur, Col. Centro, Cd. Acuña, Coah., C.P. 26200. <br>Teléfonos: 01 877 772 3137',
        clase: 'coahuila',
        lat: 29.3173262,
        lon: -100.9318489,
        zoom: 17
    },
    {
        title: 'Tlajomulco de Zúñiga - Adolf Horn',
        html: 'Adolf Horn No. 3513, Plaza Regina.<br>Teléfonos: 01 33 3797 0063 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 32.5103177,
        lon: -116.9864986,
        zoom: 15
    },
    {
        title: 'Tampico - Alfaro',
        html: 'Calle Isaudro Alfaro 102 nte., Zona Centro.<br>Teléfonos: (833)2125725 - 01 800 724 0240',
        clase: 'tamaulipas',
        lat: 22.214377,
        lon: -97.8538259,
        zoom: 19
    },
    {
        title: 'Mérida - Altabrisa',
        html: 'Calle 7 #552 Col. Maya Local 3 y 4 Plaza Albaltos entre 24-A y 24-B, Mérida Yucatan. <br>Teléfonos: (999) 9439169',
        clase: 'yucatan',
        lat: 21.0155038,
        lon: -89.5854347,
        zoom: 17
    },
    {
        title: 'Tampico - Altamira',
        html: 'Calle Hidalgo No. 205 sur, Zona Centro.<br>Teléfonos: (833)2641210 - 01 800 724 0240',
        clase: 'tamaulipas',
        lat: 22.2857449,
        lon: -97.8518561,
        zoom: 19
    },
    {
        title: 'Zapopan - Arcos Estampida',
        html: 'NiÃ±os HÃ©roes No. 2716, Jardines del Bosque.<br>Teléfonos: 01 33 3686 0471 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6668484,
        lon: -103.3870125,
        zoom: 17
    },
    {
        title: 'Zapopan - Av. Mexico',
        html: 'Av. México 3201, Col. Vallarta San Jorge.<br>Teléfonos: 01 33 3647 5272 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6642476,
        lon: -103.4417619,
        zoom: 14
    },
    {
        title: 'San Nicolás de los Garza - Berlanga',
        html: 'Diego Diaz de Berlanga No. 1451, San Nicolás de los Garza, N.L. <br>Teléfonos: 01 81 8350 9880',
        clase: 'nuevo_leon',
        lat: 25.7530773,
        lon: -100.2520777,
        zoom: 16.5
    },
    {
        title: 'Monterrey - Bernando Reyes',
        html: 'Calzada Bernardo Reyes No. 4003 norte, Col. Niño Artillero, Monterrey, N.L. C.P. 64280.<br>Teléfonos: 01 81 8331-6544',
        clase: 'nuevo_leon',
        lat: 25.7137585,
        lon: -100.3284857,
        zoom: 17
    },
    {
        title: 'Monterrey - Carretera Nacional',
        html: 'Carretera Nacional km 267, col: El encino. (A lado de Gilsa).<br>Teléfonos: 81 10 87 40 76',
        clase: 'nuevo_leon',
        lat: 25.5705081,
        lon: -100.2418424,
        zoom: 17
    },
    {
        title: 'Hermosillo - Blvd. Encinas',
        html: 'Blvd. Luis Encinas No. 213, Col. San Benito, C.P. 83190. <br>Teléfonos: 01662267-1057 - 01 800 724 0240',
        clase: 'sonora',
        lat: 29.0878606,
        lon: -110.9665071,
        zoom: 19
    },
    {
        title: 'Hermosillo - Blvd. Morelos',
        html: 'Blvd. José Ma. Morelos No. 222 y Juan José Aguirre, Col. Jesús García, C.P. 83140.<br>Teléfonos: 16622102245 - 01 800 724 0240',
        clase: 'sonora',
        lat: 29.111515,
        lon: -110.9536864,
        zoom: 19
    },
    {
        title: 'Hermosillo - Blvd. Rodríguez ',
        html: 'Blvd. A.L. Rodríguez No. 88, esq. Félix Soria, Col. San Benito, Hermosillo, C.P. 83190.<br>Teléfonos: 16622123242 - 01 800 724 0240',
        clase: 'sonora',
        lat: 29.0892654,
        lon: -110.959175,
        zoom: 19
    },
    {
        title: 'Chihuahua - Bodega',
        html: 'Calle Tercera y Paulo Paulet No. 6317, Col. Nombre de Dios, Chihuahua Chih. <br>Teléfonos: 01 614 424 5030 - 01 800 724 0240',
        clase: 'chihuahua',
        lat: 28.6831985,
        lon: -106.0811545,
        zoom: 17
    },
    {
        title: 'Saltillo - Bodega',
        html: 'Periférico Luis Echeverría 8, Sin Nombre de Col 25, 25100 Saltillo, Coah. <br>Teléfonos: 01 844 416 7638 - 01 800 416 7163',
        clase: 'coahuila',
        lat: 25.4475705,
        lon: -100.9595002,
        zoom: 17
    },
    {
        title: 'Saltillo - Sendero Sur',
        html: 'Blvd. Antonio Cárdenas 4159, Parques de la Cañada, 25080 Saltillo, Coah. <br>Teléfonos:',
        clase: 'coahuila',
        lat: 25.3760656,
        lon: -101.0132563,
        zoom: 17
    },
    {
        title: 'Hermosillo - Bodega',
        html: 'Av. Luz Valencia No. 801-C, esq. Bldv. Agustín Zamora, Col. Microparque Industrial.<br>Teléfonos: 16688619333 - 01 800 724 0240',
        clase: 'sonora',
        lat: 29.1478507,
        lon: -111.0072011,
        zoom: 19
    },
    {
        title: 'Altamira - Bodega',
        html: 'Av. de la Industria No. 14850, Col. Laguna de la Puerta.<br>Teléfonos: 01 833 224 1728 - 01 800 724 0240',
        clase: 'tamaulipas',
        lat: 22.3605325,
        lon: -97.8900501,
        zoom: 19
    },
    {
        title: 'Matamoros - Bodega',
        html: 'Carretera a Victoria km. 7.5, Matamoros, Tamps. <br>Teléfonos: (868) 824-6500',
        clase: 'tamaulipas',
        lat: 25.814722,
        lon: -97.5183751,
        zoom: 17
    },
    {
        title: 'Tampico - Bodega',
        html: 'Ave. de la Industria No. 14850, Col. Laguna de la Puerta.<br>Teléfonos: (833) 224-1728',
        clase: 'tamaulipas',
        lat: 22.2736941,
        lon: -97.9253536,
        zoom: 17
    },
    {
        title: 'Mérida - Bodega Alta Brisa',
        html: 'Perif. de Mérida Lic. Manuel Berzunza 5, Mérida, Yuc. <br>Teléfonos: (999) 1768000',
        clase: 'yucatan',
        lat: 20.9555532,
        lon: -89.6994007,
        zoom: 19
    },
    {
        title: 'Durango - Bodega ',
        html: 'Blvd. Francisco Villa No. 104, Fracc. La Glorieta, Durango Dgo. <br>Teléfonos: 16188101860 - 01 800 724 0240',
        clase: 'durango',
        lat: 24.039232,
        lon: -104.632844,
        zoom: 19
    },
    {
        title: 'Tepic - Bodega Tepic',
        html: 'Diamante No. 18 Col. Valle de Matatipac.<br>Teléfonos: 01 311 129 0010 - 01 800 724 0240',
        clase: 'nayarit',
        lat: 21.47631,
        lon: -104.8688787,
        zoom: 17
    },
    {
        title: 'Saltillo - Boutique',
        html: 'Venustiano Carranza No. 2949, Col. La Salle, Saltillo Coahuila. <br>Teléfonos: 01 844 416 3529',
        clase: 'coahuila',
        lat: 25.4491282,
        lon: -100.9886172,
        zoom: 17
    },
    {
        title: 'Durango - Boutique',
        html: 'Miguel de Cervantes 901 entre Canelas y Dolores del Río Col. Ciénega, Durango Dgo. <br>Teléfonos: 16188276331 - 01 800 724 0240',
        clase: 'durango',
        lat: 24.0197442,
        lon: -104.6601388,
        zoom: 19
    },
    {
        title: 'Tampico - Boutique Hidalgo',
        html: 'ProlongaciÃ³n Ave. Hidalgo No. 5014-A, Col. Laguna de la Herradura. <br>Teléfonos: 01 833 228 9952 - 01 800 724 0240',
        clase: 'tamaulipas',
        lat: 22.2701938,
        lon: -97.8762317,
        zoom: 17
    },
    {
        title: 'Monterrey - Garza Sada',
        html: 'Ave. Eugenio Garza Sada No. 4036 sur, Monterrey, N.L. <br> Teléfonos: 01 81 8357-8400',
        clase: 'nuevo_leon',
        lat: 25.6288616,
        lon: 100.2782553,
        zoom: 17
    },
    {
        title: 'Mérida - Campestre',
        html: 'Calle 1E No. 239 y 241, Fracc. Campestre, Col. México, Prol. Paseo Montejo. <br>Teléfonos: (999) 9483658',
        clase: 'yucatan',
        lat: 21.0134237,
        lon: -89.6141005,
        zoom: 19
    },
    {
        title: 'Ciudad Victoria - Carrera Torre 2',
        html: '24 Carrera Torres 755,Asunción Gámez Mancilla.<br>Teléfonos: 01 834 316 4391 - 01 800 724 0240',
        clase: 'tamaulipas',
        lat: 23.7391085,
        lon: -99.1536072,
        zoom: 17.25
    },
    {
        title: 'Chihuahua - Catedral',
        html: 'Aldama No. 206, esq. con Calle 4A, Centro de Chihuahua.<br>Teléfonos: 01 614 412 0283 - 01 800 724 0240',
        clase: 'chihuahua',
        lat: 28.6350359,
        lon: -106.0789372,
        zoom: 17
    },
    {
        title: 'Ciudad Del Carmen - Cd. Del Carmen',
        html: 'Av Isla de Tris, Santa Rita 1, Palmira, 24100 Cd del Carmen, Camp. <br>Teléfonos: (938) 118 3760',
        clase: 'campeche',
        lat: 18.6556714,
        lon: -91.7922285,
        zoom: 17
    },
    {
        title: 'Ciudad Guzmán - Cd. Guzmán',
        html: '1 de Mayo No. 215.<br>Teléfonos: 01 341 413 1118 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 19.6997082,
        lon: -103.4671784,
        zoom: 17
    },
    {
        title: 'Reynosa - Centenario',
        html: 'Blvd. Hidalgo No. 2° Centenario, Col. Simón Rdz., Reynosa, Tamps., C.P. 25750. <br>Teléfonos: 0189-9923-6069',
        clase: 'tamaulipas',
        lat: 26.0829011,
        lon: -98.2989407,
        zoom: 17
    },
    {
        title: 'Monclova - Carranza',
        html: 'Venustiano Carranza 224-A Col. Centro. <br>Teléfonos:N/A',
        clase: 'coahuila',
        lat: 26.9025008,
        lon: -101.4205938,
        zoom: 17
    },
    {
        title: 'Piedras Negras - Centro',
        html: '100 Calle Dr. Rodrigo Andalon C. Piedras Negras. <br>Teléfonos: 878-782-7203',
        clase: 'coahuila',
        lat: 28.6976287,
        lon: 100.5280229,
        zoom: 17
    },
    {
        title: 'Matamoros - Centro',
        html: 'Calle Sexta No. 1208-A, Abasolo y González, Zona Centro. <br>Teléfonos: (868) 816-0543',
        clase: 'tamaulipas',
        lat: 25.8809008,
        lon: -97.5047075,
        zoom: 17
    },
    {
        title: 'Tlaquepaque - Centro Sur',
        html: 'Anillo Periférico Sur Manuel Gómez Morín 7835, Santa María Tequepexpan.<br>Teléfonos: 01 33 3271 8523 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6047878,
        lon: -103.4015314,
        zoom: 17
    },
    {
        title: 'Guadalajara - Chapultepec',
        html: 'Av. Chapultepec No. 629, Col. Moderna.<br>Teléfonos: 01 33 3810 5304 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6666125,
        lon: -103.3702809,
        zoom: 17
    },
    {
        title: 'Guadalupe - Chapultepec',
        html: 'Ave. Chapultepec No. 1620, Col. Jardin Español, Guadalupe, N.L. <br>Teléfonos: 01 81 8359-9332',
        clase: 'nuevo_leon',
        lat: 25.6668941,
        lon: -100.2826478,
        zoom: 17
    },
    {
        title: 'Zacatecas - Chapultepec',
        html: 'CCLZ Heroes de Chapultepec #1602-k Col. La Escondida, Zacatecas.<br>Teléfonos: (492) 1565197',
        clase: 'zacatecas',
        lat: 22.7739613,
        lon: -102.5994166,
        zoom: 17
    },
    {
        title: 'Guadalajara - Circunvalacion',
        html: 'Av. Circunvalación No. 797, Jardines Alcalde.<br>Teléfonos: 01 33 3280 2711 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.7030959,
        lon: -103.3455211,
        zoom: 17
    },
    {
        title: 'Mérida - City Center',
        html: 'Av. Andrés García Lavín 185, San Ramón Nte, 97117 Mérida, Yuc. <br>Teléfonos: (999) 9138305',
        clase: 'yucatan',
        lat: 20.9907903,
        lon: -89.6370562,
        zoom: 17
    },
    {
        title: 'Tampico - Colón',
        html: 'Colón No. 202 sur, Centro. <br>Teléfonos: (833)2128973 - 01 800 724 0240',
        clase: 'tamaulipas',
        lat: 22.2163752,
        lon: -97.8555312,
        zoom: 19
    },
    {
        title: 'Colima - Constitución',
        html: 'Av. Constitución 649, Lomas Vista Hermosa.<br>Teléfonos: 01 312 323 7686 - 01 800 724 0240',
        clase: 'colima',
        lat: 19.25364,
        lon: -103.71933,
        zoom: 17
    },
    {
        title: 'Monterrey - Contry',
        html: 'Capricornio No. 101 local 1, esq. con Garza Sada, Col. Contry. <br>Teléfonos: 01 81 8357 7674',
        clase: 'nuevo_leon',
        lat: 25.637670,
        lon: -100.283419,
        zoom: 18.75
    },
    {
        title: 'Zapopan - Copernico',
        html: 'Av. Nicolás Copernico No. 4419-1, Fracc. Arboledas.<br>Teléfonos: 01 33 3634 7347 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6333717,
        lon: -103.4280568,
        zoom: 17
    },
    {
        title: 'Chihuahua - Cuauhtemoc',
        html: 'AV TECNOLOGICO 14 COL. ZONA EJIDAL CP. 31065. <br> Teléfonos:  - 01 800 724 0240',
        clase: 'chihuahua',
        lat: 28.7008337,
        lon: -106.1227716,
        zoom: 21
    },
    {
        title: 'Chihuahua - Delicias',
        html: 'Segunda Norte No. 419, esq. con Quinta Norte Centro, Delicias, Chih. <br>Teléfonos: (639) 4747470',
        clase: 'chihuahua',
        lat: 28.1973668,
        lon: -105.4695888,
        zoom: 17
    },
    {
        title: 'Torreón - Diagonal',
        html: 'Diagonal Reforma No. 1798 ote. B-2, Col. Centro, Torreón, Coah.<br>Teléfonos: (871) 7939-476',
        clase: 'coahuila',
        lat: 25.5532435,
        lon: -103.4279573,
        zoom: 19
    },
    {
        title: 'Escobedo - Escobedo',
        html: 'Raúl Salinas Lozano No. 613, Escobedo N.L. <br>Teléfonos: 01 81 8397 0897',
        clase: 'nuevo_leon',
        lat: 25.7906276,
        lon: -100.322667417,
        zoom: 17
    },
    {
        title: 'Ciudad Victoria - Fidel Velazquez',
        html: 'Blvd. Fidel Velazquez #646 esq. Abasolo Col. Miguel Hidalgo, Cd. Victoria. <br>Teléfonos: 01 834 110 1406',
        clase: 'tamaulipas',
        lat: 23.7352565,
        lon: -99.1306308,
        zoom: 19.25
    },
    {
        title: 'Ciudad Victoria - Calle 16',
        html: 'Calle 16 Norberto Treviño Zapata 201 Col. Viviendas Populares CP. 87040 Cd. Victoria, Tamaulipas. <br>Teléfonos: (834) 68 85 941',
        clase: 'tamaulipas',
        lat: 23.7493357,
        lon: -99.1497909,
        zoom: 19.25
    },
    {
        title: 'Monclova - Frontera',
        html: 'Ave. Francisco I. Madero No. 1119, Col. Los Reyes, Monclova Coah. <br>Teléfonos: 0186-6635-6098',
        clase: 'coahuila',
        lat: 26.9192486,
        lon: -101.4388667,
        zoom: 17
    },
    {
        title: 'Campeche - Fundadores',
        html: 'Av. Maria lavalle Urbina, Manzana g1 Lote 12. <br>Teléfonos: (981) 8152128',
        clase: 'campeche',
        lat: 19.8529623,
        lon: -90.5302624,
        zoom: 18
    },
    {
        title: 'Guadalajara - Gobernador Curiel',
        html: 'Av. Gobernador Curiel No. 3869, Fracc. El Manantial.<br>Teléfonos: 01 33 3675 9465 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6209057,
        lon: -103.3479488,
        zoom: 17
    },
    {
        title: 'San Pedro Garza García - Gomez Morín',
        html: 'Río Orinoco No. 498, Col. del Valle, Garza García, N.L. <br>Teléfonos: 01 81 8356-1757 - 01 800 8356-7014',
        clase: 'nuevo_leon',
        lat: 25.6571213,
        lon: -100.3567338,
        zoom: 17
    },
    {
        title: 'Ciudad Madero - Gomez Morín',
        html: 'Av. Primero de Mayo 1404, Los Mangos.<br>Teléfonos: 01 833 126 1919 - 01 800 724 0240',
        clase: 'tamaulipas',
        lat: 22.2536282,
        lon: -97.8481738,
        zoom: 16.75
    },
    {
        title: 'Gomez Palacios - Gomez Palacios',
        html: 'Av. Victoria #323 norte, entre centenario e independencia, Gomez Palacios.<br>Teléfonos: (871)7146336 - ',
        clase: 'coahuila',
        lat: 25.5687479,
        lon: -103.5000629,
        zoom: 19
    },
    {
        title: 'Guadalupe - Guadalupe',
        html: 'Benito Juárez No. 902, esq. con 5 de Mayo, Guadalupe, N.L. <br>Teléfonos: 01 81 8337 4182',
        clase: 'nuevo_leon',
        lat: 25.679615,
        lon: -100.248147,
        zoom: 17.25
    },
    {
        title: 'Guaymas - Guaymas',
        html: 'Calzada Agustin Garcia Lopez plaza Delicias Local 1 cruz con Atun Col. Delicias. <br>Teléfonos: 16222219205 - 01 800 724 0240',
        clase: 'sonora',
        lat: 27.9253903,
        lon: -110.913227,
        zoom: 19
    },
    {
        title: 'Monterrey - Guerrero Tienda',
        html: 'Ave. Guerrero No. 3720-A, Col. del Norte, Monterrey, N.L., C.P. 64500. <br>Teléfonos: 01 81 1292-7009',
        clase: 'nuevo_leon',
        lat: 25.7139333,
        lon: -100.308438,
        zoom: 14
    },
    {
        title: 'Monclova - Harold Pape',
        html: 'Blvd Harold R. Pape No. 517, Col. Guadalupe, Monclova, Coah. <br>Teléfonos: 0186-6635-2737',
        clase: 'coahuila',
        lat: 26.9118855,
        lon: -101.4300558,
        zoom: 17
    },
    {
        title: 'Monclova - Paseo Monclova',
        html: 'Estancias de San Juan Bautista, 25733 Monclova, Coah. <br>Teléfono: 0186-6639-1761',
        clase: 'coahuila',
        lat: 26.9500025,
        lon: -101.4123311,
        zoom: 17
    },
    {
        title: 'Saltillo - HEB Bodega',
        html: 'HEB Plaza Nogalera Periférico Luis Echeverría 1474, Lourdes, 25070 Saltillo, Coah. <br>Teléfonos: 01 844 418 2090',
        clase: 'coahuila',
        lat: 25.3884613,
        lon: -100.9970472,
        zoom: 17
    },
    {
        title: 'Torreón - Hidalgo',
        html: 'Ave. Hidalgo No. 232 pte., Torreón, Coah.<br> Teléfonos: (871) 7127-189',
        clase: 'coahuila',
        lat: 25.5375418,
        lon: -103.4543112,
        zoom: 17
    },
    {
        title: 'Zapopan - Jardines Guadalupe',
        html: 'Av. Patria 668, Col. Jardines de Guadalupe.<br>Teléfonos: 01 33 3628 4888 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6642485,
        lon: -103.426441,
        zoom: 17
    },
    {
        title: 'Torreón - Juárez',
        html: 'Ave. Juárez No. 479 pte., Centro, Torreón, Coah. <br>Teléfonos: (871) 7162-020',
        clase: 'coahuila',
        lat: 25.5384967,
        lon: -103.4567657,
        zoom: 17
    },
    {
        title: 'Guadalajara - Juarez',
        html: 'Av. Juárez No. 810, Americana.<br>Teléfonos: 01 33 3827 2528 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6750149,
        lon: -103.3588294,
        zoom: 17
    },
    {
        title: 'Zapopan - La Cima ',
        html: 'Av. Juan Gil Preciado 1600, Plaza La Cima, Fracc. La Cima.<br>Teléfonos: 01 33 3364 2463 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6406037,
        lon: -103.408161,
        zoom: 20
    },
    {
        title: 'San Nicolás de los Garza - Plaza La Fe',
        html: 'Av. Rómulo Garza No. 100, Plaza La Fe, Ancla C, Local 46 y 47, 66477, San Nicolás de los Garza, Nuevo León. <br>Teléfonos: 01 81 8369-2806',
        clase: 'nuevo_leon',
        lat: 25.723634,
        lon: -100.216946,
        zoom: 17
    },
    {
        title: 'Ciudad Juárez - La Raza',
        html: 'La Raza No. 5385 oriente local 73, Col. Mascareñas, Cd. Juárez. <br>Teléfonos: 0165-6629-0019',
        clase: 'chihuahua',
        lat: 31.7279788,
        lon: -106.4376306,
        zoom: 17
    },
    {
        title: 'Chihuahua - Ortiz Mena',
        html: 'Calle Periférico Ortiz Mena No. 3001, esq. con Carbonel, Col. San Felipe. <br>Teléfonos: 01 614 430 1267 - 01 800 724 0240',
        clase: 'chihuahua',
        lat: 28.6248364,
        lon: -106.1076737,
        zoom: 17
    },
    {
        title: 'Ciudad Acuña - Las Américas',
        html: 'Libramiento Emilio Mendoza Cisneros No. 2000, Col. Aeropuesto, Cd. Acuña, Coah. <br>Teléfonos: 0187-7888-4882',
        clase: 'coahuila',
        lat: 29.3271396,
        lon: -100.9772696,
        zoom: 17
    },
    {
        title: 'Guadalupe - Linda Vista',
        html: 'Ave. Miguel Alemán No. 200, Col. Linda Vista, Guadalupe, N.L. <br>Teléfonos: 01 81 8379 5155',
        clase: 'nuevo_leon',
        lat: 25.690117,
        lon: -100.253721,
        zoom: 17
    },
    {
        title: 'Mérida - Macroplaza',
        html: 'Calle 33A No. 200 locales int. C12 y C13 y ext. C19, Fracc. Itzimna Polígono 108. <br>Teléfonos: (999) 1932704',
        clase: 'yucatan',
        lat: 21.0436866,
        lon: -89.6446973,
        zoom: 19
    },
    {
        title: 'Mérida - Plaza La Isla',
        html: 'Calle 24 Cabo, Polígono 108, Plaza La Isla, Local 59, 97143, Mérida, Yucatán. <br>Teléfonos: N/A',
        clase: 'yucatan',
        lat: 21.05690153,
        lon: -89.59517741,
        zoom: 19
    },
    {
        title: 'Ciudad Madero - Madero',
        html: '13 de Enero No. 100 sur, Zona Centro.<br>Teléfonos: (833) 216-1844',
        clase: 'tamaulipas',
        lat: 22.24684,
        lon: -97.8382487,
        zoom: 17
    },
    {
        title: 'Tampico - Madero',
        html: '13 de Enero No. 100 sur, Zona Centro.<br>Teléfonos: (833)2161844 - 01 800 724 0240',
        clase: 'tamaulipas',
        lat: 22.2468412,
        lon: -97.8366072,
        zoom: 19
    },
    {
        title: 'Tampico - Madero II',
        html: 'Av. 1 de Mayo No.1404 Col. 1 de Mayo a una cuadra de Tec. Madero.<br>Teléfonos: (833)1261919 - 01 800 724 0240',
        clase: 'tamaulipas',
        lat: 22.2526364,
        lon: -97.8462475,
        zoom: 17
    },
    {
        title: 'Manzanillo - Manzanillo',
        html: 'Blvd. Miguel de la Madrid 1337 , Plaza Manzanillo, Salagua.<br>Teléfonos: 01 314 333 9085 - 01 800 724 0240',
        clase: 'colima',
        lat: 19.1015481,
        lon: -104.3287602,
        zoom: 15
    },
    {
        title: 'Puerto Vallarta - Marina Vallarta',
        html: 'Blvd. Francisco Medina Ascencio S/N, Marina Vallarta.<br>Teléfonos: 01 322 222 9436 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6721988,
        lon: -105.2531648,
        zoom: 17
    },
    {
        title: 'Mexicali - Mexicali Benito Juarez',
        html: 'Benito Juárez #3377-B entre Comex y Blockbuster, Col. Insurgentes. Entre Independencia e Ignacio Lopez RayÃƒÂ³n.<br>Teléfonos: 01 686 564 3819 - 01 800 724 0240',
        clase: 'baja_california',
        lat: 32.6362218,
        lon: -115.4500759,
        zoom: 17
    },
    {
        title: 'Mexicali - Mexicali Del Lago',
        html: 'Av. Lázaro Cardenas #342, Col. Jardines del Lago, Entre Lago Nyaza y Lago Bangueolo.<br>Teléfonos: 01 686 556 5779 - 01 800 724 0240',
        clase: 'baja_california',
        lat: 32.6235636,
        lon: -115.4895632,
        zoom: 17
    },
    {
        title: 'Mexicali - Mexicali Lázaro Cardenas',
        html: 'Av. Lázaro Cardenas #689 junto a Viesca, Col. Independencia. Entre Cuatro Cienegas y Viiezca.<br>Teléfonos: 01 686 564 3758 - 01 800 724 0240',
        clase: 'baja_california',
        lat: 32.6249727,
        lon: -115.4387695,
        zoom: 17
    },
    {
        title: 'Mérida - México',
        html: 'Calle 31 No. 97 entre 18 y 20, Col. México, Mérida Yucatán. <br>Teléfonos: (999) 9268712',
        clase: 'yucatan',
        lat: 20.9980171,
        lon: -89.6110317,
        zoom: 19
    },
    {
        title: 'Obregón - Miguel Aleman',
        html: 'Ave. Miguel Alemán no. 381 nte., local 1, Cd. Obregón, Sonora. <br>Teléfonos: 01 644 415 1218 - 01 800 724 0240',
        clase: 'sonora',
        lat: 27.5005252,
        lon: -109.9326647,
        zoom: 17
    },
    {
        title: 'Monterrey - Mitras',
        html: 'Ave. Ruiz Cortines No. 108, esq. con Simón Bolivar, Col. Mitras, Monterrey, N.L. <br>Teléfonos: 01 81 8373 8580',
        clase: 'nuevo_leon',
        lat: 25.705056,
        lon: -100.342963,
        zoom: 17
    },
    {
        title: 'Monclova - Monclova',
        html: 'Mónaco No. 1028-A entre Blvd. San Bueno y Blvd. Juárez, Col. Picaso, Monclova Coah. <br>Teléfonos: 01 866 632 2084',
        clase: 'coahuila',
        lat: 26.9215025,
        lon: -101.4345365,
        zoom: 164
    },
    {
        title: 'Reynosa - Morelos',
        html: 'Blvd. Morelos No. 710, Col. Rodríguez, Reynosa, Tamps. <br>Teléfonos: 0189-9924-6728',
        clase: 'tamaulipas',
        lat: 26.0789295,
        lon: -98.2811454,
        zoom: 17
    },
    {
        title: 'San Nicolás de los Garza - Nogalar',
        html: 'Av. Nogalar No.195 sur, Col. Cuahutemoc.<br>Teléfonos: 83321302 - ',
        clase: 'nuevo_leon',
        lat: 25.7297862,
        lon: -100.303004,
        zoom: 19
    },
    {
        title: 'Colima - Nueva Villa',
        html: 'Benito Juárez Local 16, Col. Centro, Villa de Alvarez.<br>Teléfonos: 01 312 308 7977 - 01 800 724 0240',
        clase: 'colima',
        lat: 19.2660029,
        lon: -103.7396728,
        zoom: 17.25
    },
    {
        title: 'Chihuahua - Ortiz Mena',
        html: 'Calle Periferio Ortiz Mena No. 3001, esq. con Carbonel, Col. San Felipe.<br>Teléfonos: 01 614 426 5613 - 01 800 724 0240',
        clase: 'chihuahua',
        lat: 28.6526736,
        lon: -106.0997474,
        zoom: 17
    },
    {
        title: 'Tijuana - Otay',
        html: 'Av. Tecnológico No.2100 local 4 en Plaza Americana Otay Col. Otay Constituyentes.<br>Teléfonos: 16646232854 - ',
        clase: 'baja_california',
        lat: 32.534619,
        lon: -116.9529488,
        zoom: 17
    },
    {
        title: 'Monterrey - Gozalitos',
        html: 'Ave. Gonzalitos No. 563, Col. Mitras Sur, Monterrey, N.L.<br>Teléfonos: 83474873 - 83473520  ',
        clase: 'nuevo_leon',
        lat: 25.682573,
        lon: -100.351853,
        zoom: 19
    },
    {
        title: 'Monterrey - Outlet Gonzalitos',
        html: 'Ave. Gonzalitos No. 539, Monterrey, N.L.  <br>Teléfonos: 01 81 8347-6185',
        clase: 'nuevo_leon',
        lat: 25.682017,
        lon: -100.3519061,
        zoom: 17
    },
    {
        title: 'Escobedo - Sendero',
        html: 'Ave. Sendero esq. Manuel Barragán local ancla o Escobedo, N.L. <br>Teléfonos: 01 81 8397-6706',
        clase: 'nuevo_leon',
        lat: 25.7677787,
        lon: -100.3019544,
        zoom: 17
    },
    {
        title: 'Guadalupe - Pablo Livas',
        html: 'Centro Comercial Pablo Livas, Ave. Pablo Livas y Evolución. <br>Teléfonos: 01 81 8393-4128',
        clase: 'nuevo_leon',
        lat: 25.6635115,
        lon: -100.2041984,
        zoom: 17.75
    },
    {
        title: 'Tijuana - Paseo 2000',
        html: 'Blvd. Corredor Tijuana Rosarito 2000 No.26135, local B13 y B14 Col. Ejido Francisco Villa Plaza Comercial Paseo 2000.<br>Teléfonos: (664) 1029152 - 01 800 724 0240',
        clase: 'baja_california',
        lat: 32.4924049,
        lon: -116.8526149,
        zoom: 19
    },
    {
        title: 'Santa Catarina - Paseo Santa',
        html: 'Av. Industrias del poniente N. 1050 col. Industrias del poniente CP. 66370, Sta Catarina. <br> Teléfonos: 01 81 8059-3542',
        clase: 'nuevo_leon',
        lat: 25.674367,
        lon: -100.449988,
        zoom: 17
    },
    {
        title: 'Cadereyta - Cadereyta',
        html: 'Calle Hidalgo Ote. No. 202 Col. Centro. Cadereyta, Jimenez CP. 67480. <br> Teléfonos: 818-1610-598',
        clase: 'nuevo_leon',
        lat: 25.5904774,
        lon: -100.000441,
        zoom: 17
    },
    {
        title: 'Zapopan - Patria',
        html: 'Av. Patria No. 854, Col. Jardines Universidad.<br>Teléfonos: 01 33 3629 7120 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6899752,
        lon: -103.4182549,
        zoom: 17
    },
    {
        title: 'Matamoros - Periférico',
        html: 'Blvd. Cavazos Lerma y 16 de septiembre, Heroica de Matamoros, Tamaulipas. <br>Teléfonos: (868) 819-0875',
        clase: 'tamaulipas',
        lat: 25.8527488,
        lon: -97.5043733,
        zoom: 18
    },
    {
        title: 'Colima - Pino Suarez',
        html: 'Pino Suarez 319, Col. Centro.<br>Teléfonos: 01 312 307 0879 - 01 800 724 0240',
        clase: 'colima',
        lat: 19.2534399,
        lon: -103.7292774,
        zoom: 16
    },
    {
        title: 'Tepic - Plaza Alicia ',
        html: 'Av. Insurgentes S/N, Col. Fraccionamiento Ciudad del Valle, Cd del Valle.<br>Teléfonos: 01 311 133 1617 - 01 800 724 0240',
        clase: 'nayarit',
        lat: 21.4952914,
        lon: -104.87752,
        zoom: 16.5
    },
    {
        title: 'Río Bravo - Plaza Bella Río Bravo',
        html: 'Av Francisco I. Madero 1100, Zona Industrial, Popular, 88980 Cd Río Bravo, Tamps. <br>Teléfonos: 0189-9953-4348',
        clase: 'tamaulipas',
        lat: 25.9805485,
        lon: -98.073994,
        zoom: 17
    },
    {
        title: 'Puerto Vallarta - Plaza Caracol',
        html: 'Av. de los Tules 178, Zona Hotelera Las Glorias, Díaz Ordáz.<br>Teléfonos: 01 322 225 8503 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6416783,
        lon: -105.2319315,
        zoom: 17
    },
    {
        title: 'Colima - Plaza Contry',
        html: 'Av. Felipe Sevilla del Río 201 Col. Jardines Vista Hermosa.<br>Teléfonos: 01 312 323 6954 - 01 800 724 0240',
        clase: 'colima',
        lat: 19.254554,
        lon: -103.7164521,
        zoom: 17
    },
    {
        title: 'Ciudad Juárez - Plaza Delta',
        html: 'Av. Lopez Mateos No. 708 local 1-A, Col. Los Nogales, Cd. Juarez. <br>Teléfonos: 0165-6611-4721',
        clase: 'chihuahua',
        lat: 31.7282204,
        lon: -106.4443271,
        zoom: 17
    },
    {
        title: 'Piedras Negras - Plaza Inova',
        html: 'Lib. Manuel Pérez Treviño No. 2700 local D-6, Col. Tecnológico en Piedras Negras. <br>Teléfonos: 878-783-3061',
        clase: 'coahuila',
        lat: 28.6865395,
        lon: -100.5574093,
        zoom: 17
    },
    {
        title: 'Monterrey - Plaza Leones',
        html: 'Ave. Leones #100 Local 1. Col. Cumbres Elite 6to Sec, Monterrey NL. <br>Teléfonos: 01 81 1095 3425',
        clase: 'nuevo_leon',
        lat: 25.738064,
        lon: -100.405781,
        zoom: 16.75
    },
    {
        title: 'Zapopan - Plaza Lucca',
        html: 'Av. Santa Margarita 4199 Local A-3 Plaza Lucca Col. Santa Margarita.<br>Teléfonos: 01 800 724 0240 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.729193,
        lon: -103.4372218,
        zoom: 17
    },
    {
        title: 'Reynosa - Plaza Real',
        html: 'Blvd. Hidalgo No. 101 local E-12, esq. Blvd. Las Fuentes, Fracc. Las Fuentes, Reynosa, Tamps. <br>Teléfonos: 0189-9925-7401',
        clase: 'tamaulipas',
        lat: 26.0756908,
        lon: -98.3170715,
        zoom: 17
    },
    {
        title: 'Zapopan - Plaza Rioja',
        html: 'Av. López Mateos Sur 6900, Fracc. La Rioja.<br>Teléfonos: 01 33 3122 5114 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.568975,
        lon: -103.4606237,
        zoom: 17
    },
    {
        title: 'Zapopan - Plaza Sol',
        html: 'Av. Adolfo Lopez Mateos Sur 2244, Ciudad del Sol.<br>Teléfonos: 01 33 3647 6444 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6519433,
        lon: -103.4039663,
        zoom: 17
    },
    {
        title: 'Obregón - Plaza Tutuli',
        html: 'Guerrero #825 entre California y Quintana Roo, Col. Cumurita. <br>Teléfonos: 01 644 415 5708 - 01 800 724 0240',
        clase: 'sonora',
        lat: 27.4932237,
        lon: -109.9462644,
        zoom: 19
    },
    {
        title: 'Tepic - Plaza Ubica',
        html: 'Blvd. Luis Donaldo Colosio 680, Benito Juárez.<br>Teléfonos: 01 311 181 5102 - 01 800 724 0240',
        clase: 'nayarit',
        lat: 21.4918096,
        lon: -104.8673215,
        zoom: 17
    },
    {
        title: 'Zapopan - Puerta de Hierro',
        html: 'Av. Patria No. 1966, Fracc. Santa Isabel.<br>Teléfonos: 01 33 3642 7559 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.7066255,
        lon: -103.4146714,
        zoom: 17
    },
    {
        title: 'Tampico - Rematicentro',
        html: 'Ave. de la Industria No. 14800-B, Col. Laguna de la Puerta.<br>Teléfonos: (833)2241904 - 01 800 724 0240',
        clase: 'tamaulipas',
        lat: 22.3320285,
        lon: -97.8762764,
        zoom: 17
    },
    {
        title: 'Altamira - Rematicentro ',
        html: 'Av. de la Industria No. 14800-B, Col. Laguna de la Puerta.<br>Teléfonos: 01 833 224 1904 - 01 800 724 0240',
        clase: 'tamaulipas',
        lat: 22.4010303,
        lon: -97.9193401,
        zoom: 17
    },
    {
        title: 'Mérida - Rematicentro Canek',
        html: '301 Merida - Caucel, Col. El Porvenir, Mérida Yucatán. <br>Teléfonos: (999) 9121772',
        clase: 'yucatan',
        lat: 20.9904358,
        lon: -89.664877,
        zoom: 19
    },
    {
        title: 'Ciudad Juárez - Rematicentro Tienda',
        html: 'MMatriz Carretera Panamericana No. 6450, Col. Granjero, Cd. Juárez.<br>Teléfonos: 0165-6637-7650',
        clase: 'chihuahua',
        lat: 31.6629015,
        lon: -106.4331672,
        zoom: 15
    },
    {
        title: 'Guadalajara - Revolución',
        html: 'Av. Revolución No. 2189, Col. La Loma.<br>Teléfonos: 01 33 3838 6507 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6520611,
        lon: -103.3138848,
        zoom: 17
    },
    {
        title: 'Monterrey - Revolución',
        html: 'Ave. Revolución No. 3613, esq. con Juno, Col. Contry, Monterrey. N.L.<br>Teléfonos: 01 81 8365-2720',
        clase: 'nuevo_leon',
        lat: 25.6424656,
        lon: -100.273413917,
        zoom: 17
    },
    {
        title: 'Tlaquepaque - Rio Nilo',
        html: 'Av. Patria 34, La Soledad, Parques de Tlaquepaque.<br>Teléfonos: 01 33 3601 6602 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6409111,
        lon: -103.2823549,
        zoom: 17
    },
    {
        title: 'Tijuana - Rosarito',
        html: 'Carretera libre Tijuana - Rosarito km 19.5 ·1103 Local C, Ejido Plan Libertador, CP. 22706. <br>Teléfonos: (661) 104-2305',
        clase: 'baja_california',
        lat: 32.404438,
        lon: -117.049843,
        zoom: 17
    },
    {
        title: 'Zapopan - San Isidro',
        html: 'Periférico Norte 221, Santa Engracia.<br>Teléfonos: 01 33 3636 8310 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.7265497,
        lon: -103.3424981,
        zoom: 17
    },
    {
        title: 'San Nicolás de los Garza - San Nicolás',
        html: 'Juárez No. 713-A esq. Carretera a Laredo, San Nicolás.<br>Teléfonos: 01 81 8376 3636',
        clase: 'nuevo_leon',
        lat: 25.753535,
        lon: -100.297330,
        zoom: 17
    },
    {
        title: 'SPGG Luxury Collection - Calzada San Pedro',
        html: 'Ave. San Pedro Nte. #208, Col. del Valle entre Rio Amazona y Rio Misisipi. <br>Teléfonos: 01 81 8335-4849',
        clase: 'nuevo_leon',
        lat: 25.6603423,
        lon: -100.364774,
        zoom: 17
    },
    {
        title: 'Santa Catarina - Santa Catarina',
        html: 'Blvd. Diaz Ordaz No. 105-A, La Fama, Santa Catarina, N.L. <br>Teléfonos: 01 81 8336 2415',
        clase: 'nuevo_leon',
        lat: 25.674131,
        lon: -100.421298,
        zoom: 17
    },
    {
        title: 'Chihuahua - Sendero',
        html: 'AV.ALEJANDRO DUMAS 11377SUB ANCLA B COLONIA COMPLEJO INDUSTRIAL CHIHUAHUA <br>Teléfonos:  - 01 800 724 0240',
        clase: 'chihuahua',
        lat: 28.7308833,
        lon: -106.1143029,
        zoom: 21
    },
    {
        title: 'Saltillo - Sendero',
        html: 'Blvd. Jesus Valdez Sanchez 365, Ex - Hacienda de los Cerritos, Sin Nombre de Col 29, 25010 Saltillo, Coah. <br>Teléfonos: (844) 431-2936',
        clase: 'coahuila',
        lat: 25.4438973,
        lon: -100.9602263,
        zoom: 17
    },
    {
        title: 'Escobedo - Sendero',
        html: 'Avenida Sendero Norte No. 130, Valle del Canada, Joyas de Anahuac.<br>Teléfonos: 01 81 8397 6706 - 01 800 724 0240',
        clase: 'nuevo leon',
        lat: 25.7678394,
        lon: -100.3029847,
        zoom: 17
    },
    {
        title: 'Hermosillo - Sendero',
        html: 'Periférico Ote. No. 1254 Local 1.<br>Teléfonos: 662501709 - 01 800 724 0240',
        clase: 'sonora',
        lat: 29.0377199,
        lon: -110.9419009,
        zoom: 17
    },
    {
        title: 'Obregón - Sendero',
        html: 'Calle 10 Sur #3550 Sub J entre calle 300 y carretera Obregon- Navojoa Fracc. Misiones. <br>Teléfonos: 16446885745 - 01 800 724 0240',
        clase: 'sonora',
        lat: 27.467516,
        lon: -109.9155388,
        zoom: 19
    },
    {
        title: 'Matamoros - Sendero',
        html: 'Calle Av. Constituyentes 300, Quinta Real, 87345 Heroica Matamoros, Tamps. <br>Teléfonos: (868) 845-6301',
        clase: 'tamaulipas',
        lat: 25.8564473,
        lon: -97.5361386,
        zoom: 17
    },
    {
        title: 'Mérida - Sendero',
        html: 'Plaza Sendero Mérida (Ave.Circuito No. 70). <br>Teléfonos: (999) 1881520',
        clase: 'yucatan',
        lat: 20.9769352,
        lon: -89.5974626,
        zoom: 19
    },
    {
        title: 'Apodaca - Sendero Apodaca',
        html: 'Av. de la Concordia 800, Los Ebanos, 66612 Cd Apodaca, N.L. <br>Teléfonos: 01 81 1581-0046',
        clase: 'nuevo leon ',
        lat: 25.7833537,
        lon: -100.2367438,
        zoom: 17
    },
    {
        title: 'Apodaca - Sendero La Fe',
        html: 'Carr. Miguel Alemán Km. 18 #789 cruz con Ave. del Teléfono, Apodaca NL. <br> Teléfonos: 01 81 1090-0602',
        clase: 'nuevo leon ',
        lat: 25.7632214,
        lon: -100.1932183,
        zoom: 17
    },
    {
        title: 'Monterrey - Sendero Lincoln',
        html: 'Av. Lincoln, Col. Puerta de Hierro, Monterrey, N.L. <br>Teléfonos: 01 81 1167-5121',
        clase: 'nuevo_leon',
        lat: 25.7642965,
        lon: -100.4107483,
        zoom: 17
    },
    {
        title: 'Sabinas Hidalgo - Sabinas Hidalgo',
        html: 'Calle Bravo 107, entre Escobedo e Iturbide, Col. Centro, Sabinas Hidalgo. <br>Teléfonos: (824) 2426655',
        clase: 'nuevo_leon',
        lat: 26.5026148,
        lon: -100.1780597,
        zoom: 17
    },
    {
        title: 'Reynosa - Soriana del Río',
        html: 'Soriana del Rio Blvd. Morelos Carretera Matamoros, Tamaulipas. <br>Teléfonos: 0189-9955-0021',
        clase: 'tamaulipas',
        lat: 26.0580619,
        lon: -98.2928896,
        zoom: 17
    },
    {
        title: 'Reynosa - Soriana Periférico',
        html: 'Periférico, Carr. Libre Monterrey - Reynosa 1000, Paseo Residencial, 88715 Reynosa, Tamps. <br>Teléfonoss: 0189-9946-8801',
        clase: 'tamaulipas',
        lat: 26.054321,
        lon: -98.366997,
        zoom: 12.5
    },
    {
        title: 'Fresnillo - Suc. Fresnillo',
        html: 'Av. Benito Juarez No.721 Col. Centro.<br>Teléfonos: (493) 9313290 - 01 800 724 0240',
        clase: 'zacatecas',
        lat: 23.173939,
        lon: -102.8780123,
        zoom: 17
    },
    {
        title: 'Zacatecas - Suc. Plaza Delta',
        html: 'Blvd. Lopez Portillo No.609 local 8 Col. Bulevares.<br>Teléfonos:  - 01 800 724 0240',
        clase: 'zacatecas',
        lat: 22.7643953,
        lon: -102.5488453,
        zoom: 19
    },
    {
        title: 'Ciudad Juárez - Tecnológico',
        html: 'Ave. Tecnológico No. 6763 esq. Ave. La Raza, Col. El Futuro, Cd. Juárez. <br>Teléfonos: 01 656 617 5739 - 01 800 724 0240',
        clase: 'chihuahua',
        lat: 31.7246604,
        lon: -106.4268933,
        zoom: 17
    },
    {
        title: 'Guadalajara - Terranova',
        html: 'Av. Terranova No. 495, Col. Juan Manuel Vallarta.<br>Teléfonos: 01 33 3640 2409 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6838342,
        lon: -103.3894594,
        zoom: 17
    },
    {
        title: 'Tijuana - Tijuana Palmas',
        html: 'Blvd. Díaz Ordaz y Ave. Las Palmas, Centro Comercial Las Palmas, Tijuana.<br>Teléfonos: 01 664 608 0639 - 01 800 724 0240',
        clase: 'baja_california',
        lat: 32.5076968,
        lon: -116.9836565,
        zoom: 17
    },
    {
        title: 'Tijuana - Tijuana Tienda de Bodega',
        html: 'Av. de los Insurgentes, Rio Tijuana 3ra Etapa.<br>Teléfonos: 01 664 625 0526 - 01 800 724 0240',
        clase: 'baja_california',
        lat: 32.4949318,
        lon: -116.9346078,
        zoom: 17
    },
    {
        title: 'Tlaquepaque - Tlaquepaque',
        html: 'Av. NiÃ±os HÃ©roes No. 106, Col. Rancho Planco.<br>Teléfonos: 01 33 3657 6767 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.6376689,
        lon: -103.3190695,
        zoom: 17
    },
    {
        title: 'Ensenada - Topacio',
        html: 'Ave. Reforma Fracc. Valle Dorado frente a Smart y Final.<br>Teléfonos: 01 646 173 5704 - 01 800 724 0240',
        clase: 'baja_california',
        lat: 31.8352508,
        lon: -116.6034376,
        zoom: 17
    },
    {
        title: 'Monterrey - Unidad Modelo',
        html: 'Calle Av. Aztlán 7401, 64140 Monterrey, N.L. <br>Teléfonos: 01 81 8322 5011',
        clase: 'nuevo_leon',
        lat: 25.7409624,
        lon: -100.3539346,
        zoom: 17
    },
    {
        title: 'Chihuahua - Vallarta',
        html: 'Ave. Vallarta No. 5900, esq. con Catalpa, Col. Las Granjas, Chihuahua, Chih. <br>Teléfonos: 01 614 421 0100 - 01 800 724 0240',
        clase: 'chihuahua',
        lat: 28.674063,
        lon: -106.1042678,
        zoom: 17.25
    },
    {
        title: 'Manzanillo - Valle De Las Garzas',
        html: 'Elias Zamora Verduzco No. 153, Plaza San Jose. Col. Barrio 2 Valle de las Garzas.<br>Teléfonos: 01 312 138 4223 - 01 800 724 0240',
        clase: 'colima',
        lat: 19.106265,
        lon: -104.3121468,
        zoom: 19
    },
    {
        title: 'Zapopan - Valle Real',
        html: 'Av. Base Aerea No. 3640 entre 5 de Mayo y Santa Margarita.<br>Teléfonos: 01 33 1371 4138 - 01 800 724 0240',
        clase: 'jalisco',
        lat: 20.7035558,
        lon: -103.4615518,
        zoom: 17
    },
    {
        title: 'San Pedro Garza García - Vasconcelos VIP',
        html: 'Ave. Vasconcelos No. 222, Col. Lomas del Valle, Garza García, N.L., C.P. 66240. <br>Teléfonos: 01 81 8335-3047',
        clase: 'nuevo_leon',
        lat: 25.6529438,
        lon: -100.3795961,
        zoom: 16.96
    },
    {
        title: 'Obregón - Zaragoza',
        html: 'Ave. Zaragoza No. 806 ote, Col. Centro, Cd. Obregón, Sonora.<br>Teléfonos: 01 644 414 8711 - 01 800 724 0240',
        clase: 'sonora',
        lat: 27.48927,
        lon: -109.9354387,
        zoom: 17
    },
    {
        title: 'Tijuana - Zona Río',
        html: 'Blvd. Sánchez Taboada 16004 Local 1 y 2 Zona Río Tijuana.<br>Teléfonos: (664) 2075414 - 01 800 724 0240',
        clase: 'baja_california',
        lat: 32.5223992,
        lon: -117.0179904,
        zoom: 17
    },
    {
        title: 'Tijuana - Tecate',
        html: 'Blvd. Encinos #800L 11, Col. Los Encinos CP.22550 Tecate, Baja California. <br>Teléfonos: (664) 2075414 - 01 800 724 0240',
        clase: 'baja_california',
        lat: 32.5660414,
        lon: -116.633780,
        zoom: 17
    },
    {
        title: 'San Luis Potosí - Santa Fe',
        html: 'Ave. Benito Juárez No. 200, Col. Zona Industrial, S.L.P. <br>Teléfonos: (444) 659-7800',
        clase: 'san_luis_potosi',
        lat: 22.1392621,
        lon: -100.9903552,
        zoom: 15
    },
    {
        title: 'San Luis Potosí - Himno Nacional',
        html: 'Ave. Himno Nacional No. 2500-C, S.L.P. <br>Teléfonos: (444) 820-8592',
        clase: 'san_luis_potosi',
        lat: 22.1359881,
        lon: -100.9272171,
        zoom: 17
    },
    {
        title: 'San Luis Potosí - Tangamanga',
        html: 'J-Clutier Esq. 18 de Marzo, Col. Tangamanga #600 L-B, San Luis Potosí. <br>Teléfonos: (444) 817-6493',
        clase: 'san_luis_potosi',
        lat: 22.1407328,
        lon: -101.00386,
        zoom: 19
    },
    {
        title: 'San Luis Potosí - Bodega',
        html: 'Israel 301 cruz con Damazco, Fracc. Gálvez, S.L.P. <br>Teléfonos: (444) 821-8455',
        clase: 'san_luis_potosi',
        lat: 22.1359881,
        lon: -100.9272171,
        zoom: 17
    },
    {
        title: 'La Paz - Centro',
        html: 'Av. 16 de Septiembre #2 Colonia Centro la paz Baja California Sur C.P. 23000. <br> Teléfonos: 6121060779',
        clase: 'baja_california',
        lat: 24.1549468,
        lon: -110.3077386,
        zoom: 17
    },
    {
        title: 'La Paz - Abasolo',
        html: 'Av. Mariano abasolo 395 Colonia centro La Paz Baja California Sur C.P. 23000',
        clase: 'baja_california',
        lat: 24.1509478,
        lon: -110.3266287,
        zoom: 17
    },
    {
        title: 'La Paz - Bodega La Paz',
        html: 'Carretera Sur km 7.5. Bahia Concepcion y Los Tabachines. Teléfonos: 6121060095',
        clase: 'baja_california',
        lat: 24.0796236,
        lon: -110.3072715,
        zoom: 17
    },
    {
        title: 'La Paz - Suc. Los Cabos',
        html: 'Blvd. Mauricio Castro 1952 Local 1A Club del Golf Fonatur Los Cabos Baja California Sur C.P. 23400 <br> Teléfonos: 624 - 247-5851',
        clase: 'baja_california',
        lat: 23.0498283,
        lon: -109.7042706,
        zoom: 17
    },
    {
        title: 'Cabo San Lucas - Bodega Cabo San Lucas',
        html: 'Prolongación Leona Vicario S/N Colonia Lagunitas 1, Cabo San Lucas, B.C.S. <br> Teléfonos: 624 247 4274',
        clase: 'baja_california',
        lat: 22.9125485,
        lon: -109.9258394,
        zoom: 17
    },
    {
        title: 'Cabo San Lucas - Plaza San Lucas',
        html: 'México 1 Km. 0.5, Local 37 Cabo San Lucas, B.C.S <br> Teléfonos: 624 104 2013',
        clase: 'baja_california',
        lat: 22.9014271,
        lon: -109.9014155,
        zoom: 17
    },
    {
        title: 'Durango - Paseo Durango',
        html: 'Boulevard Felipe Pescador #1401, Local 33.(entre Av. Tecnológico y Libertad). <br> Teléfonos: 618 118 9377',
        clase: 'durango',
        lat: 24.0356703,
        lon: -104.654049,
        zoom: 17
    },
];
// This sorts the Array alphabetically by name
LocsA = LocsA.sort((a, b) => {
    if (a.title < b.title)
        return -1;
    if (a.title > b.title)
        return 1;
    return 0;
});
/* ShowCity()
 * Iterates through every store and
 * hiddes non-selected stores.
 */
function showCity(needChangeZoom) {
    for (i = 0; i < LocsA.length; i++) {
        if ($("#sucursal option:selected").val() == LocsA[i].clase) {
            $('#' + i).css("display", "block");
        } else {
            $('#' + i).css("display", "none");
        }
    }
}
/* As soon as the DOM is loaded
 * This will append the stores to the
 * Front-End.
 */
$(document).ready(function () {
    var i = 0;
    LocsA.forEach(function (entry) {
        $("#listaSucursales").append("<li><a class='linksSucursales" + entry.clase + "' id='" + i + "' onclick='cambiaZoom(" + i + ")'>" + entry.title + "</a></li>");
        i++;
    });
    showCity(1);
});
/* This adds the text box that is displayed
 * when a store location is clicked.
 */
var contentString = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the ' +
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
    'south west of the nearest large town, Alice Springs; 450&#160;km ' +
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
    'features of the Uluru S Kata Tjuta National Park. Uluru is ' +
    'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
    'Aboriginal people of the area. It has many springs, waterholes, ' +
    'rock caves and ancient paintings. Uluru is listed as a World ' +
    'Heritage Site.</p>' +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
    '(last visited June 22, 2009).</p>' +
    '</div>' +
    '</div>';

// GOOGLE MAPS CODE
// Sets the settings for the map.
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: new google.maps.LatLng(25.6667, -100.3167),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});
// Variables
var infowindow = new google.maps.InfoWindow();
var markers = new Array();
var marker, i;
/* Iterates every store in the array 
 * and sets the ping marker as well
 * as setting the information box.
 */
for (i = 0; i < LocsA.length; i++) {
    var icon = {
        url: '/arquivos/marker-sc-64-64.png',
        scaledSize: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(LocsA[i].lat, LocsA[i].lon),
        map: map,
        icon: icon
    });
    markers.push(marker);
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            var contenido = LocsA[i].title + "<br>" + LocsA[i].html;
            infowindow.setContent(contenido);
            infowindow.open(map, marker);
        }
    })(marker, i));
}
/* CambiaZoom()
 * This Function is executed if a store is
 * clicked, this should change the zoom to
 * its current lat, long position.
 */
function cambiaZoom(idMarker) {
    map.setCenter({
        lat: LocsA[idMarker].lat,
        lng: LocsA[idMarker].lon
    });
    map.setZoom(LocsA[idMarker].zoom);
    google.maps.event.trigger(markers[idMarker], 'click');
}