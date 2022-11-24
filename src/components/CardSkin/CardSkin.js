import React, { useState } from "react";
import styles from "./CardSkin.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { mudarFavorito } from "../../store/reducers/skins";
import {
  adicionarAoCarrinho,
  mudarFavoritoCarrinho
} 

from "../../store/reducers/carrinho";
import { useDispatch } from "react-redux";

const CardSkin = (props) => {

  const [like, setLike] = useState(props.favorito);

  const darLike = () => {
    setLike(!like);
    dispatch(mudarFavorito(props.id))
    dispatch(mudarFavoritoCarrinho(props.id))
  };

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h3>{props.nome}</h3>
      <p>{props.colecao}</p>
      <img src={require(`../../assets/${props.image}`)} alt="categoria" />
      <div className={styles.containerButtons}>
        <h4>R$ {props.preco}</h4>
        <div>
          {props.favorito ? (
            <AiFillHeart
              className={styles.icon}
              onClick={darLike}
            />
          ) : (
            <AiOutlineHeart
              className={styles.icon}
              onClick={darLike}
            />
          )}
          <FaShoppingCart
            className={styles.icon}
            onClick={() => dispatch(adicionarAoCarrinho(props))}
          />
        </div>
      </div>
    </div>
  );
};

export default CardSkin;
