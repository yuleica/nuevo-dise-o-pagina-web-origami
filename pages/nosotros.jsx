import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Layaout from '../components/Layaout';
import stylesh from '../styles/Home.module.css';
import styles from '../styles/Otro.module.css';

export default function Nosotros() {
  return (
    <Layaout
      title="Nosotros"
      description="Nosotros"
    >
      <div className={stylesh.main}>
        <div className={stylesh.margen_contenido}>
          <h1>Nosotros</h1>
        </div>
        <div className={stylesh.margen_video}>
          <video 
            src="/img/ejemplo.mp4" controls
            height={640}
            width={920}
          />
        </div>       
        <div className={stylesh.margen_contenido}>
          <div className={styles.gridContainer_Nosotros}>
              <Image 
                  src={"/img/nosotros3.jpg"}
                  height={400}
                  width={400}
                  alt="innovación"
                  className={stylesh.imagen_grid}  
              
              />
              <p className={stylesh.texto}><b>ORIGAMI, </b>es una cooperativa de trabajo basada en ingeniería, innovación tecnológica, 
                infraestructuras ecológicas, economía colaborativa y comunidad </p>
          </div>
        </div>
        <div className={stylesh.margen_contenido}>
          <div className={styles.gridContainer_Nosotros}>
              <p className={stylesh.texto}>La iniciativa <b>ORIGAMI Coop, </b>emerge desde el interior del Polo Empresarial  
                ODSCero, vinculando ingeniería y tecnología con comunidades y proyectos sociales, creando una
                cultura empresarial basada en sostenibilidad, cooperativismo y comunidad, integrando también
                comunidades de pueblos ancestrales. </p>
              <Image 
                  src={"/img/beata2.jpg"}
                  height={400}
                  width={400}
                  alt="innovación"
                  className={stylesh.imagen_grid}  
              
              />

          </div>
        </div>
        <div className={styles.gridContainer_Nosotros}>
              <Image 
                  src={"/img/beata1.jpg"}
                  height={200}
                  width={400}
                  alt="innovación"
                  className={stylesh.imagen_grid}  
              
              />
              <p className={stylesh.texto}>Nuestros <b>principios y valores </b>son: Buen vivir, Cooperación, 
                innovación e ingeniería, Adhesión a los principios cooperativos, Democratización,
                participación civil y accesibilidad, Quehacer intra e inter comunitario</p>
          </div>
      </div>
    </Layaout>
  )
};