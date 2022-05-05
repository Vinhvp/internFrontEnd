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
// let dataApi = 'http://localhost:7000/productDetails/get';
// async function fetchAPI(){
//     const res = await fetch(dataApi);
//     console.log(res);
//     return await res.json();
// }
// fetchAPI().then(data => {dataDetails = data.map(e => e)})

axios.get('http://localhost:7000/productDetails/get')
.then((res)=>{
    dataDetails = res.data.products.map((e)=>e);
})

const ProductDetails = (props) => {
    let { id } = useParams();
    const setData = useContext(tool);
    const [size, setSize] = useState('S');
    const [color, setColor] = useState('#ff5f6d');
    const [items,setItems] = useState([]);
    const [stock,setStock] = useState({
        S: 0,
        M: 0,
        L: 0
    })
    const [flag,setFlag] = useState(true);
    useEffect(()=>{
        axios.get('http://localhost:7000/productDetails/sizestock', {params:{ 
            sizes: size,
            id: id
        }})
        .then((res)=>{
        setStock({
            S: res.data.data.sizeS,
            M: res.data.data.sizeM,
            L: res.data.data.sizeL
        })
    })
    },[size])
    
    const colorList = ['#ff5f6d','var(--light-gold-40)','var(--cornflower-40)','var(--pale-orange-40)','rgba(61, 61, 63, 0.5)','rgba(237, 237, 237, 0.5)']
    const handleColor = (e) =>{
        const currentColor = (e.target.style.backgroundColor);
        setColor(currentColor);
    }
    const colorRender = () => (
        colorList.map((e)=>{
            return (
                
                <>
                  <svg data-testid="CircleIcon" onClick={handleColor} className={ e==color ? 'activeColor':'color'} style={{width:'30px',
                    height: '30px',
                    backgroundColor: e,
                    borderRadius: '50%',
                    marginRight:'10px'
                    }}></svg>
                    
                </>
            )
        })
    );
    
    let detailProduct = dataDetails.filter((data) => data['_id'] == id);
    const cate = detailProduct[0].category;
    
    const dataRecomends = (dataDetails.filter((data)=> data.category == cate)).filter((data)=> data['_id'] != id);
    
  
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
    const getProduct = (e) =>{
        {Boolean(localStorage.getItem('token')) && localStorage.setItem("productLength", parseInt(localStorage.getItem("productLength"))+1);}
        let item = { "img": `${detailProduct[0].img}`,
        "title": `${detailProduct[0].title}`,
        "id": `${detailProduct[0]['_id']}`,
        "price": `${detailProduct[0].price}`,
        "quantity": `${quantity}`,
        "size": `${size}`,
        "color": `${color}`
        }
      
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:7000/account/productDetails',
        //     data: {
        //     "user": localStorage.getItem('user'),
        //     "id": `${detailProduct[0]['_id']}`,
        //     "quantity": `${quantity}`,
        //     "size": `${size}`,
        //     "color": `${color}`
        //     }
        // }).then((res)=>{
        //     const products = res.data.products;
            
        // })
        setItems(prevState => {
            return [...prevState, item];
        })
        setData.dataCart(prevState => {
            return [...prevState, item];
        })
        

    }

    useEffect(()=>{
        const memo = {};
        function getKey(obj){
        return `${obj['id']}_${obj['size']}}`;
        }
        items.forEach((obj)=>{
        const key = getKey(obj);
        memo[key] = obj;
        })
        const result = Object.values(memo);
       
      
    },[items])
    
    const [quantity, setQuantity] = useState(1);
    const getSize =(e)=>{
        setSize(e.target.value);
    }
    const incrementClick = () => {
        if(quantity > stock[size]){
            setFlag(false);
        }
        if(quantity <= stock[size]){
            setFlag(true);
        }
        setQuantity(quantity+1);
       
    }

    const decrementClick = () => {
        if(quantity <= stock[size]){
            setFlag(true);
        }
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
                                    <styled.Size className={size=='S' && 'activeSize'} value='S'  onClick={getSize} bgcolor='var(--pale-orange)' color='var(--white)'>
                                    S
                                    </styled.Size>
                                    <styled.Size className={size=='M' && 'activeSize'} value='M' onClick={getSize} bgcolor='var(--white-two)' color='var(--dark-grey)'>
                                    M
                                    </styled.Size >
                                    <styled.Size className={size=='L' && 'activeSize'} value='L' onClick={getSize} bgcolor='var(--white-four)' color='var(--greyish-brown)'>
                                    L
                                    </styled.Size >
                                </div>
                            </div>
                            <div>
                                <b>Color</b>
                                <div>
                                    {colorRender()}
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
                              {flag ? (<Button onClick={getProduct} name='Add to cart' w='429px' h='50px' bgcolor='#5f6dff' color='var(--white)' ></Button>) : (<Button onClick={getProduct} name='Add to cart' w='429px' h='50px' bgcolor='grey' color='var(--white)' disabled='disabled'></Button>)}
                            </div>
                            <hr></hr>
                            <section style={{margin:'0', display: 'flex', flexDirection:'column'}}>
                                <div style={{fontWeight: 'bold'}}>{detailProduct[0].description}</div>
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