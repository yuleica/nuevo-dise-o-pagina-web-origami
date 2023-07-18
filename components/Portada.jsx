import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';
import stylesh from '../styles/Home.module.css';
import Layaout from './Layaout';

export const Portada = () => {
  return (
    <Layaout
    title="Página de Web Origami"
    description="Página de Web Origami"
    home={true}
    >
    <div className={stylesh.main}>
        <div>
            <Image
                priority
                src={"/img/paneles_solares-transformed.jpeg"}
                height={1000}
                width={2000}
                alt="panel solar"
                className={stylesh.imagen_cover} 
            />
        </div>
        <div className={styles.gridContainer}>
            <div className={styles.item1}>
                <Link href="/industriales">
                    <Image
                        src={"/img/automatizacion.png"}
                        height={200}
                        width={200}
                        alt="soluciones industriales"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Soluciones Industriales</p>
            </div>
            <div className={styles.item1}>
                <Link href="/comunitarias">
                    <Image
                        src={"/img/communidad_portada2.png"}
                        height={200}
                        width={200}
                        alt="soluciones industriales"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Soluciones Comunitarias</p>
            </div>
        </div>

    </div>
    </Layaout>
  )
}






<div className={styles.gridContainer}>
<div className={styles.item1}>
    <Link href="/industriales"
          className={stylesh.boton}  >
       Soluciones Industriales 
    </Link>
</div>
<div className={styles.item1}>
    <Link href="/comunitarias"
          className={stylesh.boton}  >
       Soluciones Comunitarias 
    </Link>
</div>
</div>