import React from 'react'
import { useParams } from 'react-router-dom'

export const Weapons = () => {
  const {gun} = useParams()
  console.log(gun)

  return (
    <div>Weapons</div>
  )
}
