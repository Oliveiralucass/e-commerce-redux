import React from 'react'
import styles from "./Header.module.css"
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <h1 onClick={() => navigate("/")}>go.skins</h1>
      <div>
        <ul>
          <li>Facas</li>
          <li>Luvas</li>
          <li>Rifles</li>
          <li>Pistolas</li>
          <li>Submetralhadoras</li>
          <li>Escopetas</li>
        </ul>
        <div>
        <input type="text" placeholder="Pesquisar..."/>
        <FaShoppingCart className={styles.cart}/>
        </div>
      </div>
      <h1></h1>
    </div>
  )
}

export default Header 