import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import {userActions } from '../_actions'

const Home = () => {
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.authentication.loggedIn)
  
   useEffect(() => {
        if(!loggedIn)
          dispatch(userActions.logout())
    },[]);

  return (
      <div>
          <Announcement />
          <Navbar />
          <Slider/>
          <Products/>
          <Footer/>
      </div>
  )
}

export default Home  