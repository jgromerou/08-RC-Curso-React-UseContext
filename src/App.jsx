
import { Route, Routes } from 'react-router-dom'

import { SideBar } from './components/ui/SideBar'
import { NavBar } from './components/ui/NavBar'
import { ProductCreatePage } from './pages/products/ProductCreatePage'
import { ProductsPage } from './pages/products/ProductsPage'




function App() {


  return (
    <>
      <NavBar />
      <SideBar /> 
      <div className="content-wrapper">
        <Routes>
          <Route exact path='product' element={ <ProductsPage />} />
          <Route exact path='product-add' element={ <ProductCreatePage />} />
          <Route exact path='/' element={ <ProductsPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
