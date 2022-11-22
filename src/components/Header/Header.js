import React from 'react'
import styles from "./Header.module.css"
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <h1 onClick={() => navigate("/")}>go.skins</h1>
      <div>
        <ul>
          <li><a href="#facas">Facas</a></li>
          <li><a href="#rifles">Rifles</a></li>
          <li><a href="#pistolas">Pistolas</a></li>
          <li><a href="#submetralhadoras">Submetralhadoras</a></li>
          <li><a href="#escopetas">Escopetas</a></li>
        </ul>
        <div>
          <input type="text" placeholder="Pesquisar..."/>
          <Link to={'/carrinho'}>
            <FaShoppingCart className={styles.cart}/>
          </Link>        
        </div>
      </div>
      <h1></h1>
    </div>
  )
}

export default Header 