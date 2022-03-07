import styled from "styled-components"
import { Add, Remove } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../_actions/cart.actions";
import { userActions } from "../_actions/user.actions";

export const CartDetails = (item) => {
    
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    height:30vh;
    visibility: ${props => props.show == true && "hidden"};
`;

const ProductDetail = styled.div`
    flex: 3;
    display: flex;
`;

const Image = styled.img`
    width: 40%;
`;

const Details = styled.div`
    padding:10px;
    diplay: flex;
    flex-direction: column;
    justify-content:space-around;
`;

const ProductName = styled.span`
    display:flex;
    flex:wrap;
    font-weight:500;
    padding:5px;
    
`;
    
const PriceDetail = styled.div`
    flex: 1;
    display:flex;
    padding:10px;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`;

const ProdSpan = styled.span`
    padding-left:5px;
`;

const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight: 700;
`;

const CartButton = styled.button`
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
const RemoveButton = styled.button`
padding: 10px;
border: 2px solid teal;
background-color: #eed4d4;
cursor: pointer;
font-weight: 500;
margin: 5px;
&:hover{
    background-color: #f28e8e;
}
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

item = item.item
    const loggedIn = useSelector(state => state.authentication.loggedIn)
    const dispatch = useDispatch();
    const [quantity,setQuantity,quantityRef] = useState(item.quantity)

    const SetQuantity = (val) =>{
      
        if(val == 'increment')
          setQuantity(quantity + 1)
        else{
          if(quantity>1){
            setQuantity(quantity - 1)
          }
        }
      }
    
      const UpdateCart = () => {
        if (loggedIn){
          dispatch(cartActions.updateCart({ProductId:item.productId,Quantity:quantity}))
        }
        else {
          dispatch(userActions.logout())
        }
      }
      const RemoveFromCart = () => {
        if (loggedIn){
          dispatch(cartActions.removeCartItem(item.productId))
        }
        else {
          dispatch(userActions.logout())
        }
      }

  return (
      <Product>
          <ProductDetail key={item.id}>
              <Image src={`/image/${item.imageId}`} />
              <Details>
                  <ProductName><b>Product:</b> <ProdSpan> {item.productName}</ProdSpan> </ProductName>
                  <ProductName><b>Total Price:</b><ProdSpan> {(Math.round((item.totalPrice * 100) / 100)).toFixed(2)} </ProdSpan></ProductName>
              </Details>
              <Details>
                  <ProductName><b>Quantity:</b> </ProductName>
                  <AmountContainer>
                      <Remove onClick={() => SetQuantity('decrement')} />
                      <Amount>{quantity}</Amount>
                      <Add onClick={() => SetQuantity('increment')} />
                  </AmountContainer>
                  <CartButton onClick={UpdateCart}>UPDATE CART</CartButton>
              </Details>
          </ProductDetail>
          <PriceDetail>
              <RemoveButton onClick={RemoveFromCart}>Remove from Cart</RemoveButton>
          </PriceDetail>
      </Product>
  )
}
