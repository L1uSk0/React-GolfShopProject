import { Routes, Route } from 'react-router'

import './App.css'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/Register/Register.jsx'
import CreateItem from './components/createItem/CreateItem.jsx'


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/items/create' element={<CreateItem />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
