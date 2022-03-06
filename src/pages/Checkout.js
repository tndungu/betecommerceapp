import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Announcement  from '../components/Announcement'
import { mobile } from "../responsive";

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

const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;

const Info = styled.div`
    flex:1
`;

const Summary = styled.div`
    flex:3;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 20vh;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    
`;

const SummaryText = styled.span`
    color:#ee4507;
`;

const Checkout = () => {
  
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
                    <SummaryItem>
                            <SummaryText><b>Your order has been placed and a summary of the order details have been sent via email. Thank you for using our services.</b></SummaryText>
                        </SummaryItem>
                    </Summary>
                    <Info>
                    </Info>
                </Bottom>
            </Wrapper>
        <Footer/>
    </Container>
  ) 
}

export default Checkout