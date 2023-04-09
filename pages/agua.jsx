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
        <div className={stylesh.thirteen}>
            <Image 
                priority
                src={"/img/economia_colaborativa_750x450.jpg"}
                height={450}
                width={750}
                alt="control"
                className={styles.logoItem} 
            
            />
        </div>
        <h1>UNE - SISTEMAS DE GESITÓN DE AGUAS </h1>
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
    <div>
        <Link 
            className={stylesh.description} 
            href="/comunitarias" 
            >
            ...Volver
        </Link>
    </div>
    </Layaout>
  )
}
