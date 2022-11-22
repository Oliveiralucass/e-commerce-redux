import React from 'react'
import { Banner } from '../../components/Banner/Banner'
import homeBanner from '../../assets/home-banner.jpg'
import styles from './Home.module.css'
import CardHome from '../../components/CardHome/CardHome'

export const Home = () => {
  return (
   <>
    <Banner bannerImg={homeBanner} bannerTitulo={'go.skins'} bannerTexto={'O Melhor site para comprar skins de CSGO.'}/>

    <main className={styles.main}>

      <div>
        <h1>Facas</h1>
        <div>
          <CardHome imagem={'Karambit.png'} nome={'Karambit'}/>
          <CardHome imagem={'M9-Bayonet.png'} nome={'Faca M9 Bayonet'}/>
          <CardHome imagem={'Butterfly.png'} nome={'Faca Butterfly'}/>
          <CardHome imagem={'Talon.png'} nome={'Faca Talon'}/>
          <CardHome imagem={'Skeleton.png'} nome={'Faca Skeleton'}/>
        </div>
      </div>

      <div>
        <h1>Rifles</h1>
        <div>
          <CardHome imagem={'ak-47.png'} nome={'AK-47'}/>
          <CardHome imagem={'Awp.png'} nome={'AWP'}/>
          <CardHome imagem={'M4a4.png'} nome={'M4A4'}/>
          <CardHome imagem={'M4a1-s.png'} nome={'M4A1-S'}/>
          <CardHome imagem={'Aug.png'} nome={'AUG'}/>
        </div>
      </div>

      <div>
        <h1>Pistolas</h1>
        <div>
          <CardHome imagem={'Usp-s.png'} nome={'USP-S'}/>
          <CardHome imagem={'Glock.png'} nome={'Glock-18'}/>
          <CardHome imagem={'Desert-eagle.png'} nome={'Desert-Eagle'}/>
          <CardHome imagem={'P250.png'} nome={'P250'}/>
          <CardHome imagem={'Five-seven.png'} nome={'Five-Seven'}/>
        </div>
      </div>

      <div>
        <h1>Submetralhadoras</h1>
        <div>
          <CardHome imagem={'p90.png'} nome={'P90'}/>
          <CardHome imagem={'ump-45.png'} nome={'UMP-45'}/>
          <CardHome imagem={'mac-10.png'} nome={'MAC-10'}/>
          <CardHome imagem={'mp7.png'} nome={'MP7'}/>
          <CardHome imagem={'mp9.png'} nome={'MP9'}/>
        </div>
      </div>

      <div>
        <h1>Armas Pesadas</h1>
        <div>
          <CardHome imagem={'sawed-off.png'} nome={'Cano Curto'}/>
          <CardHome imagem={'mag-7.png'} nome={'MAG-7'}/>
          <CardHome imagem={'nova.png'} nome={'Nova'}/>
          <CardHome imagem={'xm1014.png'} nome={'XM1014'}/>
          <CardHome imagem={'negev.png'} nome={'Negev'}/>
        </div>
      </div>
    </main>

    
   </>
  )
}

