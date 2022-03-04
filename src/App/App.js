import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import '../App.css';
import Home from '../pages/Home';
import { history } from '../_helpers';
import ProductList from '../pages/ProductList';
import Product from '../pages/Product';
import { Register } from '../pages/Register';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from '../_actions';
import {BrowserRouter as Router} from 'react-router-dom'
import Checkout from '../pages/Checkout';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer,toast } from 'react-toastify';


const App = () => {
  const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
   console.log("APP LOADING")
  }, []);

  return (
    <div>
{
  alert.message && 
  toast.success(alert.message,{
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })

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
