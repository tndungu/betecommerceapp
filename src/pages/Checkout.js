import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Announcement  from '../components/Announcement'
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../_actions/cart.actions";

//import img from '../image/0000015.jpg'

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

// const TopButton = styled.a`
//     padding: 10px;
//     font-weight: 600;
//     cursor: pointer;
//     border: ${props => props.type === "filled" && "none"};
//     background-color: ${props => props.type === "filled" ? "black" : "transparent"};
//     color: ${props => props.type === "filled" && "white"};
// `;

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
    
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 50%;
`;

const Details = styled.div`
    padding:20px;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
`;

const ProdSpan = styled.span`
    padding-left:5px;
`;


const Checkout = () => {
    const cartItems = useSelector(state => state.carts)
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))
    const [cartResponse,setCartResponse] = useState({})

    useEffect(() => {
        if(user !== null){
            dispatch(cartActions.getCartItems(user.id))
        }
    },[])

    let sum = 0
    cartItems?.items?.forEach(item => {
        sum += item.totalPrice
    });

  return (
    <Container>
        <Announcement />
        <Navbar/>
            <Wrapper>
                <Title>YOUR ORDER</Title>
                <Top>
                    <TopButton href="/">CONTINUE SHOPPING</TopButton>
                </Top>
                <Bottom>
                
                    <Summary>
                        
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Order Number</SummaryItemText>
                            <SummaryItemPrice>R {}</SummaryItemPrice>
                        </SummaryItem>
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
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        <Footer/>
    </Container>
  ) 
}

export default Checkout