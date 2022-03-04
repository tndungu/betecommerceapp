import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge, IconButton, Menu } from '@material-ui/core';
import {mobile } from "../responsive";
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../_actions/cart.actions';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    height:50px;
    ${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content: space-between;
${mobile({padding:"10px 0px"})}
`;

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`;

const Input = styled.div`
    border:none;
    width: 200px;
    ${mobile({width:"50px"})}
`;
const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight:bold;
    text-align:center;
    ${mobile({fontSize:"24px"})}
`;

const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content: flex-end;
${mobile({flex: 2,justifyContent:"center"})}
`;

const MenuItem = styled.div`
font-size:14px;
margin-left:25px;
${mobile({fontSize:"12px", marginLeft:"10px"})}
`;

const Link = styled.a`
font-size:14px;
margin-left:25px;
${mobile({fontSize:"12px", marginLeft:"10px"})}
`;
const Navbar = () => {

    const email = useSelector(state => state.authentication.user.email)
    const dispatch = useDispatch()
    const cartItemsCount = useSelector(state => state.addCart.cartItems)
    var navigate = useNavigate()
    // useEffect(() =>{
    //     dispatch(cartActions.getCartItemsCount(userid))
      
    // },[])
    
  return (
    <Container>
        <Wrapper>
        <Left>
            <SearchContainer>
                <Input placeholder="Search"/>
                <Search style={{color:"gray",fontSize:16}}/>
            </SearchContainer>
        </Left>
        <Center><Logo> BET</Logo>
        </Center>
              <Right>
                  <MenuItem>Welcome: <b>{email}</b></MenuItem>
                  <Link href="../login"><b>Sign Out</b></Link>
                  <MenuItem>
                      <IconButton onClick={() => {navigate('/cart')}}>
                          <Badge badgeContent={cartItemsCount} color="primary">
                              <ShoppingCartOutlined />
                          </Badge>
                      </IconButton>
                  </MenuItem>
              </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar