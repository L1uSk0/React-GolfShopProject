import { Routes, Route } from 'react-router'

import UserProvider from './providers/UserProvider.jsx'

import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/Register/Register.jsx'
import CreateItem from './components/createItem/CreateItem.jsx'
import './App.css'
import AuthGuard from './guards/AuthGuard.jsx'
import GuestGuard from './guards/GuestGuard.jsx'
import Logout from './components/logout/Logout.jsx'
import Catalog from './components/catalog/Catalog.jsx'
import ItemDetails from './components/details/ItemDetails.jsx'
import ItemEdit from './components/catalog/editItem/ItemEdit.jsx'


function App() {


  return (
    <>
      <UserProvider>

        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<Catalog />} />
          <Route path='/items/:itemId/details' element={<ItemDetails />} />
          <Route element={<GuestGuard />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route element={<AuthGuard />}>
            <Route path='/items/create' element={<CreateItem />} />
            <Route path="/items/:itemId/edit" element={<ItemEdit />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
        <Footer />
      </UserProvider>
    </>
  )
}

export default App
