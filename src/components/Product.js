import { useDispatch,useSelector } from "react-redux";
import { userActions } from "../_actions";
import { Add, Remove } from "@material-ui/icons";
import "../css/product.css"
import { cartActions } from "../_actions/cart.actions";
import useState from 'react-usestateref'

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
      <div className="btn-footer">
        <div className="amt-wrap">
          <span className="prod-name">{prod.name}</span>
          <span>R {(Math.round(prod.price * 100) / 100).toFixed(2)}</span>
        </div>
        <div className="add-container">
          <div className="amt-container">
            <Remove onClick={() => SetQuantity('decrement')} />
            <span className="amount">{quantity}</span>
            <Add onClick={() => SetQuantity('increment')} />
          </div>
          <button className="btn-add" onClick={AddToCart}>ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}
