import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import stylesh from '../styles/Home.module.css';
import styles from '../styles/Otro.module.css';
import Layaout from '../components/Layaout';

export default function control() {
  return (
    <Layaout
    title="Sistemas de Control y Gestión"
    description="Sistemas de Control y Gestión"
    >
    <div className={stylesh.main}>
        <div className={stylesh.thirteen}>
            <Image 
                priority
                src={"/img/1ra_galeria_570x640.jpg"}
                height={450}
                width={640}
                alt="control"
                className={styles.logoItem} 
            
            />
        </div>
        <h1>UNE - SISTEMAS DE CONTROL Y GESTIÓN</h1>
        <p className={stylesh.card}>
            ORIGAMI desarrolla soluciones tecnológicas para distintos desafíos que la industria de hoy mira, en relación al medio ambiente, el cambio climático, la resiliencia y la sostenibilidad
        </p>   
        <p className={stylesh.card}>
            Origami tiene las capacidades para diseñar y desarrollar Sistemas de Control y Sistemas de Gestión de la Producción (SGPs), con gran experiencia en Instrumentación y Procesos Industriales. Las plataformas con las que Origami puede trabajar son Siemens, Rockwell, ABB
        </p> 

    </div>
    <div>
        <Link 
            className={stylesh.description} 
            href="/industriales" 
            >
            ...Volver
        </Link>
    </div>
    </Layaout>
  )
}
