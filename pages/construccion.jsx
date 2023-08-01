import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import stylesh from '../styles/Home.module.css';
import Layaout from '../components/Layaout';

export default function construccion() {
  return (
    <Layaout
    title="Sistema de Construcción Sostenible"
    description="Sistema de Construcción Sostenible"
    >
    <div className={stylesh.main}>
      <div className={stylesh.contenedor_imagen_cover}>
          <Image 
              priority
              src={"/img/construccion_sostenible-transformed.jpeg"}
              height={450}
              width={750}
              alt="construcción_sostenible"
              className={stylesh.imagen_cover}  
          
          />
        </div>
        <div className={stylesh.margen_contenido}>
          <h1>Sistemas de Construcción Sostenibles</h1>
          <p className={stylesh.card}>
                En <b>ORIGAMI</b> desarrollamos soluciones constructivas sostenibles para clientes finales, empresas, 
                e interesados en la construcción responsable.
            </p>   
            <p className={stylesh.card}>
               Creamos productos innovadores y amigables con el medio ambiente, desde opciones de embalaje ecológico
               hasta soluciones en energías renovables. 
            </p>  
            <p className={stylesh.card}>
               Únete a nosotros en el camino hacia un futuro más verde y responsable. 
            </p>  
            <p className={stylesh.card}>
               Junto a <b>ORIGAMI</b> construye de manera sustentable.
            </p>  
        </div>
        
    
    </div>
    <div className={stylesh.margen_contenido}>
        <Link 
            className={stylesh.boton_pie_pagina} 
            href="/industriales" 
            >
            ...Volver
        </Link>
    </div>
</Layaout>
  )
}
