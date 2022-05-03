import React, {useEffect, useContext,useState} from 'react';
import * as styled from './ShoppingCart.styled';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '../Button/Button';
import {tool} from '../../App';
const axios = require('axios');
const ShoppingCart = (props) => {
    const cartItem = useContext(tool);
    const cartLocal = JSON.parse(localStorage.getItem('cart'));
    if(Boolean(cartLocal))
    {var total = cartLocal.reduce((ammu,current)=>{
        return (current.price*current.quantity + ammu);
    },0)
    
    var dataRender = cartLocal.map((e,i)=>{
        return(
            <styled.cartListItem>
                <div>
                    <img src={e.img} alt="" />
                    <div className='cartListTitle'>
                        <div>{e.title}-${e.price}.00</div>
                        <div style={{width:'120px'}}>
                            <button>change |</button>
                            <button>remove</button>
                        </div>
                    </div>
                </div>
                <div>
                <svg data-testid="CircleIcon" style={{width:'30px',
                    height: '30px',
                    backgroundColor: e.color,
                    borderRadius: '50%',
                    marginRight:'10px'
                    }}></svg>
                </div>
                <div className='Size'>{e.size}</div>
                <div>
                    <styled.Quantity>
                        <button >-</button>
                        <h5>{e.quantity}</h5>
                        <button>+</button>
                    </styled.Quantity>
                </div>
                <div className='Amount'>{e.quantity}</div>
            </styled.cartListItem>
        )
    })}
    const checkOutHandle = () =>{
        console.log('checkout');
        const date = new Date().toDateString();
        axios.post('http://localhost:7000/admin//updateOrders/post',{
            data: localStorage.getItem('cart'),
            date: date
        })
    }
    return ( 
        <>
        <styled.ShoppingCart>
            <h1>My Bag</h1>
            <div className='cartContainer'>

                    <div className='cart_list'>
                        <div className='cart_list_name'>
                            <div className='cart_title'>Product</div>
                            <div className='cart_title'>Color</div>
                            <div className='cart_title'>Size</div>
                            <div className='cart_title'>Quantity</div>
                            <div className='cart_title'>Amount</div>
                        </div>
                        
                    {dataRender}
                    </div>
                    <div className='cart_total'>
                        <div className='cart_title'>Total</div>
                        <div className='cart_total_box' style={{marginBottom: '13px'}}>
                            <div className='cart_total_box_price'>
                                <p>Shipping & Handling</p>
                                <p>Free</p>
                            </div>
                            <div className='cart_total_box_price'>
                                <p>Total product</p>
                                <p>${Boolean(total)?total:0}.00</p>
                            </div>
                            <hr></hr>
                            <div className='cart_total_box_price'>
                                <p style={{fontWeight:'bold'}}>Subtotal</p>
                                <p style={{fontWeight:'bold'}}>${Boolean(total)?total:0}.00</p>
                            </div>
                        </div>
                        {dataRender ? (<Button name='Check out' onClick={checkOutHandle} bgcolor='#ff5f6d' w='330px' h='49px' color='var(--white-two)'></Button>):(<Button name='Check out' bgcolor='grey' w='330px' h='49px' color='var(--white)' disabled='disabled'></Button>)}
                    </div>

            </div>
        </styled.ShoppingCart>
        </>
     );
}
 
export default ShoppingCart;