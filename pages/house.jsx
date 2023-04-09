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
        <div className={stylesh.thirteen}>
            <Image 
                priority
                src={"/img/2da_galeria_570x640_segunda.jpg"}
                height={570}
                width={640}
                alt="casas sostenibles"
                className={styles.logoItem} 
            
            />
        </div>
        <h1>UNE - CASAS SOSTENIBLES </h1>
        <p className={stylesh.card}>
            Origami puede desarrollar diseños de casas sostenibles, por medio de la utilización de la  Bioarquitectura y la integración de artefactos pasivos para la climatización, la iluminación y la aireación del hogar, sin ningún gasto de energía.
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
