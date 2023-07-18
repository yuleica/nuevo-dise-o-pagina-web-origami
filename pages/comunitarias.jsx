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
        <div className={stylesh.contenedor_imagen_cover}>
            <Image 
                priority
                src={"/img/laguna_comunitaria.jpg"}
                height={300}
                width={2500}
                alt="comunitaria"
                className={stylesh.imagen_cover} 
            
            />
        </div>
        <div className={stylesh.titulo}><h1>Soluciones Comunitarias</h1></div>
        <div className={styles.gridContainer_Comunitario}>
            <div className={styles.item1}>
                <Link href="/energia">
                    <Image
                        src={"/img/bombillo.jpg"}
                        height={150}
                        width={150}
                        alt="energia"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Sistemas de Energía Limpia</p>
            </div>
            <div className={styles.item1}>
                <Link href="/agua">
                    <Image
                        src={"/img/chorro_agua.jpg"}
                        height={150}
                        width={150}
                        alt="agua"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Sistemas de Gestión de Aguas</p>
            </div>
            <div className={styles.item1}>
                <Link href="/tecno">
                    <Image
                        src={"/img/reloj.jpg"}
                        height={150}
                        width={150}
                        alt=" innovación tecnológica"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Innovación Tecnológica</p>
            </div>
            <div className={styles.item1}>
                <Link href="/house">
                    <Image
                        src={"/img/casa_sostenible.jpg"}
                        height={150}
                        width={150}
                        alt="casa sostenible"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Casas Sostenibles</p>
            </div>
            <div className={styles.item1}>
                <Link href="/muebles">
                    <Image
                        src={"/img/mobiliario_sostenible.jpg"}
                        height={150}
                        width={150}
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
