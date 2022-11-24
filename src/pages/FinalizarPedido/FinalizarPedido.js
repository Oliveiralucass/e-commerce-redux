import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./FinalizarPedido.module.css";
import { resetarCarrinho } from "../../store/reducers/carrinho";

export const FinalizarPedido = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>
        Número do Pedido: <span>#471232</span>
      </h1>
      {state.items &&
        state.items.map((skin) => {
          return (
            <div key={skin.id} className={styles.containerItem}>
              <div>
                <img src={require(`../../assets/${skin.image}`)} alt="imagem" />
                <p>{skin.nome}</p>
              </div>
              <div className={styles.quantidadePreco}>
                <p>R$ {skin.preco}/uni</p>
                <p>{skin.quantidade}</p>
              </div>
            </div>
          );
        })}
      <h3>
        Preço total: <span>R$ {state.precoTotal}</span>{" "}
      </h3>
      <button
        onClick={() => {
          dispatch(resetarCarrinho());
          navigate("/");
        }}
      >
        Concluir
      </button>
    </div>
  );
};
