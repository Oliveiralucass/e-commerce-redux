import React from 'react'
import { Banner } from '../../components/Banner/Banner'
import homeBanner from '../../assets/home-banner.jpg'

export const Home = () => {
  return (
   <>
    <Banner bannerImg={homeBanner} bannerTitulo={'go.skins'} bannerTexto={'O Melhor site para comprar skins de CSGO.'}/>
   </>
  )
}

