import React from "react";
import styles from "./CardSkin.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { mudarFavorito } from "../../store/reducers/skins";
import {
  adicionarAoCarrinho,
  removerDoCarrinho,
} from "../../store/reducers/carrinho";
import { useDispatch } from "react-redux";

const CardSkin = (props) => {
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
              onClick={() => dispatch(mudarFavorito(props.id))}
            />
          ) : (
            <AiOutlineHeart
              className={styles.icon}
              onClick={() => dispatch(mudarFavorito(props.id))}
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
