import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./CardBusca.module.css";
import { useDispatch } from "react-redux";
import { adicionarAoCarrinho } from "../../store/reducers/carrinho";

const CardBusca = ({ props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.containerList}>
      {props.map((skin) => (
        <div className={styles.buscaContainer}>
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
          </div>
          <div className={styles.carrinho}> 
            <FaShoppingCart
              className={styles.icon}
              onClick={() => { 
                  dispatch(adicionarAoCarrinho(skin))
                  navigate(`/carrinho`)
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBusca;
