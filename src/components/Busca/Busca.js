import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { resetarBusca } from '../../store/reducers/busca'
import { mudarBusca, resetarBusca } from '../../store/reducers/busca'

export const Busca = () => {

    const busca = useSelector(state => state.busca)
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(resetarBusca())
    }, [location.pathname, dispatch])
    
  return (
    <div>Busca</div>
  )
}
