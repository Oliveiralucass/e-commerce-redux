import React from "react";
import { useParams } from "react-router-dom";
import CardSkin from "../../components/CardSkin/CardSkin";
import CardCarrinho from "../../components/CardCarrinho/CardCarrinho";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Weapons.module.css";

export const Weapons = (props) => {
  const { url, arma, nome, colecao, image } = props;

  const { gun } = useParams();

  const dispatch = useDispatch();

  const skins = useSelector((state) =>
    state.skins.filter((skin) => {
      return skin.url === gun;
    })
  );

  return (
    <div className={styles.main}>
      {skins &&
        skins.map((skin) => {
          return (
            <CardSkin
              {...skin}
              // nome={skin.nome}
              // imagem={skin.image}
              // colecao={skin.colecao}
              // preco={"R$ 999"}
            />
          );
        })}
      {/* <CardSkin
        nome={"teste"}
        imagem={"ak-47.png"}
        colecao={"caixa x"}
        preco={"R$ 10.99"}
      /> */}
    </div>
  );
};
