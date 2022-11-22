import React from 'react'
import { useParams } from 'react-router-dom'
import CardSkin from '../../components/CardSkin/CardSkin'

export const Weapons = () => {
  const {gun} = useParams()
  console.log(gun)

  return (
    <div>
      <CardSkin nome={"teste"} imagem={"ak-47.png"} colecao={"caixa x"} preco={"R$ 10.99"}/>
    </div>
  )
}
