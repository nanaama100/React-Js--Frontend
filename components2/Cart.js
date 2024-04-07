import React,{useState} from 'react';
import { useEffect } from 'react';
import "./cart.css";

const Cart = ({cart, setCart, handleChange}) => {

    const[textPop, setTextPop] = useState(false)

    const handlePopup=()=>{
        setTextPop(true);
    };

    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <article>
        {textPop && <p id='Pop-Up-Message'>
                Thankyou for ordering at Fiat Café😊. <br/>
                Your order has been recieved and will be ready shortly.
        </p>}
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p id='TitleMenu'>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>${price}</span>
            <button id='Purchase-button' onClick={handlePopup}>Order Now</button>
        </div>
    </article>
  )
}

export default Cart