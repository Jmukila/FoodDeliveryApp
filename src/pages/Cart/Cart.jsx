import React, { useContext} from 'react';
import { StoreContext } from '../../context/StoreContext';
import{ useNavigate} from 'react-router-dom';
import './Cart.css';

function Cart() {
    const { cartItems, food_list, removeFromCart ,getTotalCartAmount} = useContext(StoreContext);

    const navigate=useNavigate();
    // Calculate the subtotal based on cartItems
    const subtotal = food_list.reduce((sum, item) => {
        const quantity = cartItems[item._id] || 0;
        return sum + item.price * quantity;
    }, 0);

    const deliveryFee = 2;
    const total = subtotal + deliveryFee;

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-title'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br/>
                <hr/>
                {food_list.map((item, index) => {
                    const quantity = cartItems[item._id] || 0;
                    if (quantity > 0) { // contains some product with that id
                        return (
                            <div key={item._id}>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{quantity}</p>
                                    <p>${item.price * quantity}</p>
                                    <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cart-total-details">
                        <p>Delivery fee</p>
                        <p>${getTotalCartAmount()===0?0:2}</p>
                    </div>
                    <hr/>
                    <div className="cart-total-details">
                        <b>Total</b>
                        <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2 }</b>
                    </div>
                    <hr/>
                    <button onClick={()=>navigate('/Order')}>Proceed to checkout</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, enter it here</p>
                        <div className='cart-promocode-input'>
                            <input type='text' placeholder='Enter Promo code'/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
