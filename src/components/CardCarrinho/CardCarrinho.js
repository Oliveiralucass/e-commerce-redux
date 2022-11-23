import React, { useState } from "react";
import styles from "./CardCarrinho.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { MdRemoveCircle } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { adicionarAoCarrinho, removerDoCarrinho, adicionarQuantidade, removerQuantidade } from "../../store/reducers/carrinho";

const CardCarrinho = (props) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);

  const darLike = () => {
    setLike(!like);
  };

  console.log(props);
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

        {like ? (
          <AiFillHeart className={styles.icon} onClick={darLike} />
        ) : (
          <AiOutlineHeart className={styles.icon} onClick={darLike} />
        )}
        <MdRemoveCircle
          className={styles.iconButtons}
          onClick={() => dispatch(removerQuantidade({preco: props.preco, id: props.id}))}
        />
        <p>{props.quantidade}</p>

        <MdAddCircle
          className={styles.iconButtons}
          onClick={() => dispatch(adicionarQuantidade({preco: props.preco, id: props.id}))}
        />

        <button
          onClick={() =>
            dispatch(
              removerDoCarrinho({ id: props.id, preco: props.preco })
            )
          }
        >
          excluir
        </button>
      </div>
    </div>
  );
};

export default CardCarrinho;
