import React from 'react'
import styles from "./Footer.module.css"
import { ReactComponent as MarcaRegistrada } from '../../assets/marca-registrada.svg';

const Footer = () => {
  return (
    <div className={styles.container}>
      <MarcaRegistrada />
      go.skins, 2022 - Todos os direitos reservados.
    </div>
  )
}

export default Footer