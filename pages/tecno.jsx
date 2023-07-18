import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import stylesh from '../styles/Home.module.css';
import Layaout from '../components/Layaout';

export default function tecno() {
  return (
    <Layaout
    title="Innovación Tecnológica"
    description="Innovación Tecnológica "
    >
    <div className={stylesh.main}>
        <div className={stylesh.contenedor_imagen_cover}>
            <Image 
                priority
                src={"/img/tecnologia-transformed-transformed.jpeg"}
                height={450}
                width={640}
                alt="innovación tecnológica"
                className={stylesh.imagen_cover} 
            
            />
        </div>
        <div className={stylesh.margen_contenido}>
            <h1>Innovación Tecnológica </h1>
            <p className={stylesh.card}>
                <b>ORIGAMI </b>apoya y desarrolla emprendimientos de innovación tecnológica que sostienen la visión de cuádruple impacto que fomenta el Buen Vivir. Estas innovaciones tecnológicas apuntan a mejorar la calidad de vida de las personas y comunidades, ayudando al desarrollo del Buen Vivir de las mismas.
            </p>
            <p className={stylesh.card}>
                A través del desarrollo de equipos y dispositivos, la innovación tecnológica apunta directamente a soluciones sostenibles que respondan a necesidades de comunidades
            </p>
            <p className={stylesh.card}>
                Así mismo, <b>ORIGAMI</b> contempla tres espacios abiertos para el desarrollo de actividades de innovación:
            </p>
            <p className={stylesh.card}> 
                <b>Innovación Tecnológica Abierta:</b> Foco en las personas y co-creación. Apoyar alianzas y espacios de colaboración con personas, comunidades y empresas para generar innovación tecnológica sostenible, de acuerdo a las necesidades de los usuarios.
            </p>
            <p className={stylesh.card}> 
                <b>Spin-off:</b> Desarrollo e innovación tecnológica propia de <b>ORIGAMI</b>. Sólo para socios <b>ORIGAMI.</b>
            </p>
            <p className={stylesh.card}>
                <b>Innovación no Tecnológica:</b> Innovación en procesos y funcionalidades propios de la organización, tales como la estructura del tipo AMO -Agile Management Office-, y el proceso de donación de un porcentaje de las utilidades de los proyectos a las comunidades involucradas, para su uso en proyectos sociales y sostenibles al interior de las mismas comunidades.
            </p>
        </div>
    </div>
    <div className={stylesh.margen_contenido}>
        <Link 
            className={stylesh.boton_pie_pagina} 
            href="/comunitarias" 
            >
            ...Volver
        </Link>
    </div>
    </Layaout>
  )
}
