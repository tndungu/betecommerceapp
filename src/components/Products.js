import {useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { productActions,userActions } from '../_actions';
import styled from 'styled-components'
import { popularProducts } from '../data'
import { Product } from './Product';

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
`;

const Products = (item) => {
  const products = useSelector(state => state.products)
  const user = useSelector(state => state.authentication.user)
  const dispatch = useDispatch()

  const [PointerParams,SetPointerParams] = useState({
    Pointer: 1,
    Count: 50
  })
  const [hasMore,SethasMore] = useState(true)

  useEffect(() => {
      dispatch(productActions.getAllProducts(PointerParams))
  },[])

  // fetchMoreData = () => {
  //   if(this.)
  // }
  return (
    <Container>
        {products.items && products.items.map(item =>(
            <Product item={item} key={item.id}/>
        ))}
       
    </Container>
  )
}

export default Products