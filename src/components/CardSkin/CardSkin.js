import React from "react";
import styles from "./CardSkin.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { mudarFavorito } from "../../store/reducers/skins";
import { useDispatch } from "react-redux";

const CardSkin = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h3>{props.nome}</h3>
      <p>{props.colecao}</p>
      <img src={require(`../../assets/${props.image}`)} alt="categoria" />
      <div className={styles.containerButtons}>
        <h3>R$ {props.preco}</h3>
        {props.favorito ? (
          <AiFillHeart
            className={styles.icon}
            onClick={() => dispatch(mudarFavorito(props.nome))}
          />
        ) : (
          <AiOutlineHeart
            className={styles.icon}
            onClick={() => dispatch(mudarFavorito(props.nome))}
          />
        )}
        <FaShoppingCart className={styles.icon} />
      </div>
    </div>
  );
};

export default CardSkin;
