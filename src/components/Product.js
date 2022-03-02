import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions,productActions } from "../_actions";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import { popularProducts } from "../data"
import { mobile } from "../responsive"
import "../css/product.css"

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
  const [quantity,setQuantity] = useState(1)
  const [cartRequest,setCartRequest] = useState({
    ProductId: prod.id,
    quantity: quantity,
    UserId: 0
  })

  const dispatch = useDispatch()
  const DecrementQuantity = () =>{
    if(quantity > 1)
      setQuantity(quantity - 1)
  }

  const IncrementQuantity = () =>{
    setQuantity(quantity + 1)
  }

  const AddToCart = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log("logged in user is",user)
    if (user === null){
      dispatch(userActions.logout())
    }
    else {
      setCartRequest({
        ProductId: prod.id,
        quantity: quantity,
        UserId: user.id
      })
      console.log("cartRequest is",cartRequest)
      dispatch(productActions.addToCart(cartRequest))
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
            <Remove onClick={DecrementQuantity} />
            <Amount>{quantity}</Amount>
            <Add onClick={IncrementQuantity} />
          </AmountContainer>
          <Button onClick={AddToCart}>ADD TO CART</Button>
        </AddContainer>
      </ButtonFooter>
    </div>
  )
}
