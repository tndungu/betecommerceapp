import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Announcement  from '../components/Announcement'
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../_actions/cart.actions";
import { userActions } from "../_actions/user.actions";
import { CartDetails } from "../components/CartDetails";

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

const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;

const Info = styled.div`
    flex:3
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

const Cart = () => {
    const cartItems = useSelector(state => state.carts)
    const loggedIn = useSelector(state => state.authentication.loggedIn)
    const dispatch = useDispatch();
    const [cartResponse,setCartResponse] = useState({})
    const [quantity,setQuantity,quantityRef] = useState(1)

    useEffect(() => {
        if(loggedIn){
            dispatch(cartActions.getCartItems())
        }else{
            dispatch(userActions.logout())
        }
    },[])

    let sum = 0
    cartItems?.items?.forEach(item => {
        sum += item.totalPrice
    });

    function checkoutNow(){
        dispatch(cartActions.createOrder())
    }

    



  return (
    <div>
        <Announcement />
        <Navbar/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Hr/>
                <Top>
                    <TopButton href="/">CONTINUE SHOPPING</TopButton>
                </Top>
                <Bottom>
                    <Info>
                      {
                          cartItems.items && cartItems.items.map((item) => (
                              <div>
                                 <CartDetails item={item} key={item.id}/> 
                             
                              <Hr/>
                              </div>
                          ))
                      }
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>R {Math.round((sum*100)/100).toFixed(2)}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Costs</SummaryItemText>
                            <SummaryItemPrice>R 0.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>R {Math.round((sum*100)/100).toFixed(2)}</SummaryItemPrice>
                        </SummaryItem>
                        <Button disable={sum} isDisabled={true} onClick={checkoutNow}>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        <Footer/>
    </div>
  ) 
}

export default Cart