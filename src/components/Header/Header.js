import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fazerBusca, resetarBusca } from "../../store/reducers/busca";
import CardBusca from "../CardBusca/CardBusca";

const Header = () => {
  const { busca, skins } = useSelector((state) => {
    const regexp = new RegExp(state.busca, "i"); //fazer buscas entre strings case sensitive
    return {
      busca: state.busca,
      skins: state.skins.filter((item) => {
        if (item.nome.match(regexp) || item.arma.match(regexp)) return item;
      }),
    };
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetarBusca());
  }, [location.pathname, dispatch]);

  const mudaParaHome = () => {
    if (location.pathname !== "/") navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1 onClick={() => navigate("/")}>go.skins</h1>
      <div>
        <ul>
          <li>
            <a onClick={mudaParaHome} href="#facas">
              Facas
            </a>
          </li>
          <li>
            <a onClick={mudaParaHome} href="#rifles">
              Rifles
            </a>
          </li>
          <li>
            <a onClick={mudaParaHome} href="#pistolas">
              Pistolas
            </a>
          </li>
          <li>
            <a onClick={mudaParaHome} href="#submetralhadoras">
              Submetralhadoras
            </a>
          </li>
          <li>
            <a onClick={mudaParaHome} href="#escopetas">
              Escopetas
            </a>
          </li>
        </ul>
        <div>
          {/* lógica de busca */}
          <div className={styles.containerBusca}>
            <input
              placeholder="Pesquisar..."
              value={busca}
              onChange={(evento) => dispatch(fazerBusca(evento.target.value))}
              onBlur={() => {
                setTimeout(() => {
                  dispatch(fazerBusca(""));
                }, 100);
              }}
            />
            {busca && <CardBusca props={skins} />}
          </div>
          {/* lógica de busca */}
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
