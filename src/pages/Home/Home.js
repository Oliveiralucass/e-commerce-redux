import React, { useEffect } from "react";
import { Banner } from "../../components/Banner/Banner";
import homeBanner from "../../assets/home-banner.jpg";
import { MainHome } from "../../components/MainHome/MainHome";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner
        bannerImg={homeBanner}
        bannerTitulo={"go.skins"}
        bannerTexto={"O Melhor site para comprar skins de CSGO."}
      />

      <MainHome />
    </>
  );
};
