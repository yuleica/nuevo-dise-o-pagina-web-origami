import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import stylesh from '../styles/Home.module.css';
import styles from '../styles/Otro.module.css';
import Layaout from '../components/Layaout';

export default function industriales() {
  return (
    <Layaout
    title="Servicios Industriales"
    description="Servicios Industriales"
    >
    <div className={stylesh.main}>
        <h1>Soluciones Industriales</h1>
        <div className={stylesh.thirteen}>
            <Image 
                priority
                src={"/img/sistemas_autoaticos.jpg"}
                height={350}
                width={750}
                alt="industria"
                className={stylesh.logo} 
            
            />
        </div>
        <div className={styles.gridContainer}>
            <div className={styles.item1}>
                <Link href="/ernc">
                    <Image
                        priority
                        src={"/img/energias_renovables.png"}
                        height={200}
                        width={200}
                        alt="ernc"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Proyectos ERNC</p>
            </div>
            <div className={styles.item1}>
                <Link href="/innovacion">
                    <Image
                        src={"/img/innovacion_tecnologica.png"}
                        height={200}
                        width={200}
                        alt="innovación tecnológica"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Innovación Tecnológica</p>
            </div>
            <div className={styles.item1}>
                <Link href="/construccion">
                    <Image
                        src={"/img/edificacion_hab_sostenible.png"}
                        height={200}
                        width={200}
                        alt="construcción sostenible"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Sistemas de Construcción Sostenibles</p>
            </div>
            <div className={styles.item1}>
                <Link href="/control">
                    <Image
                        src={"/img/sistemas_automaticos.png"}
                        height={200}
                        width={200}
                        alt="sistemas de control y gestión"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Sistemas de Control y Gestión</p>
            </div>
        </div>
    </div>
    </Layaout>
  )
}
