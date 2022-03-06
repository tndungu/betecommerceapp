import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { productActions } from '../_actions'
import styled from 'styled-components'
import { Product } from './Product'
import InfiniteScroll from 'react-infinite-scroll-component'
import useState from 'react-usestateref'


const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
`;

const style = {
  padding:"20px",
  display:"flex",
  flexWrap: "wrap",
  justifyContent:"space-between"

}

const Products = () => {
  const products = useSelector(state => state.products.products)
  let Pointer = useSelector(state => state.products.nextPointer)
  const user = useSelector(state => state.authentication.user)
  const dispatch = useDispatch()

  const itemCount = 9;
  let dataCount = Pointer-1

  const [PointerParams,setPointerParams] = useState({
    Pointer: Pointer,
    Count: itemCount
  })
  const [hasMore,SethasMore] = useState(true)

  useEffect(() => {
      dispatch(productActions.getAllProducts({Pointer: Pointer,Count:itemCount}))
      //setPointerParams(prevState => {return {...prevState,Pointer:Pointer}})
  },[])

  const fetchMoreData = () => {
    //setPointerParams(prevState => {return {...prevState,Pointer:Pointer}})
    dispatch(productActions.getAllProducts({Pointer: Pointer,Count:itemCount}))
    console.log("PointerParams IS",{Pointer: Pointer,Count:itemCount})
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