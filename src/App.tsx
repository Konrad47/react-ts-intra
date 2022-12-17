import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Menu from './components/Menu'
import AddItem from './pages/AddItem'
import EditItem from './pages/EditItem'
import Home from './pages/Home'
import SingleItem from './pages/SingleItem'

function App() {

  return (
    <>
    <Menu />
    <Routes>
    <Route index element={<Home />}></Route>
    <Route path='/:id' element={<SingleItem />}></Route>
    <Route path='/add' element={<AddItem />}></Route>
    <Route path='/edit/:id' element={<EditItem />}></Route>
    </Routes>
    </>
  )
}

export default App
