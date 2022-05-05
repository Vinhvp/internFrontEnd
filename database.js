import fetch from 'node-fetch';

let data = 'http://localhost:7000/productList/get';

fetch(data)
    .then((res)=>{
        return res.json();
    })
    .then((posts)=>{
        console.log(posts);
    })