import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Otro.module.css';
import stylesh from '../styles/Home.module.css';
import Layaout from '../components/Layaout';

export default function construccion() {
  return (
    <Layaout
    title="Sistema de Construcción Sostenible"
    description="Sistema de Construcción Sostenible"
    >
    <div className={stylesh.main}>
      <div className={stylesh.thirteen}>
          <Image 
              priority
              src={"/img/edificacion_sostenible_750x450.jpg"}
              height={450}
              width={750}
              alt="innovación"
              className={styles.logoItem} 
          
          />
        </div>
        <h1>UNE - SISTEMAS DE CONSTRUCCIÓN SOSTENIBLES</h1>
    
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
