import { BrowserRouter as Router, Route, Routes, json } from 'react-router-dom'
import Login from './Login';
import Reg from './Reg';
import Producet from './Producet';
import Admindeshboard from './Admindeshboard';
import Header from './Header';
import Footer from './Footer';
import { Contextapi } from './Contextapi';
import { useEffect, useState } from 'react';
import Left from './Left';
import Adminproducet from './Adminproducet';
import Adminaddprocudet from './Adminaddproducet';
import Adminupdateproduct from './Adminupdateproduct';
import Cart from './Cart';
import MYORDER from './Myorder';




function App() {
  const [loginname, setloginname] = useState(localStorage.getItem('loginname'))
  const [cart, setCart] = useState('')
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return (
    <Router>
      <Contextapi.Provider value={{ loginname, setloginname, cart, setCart }}>
        <Header />
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Reg' element={<Reg />}></Route>
          <Route path='/product' element={<Producet />}></Route>
          <Route path='/deshboard' element={<Admindeshboard />}></Route>
          <Route path='/adminproducet' element={<Adminproducet />}></Route>
          <Route path='/addproducet' element={<Adminaddprocudet />}></Route>
          <Route path='/producatupdateform/:id' element={<Adminupdateproduct />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/myorder' element={<MYORDER />}></Route>


        </Routes>
        <Footer />
      </Contextapi.Provider>
    </Router>

  );
}

export default App;