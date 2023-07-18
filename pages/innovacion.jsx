import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import stylesh from '../styles/Home.module.css';
import Layaout from '../components/Layaout';

export default function innovacion() {
  return (
    <Layaout
    title="Innovación Tecnológica"
    description="Innovación Tecnológica"
    >
    <div className={stylesh.main}>
        <div className={stylesh.contenedor_imagen_cover}>
            <Image 
                priority
                src={"/img/innovacion-transformed.jpeg"}
                height={1000}
                width={2000}
                alt="innovación"
                className={stylesh.imagen_cover}  
            
            />
        </div>
        <div className={stylesh.margen_contenido}>
            <h1>Innovación Tecnológica</h1>
            <p className={stylesh.description}>
                <b>ORIGAMI</b> desarrolla soluciones tecnológicas para distintos desafíos que la industria de hoy mira, en relación al medio ambiente, el cambio climático, la resiliencia y la sostenibilidad
            </p>   
            <p className={stylesh.description}>
                1.- Solución de Monitoreo Inalámbrico de Variables Eléctricas en Sistemas Eléctricos de Potencia        </p> 
            <p className={stylesh.description}>
                2.- Sistema de Gestión, Administración y Monitoreo de Procesos Distribuidos Geográficamente
            </p>
            <p className={stylesh.description}>
                3.- Sistemas de Iluminación Pasivos
            </p>
            <p className={stylesh.description}>
                4.- Textrónica
            </p>
            <p className={stylesh.description}>
                5.- Ingeniería de Piezas y Partes 3D
            </p>
        </div>
        
        </div>
        <div className={stylesh.margen_contenido}>
            <Link 
                className={stylesh.boton_pie_pagina} 
                href="/industriales" 
            >
                ...Volver
            </Link>
        </div>
    </Layaout>
  )
}
