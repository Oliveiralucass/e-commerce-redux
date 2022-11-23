import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fazerBusca, resetarBusca } from "../../store/reducers/busca";

const Header = () => {
  const { busca, skins } = useSelector((state) => {
    const regexp = new RegExp(state.busca, "i"); //fazer buscas entre strings case sensitive
    return {
      busca: state.busca,
      skins: state.skins.filter((item) => item.nome.match(regexp)),
    };
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetarBusca());
  }, [location.pathname, dispatch]);

  return (
    <div className={styles.container}>
      <h1 onClick={() => navigate("/")}>go.skins</h1>
      <div>
        <ul>
          <li>
            <a href="#facas">Facas</a>
          </li>
          <li>
            <a href="#rifles">Rifles</a>
          </li>
          <li>
            <a href="#pistolas">Pistolas</a>
          </li>
          <li>
            <a href="#submetralhadoras">Submetralhadoras</a>
          </li>
          <li>
            <a href="#escopetas">Escopetas</a>
          </li>
        </ul>
        <div>
          <div>
            <input
              placeholder="Pesquisar..."
              value={busca}
              onChange={(evento) => dispatch(fazerBusca(evento.target.value))}
            />
            {busca &&
              skins.map((item) => {
                return (
                  <p style={{ color: "#fff" }} key={item.id}>
                    {item.nome}
                  </p>
                );
              })}
          </div>
          <Link to={"/carrinho"}>
            <FaShoppingCart className={styles.cart} />
          </Link>
        </div>
      </div>
      <h1></h1>
    </div>
  );
};

export default Header;
