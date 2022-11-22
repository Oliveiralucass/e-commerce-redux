import React from 'react'
import styles from "./CardHome.module.css"

const CardHome = ({imagem, nome}) => {
  return (
    <div className={styles.container}>
      <img src={require(`../../assets/${imagem}`)} alt="categoria" />
      <h3>{nome}</h3>
      <p>4 skins</p>
    </div>
  )
}

export default CardHome