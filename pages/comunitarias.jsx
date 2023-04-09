import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Layaout from '../components/Layaout';
import stylesh from '../styles/Home.module.css';
import styles from '../styles/Otro.module.css';


export default function comunitarias() {
  return (
    <Layaout
      title="Soluciones Comunitarias"
      description="Soluciones Comunitarias"
    >
    <div className={stylesh.main}>
    <h1>Soluciones Comunitarias</h1>
        <div className={stylesh.thirteen}>
            <Image 
                priority
                src={"/img/2da_galeria_570x640.jpg"}
                height={450}
                width={550}
                alt="comunitaria"
                className={styles.logo} 
            
            />
        </div>
        <div className={styles.gridContainer}>
            <div className={stylesh.item1}>
                <Link href="/energia">
                    <Image
                        src={"/img/energias_renovables.png"}
                        height={200}
                        width={200}
                        alt="energia"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Sistemas Autónomos de Energía Limpia </p>
            </div>
            <div className={styles.item1}>
                <Link href="/agua">
                    <Image
                        src={"/img/ICONO-GESTION-AGUA.png"}
                        height={200}
                        width={200}
                        alt="agua"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Sistemas de Gestión de Aguas</p>
            </div>
            <div className={styles.item1}>
                <Link href="/tecno">
                    <Image
                        src={"/img/innovacion_tecnologica.png"}
                        height={200}
                        width={200}
                        alt=" innovación tecnológica"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Innovación Tecnológica</p>
            </div>
            <div className={styles.item1}>
                <Link href="/house">
                    <Image
                        src={"/img/edificacion_hab_sostenible.png"}
                        height={200}
                        width={200}
                        alt="casa sostenible"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Casas Sostenibles</p>
            </div>
            <div className={styles.item1}>
                <Link href="/muebles">
                    <Image
                        src={"/img/activos_energeticos.png"}
                        height={200}
                        width={200}
                        alt="mobiliario sostenible"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Mobiliario Sostenible</p>
            </div>
        </div>
    </div>

    </Layaout>
  )
}
