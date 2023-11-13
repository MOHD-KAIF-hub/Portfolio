import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'

const AppRoutes = () => {
  return (
    <BrowserRouter>
<Routes>
    <Route path='/' element={<Dashboard/>}/>
</Routes>
    </BrowserRouter>
  )
}

export default AppRoutes