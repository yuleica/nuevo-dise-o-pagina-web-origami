import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {Navbar} from './Navbar';
import {Footer} from './Footer';

import stylesh from '../styles/Home.module.css';

export default function Layaout({children, title, description, home}) {
  return (
    <div className="container">
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <Navbar />       
        <main>{children}</main>
        {!home && (
            <div className={stylesh.margen_contenido}>
     
              <Link 
                className={stylesh.boton_pie_pagina} 
                href="/" 
              >
                  ...Ir al Inicio
              </Link>
          
            </div>
      )}
      <footer className="text-center footer-style"><Footer /></footer>
    </div>
  )
}

Layaout.defaultProps = {
    title: "ORIGAMI",
    description: "Sitio web de la Cooperativa Origami"
};
