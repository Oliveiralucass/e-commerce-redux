import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./FinalizarPedido.module.css";

export const FinalizarPedido = () => {
  const { state } = useLocation();

  return (
    <div>
      {state.items &&
        state.items.map((skin) => {
          return (
            <div key={skin.id}>
              <img src={require(`../../assets/${skin.image}`)} alt="imagem" />
              <p>{skin.nome}</p>
              <p>{skin.quantidade}</p>
            </div>
          );
        })}
    </div>
  );
};