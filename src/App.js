
import './App.css';
import './index.css'
import Home from './Pages/Homepage/homepage';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Product from './Pages/ProductPage/productpage';
import ProductDetailPage from './Pages/ProductDetailsPage/ProductDetailPage';
import ShoppingCartPage from './Pages/ShoppingCartPage/ShoppingCartPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
function App() {
  return (
    <>
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product/>} />
      </Routes>
      <Footer /> */}
      <ProfilePage></ProfilePage> 

    
    {/* <Product/> */}
    {/* <ProductDetailPage></ProductDetailPage> */}
    {/* <ShoppingCartPage></ShoppingCartPage> */}
  </>
  )
}

export default App;
