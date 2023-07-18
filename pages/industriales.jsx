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
        <div className={stylesh.contenedor_imagen_cover}>
            <Image 
                priority
                src={"/img/portada_soluciones_industriales-transformed.jpeg"}
                height={300}
                width={2500}
                alt="industria"
                className={stylesh.imagen_cover} 
            />
        </div>
        <div className={stylesh.titulo}><h1>Soluciones Industriales</h1></div>
        <div className={styles.gridContainer}>
            <div className={styles.item1}>
                <Link href="/ernc">
                    <Image
                        priority
                        src={"/img/technology.png"}
                        height={150}
                        width={150}
                        alt="ernc"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Proyectos ERNC</p>
            </div>
            <div className={styles.item1}>
                <Link href="/innovacion">
                    <Image
                        src={"/img/innovation.png"}
                        height={150}
                        width={150}
                        alt="innovación tecnológica"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Innovación Tecnológica</p>
            </div>
            <div className={styles.item1}>
                <Link href="/construccion">
                    <Image
                        src={"/img/sustainable.png"}
                        height={150}
                        width={150}
                        alt="construcción sostenible"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Sistemas de Construcción Sostenibles</p>
            </div>
            <div className={styles.item1}>
                <Link href="/control">
                    <Image
                        src={"/img/control.png"}
                        height={150}
                        width={150}
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
