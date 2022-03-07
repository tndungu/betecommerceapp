import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Announcement  from '../components/Announcement'
import { Add, Delete, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../_actions/cart.actions";
import { userActions } from "../_actions/user.actions";
import { Badge, IconButton, Menu } from '@material-ui/core';


export const CartDetails = (item) => {
    

    const Container = styled.div``;

    const Wrapper = styled.div`
        padding:20px;
        ${mobile({padding:"10px"})}
    `;
    
    const Title = styled.h1`
        font-weight:300;
        text-align: center;
    `;
    
    const Top = styled.div`
        display: flex;
        align-items: center;
        justify-content:space-between;
        padding: 20px;
    `;
    
     const TopButton = styled.a`
        margin: 5px 0px;
        font-size: 16px;
        text-decoration: underline;
        cursor: pointer;
    `; 
    
    
    const TopTexts = styled.div`
    ${mobile({diplay:"none"})}
    `;
    const TopText = styled.span`
        text-decoration: underline;
        cursor: pointer;
        margin: 0px 10px;
    `;
    
    const Bottom = styled.div`
        display:flex;
        justify-content: space-between;
        ${mobile({flexDirection:"column"})}
    `;
    
    const Info = styled.div`
        flex:3
    `;
    
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
    
    const ProductId = styled.span``;
    
    const ProductColor = styled.div`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${props => props.color};
    `;
    
    const ProductSize = styled.span``;
    
    const PriceDetail = styled.div`
        flex: 1;
        display:flex;
        padding:10px;
        flex-direction: column;
        align-items: center;
        justify-content: start;
    `;
    
    const ProductAmountContainer = styled.div`
        display: flex;
        align-items: center;
        margin-bottom:20px;
    `;
    
    const ProductAmount = styled.div`
        font-size: 24px;
        margin:5px;
        ${mobile({margin:"5px 15px"})}
    `;
    
    const ProductPrice = styled.div`
        font-size: 30px;
        font-weight: 200;
        ${mobile({marginBottom:"20px"})}
    `;
    
    const Hr = styled.hr`
        background-color: #eee;
        border: none;
        height: 1px;
    `;
    const Summary = styled.div`
        flex:1;
        border: 0.5px solid lightgray;
        border-radius: 10px;
        padding: 20px;
        height: 50vh;
    `;
    
    const SummaryTitle = styled.h1`
        font-weight: 200;
    `;
    
    const SummaryItem = styled.div`
        margin: 30px 0px;
        display: flex;
        justify-content: space-between;
        font-weight: ${props => props.type === "total" && "500"};
        font-size: ${props => props.type === "total" && "24px"};
    `;
    
    const SummaryItemText = styled.span``;
    
    const SummaryItemPrice = styled.span``;
    
    const Button = styled.button`
        width: 100%;
        padding: 10px;
        background-color: black;
        color: white;
        font-weight: 600;
        cursor:${props => props.disable == 0 ? "not-allowed": "pointer"};
    `;
    
    
    const ProdSpan = styled.span`
        padding-left:5px;
    `;
    
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
${mobile({width:"100%"})}
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
const cartItems = useSelector(state => state.carts)
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
        <Image src={`/image/${item.imageId}` }/>
        <Details>
            <ProductName><b>Product:</b> <ProdSpan> {item.productName}</ProdSpan> </ProductName>
            <ProductName><b>Total Price:</b><ProdSpan> {(Math.round((item.totalPrice*100)/100)).toFixed(2)} </ProdSpan></ProductName>
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
