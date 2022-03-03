import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge, Menu } from '@material-ui/core';
import {mobile } from "../responsive";

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

    const [user,setUser] = useState({})
    const [email,setEmail] = useState('')

    useEffect(() =>{
        setUser(JSON.parse(localStorage.getItem('user')))
        if(user !== null)
            setEmail(user.email)
      
    },[])

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
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
            </MenuItem>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar