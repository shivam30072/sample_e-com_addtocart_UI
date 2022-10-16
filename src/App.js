import React, { useEffect, useState } from "react";
import Navbar from "./componenets/Navbar";
import Content from "./componenets/Content";
import logo from './img/logo.jpg';
import { data } from "./Data/info";

function App() {

  const [cartProducts, setCartProducts] = useState([]);


// onclick function on remove from cart button
// deletion from cart 
// first it adds the product dont't know why then it deletes all elements from carts 
  const deleteFromCart = (id) => {
    const deleteItem = cartProducts.filter(item => item.id !== id)
    setCartProducts(deleteItem)
    console.log(cartProducts);
  }


  // onclick function on add to cart button 
  // works after 2 clicks don't know why
  // data shows only in console
  const addToCart = (id) => {
       
       const addItem = data.filter(item => item.id === id)
      //  console.log(addItem)
      setCartProducts([...cartProducts, ...addItem])
      console.log(cartProducts);
  }

  return (
    <div className="App">
      <img className="logo" src={logo} alt = 'logo' />
    <br></br>
       
       <Navbar />
       <br></br>
       {data.map(item => (
         <Content item ={item} addToCart = {addToCart} deleteFromCart = {deleteFromCart} />
       ))}
       
      
       
    </div>
  );
}

export default App;
