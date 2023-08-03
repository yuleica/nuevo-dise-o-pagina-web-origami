import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import stylesh from '../styles/Home.module.css';
import Layaout from '../components/Layaout';

export default function house() {
  return (
    <Layaout
    title="Mobiliario Sostenible"
    description="Mobiliario Sostenible"
    >
    <div className={stylesh.main}>
        <div className={stylesh.contenedor_imagen_cover}>
            <Image 
                priority
                src={"/img/mueble-transformed.jpeg"}
                height={400}
                width={600}
                alt="Mobiliario Sostenible"
                className={stylesh.imagen_cover}  
            
            />
        </div>
        <div className={stylesh.margen_contenido}>
            <h1>Mobiliario Sostenible </h1>
            <p>Proporcionamos soluciones en mobiliario sostenible para comunidades residenciales y empresariales. Nuestra oferta incluye productos ecológicos y de calidad, diseñados para mejorar la vida diaria y reducir el impacto ambiental. Construyamos juntos un entorno más
verde y responsable.</p>

        </div>
    </div>
    <div className={stylesh.margen_contenido}>
        <Link 
            className={stylesh.boton_pie_pagina} 
            href="/comunitarias" 
            >
            ...Volver
        </Link>
    </div>
    </Layaout>
  )
}
