import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import stylesh from '../styles/Home.module.css';
import styles from '../styles/Otro.module.css';
import Layaout from '../components/Layaout';

export default function energia() {
  return (
    <Layaout
    title="Sistemas Gestión de Aguas"
    description="Sistemas de Gestión de Aguas"
    >
    <div className={stylesh.main}>
        <div className={stylesh.contenedor_imagen_cover}>
            <Image 
                priority
                src={"/img/agua-transformed.jpeg"}
                height={400}
                width={600}
                alt="control"
                className={stylesh.imagen_cover}
            />
        </div>
        <div className={stylesh.margen_contenido}>
            <h1>Sistemas de Gestión de Aguas </h1>
            <p className={stylesh.card}>
                Generación de proyectos que permitan gestionar el recurso agua, a través de soluciones de ingeniería y diseño que mitigan la escasez, aumentan la disponibilidad y el uso del agua de forma más sostenible y ecológica.
            </p>
            <p className={stylesh.card}>
                1.- Sistemas de Cosecha de Aguas Lluvias 
            </p>  
            <p className={stylesh.card}>
                2.- Recuperación y reutilización de Aguas Grises y Negras
            </p> 
            <p className={stylesh.card}>
                3.- Almacenamiento y Gestión de Aguas
            </p>
            <p className={stylesh.card}>
                4.- Sistemas de Riego
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
