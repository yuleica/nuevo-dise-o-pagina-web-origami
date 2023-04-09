import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';

export const Comunitarias = () => {
  return (
    <div className={styles.container}>
        <div className={styles.gridContainer}>
            <div className={styles.item1}>
                <Link href="/energia">
                <Image
                    priority
                    src={"/img/6172528.gif"}
                    height={400}
                    width={700}
                    alt="energia"
                    className={styles.logoItem} 
                    
                />
                </Link>
            </div>
            <div className={styles.item1}>
                <Link href="/agua">
                <Image
                    src={"/img/6416387.gif"}
                    height={400}
                    width={400}
                    alt="agua"
                    className={styles.logoItem} 
        
                />
                </Link>
            </div>
            <div className={styles.item1}>
                <Link href="/innovaciont">
                <Image
                    src={"/img/9086052.png"}
                    height={200}
                    width={300}
                    alt="sello"
                    className={styles.logoItem} 
                />
                </Link>
            </div>
            <div className={styles.item1}>
                <Link href="/casasost">
                <Image
                    src={"/img/brainstorm.png"}
                    height={200}
                    width={300}
                    alt="casas sostenibles"
                    className={styles.logoItem} 
                
                />
                </Link>
            </div>
            <div className={styles.item1}>
                <Link href="/mobilsost">
                <Image
                    src={"/img/creativity.png"}
                    height={200}
                    width={300}
                    alt="mobiliario sostenible"
                    className={styles.logoItem} 
                />
                </Link>
            </div>
        </div>
    </div>
  )
}
