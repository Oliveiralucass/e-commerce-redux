import React, {useState} from 'react'
import styles from "./CardCarrinho.module.css"
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { MdRemoveCircle } from 'react-icons/md';
import { MdAddCircle } from 'react-icons/md';

const CardCarrinho = (props) => {
  const [like, setLike] = useState(false)
  const [quantidade, setQuantidade] = useState(1)

  const darLike = () => {
    setLike(!like)
  }

  const mudaQuantidade = (num) => {
    if(quantidade+num != 0)
    setQuantidade(quantidade+num)
  } 

  return (
    <div className={styles.container}>
      <div className={styles.infos}>
      <img src={require(`../../assets/${props.image}`)} alt="categoria" />
      <div>
        <h2>{props.nome}</h2>
        <h4>{props.colecao}</h4>
        <h3>{props.preco}</h3>
        </div>
      </div>
      <div className={styles.buttons}>
      {like ? <AiFillHeart className={styles.icon} onClick={darLike}/> : <AiOutlineHeart className={styles.icon} onClick={darLike}/>}
      <MdRemoveCircle className={styles.iconButtons} onClick={() => mudaQuantidade(-1)}/>
      <p>
        {quantidade}
      </p>
      <MdAddCircle className={styles.iconButtons} onClick={() => mudaQuantidade(+1)}/>
      </div>
    </div>
  )
}

export default CardCarrinho;