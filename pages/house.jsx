import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import stylesh from '../styles/Home.module.css';
import styles from '../styles/Otro.module.css';
import Layaout from '../components/Layaout';

export default function house() {
  return (
    <Layaout
    title="Casas Sostenibles"
    description="Casas Sostenibles"
    >
    <div className={stylesh.main}>
        <div className={stylesh.contenedor_imagen_cover}>
            <Image 
                priority
                src={"/img/casas-transformed.jpeg"}
                height={450}
                width={640}
                alt="casas sostenibles"
                className={stylesh.imagen_cover} 
            
            />
        </div>
        <div className={stylesh.margen_contenido}>
            <h1>Casas Sostenibles </h1>
            <p className={stylesh.card}>
                <b>ORIGAMI</b> puede desarrollar diseños de casas sostenibles, por medio de la utilización de la  Bioarquitectura y la integración de artefactos pasivos para la climatización, la iluminación y la aireación del hogar, sin ningún gasto de energía.
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
