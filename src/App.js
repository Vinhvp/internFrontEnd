
import './App.css';
import './index.css'
import { useState, createContext, useEffect  } from "react";
import Home from './Pages/Homepage/homepage';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Product from './Pages/ProductPage/productpage';
import ProductDetailPage from './Pages/ProductDetailsPage/ProductDetailPage';
import ShoppingCartPage from './Pages/ShoppingCartPage/ShoppingCartPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Verify from './Pages/Verifypage/verify';
export const tool = createContext();
function App() {
  const [value, setValue] = useState('');
  const [dataCart, setdataCart] = useState([]);
  const [dataRecommend,setDataRecommend] = useState([]);
  const [email, setEmail] = useState('');
  
  let productLength = localStorage.getItem('productLength');
  
  return (
    
    <>
      <tool.Provider value = {{
        'search': setValue,
        'dataCart': setdataCart,
        'data': dataCart,
        'DataRecommend': setDataRecommend,
        'email': setEmail
      }}>
          <Header badge={Boolean(productLength) ? productLength : dataCart.length}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Product searchValue={value}/>} />
          <Route path="/product/:id" element={<ProductDetails dataRecommend={dataRecommend} />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path={`/account/verify/${localStorage.getItem('register')}`} element={<Verify email={email}></Verify>} />
        </Routes>
        <Footer />
      </tool.Provider>
      {/* <ProfilePage></ProfilePage>  */}

    
    {/* <Product/> */}
    {/* <ProductDetailPage></ProductDetailPage> */}
    {/* <ShoppingCartPage></ShoppingCartPage> */}
  </>
  )
}

export default App;
