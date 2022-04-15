import React from 'react';
import * as styled from './ShoppingCart.styled';
import CircleIcon from '@mui/icons-material/Circle';
import {data} from './dataShop';
import Button from '../Button/Button';
const dataRender = data.map((e)=>{
    return(
        <styled.cartListItem>
            <div>
                <img src={e.img} alt="" />
                <div className='cartListTitle'>
                    <div>{e.title}</div>
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
            <div className='Amount'>${e.amount}</div>
        </styled.cartListItem>
    )
})
const ShoppingCart = () => {
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
                                <p>$69.00</p>
                            </div>
                            <hr></hr>
                            <div className='cart_total_box_price'>
                                <p style={{fontWeight:'bold'}}>Subtotal</p>
                                <p style={{fontWeight:'bold'}}>$69.00</p>
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