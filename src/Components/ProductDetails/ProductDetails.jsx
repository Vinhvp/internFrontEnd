import React, {useState, useContext, useEffect} from 'react';
import * as styled from './ProductDetail.styled';
import CircleIcon from '@mui/icons-material/Circle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Button from '../Button/Button';
import Comment from '../Comment/Comment';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {useParams} from 'react-router-dom';
import {tool} from '../../App';
const axios = require('axios');
//get API
var dataDetails = [];
let dataApi = 'http://localhost:7000/productDetails/get';
async function fetchAPI(){
    const res = await fetch(dataApi);
    return await res.json();
}
fetchAPI().then(data => {dataDetails = data.map(e => e)})
const ProductDetails = (props) => {
    const setData = useContext(tool);
    const [size, setSize] = useState('S');
    
    let { id } = useParams();
    const dataRecomends = props.dataRecommend.filter((data)=> data['id'] != id);
  
    const recommendData = dataRecomends.map((e,i)=>{
        return ( (i<8) &&
        (<styled.RecommendItem>
            <img src={e.img}></img>
            <div>{e.title}</div>
        </styled.RecommendItem>))
    })
    const moreFrom = dataRecomends.map((e,i)=>{
        return (
            (i < 4) && (
                <div>
                    <img src={e.img}></img>
                </div>
        )
    )})
    let detailProduct = dataDetails.filter((data) => data['id'] == id);
   
    const getProduct = () =>{
        {Boolean(localStorage.getItem('token')) && localStorage.setItem("productLength", parseInt(localStorage.getItem("productLength"))+1);}
        
        
        let item = { "img": `${detailProduct[0].img}`,
        "title": `${detailProduct[0].title}`,
        "id": `${detailProduct[0].id}`,
        "price": `${detailProduct[0].price}`,
        "quantity": `${quantity}`,
        "size": `${size}`
        }
        axios({
            method: 'post',
            url: 'http://localhost:7000/account/productDetails',
            data: {
            "user": localStorage.getItem('user'),
            "id": `${detailProduct[0].id}`,
            "quantity": `${quantity}`,
            "size": `${size}`
            }
        })
        
        setData.dataCart(prevState => {
            return [...prevState, item];
        }
        

            
        )

    }
    
    const [quantity, setQuantity] = useState(1);
    const getSize =(e)=>{
        setSize(e.target.value);
    }
   

    const incrementClick = () => {
        setQuantity(quantity+1);
    }
    const decrementClick = () => {
        if(!(quantity <= 1)){
            setQuantity(quantity-1);
        }
    }
   
    return ( 
        <>
            <styled.ProductDetails>
                <p>Ladies/Shirts</p>
                <styled.Detail>
                    <styled.Detail1>
                        <div>
                            <img src={detailProduct[0].img} alt="" />
                        </div>
                        <div>
                        <img src={detailProduct[0].img} alt="" />
                        </div>
                        <div>
                        <img src={detailProduct[0].img} alt="" />
                        </div>
                        <div>
                        <img src={detailProduct[0].img} alt="" />
                        </div>
                    </styled.Detail1>
                    <styled.Detail2>
                        <img src={detailProduct[0].img} alt="" />
                       
                        <div>
                            <h1>{detailProduct[0].title}</h1>
                            <span>$ {detailProduct[0].price}.00</span>
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
                                    <styled.Size value='S'  bgcolor='var(--pale-orange)' color='var(--white)'>
                                    S
                                    </styled.Size>
                                    <styled.Size value='M' onClick={getSize} bgcolor='var(--white-two)' color='var(--dark-grey)'>
                                    M
                                    </styled.Size >
                                    <styled.Size value='L' onClick={getSize} bgcolor='var(--white-four)' color='var(--greyish-brown)'>
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
                                    <button onClick={decrementClick}>-</button>
                                    <h5>{quantity}</h5>
                                    <button onClick={incrementClick}>+</button>
                                </styled.Quantity>
                            </div>
                            <div style={{marginBottom:'26px'}}>
                                <Button onClick={getProduct} name='Add to cart' w='429px' h='50px' bgcolor='#5f6dff' color='var(--white)' >

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
                        {moreFrom}
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