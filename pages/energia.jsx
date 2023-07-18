import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import stylesh from '../styles/Home.module.css';
import Layaout from '../components/Layaout';

export default function energia() {
  return (
    <Layaout
    title="Sistemas de Control y Gestión"
    description="Sistemas de Control y Gestión"
    >
    <div className={stylesh.main}>
        <div className={stylesh.contenedor_imagen_cover}>
            <Image 
                priority
                src={"/img/renovables-transformed.jpeg"}
                height={450}
                width={750}
                alt="control"
                className={stylesh.imagen_cover} 
            />
        </div>
        <div className={stylesh.margen_contenido}>
            <h1>Sistemas Autónomos de Energía Limpia</h1>
            <p className={stylesh.card}>
                1.- Generar proyectos de Energías Renovables No Convencionales (ERNC) con comunidades, cooperativas, asociaciones, gremios, ecoaldeas, condominios, clubes y otras agrupaciones sociales mediante las cuales se genera una relación EaaS (Energy as a Service) en proyectos on-grid como off-grid.
            </p>   
            <p className={stylesh.card}>
                2.- Generar pequeños proyectos para cubrir los requerimientos de personas naturales, para proveer de energía limpia y renovable a sus casas y a sus servicios en general, conectados o no a la red de distribución eléctrica existente
            </p> 
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
