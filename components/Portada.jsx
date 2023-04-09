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
                src={"/img/paneles_solares.jpg"}
                height={1200}
                width={1200}
                alt="panel solar"
                className={stylesh.thirteen} 
            />
        </div>
        <div className={styles.gridContainer}>
            <div className={styles.item1}>
                <Link href="/industriales">
                <Image
                    priority
                    src={"/img/3660504.png"}
                    height={300}
                    width={300}
                    alt="industria"
                    className={styles.logoItem} 
                />
                </Link>
                <p className={styles.descriptionItemC}>Industria, Minería y Energía</p>
            </div>
            <div className={styles.item1}>
                <Link href="/comunitarias">
                    <Image
                        src={"/img/4127293.png"}
                        height={300}
                        width={300}
                        alt="comunidades"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Comunidades Locales</p>
            </div>
        </div>
    </div>
    </Layaout>
  )
}
