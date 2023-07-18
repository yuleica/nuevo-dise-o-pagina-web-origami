import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Layaout from '../components/Layaout';
import stylesh from '../styles/Home.module.css';
import styles from '../styles/Otro.module.css';

export default function contacto () {
  return (
    <Layaout
    title="Contacto"
    description="Contacto"
    >
      <div className={stylesh.main}>
        <div className={stylesh.margen_contenido}>
          <h1>Contacto</h1>
        </div>
        <h2>Converse con nosotros a través de:</h2>
        <p> 
        <Link
          target="_blank" 
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=56985956187" 
          className="btn-social btn-outline">
          <Image
            src={"/img/whatsapp.png"}
            height={30}
            width={30} 
            alt="whatsapp"
            className={styles.icono} />
        </Link>
        Teléfono de contacto (solo whatsapp)
        </p>
        <p>
        <Image
            src={"/img/email.png"}
            height={30}
            width={30} 
            alt="correo" 
            className={stylesh.icono} />
        Correo: contacto@origami.coop</p>
        <p>
        <Image
            src={"/img/clock.png"}
            height={30}
            width={30} 
            alt="horario"
            className={stylesh.icono} />
          Dentro de nuestro horario de atención: 9:00 - 18:00 hrs</p>
        <h2>Con todo gusto, le atenderemos</h2>
      </div>

    </Layaout>
  )
};
