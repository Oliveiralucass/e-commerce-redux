import React from 'react'
import { Banner } from '../../components/Banner/Banner'
import carrinhoBanner from '../../assets/home-banner.jpg'
import styles from './Carrinho.module.css'



export const Carrinho = () => {
  return (
    <>
      <Banner bannerImg={carrinhoBanner} bannerTitulo={'Carrinho'} bannerTexto={'Confira quais skins foram adicionadas em seu carrinho'}/>

      <div className={styles.main}>

        <div>
         <h1>aaa</h1>
        </div>

        <div>
         <h1>aaa</h1>
        </div>

        <div>
         <h1>aaa</h1>
        </div>

        <div>
         <h1>aaa</h1>
        </div>

        <div>
         <h1>aaa</h1>
        </div>

        <div>
         <h1>aaa</h1>
        </div>

        <div className={styles.carrinhoCheckout}>
          <div>
            <p>Resumo da compra</p>
            <p>Subtotal: <strong>10.99</strong></p>
          </div>
          <button>Finalizar Compra</button>
        </div>

      </div>
    </>
  )
}
