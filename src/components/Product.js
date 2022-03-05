import { useEffect, useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { userActions } from "../_actions";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive"
import "../css/product.css"
import { cartActions } from "../_actions/cart.actions";
import useState from 'react-usestateref'

const ProductName = styled.span`
    padding:5px;
    font-weight: 500;
`;

const ProductAmount = styled.span`
    padding: 5px;
    font-size: 20px;
    font-weight: 600;
    ${mobile({margin:"5px 15px"})}
`;

const ButtonFooter = styled.div`
display:flex;
justify-content:space-between;
margin:5px;
`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction:column;
    align-items: center;
    ${mobile({width:"100%"})}
`;
const AmountWrap = styled.div`
    width: 50%;
    display: flex;
    flex-direction:column;
    align-items: left;
    ${mobile({width:"100%"})}
`;

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 10px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    margin: 5px;
    &:hover{
        background-color: #f8f4f4;
    }
`;

export const Product = (item) => {

  const prod = item.item
  const [quantity,setQuantity,quantityRef] = useState(1)
  const loggedIn = useSelector(state => state.authentication.loggedIn)
  const dispatch = useDispatch()
  
  const SetQuantity = (val) =>{
    if(val == 'increment')
      setQuantity(quantity + 1)
    else{
      if(quantity>1){
        setQuantity(quantity - 1)
      }
    }
  }

  const AddToCart = () => {
    if (loggedIn){
      dispatch(cartActions.addToCart({ProductId:prod.id,quantity:quantityRef.current}))
      setQuantity(1)
    }
    else {
      dispatch(userActions.logout())
    }
  }

  return (
    <div className="product-container">
      <img className="image-style" src={`/image/${prod.imageId}`} alt="product"/>
      <ButtonFooter>
        <AmountWrap>
          <ProductName>{prod.name}</ProductName>
          <ProductAmount>R {(Math.round(prod.price * 100) / 100).toFixed(2)}</ProductAmount>
        </AmountWrap>
        <AddContainer>
          <AmountContainer>
            <Remove onClick={() => SetQuantity('decrement')} />
            <Amount>{quantity}</Amount>
            <Add onClick={() => SetQuantity('increment')} />
          </AmountContainer>
          <Button onClick={AddToCart}>ADD TO CART</Button>
        </AddContainer>
      </ButtonFooter>
    </div>
  )
}
