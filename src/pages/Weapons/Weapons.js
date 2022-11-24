import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardSkin from "../../components/CardSkin/CardSkin";
import { useSelector } from "react-redux";
import styles from "./Weapons.module.css";

export const Weapons = () => {
  const { gun } = useParams();

  const skins = useSelector((state) =>
    state.skins.filter((skin) => {
      return skin.url === gun;
    })
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.main}>
      {skins &&
        skins.map((skin) => {
          return <CardSkin key={skin.id} {...skin} />;
        })}
    </div>
  );
};
