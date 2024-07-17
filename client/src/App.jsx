import { useState, useContext } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { ProductListContext } from './context/ProductListContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [productList, setProductList] = useState([])

  const updateProductList = (newProduct) => {
    setProductList(newProduct)
  };
  const listData = { productList, updateProductList}

  return (
    <>
    <ProductListContext.Provider value={listData}>
      <BrowserRouter >
        <Header />
        <Main />
      </BrowserRouter>
      </ProductListContext.Provider>
      <Footer />
    </>
  )
}

export default App
