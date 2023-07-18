import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import stylesh from '../styles/Home.module.css';
import Layaout from '../components/Layaout';

export default function control() {
  return (
    <Layaout
    title="Sistemas de Control y Gestión"
    description="Sistemas de Control y Gestión"
    >
    <div className={stylesh.main}>
        <div className={stylesh.contenedor_imagen_cover}>
            <Image 
                priority
                src={"/img/control_y_gestion-transformed.jpeg"}
                height={450}
                width={640}
                alt="sistemas de control"
                className={stylesh.imagen_cover}  
            
            />
        </div>
        <div className={stylesh.margen_contenido}>
          <h1>Sistemas de Control y Gestión</h1>
            <p className={stylesh.card}>
                1.- <b>ORIGAMI</b> desarrolla soluciones tecnológicas para distintos desafíos que la industria de hoy mira, en relación al medio ambiente, el cambio climático, la resiliencia y la sostenibilidad
            </p>   
            <p className={stylesh.card}>
                2.- <b>ORIGAMI</b> tiene las capacidades para diseñar y desarrollar Sistemas de Control y Sistemas de Gestión de la Producción (SGPs), con gran experiencia en Instrumentación y Procesos Industriales. Las plataformas con las que Origami puede trabajar son Siemens, Rockwell, ABB
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
