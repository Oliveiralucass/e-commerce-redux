import React, {useState} from 'react'
import styles from "./CardSkin.module.css"
import { useNavigate } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';

const CardSkin = ({imagem, nome, colecao,preco}) => {
  const [like, setLike] = useState(false)

  const darLike = () => {
    setLike(!like)
  }

  return (
    <div className={styles.container}>
      <h3>{nome}</h3>
      <p>{colecao}</p>
      <img src={require(`../../assets/${imagem}`)} alt="categoria" />
      <div className={styles.containerButtons}>
        <h3>{preco}</h3>
        {like ? <AiFillHeart className={styles.icon} onClick={darLike}/> : <AiOutlineHeart className={styles.icon} onClick={darLike}/>}
        <FaShoppingCart className={styles.icon}/>
      </div>
    </div>
  )
}

export default CardSkin;