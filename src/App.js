import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'animate.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';

import Home from './pages/mainContents/Home';
import WallArts from './pages/mainContents/WallArts';
import Furniture from './pages/mainContents/Furniture';
import Cars from './pages/mainContents/Cars';
import Cart from './pages/mainContents/Cart';
import BuyinPage from './pages/mainContents/BuyingPage';

import GiftCard from './pages/footerPages/GiftCard';
import About from './pages/footerPages/About';
import Contact from './pages/footerPages/Contact';
import Locations from './pages/footerPages/Locations';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddedToCart from './components/AddedToCart';

function App() {

  const Navlinks = [
    { 'to': '/wallArts', 'content': 'Wall Arts' },
    { 'to': '/furniture', 'content': 'Furniture' },
    { 'to': '/cars', 'content': 'Cars' },
    { 'to': '/cart', 'content': <i class="bi bi-cart fs-1 text"></i>}
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item)=>{

    let newCart = [...cart];
    newCart.push(item);
    setCart(newCart);
    setAddedToCart(true);
  }

  const removeFromCart = (item)=>{
    let newCart = cart.filter((eachItem)=>{
      return item.itemId !== eachItem.itemId;
    })
    setCart(newCart);
  }
  
  const [addedToCart, setAddedToCart] = useState(false);

  const removeAddedToCart = () =>{
    setAddedToCart(false);
  }

  return (

    <Router>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=BioRhyme:wght@700&display=swap');
      </style>

      <div className="App">
        <Navbar links={Navlinks} removeFunc = {removeAddedToCart} />
        
        <Switch>

        {addedToCart && <AddedToCart removeAddedToCart = {removeAddedToCart} /> }
          
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/wallArts'>
            <WallArts addToCart={addToCart}/>
          </Route>

          <Route path='/furniture'>
            <Furniture addToCart={addToCart} />
          </Route>

          <Route path='/cart'>
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </Route>

          <Route path='/cars'>
            <Cars addToCart={addToCart} />
          </Route>

          <Route path='/about'>
            <About/>
          </Route>

          <Route path='/contact'>
            <Contact/>
          </Route>

          <Route path='/locations'>
            <Locations/>
          </Route>

          <Route path='/giftCard'>
              <GiftCard addToCart={addToCart} />
          </Route>

           <Route path = '/buy'>
             <BuyinPage cart = {cart} setCart={setCart} />
           </Route> 
        </Switch>
        <Footer bgClass='bg-dark'/>

      </div>

    </Router>


  );
}

export default App;
