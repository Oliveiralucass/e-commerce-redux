import React from "react";
import { Banner } from "../../components/Banner/Banner";
import carrinhoBanner from "../../assets/home-banner.jpg";
import styles from "./Carrinho.module.css";
import CardCarrinho from "../../components/CardCarrinho/CardCarrinho";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Carrinho = () => {
  const navigate = useNavigate();
  const carrinho = useSelector((state) => state.carrinho);

  return (
    <>
      <Banner
        bannerImg={carrinhoBanner}
        bannerTitulo={"Carrinho"}
        bannerTexto={"Confira quais skins foram adicionadas em seu carrinho"}
      />

      <div className={styles.main}>
        {carrinho &&
          carrinho.items.map((skin) => {
            return (
              <div key={skin.id}>
                <CardCarrinho {...skin} />
              </div>
            );
          })}

        <div className={styles.carrinhoCheckout}>
          <div>
            <p>Resumo da compra</p>
            <p>
              Subtotal: <strong>R$ {carrinho.precoTotal}</strong>
            </p>
          </div>
          <button onClick={() => navigate("/finalizar", { state: carrinho })}>
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  );
};
