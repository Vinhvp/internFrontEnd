import React, {useEffect, useContext} from 'react';
import * as styled from './ShoppingCart.styled';
import CircleIcon from '@mui/icons-material/Circle';

import Button from '../Button/Button';
import {tool} from '../../App';
const ShoppingCart = (props) => {
    const cartItem = useContext(tool);
    let total = cartItem.data.reduce((ammu,current)=>{
        return (current.price*current.quantity + ammu);
    },0)
   
    
 
    const dataRender = cartItem.data.map((e)=>{
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
                <CircleIcon style={{width:'30px',
                        height: '30px',
                        color: '#ff5f6d',
                        }}/>
                </div>
                <div className='Size'>{e.size}</div>
                <div>
                    <styled.Quantity>
                        <button>-</button>
                        <h5>1</h5>
                        <button>+</button>
                    </styled.Quantity>
                </div>
                <div className='Amount'>{e.quantity}</div>
            </styled.cartListItem>
        )
    })
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
                                <p>${total}.00</p>
                            </div>
                            <hr></hr>
                            <div className='cart_total_box_price'>
                                <p style={{fontWeight:'bold'}}>Subtotal</p>
                                <p style={{fontWeight:'bold'}}>${total}.00</p>
                            </div>
                        </div>
                        <Button name='Check out' bgcolor='#ff5f6d' w='330px' h='49px' color='var(--white-two)'></Button>
                    </div>

            </div>
        </styled.ShoppingCart>
        </>
     );
}
 
export default ShoppingCart;