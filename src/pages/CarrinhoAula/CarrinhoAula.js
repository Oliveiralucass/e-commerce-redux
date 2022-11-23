import React from 'react'
import Header from '../../components/Header'
import styles from './CarrinhoAula.module.scss'
import { useSelector, useDispatch} from 'react-redux'
import { resetarCarrinho } from '../../store/reducers/carrinho'

export const CarrinhoAula = () => {

    const dispatch = useDispatch();
    const { carrinho, total } = useSelector(state => {

        let total = 0;
        const regexp = new RegExp(state.busca, 'i')

        const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {

            const item = state.item.find(item => item.id === itemNoCarrinho.id);
            
            total += (item.preco * itemNoCarrinho.quantidade);

            if(item.titulo.match(regexp)) {
                item.push({
                    ...item,
                    quantidade: itemNoCarrinho.quantidade
                });
            }
            return itens;
        }) 
        
        return{
            carrinho: carrinhoReduce,
            total,
        }
    },[]);


    



  return (
    <div>CarrinhoAula</div>
  )
}
