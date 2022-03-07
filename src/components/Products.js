import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { productActions } from '../_actions'
import styled from 'styled-components'
import { Product } from './Product'
import InfiniteScroll from 'react-infinite-scroll-component'

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
`;

const Products = () => {
  const products = useSelector(state => state.products.products)
  let Pointer = useSelector(state => state.products.nextPointer)
  const dispatch = useDispatch()
  const itemCount = 9;

  useEffect(() => {
      dispatch(productActions.getAllProducts({Pointer: Pointer,Count:itemCount}))
  },[])

  const fetchMoreData = () => {
    dispatch(productActions.getAllProducts({Pointer: Pointer,Count:itemCount}))
  }
  return (
    <div id="scrollableDiv" style={{ height: 500, overflow: "auto" }}>
      <InfiniteScroll
            dataLength={products.length}
            next={fetchMoreData}
            hasMore={Pointer !== -1}
            loader={<div style={{border:"2px solid teal"}}><p style={{ textAlign: "center" }}>Loading More...</p></div>}
            scrollableTarget="scrollableDiv"
            scrollThreshold={"10px"}
            endMessage={
              <div style={{border:"2px solid teal"}}>
              <p style={{ textAlign: "center" }}>
                <b>No More Products to Display</b>
              </p>
              </div>
            }
          >
            <Container>
        {products && products.map(item =>(
            <Product item={item} key={item.id}/>
        ))}
        </Container>
       </InfiniteScroll>
       </div>
  )
}

export default Products