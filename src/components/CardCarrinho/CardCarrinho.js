import React, { useState } from "react";
import styles from "./CardCarrinho.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { MdRemoveCircle } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removerDoCarrinho,
  adicionarQuantidade,
  removerQuantidade,
  mudarFavoritoCarrinho,
} from "../../store/reducers/carrinho";
import { mudarFavorito } from "../../store/reducers/skins";

const CardCarrinho = (props) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(props.favorito);

  const darLike = () => {
    setLike(!like);
    dispatch(mudarFavorito(props.id));
    dispatch(mudarFavoritoCarrinho(props.id));
  };

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
          onClick={() =>
            dispatch(removerQuantidade({ preco: props.preco, id: props.id }))
          }
        />
        <p>{props.quantidade}</p>

        <MdAddCircle
          className={styles.iconButtons}
          onClick={() =>
            dispatch(adicionarQuantidade({ preco: props.preco, id: props.id }))
          }
        />

        <button
          onClick={() =>
            dispatch(
              removerDoCarrinho({
                id: props.id,
                preco: props.preco,
                quantidade: props.quantidade,
              })
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
