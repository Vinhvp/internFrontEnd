import React,{useState, useEffect,useContext} from "react";
import * as styled from './ProductBranch.styled';
import SimpleAccordion from '../Accordion/Accordion';
import SelectLabels from '../SortBy/Sort';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Card from '../Card/Card';
// import {data} from './data';
import {useLocation, Link} from 'react-router-dom';
// import fetch from 'node-fetch';
import axios from 'axios';
import {tool} from '../../App';

const itemSource = ['Rompers/Jumpsuits', 'Casual dresses', 'Going out dresses', 'Party/Ocassion dresses', 'Mini dresses', 'Maxi/Midi dresses', 'Sets'];
const itemLeftBar = itemSource.map((e)=>{
    return(
        <li><a href='#'>{e}</a></li>
    )
})

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

// const cardData = (query) =>{
//     return (data.filter((data)=> data.category === query))
//     .map((e)=>{
//         return <Card img = {e["img"]} title={e['title']} price={e['price']}/> 
//     });
    
// }
// const cardData = (query) =>{
//     return (data.filter((data)=> data.category === query))
//     .map((e)=>{
//         return <Card img = {e["img"]} title={e['title']} price={`$${e['price']}`}/> 
//     });
    
// }
//popularity, az, lowest, highest
//get API
var dataa = []
let dataApi = 'http://localhost:7000/productList/get';
async function fetchAPI(){
    const res = await fetch(dataApi);
    return await res.json();
}
fetchAPI().then(data => {dataa = data.map(e=>e)})

const ProductBranch = (props) => {
    const setDataRecommend = useContext(tool);
    const { search } = useLocation();
    const urlSearch = new URLSearchParams(search);
    let categorys = urlSearch.get("name");
    const [sort,setSort] = useState();
    const [dataR, setdataR] = useState([]);
    const searchValue = props.searchValue;
    
    useEffect(()=>{
        
        if(categorys ==='men' ||categorys ==='girls' || categorys ==='boys' || categorys ==='ladies'){
            let datas = [...dataa.filter((data) => data.category === categorys)];
            setdataR(datas)
            if(sort==='lowest'){
                setdataR(datas.sort((a,b) => a['price'] - b['price']));
            }
            else if(sort==='highest'){
                setdataR(datas.sort((a,b) => b['price'] - a['price']));
            }
            else if(sort ==='az'){
                setdataR(datas.sort((a,b) => a['title'].localeCompare(b['title'])));
            }
            //khung search truyền giá trị chỉ cần bao gồm và kể cả in thường
            if(!searchValue==' '){
                let regex = new RegExp(`${searchValue.toLowerCase()}`,'g');
                setdataR(datas.filter((data)=>{
                    return regex.test(data['title'].toLowerCase());
                }))
            }
            setDataRecommend.DataRecommend(dataR);
        }
        

    },[sort, categorys,searchValue])
    
    const postData = (data) =>{
        return (data.map((e, index)=>{
            let productLink = `/product/${e.id}`
            return <Link to={productLink}><Card key={index} img = {e["img"]} title={e['title']} price={`$${e['price']}.00`}/></Link>
        }))
    }
    return ( 
        <>
                <styled.ProductBranch>
                    <p>{categorys}/Sets</p>
                    <styled.ProductContainer>
                        <styled.ProductLeftBar>
                            <h3>Category</h3>
                            <p style={{color: 'var(--bright-orange)'}}>All dresses</p>
                            <ul style={{textAlign: 'left'}}>{itemLeftBar}</ul>
                            <hr></hr>
                            <h3>Filter</h3>
                            <SimpleAccordion />
                        </styled.ProductLeftBar>
                        <styled.ProductList>
                           <div className="selectLabel"> 
                               <SelectLabels setSort={setSort}/>
                                <styled.breadcrumbs>
                                    <ArrowLeftIcon></ArrowLeftIcon>
                                    <div>1 / 100</div>
                                    <ArrowRightIcon></ArrowRightIcon>
                                </styled.breadcrumbs>
                           </div>
                           <styled.ProductItem>
                            {postData(dataR)}
                           </styled.ProductItem>
                        </styled.ProductList>
                    </styled.ProductContainer>
                </styled.ProductBranch>
           
        </>
     );
}
 
export default ProductBranch;