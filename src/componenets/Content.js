import React from 'react'
import './main.css'


function Content({ item, addToCart, deleteFromCart }) {



  return (
    <>
   <div className='allProducts'>
    <div className='img1' >
    <img src='https://images.vegnonveg.com/resized/400X470/7595/m-j-flt-mvp-hbr-ss-crew-sailtaxi-631b35670d206.jpg' alt='img'/>
    <div className='overlay' >
    <h4>name: {item.name}</h4>
    <h4>description: {item.description}</h4>
    <h4>price: {item.price}</h4>
    <button className='c-btn' onClick={() =>{ addToCart(item.id)}}>ADD TO CART</button>
    <button className='r-btn' onClick={() =>{ deleteFromCart(item.id)}}>REMOVE FROM CART</button>
    <svg className='atc' class="V3C5bO" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
      </div> 
    
    </div>
    
    <div className='img2'>
    <img src='https://images.vegnonveg.com/resized/400X470/7594/m-j-flt-mvp-hbr-ss-crew-blacktaxi-631b34f782d80.jpg' alt='img'/>
    
    </div>

    <div>
    <img src='https://images.vegnonveg.com/resized/400X470/7560/w-j-spt-tunnel-pant-mars-stonesafety-orangesafety-orange-63120a7fd118b.jpg' alt='img'/>
    </div>



    </div>
    </>
  )
}

export default Content