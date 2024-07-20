import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { ProductListContext } from './context/ProductListContext';
import { UserContext } from './context/UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [productList, setProductList] = useState([])
  const [user, setUser] = useState([])

  const updateProductList = (newProduct) => {
    setProductList(newProduct)
  };
  const listData = { productList, updateProductList }

  const updateUserData = (newUser) => {
    setUser(newUser)
  };
  const UserData = { user, updateUserData }

  return (
    <>
      <UserContext.Provider value={UserData}>
        <ProductListContext.Provider value={listData}>
          <BrowserRouter >
            <Header />
            <Main />
          </BrowserRouter>
        </ProductListContext.Provider>
      </UserContext.Provider>
      <Footer />
    </>
  )
}

export default App
