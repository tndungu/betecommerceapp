import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import {userActions } from '../_actions'
import { accountService } from '../_services'
import { Alert } from '../components/Alert'

const Home = () => {
  const dispatch = useDispatch()
  
   useEffect(() => {

    const user = localStorage.getItem('user')
        if(user == null)
          dispatch(userActions.logout())
    },[]);

  return (
      <div>
        <Alert/>
          <Announcement />
          <Navbar />
          <Slider/>
          <Products/>
          <Footer/>
      </div>
  )
}

export default Home  