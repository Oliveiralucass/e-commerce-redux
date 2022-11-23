import React from "react";
import { Banner } from "../../components/Banner/Banner";
import carrinhoBanner from "../../assets/home-banner.jpg";
import styles from "./Carrinho.module.css";
import CardCarrinho from "../../components/CardCarrinho/CardCarrinho";
import { useSelector } from "react-redux";

export const Carrinho = () => {
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
              <div key={`${skin.arma} ${skin.nome}`}>
                <CardCarrinho {...skin} />
              </div>
            );
          })}

        <div className={styles.carrinhoCheckout}>
          <div>
            <p>Resumo da compra</p>
            <p>
              Subtotal: <strong>{carrinho.precoTotal}</strong>
            </p>
          </div>
          <button>Finalizar Compra</button>
        </div>
      </div>
    </>
  );
};
