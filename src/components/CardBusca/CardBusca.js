import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./CardBusca.module.css";

const CardBusca = ({ props }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.containerList}>
      {props.map((skin) => (
        <div
          key={skin.id}
          className={styles.containerCard}
          onClick={() => navigate(`/weapons/${skin.url}`)}
        >
          <img src={require(`../../assets/${skin.image}`)} alt="imagem" />
          <span className={styles.containerNames}>
            <p>{skin.arma}</p>
            <p>{skin.nome}</p>
          </span>
          <FaShoppingCart
            className={styles.icon}
            //onClick={() => dispatch(adicionarAoCarrinho(props))}
          />
        </div>
      ))}
    </div>
  );
};

export default CardBusca;
