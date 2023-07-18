import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import stylesh from '../styles/Home.module.css';
import Layaout from '../components/Layaout';

export default function ernc() {
  return (
    <Layaout
    title="ERNC"
    description="ERNC"
    >
    <div className={stylesh.main}>
        <div className={stylesh.contenedor_imagen_cover}>
            <Image 
                priority
                src={"/img/paneles_naranja-neXLX4ia3-transformed.jpeg"}
                height={450}
                width={750}
                alt="ernc"
                className={stylesh.imagen_cover} 
            
            />
        </div>
        <div className={stylesh.margen_contenido}>
            <h1>Energías Renovables No Convencionales (ERNC)</h1>
            <p className={stylesh.card}>
            <b>ORIGAMI</b> propone 3 pilares para el desarrollo de proyectos ERNC:
            </p>   
            <p className={stylesh.card}>
                1.- Generar proyectos propios de ERNC, del tipo PMGD, que se integran a la matriz energética nacional, a través de la conexión e inyección de Energía Limpia en los sistemas de distribución de energía locales existentes en la región. Estas iniciativas propias de ORIGAMI cumplirán los criterios ESG, los qu e refieren al cumplimiento de factores ambientales, sociales y de gobierno corporativo que se tienen en cuenta a la hora de invertir en una empresa y un proyecto
            </p> 
            <p className={stylesh.card}>
                2.- Generar proyectos propios de ERNC, del tipo PMGD, en el mismo marco de referencia de la alternativa (1) pero por medio de alianzas colaborativas y sostenibles con Fundaciones, Municipalidades, el Gobierno, grupos de inversiones verdes y sostenibles, como es el caso de la Cooperativa de Inversiones Buen Vivir (CIBV) que es parte del Polo Empresarial ODS Cero, de la cual ORIGAMI forma parte también.
            </p>
            <p className={stylesh.card}>
                3.- Colaborar con Clientes e Inversionistas en la generación de proyectos de ERNC a través del desarrollo de estudios técnicos, normativos, ambientales y legales, ingeniería de detalles de un equipo multidisciplinario, apoyo técnico y logístico en compras y suministros, apoyo en construcción y puesta en marcha.
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
