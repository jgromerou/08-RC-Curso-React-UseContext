
import { Route, Routes } from 'react-router-dom'

import { SideBar } from './components/ui/SideBar'
import { NavBar } from './components/ui/NavBar'
import { ProductCreatePage } from './pages/products/ProductCreatePage'
import { ProductsPage } from './pages/products/ProductsPage'
import { ProductListPage } from './pages/products/ProductListPage'



function App() {


  return (
    <>
      <NavBar />
      <SideBar /> 
      <div className="content-wrapper">
        <Routes>
          <Route exact path='product' element={ <ProductsPage />} />
          <Route exact path='product-add' element={ <ProductCreatePage />} />
          <Route exact path='product-list' element={ <ProductListPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
