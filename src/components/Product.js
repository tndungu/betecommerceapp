import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { popularProducts } from "../data"
import { mobile } from "../responsive"
import "../css/product.css"

// const Info = styled.div`
//     opacity: 0;
//     width:100%;
//     height:100%;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-color:rgba(0,0,0,0.2);
//     z-index: 3;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: all 0.5s ease;
//     cursor: pointer;
// `;





// const Circle = styled.div`
//     width: 200px;
//     height: 200px;
//     border-radius:50%;
//     background-color: white;
//     position: absolute;
// `

// const Icon = styled.div`
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     background-color: white;
//     diplay: flex;
//     align-items: center;
//     justify-content: center;
//     margin:10px;
//     transition: all 0.5s ease;

//     &:hover{
//         background-color:#e9f5f5;
//         transform: scale(1.1);
//     }
// `;
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

export const Product = (item) => {
  return (
    <div className="product-container">
            <img className="image-style" src="/image/3.png" alt="image"/>
            <ProductName>Beautiful dress longsleeve by angie autiful dress longsleeve by angie</ProductName>
            <ProductAmount>R 300.00</ProductAmount>
    </div>
  )
}
