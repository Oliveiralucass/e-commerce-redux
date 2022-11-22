import React from 'react'
import styles from "./CardHome.module.css"
import { useNavigate } from 'react-router-dom'

const CardHome = ({imagem, nome}) => {
  const navigate = useNavigate()

  const navegarParaLista = () => {
    let paramName = nome.toLowerCase().replace(/ /g, "-");
    navigate(`/weapons/${paramName}`)
  }

  return (
    <div className={styles.container} onClick={navegarParaLista}>
      <img src={require(`../../assets/${imagem}`)} alt="categoria" />
      <h3>{nome}</h3>
      <p>4 skins</p>
    </div>
  )
}

export default CardHome