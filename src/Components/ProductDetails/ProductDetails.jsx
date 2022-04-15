import React from 'react';
import * as styled from './ProductDetail.styled';
import CircleIcon from '@mui/icons-material/Circle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Button from '../Button/Button';
import Comment from '../Comment/Comment';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import {data} from './dataRecommend';
const recommendData = data.map((e)=>{
    return(
        <styled.RecommendItem>
            <img src={e.img}></img>
            <div>{e.title}</div>
        </styled.RecommendItem>
    )
})

const ProductDetails = () => {
    return ( 
        <>
            <styled.ProductDetails>
                <p>Ladies/Dresses/Collete Stretch Linen Minidress</p>
                <styled.Detail>
                    <styled.Detail1>
                        <div>
                            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        </div>
                        <div>
                        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />

                        </div>
                        <div>
                        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />

                        </div>
                        <div>
                        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />

                        </div>
                    </styled.Detail1>
                    <styled.Detail2>
                        <img src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'>

                        </img>
                        <div>
                            <h1>Collete Stretch Linen Minidress</h1>
                            <span>$69.00</span>
                            <div style={{marginBottom:'0'}}>
                                <StarIcon style={{width: '16px', height: '15px' , fill:'yellow'}}/>
                                <StarIcon style={{width: '16px', height: '15px', fill:'yellow'}}/>
                                <StarIcon style={{width: '16px', height: '15px', fill:'yellow'}}/>
                                <StarIcon style={{width: '16px', height: '15px', fill:'yellow'}}/>
                                <StarBorderIcon style={{width: '16px', height: '15px'}}/>
                                <p>0 Review</p>
                            </div>
                            <div  style={{marginTop:'9px'}}>
                                <b>Size</b>
                                <div>
                                    <styled.Size bgcolor='var(--pale-orange)' color='var(--white)'>
                                    S
                                    </styled.Size>
                                    <styled.Size bgcolor='var(--white-two)' color='var(--dark-grey)'>
                                    M
                                    </styled.Size >
                                    <styled.Size bgcolor='var(--white-four)' color='var(--greyish-brown)'>
                                    L
                                    </styled.Size >
                                </div>
                            </div>
                            <div>
                                <b>Color</b>
                                <div>
                                    <CircleIcon style={{width:'30px',
                                    height: '30px',
                                    color: '#ff5f6d',
                                    marginRight:'10px'
                                    }}/>
                                    <CircleIcon style={{width:'30px',
                                    height: '30px',
                                    color: 'var(--light-gold-40)',
                                    marginRight:'10px'
                                    }}/>
                                    <CircleIcon style={{width:'30px',
                                    height: '30px',
                                    color: 'var(--cornflower-40)',
                                    marginRight:'10px'
                                    }}/>
                                    <CircleIcon style={{width:'30px',
                                    height: '30px',
                                    color: 'var(--pale-orange-40)',
                                    marginRight:'10px'
                                    }}/>
                                    <CircleIcon style={{width:'30px',
                                    height: '30px',
                                    color: 'rgba(61, 61, 63, 0.5)',
                                    marginRight:'10px'
                                    }}/>
                                    <CircleIcon style={{width:'30px',
                                    height: '30px',
                                    color: 'rgba(237, 237, 237, 0.5)',
                                    }}/>
                                </div>
                            </div>
                            <div style={{display: 'flex', justifyContent:'flex-start', alignItems:'center', marginBottom:'40px'}}>
                                <b>Quantity</b>
                                <styled.Quantity>
                                    <button>-</button>
                                    <h5>1</h5>
                                    <button>+</button>
                                </styled.Quantity>
                            </div>
                            <div style={{marginBottom:'26px'}}>
                                <Button name='Add to cart' w='429px' h='50px' bgcolor='#5f6dff' color='var(--white)'>

                                </Button>
                            </div>
                            <hr></hr>
                            <section style={{margin:'0', display: 'flex', flexDirection:'column'}}>
                                <div style={{fontWeight: 'bold'}}>Model wearing size S</div>
                                <div>-Chest: 36"</div>
                                <div>-Length: 25.75"</div>
                            </section>
                        </div>
                    </styled.Detail2>
                    <styled.Detail3>
                        <div style={{height: '50px'}}>
                            <span>More from <span style={{color:'var(--greyish-brown)', fontSize:'12px'}}>Zara</span></span>
                        </div>
                        <div>
                        <img src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'></img>
                        </div>
                        <div>
                            <img src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'>

                            </img>
                        </div>
                        <div>
                            <img src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'>

                            </img>
                        </div>
                        <div>
                            <img src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'>

                            </img>
                        </div>
                    </styled.Detail3>
                </styled.Detail>
                <styled.ReviewTable>
                    <nav>Review</nav>
                    <div style={{marginTop: '28px'}}>
                        <styled.Review>
                            <section>
                                <b style={{marginTop: '21px'}}>You</b>
                                <div>
                                    <form action="">
                                        <input placeholder='TITLE'></input>
                                        <input placeholder='Add your comment here..'></input>
                                        <div>
                                            <div style={{width: '130px',  display: 'flex', flexDirection:'column'}}>
                                                <span>*Rating for us</span>
                                                <div style={{width:'80px'}}>
                                                    <StarIcon style={{width: '16px', height: '15px' , fill:'yellow'}}/>
                                                    <StarIcon style={{width: '16px', height: '15px', fill:'yellow'}}/>
                                                    <StarIcon style={{width: '16px', height: '15px', fill:'yellow'}}/>
                                                    <StarIcon style={{width: '16px', height: '15px', fill:'yellow'}}/>
                                                    <StarBorderIcon style={{width: '16px', height: '15px'}}/>
                                                </div>
                                            </div>
                                            <div>
                                                <Button name='Submit' w='120px' h='35px' bgcolor='var(--pale-orange)' color='var(--white)'/>
                                            </div>


                         
                             
                                       </div>
                                    </form>
                                </div>
                            </section>
                            
                            <Comment></Comment>
                            <Comment></Comment>
                            <Comment ></Comment>
                            <div className="bread">
                                <styled.breadcrumbs>
                                    <ArrowLeftIcon></ArrowLeftIcon>
                                    <div>1 / 100</div>
                                    <ArrowRightIcon></ArrowRightIcon>
                                </styled.breadcrumbs>
                            </div>
                            <div className="bread_top">
                                <styled.breadcrumbs>
                                    <ArrowLeftIcon></ArrowLeftIcon>
                                    <div>1 / 100</div>
                                    <ArrowRightIcon></ArrowRightIcon>
                                </styled.breadcrumbs>
                            </div>
                        </styled.Review>
                    </div>
                    
                </styled.ReviewTable>
                <styled.RecommendList>
                    <nav>You may also like</nav>
                    <div className='RecommendList'>
                        {recommendData}
                    </div>
                </styled.RecommendList>
            </styled.ProductDetails>

        </>
     );
}
 
export default ProductDetails;