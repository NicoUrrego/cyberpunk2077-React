import { useState } from 'react';
import './Section.css';

const AniversarioSection = () =>{
    const arrayObjeto =[
        {
            id: 0,
            titulo: 'Edición de Coleccionista del 5.º aniversario de Cyberpunk 2077',
            descripcion:
                '¿Podrás guardar a buen recaudo la tec ultrasecreta de Arasaka? Dentro de una caja de acero con el nombre de Arasaka descubrirás un alijo de artefactos del paso de V por Night City, que incluye una réplica luminosa de un biochip, un soporte de exhibición, un juego de tres cartas del tarot holográficas y dos pines con logotipos de Arasaka y del Relic. ¡Hazte con todo con o sin código para Cyberpunk 2077: Ultimate Edition y celebra media década en la ciudad donde se forjan las leyendas!',
            imagen:
                'https://cdn-l-cyberpunk.cdprojektred.com/cyberpunk2077/menu/Collectors-Set-Arasaka-Cyberpunk2077.jpg',
            textoBoton: 'RESÉRVALO YA',
            enlaceBoton: 'https://eu.gear.cdprojektred.com/products/cyberpunk-2077-5th-anniversary-collector-s-set',
        },

        {
             id: 1,
            titulo: 'Gafas VITURE x Cyberpunk 2077 Luma Cyber XR',
            descripcion:
                'Conéctate al futuro oscuro con las VITURE x Cyberpunk 2077 Luma Cyber XR Glasses — una megapantalla personal que ofrece 1200p con claridad similar a 4K, una velocidad de actualización ultrarrápida de 120 Hz y hasta 1500 nits de brillo empapado en neón — con solo 10,000 unidades disponibles en todo el mundo. Visita la tienda de VITURE ahora para mejorar tu chrome.',
            imagen: 'https://cdn-l-cyberpunk.cdprojektred.com/cyberpunk2077/menu/Viture-Cyberpunk2077.jpg',
            textoBoton: 'COMPRAR LA COLECCIÓN',
            enlaceBoton: 'http://cyberpunk.viture.com/',
        },

        {
            id: 2,
            titulo: 'MADRINAS - Lote de aniversario de Cyberpunk 2077',
            descripcion:
                'Celebra 5 años en Night City con MADRINAS️ ⚡️ El lote de aniversario de Cyberpunk 2077 ya está aquí y viene con un envase para 8 tazas de café frío White Chocolate Mocha (moca con chocolate blanco) y un shaker de edición limitada del 5.º aniversario de Cyberpunk 2077. ¡Dales vida a tus días (y noches) de merc! ¡Hazte con el tuyo antes de que desaparezcan!',
            imagen: 'https://cdn-l-cyberpunk.cdprojektred.com/cyberpunk2077/menu/Madrinas-Cyberpunk2077.jpg',
            textoBoton: 'Reserva AQUÍ',
            enlaceBoton: 'https://madrinas.coffee/2077bundle',
        },

        {
              id: 3,
            titulo: 'WeirdCo - Cyberpunk: Juego de cartas coleccionables',
            descripcion:
                'Las cartas te llaman. Vive el mundo de Cyberpunk 2077 de una forma totalmente nueva con el juego de cartas coleccionables de Cyberpunk. Reúne al equipo de edgerunners definitivo con personajes de toda la franquicia y enfréntalos a tu rival mientras luchas por convertirte en leyenda de Night City. Suscríbete a las notificaciones por correo electrónico para enterarte de las últimas novedades y presta atención a la publicación de la campaña completa de Kickstarter en 2026.',
            imagen: 'https://cdn-l-cyberpunk.cdprojektred.com/cyberpunk2077/menu/Weridco-Cyberpunk2077.jpg',
            textoBoton: 'CONOCER LAS ÚLTIMAS NOVEDADES',
            enlaceBoton: 'https://t.co/Ww9wf6PqhP',
        },

        {
             id: 4,
            titulo: 'Cyberpunk 2077 x Displate',
            descripcion:
                '¡Celebra media década en la ciudad de los sueños con nuevas ilustraciones en pósteres de metal espectaculares! Desde una nueva y exclusiva serie de carteles de películas protagonizadas por Jackie Welles, Panam Palmer y Adam Smasher, hasta relanzamientos de los favoritos de los fans. A tus paredes les vendría muy bien algo de cromo de Displate. ¡Aprovecha ya los descuentos de estas fiestas!',
            imagen: 'https://cdn-l-cyberpunk.cdprojektred.com/cyberpunk2077/menu/Displate-Cyberpunk2077.jpg',
            textoBoton: 'COMPRAR AHORA',
            enlaceBoton: 'https://displate.com/licensed/cyberpunk-2077',
        },
    ];

    const [indiceActivo, cambiarIndiceActivo] = useState(0); //se guarda el numero del elemento que esta activo

    const actual = arrayObjeto[indiceActivo];

    const esPrimero = indiceActivo === 0;
    const esUltimo = indiceActivo === arrayObjeto.length - 1;

return (
    <div className='container'>
        
            <ul id="menu-container">
                {arrayObjeto.map((producto, indice) => (
                    <li
                        key={producto.id}
                        className={indice === indiceActivo ? 'is-active' : ''}
                        onClick={() => cambiarIndiceActivo(indice)}
                    >
                        {producto.titulo}
                    </li>
                ))}
            </ul>

            <div id="slide">
                <img src={actual.imagen} alt={actual.titulo} />
                <div className='panel-derecho'>
                <h2>{actual.titulo}</h2>
                <p>{actual.descripcion}</p>
                <a href={actual.enlaceBoton} target="_blank" rel="noopener noreferrer">
                    {actual.textoBoton}
                </a>
                </div>
            </div>
  
            
            {!esPrimero && (
                <div className="swiper-button-prev" onClick={() => cambiarIndiceActivo(indiceActivo - 1)} />
            )}
            {!esUltimo && (
                <div className="swiper-button-next" onClick={() => cambiarIndiceActivo(indiceActivo + 1)} />
            )}

        </div>
    );
};

export default AniversarioSection;