import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import stylesh from '../styles/Home.module.css';
import styles from '../styles/Otro.module.css';
import Layaout from '../components/Layaout';

export default function innovacion() {
  return (
    <Layaout
    title="Innovación Tecnológica"
    description="Innovación Tecnológica"
    >
    <div className={stylesh.main}>
        <div className={stylesh.thirteen}>
            <Image 
                priority
                src={"/img/innovacion_tecnologica_750x450.jpg"}
                height={450}
                width={750}
                alt="innovación"
                className={styles.logoItem} 
            
            />
        </div>
        <h1>UNE - INNOVACIÓN TECNOLÓGICA</h1>
        <p className={stylesh.description}>
            ORIGAMI desarrolla soluciones tecnológicas para distintos desafíos que la industria de hoy mira, en relación al medio ambiente, el cambio climático, la resiliencia y la sostenibilidad
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
