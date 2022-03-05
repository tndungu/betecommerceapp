import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import '../App.css';
import Home from '../pages/Home';
import { history } from '../_helpers';
import Product from '../pages/Product';
import { Register } from '../pages/Register';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import Checkout from '../pages/Checkout';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer,toast } from 'react-toastify';
import {alertProps} from './alertProps'


const App = () => {
  const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
  }, []);

  const toastMessage = (type) => {
    if(type == 'success'){
      return toast.success(alert.message,alertProps)
    }else{
      return toast.error(alert.message,alertProps)
    }
  }

  return (
    <div>
{
  alert.message && toastMessage(alert.type)
}
 <ToastContainer />

      <Router history={history}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product" element={<Product />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
