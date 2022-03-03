import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import {userActions } from '../_actions'

const Home = () => {

  const dispatch = useDispatch()
  
   useEffect(() => {
        console.log("start to logout")
        dispatch(userActions.logout())
        console.log("end logout")
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