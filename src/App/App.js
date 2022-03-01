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
import { Alert } from 'bootstrap';

const App = () => {
  const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });
  }, []);

  return (
    
  <Router history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      </Router>
  )
}

export default App;
