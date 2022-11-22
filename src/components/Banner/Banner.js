import React from 'react'
import homeBanner from '../../assets/home-banner.jpg'
import styles from './Banner.module.css'


export const Banner = ({bannerImg, bannerTitulo, bannerTexto}) => {

  return (
    <div className={styles.container}>

      <img className={styles.banner} src={bannerImg} alt="AAAA" />

      <div className={styles.bannerText}>
        <h1>{bannerTitulo}</h1>
        <h2>{bannerTexto}</h2>
      </div>

    </div>
  )
}
