import React from 'react'
import { useParams } from 'react-router-dom'
import CardSkin from '../../components/CardSkin/CardSkin'
import CardCarrinho from '../../components/CardCarrinho/CardCarrinho'
import { useDispatch, useSelector } from 'react-redux'

export const Weapons = (props) => {

  const {
        url,
        arma,
        nome,
        colecao,
        image
  } = props;


  const {gun} = useParams()
  console.log(gun)




  const dispatch = useDispatch();

  const skins = useSelector(state => state.skins.filter((skin) => {
    return skin.url === gun
  }))




  console.log(skins);

  return (
    <div>
      <CardSkin nome={"teste"} imagem={"ak-47.png"} colecao={"caixa x"} preco={"R$ 10.99"}/>
    </div>
  )
}
