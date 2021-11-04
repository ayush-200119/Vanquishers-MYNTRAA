const product =require(__dirname+"/models/product.model.js");
const Product=product.model;
let productDataArray=[];

const product1= new Product({
    brandName:"Levis",
    category:"Shirt",
    productName:"Blue shirt",
    price:500,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/1/17/d71045b2-4300-4395-b110-f652fa00e9e51579211471795-1.jpg",
    gender:"Male",
    recommandedBy:[
        {
            influencerId:1,
            influencerName:"Influencer1"
        },
        {
            influencerId:3,
            influencerName:"Influencer3"
        },
        {
            influencerId:5,
            influencerName:"Influencer5"
        }
    ],
    Likes:100
});

productDataArray.push(product1);

const product2= new Product({
    brandName:"Peter England",
    category:"T-Shirt",
    productName:"Yellow shirt",
    price:550,
    discount:5,
    images:"https://5.imimg.com/data5/SH/GC/MY-8764775/mens-t-shirt-500x500.jpg",
    gender:"Male",
    recommandedBy:[
        {
            influencerId:5,
            influencerName:"Influencer5"
        },
        {
            influencerId:7,
            influencerName:"Influencer7"
        },
        {
            influencerId:1,
            influencerName:"Influencer1"
        }
    ],
    Likes:80
});

productDataArray.push(product2);

const product3= new Product({
    brandName:"Killer",
    category:"Jeans",
    productName:"Blue Jeans",
    price:850,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12330258/2020/11/24/5d47035d-b398-4982-a8b1-21dc0ef342811606203532261-Calvin-Klein-Jeans-Men-Jeans-2351606203530001-1.jpg",
    gender:"Male",
    recommandedBy:[
        {
            influencerId:2,
            influencerName:"Influencer2"
        },
        {
            influencerId:6,
            influencerName:"Influencer6"
        },
        {
            influencerId:3,
            influencerName:"Influencer3"
        }
    ],
    Likes:180
});
productDataArray.push(product3);

const product4= new Product({
    brandName:"Killer",
    category:"Rain Jackets",
    productName:"Rain Jackets",
    price:600,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/4/16/83ad562a-318b-4d77-bb61-1c638cc252811618562170580-1.jpg",
    gender:"Female",
    recommandedBy:[
        {
            influencerId:5,
            influencerName:"Influencer5"
        },
        {
            influencerId:9,
            influencerName:"Influencer9"
        },
        {
            influencerId:3,
            influencerName:"Influencer3"
        },
        {
            influencerId:1,
            influencerName:"Influencer1"
        }
    ],
    Likes:280
});
productDataArray.push(product4);

const product5= new Product({
    brandName:"Adidas",
    category:"Shoes",
    productName:"white shoes",
    price:1000,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10331501/2020/3/18/d4d07c60-88d9-43d9-aa78-9cc7712816321584508934272-US-Polo-Assn-Men-White-Colourblocked-Sneakers-84015845089331-1.jpg",
    gender:"Male And Female",
    recommandedBy:[
        {
            influencerId:2,
            influencerName:"Influencer2"
        },
        {
            influencerId:8,
            influencerName:"Influencer8"
        },
        {
            influencerId:4,
            influencerName:"Influencer4"
        },
        {
            influencerId:1,
            influencerName:"Influencer1"
        },
        {
            influencerId:10,
            influencerName:"Influencer10"
        }
    ],
    Likes:150
});
productDataArray.push(product5);
const product6= new Product({
    brandName:"Rolex",
    category:"Sunglasses",
    productName:"Rolex Sunglasses",
    price:1000,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13129526/2021/7/9/b3c6f009-e067-4509-b99a-b3249c3026ee1625803783317-HRX-by-Hrithik-Roshan-Unisex-Polarised-Aviator-Sunglasses-MF-2.jpg",
    gender:"Male And Female",
    recommandedBy:[
        {
            influencerId:2,
            influencerName:"Influencer2"
        },
        {
            influencerId:8,
            influencerName:"Influencer8"
        },
        {
            influencerId:4,
            influencerName:"Influencer4"
        },
        {
            influencerId:1,
            influencerName:"Influencer1"
        },
        {
            influencerId:10,
            influencerName:"Influencer10"
        }
    ],
    Likes:159
});
productDataArray.push(product6);

const product7= new Product({
    brandName:"Saree brand",
    category:"Sarees",
    productName:"Cream colour Saree",
    price:1500,
    discount:5,
    images:"https://m.media-amazon.com/images/I/91d17vEsP9L._UY550_.jpg",
    gender:"Female",
    recommandedBy:[
        {
            influencerId:2,
            influencerName:"Influencer2"
        },
        {
            influencerId:8,
            influencerName:"Influencer8"
        },
        {
            influencerId:4,
            influencerName:"Influencer4"
        },
        {
            influencerId:10,
            influencerName:"Influencer10"
        }
    ],
    Likes:179
});
productDataArray.push(product7);
const product8= new Product({
    brandName:"handbag brand",
    category:"Handbag",
    productName:"Brown hanndbag",
    price:2000,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13363892/2021/1/18/b1e93008-006b-4aad-9efd-1725447c3f3a1610953867988-Baggit-Women-Handbags-9711610953866016-1.jpg",
    gender:"Male AndFemale",
    recommandedBy:[
        {
            influencerId:6,
            influencerName:"Influencer6"
        },
        {
            influencerId:9,
            influencerName:"Influencer9"
        },
        {
            influencerId:10,
            influencerName:"Influencer10"
        }
    ],
    Likes:79
});
productDataArray.push(product8);
const product9= new Product({
    brandName:"Bata",
    category:"Flat heels",
    productName:"Brown heels",
    price:800,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4371864/2018/6/5/996d3389-12f3-4432-8fc5-f35ca421516c1528202168275-Anouk-Women-Heels-5251528202168077-1.jpg",
    gender:"Female",
    recommandedBy:[
        {
            influencerId:1,
            influencerName:"Influencer1"
        },
        {
            influencerId:3,
            influencerName:"Influencer3"
        },
        {
            influencerId:10,
            influencerName:"Influencer10"
        }
    ],
    Likes:70
});
productDataArray.push(product9);

const product10= new Product({
    brandName:"Benetton",
    category:"Flip flops",
    productName:"Black Filp flops",
    price:1200,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15388294/2021/9/22/30c01da8-1c5c-416c-9069-66f54932fc7b1632306458376-United-Colors-of-Benetton-Men-Flip-Flops-5991632306457935-1.jpg",
    gender:"Male",
    recommandedBy:[
        {
            influencerId:5,
            influencerName:"Influencer5"
        },
        {
            influencerId:4,
            influencerName:"Influencer4"
        }
    ],
    Likes:78
});
productDataArray.push(product10);

const product11= new Product({
    brandName:"HRX",
    category:"Sweatshirt",
    productName:"Blue hoodie",
    price:2100,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14979842/2021/7/30/0d11f964-7576-4072-874d-57c31c8728d81627619827976RelaxedFitHoodie1.jpg",
    discount:5,
    gender:"Male",
    recommandedBy:[
        {
            influencerId:5,
            influencerName:"Influencer5"
        },
        {
            influencerId:1,
            influencerName:"Influencer1"
        },
        {
            influencerId:10,
            influencerName:"Influencer10"
        },
        {
            influencerId:2,
            influencerName:"Influencer2"
        }
    ],
    Likes:69
});
productDataArray.push(product11);

const product12= new Product({
    brandName:"HRX",
    category:"Jacket",
    productName:"Black jacket",
    price:2500,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12635866/2020/11/12/3cc54288-1527-4482-83b4-5505aa37e8cc1605174168702-US-Polo-Assn-Men-Jackets-4011605174166600-1.jpg",
    discount:10,
    gender:"Male",
    recommandedBy:[
        {
            influencerId:9,
            influencerName:"Influencer9"
        },
        {
            influencerId:1,
            influencerName:"Influencer1"
        },
        {
            influencerId:10,
            influencerName:"Influencer10"
        },
        {
            influencerId:2,
            influencerName:"Influencer2"
        }
    ],
    Likes:70
});
productDataArray.push(product12);

const product13= new Product({
    brandName:"HRX",
    category:"Blazer",
    productName:"Blue Blazer",
    price:1470,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1727861/2017/1/18/11484736092003-Shaftesbury-London-Men-Blazers-5241484736091725-1.jpg",
    discount:15,
    gender:"Male",
    recommandedBy:[
        {
            influencerId:7,
            influencerName:"Influencer7"
        },
        {
            influencerId:1,
            influencerName:"Influencer1"
        }
    ],
    Likes:169
});
productDataArray.push(product13);

const product14= new Product({
    brandName:"HRX",
    category:"TrackPants",
    productName:"Black Trackpants",
    price:480,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15293736/2021/8/28/0561e528-80c3-4e6e-b80d-75590bf628871630145672858RedTapeMensBlackJogger1.jpg",
    gender:"Male",
    recommandedBy:[
        {
            influencerId:9,
            influencerName:"Influencer9"
        },
        {
            influencerId:8,
            influencerName:"Influencer8"
        },
        {
            influencerId:7,
            influencerName:"Influencer7"
        },
        {
            influencerId:4,
            influencerName:"Influencer4"
        }
    ],
    Likes:980
});
productDataArray.push(product14);

const product15= new Product({
    brandName:"Paragon",
    category:"Sandal",
    productName:"Brown Sandal",
    price:500,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6989420/2021/8/26/ca2fe419-7140-4fdc-a38c-176b29ef45a81629953308282-Woodland-Men-Camel-Brown--Olive-Green-Suede-Comfort-Sandals--1.jpg",
    gender:"Male",
    recommandedBy:[
        {
            influencerId:1,
            influencerName:"Influencer1"
        },
        {
            influencerId:8,
            influencerName:"Influencer8"
        },
        {
            influencerId:6,
            influencerName:"Influencer6"
        },
        {
            influencerId:4,
            influencerName:"Influencer4"
        }
    ],
    Likes:110
});
productDataArray.push(product15);

const product16= new Product({
    brandName:"Tommy Hilfiger",
    category:"Wallet",
    productName:"Black wallet",
    price:600,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2241309/2021/10/21/5aed2131-f6fa-40fb-b56a-97fdb9be95361634798998017-Tommy-Hilfiger-Men-Navy-Blue-Leather-Solid-Two-Fold-Wallet-1-1.jpg",
    gender:"Male",
    recommandedBy:[
        {
            influencerId:8,
            influencerName:"Influencer8"
        },
        {
            influencerId:4,
            influencerName:"Influencer4"
        }
    ],
    Likes:80
});
productDataArray.push(product16);

const product17= new Product({
    brandName:"Boat",
    category:"Earpods",
    productName:"black earbuds",
    price:4000,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13862504/2021/3/19/7dd46a4c-8ef9-4ad1-8b41-6bc1dcb26f4f1616139597665-BOULT-AUDIO-Black-True-Wireless-AirBass-Combuds-Bluetooth-He-2.jpg",
    discount:20,
    gender:"Male And Female",
    recommandedBy:[
        {
            influencerId:4,
            influencerName:"Influencer4"
        }
    ],
    Likes:790
});
productDataArray.push(product17);

const product18= new Product({
    brandName:"JBL",
    category:"Speaker",
    productName:"JBL Speakers",
    price:4500,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7096292/2018/8/7/84ed18cd-2fa0-4f99-8f51-b806e3d63f5f1533644360732-JBL-Unisex-Speakers-4941533644359113-1.jpg",
    discount:15,
    gender:"Male And Female",
    recommandedBy:[
        {
            influencerId:4,
            influencerName:"Influencer4"
        },
        {
            influencerId:10,
            influencerName:"Influencer10"
        },
        {
            influencerId:3,
            influencerName:"Influencer3"
        }
    ],
    Likes:40
});
productDataArray.push(product18);

const product19= new Product({
    brandName:"Philips",
    category:"Trimmer",
    productName:"Philips Trimmer",
    price:1500,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14487068/2021/10/11/6cf84321-97eb-42d2-b630-850be015aeb91633932455464-Philips-Blue-Skin-friendly-Beard-Trimmer---DuraPower-Technol-1.jpg",
    discount:7,
    gender:"Male",
    recommandedBy:[
        {
            influencerId:2,
            influencerName:"Influencer2"
        },
        {
            influencerId:10,
            influencerName:"Influencer10"
        },
        {
            influencerId:9,
            influencerName:"Influencer9"
        },
        {
            influencerId:6,
            influencerName:"Influencer6"
        }
    ],
    Likes:140
});
productDataArray.push(product19);

const product20= new Product({
    brandName:"Plazo Brand",
    category:"Plazo",
    productName:"Blue Plazo",
    price:900,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12163934/2020/8/21/0857b52e-b239-4fe7-b689-97d0bc3ba33d1598002458759-Sangria-Women-Navy-Blue--White-Printed-Wide-Leg-Palazzos-771-1.jpg",
    gender:"Female",
    recommandedBy:[
        {
            influencerId:2,
            influencerName:"Influencer2"
        },
        {
            influencerId:10,
            influencerName:"Influencer10"
        },
        {
            influencerId:9,
            influencerName:"Influencer9"
        }
    ],
    Likes:140
});
productDataArray.push(product20);
const product21= new Product({
    brandName:"Dupatta Shawl Brand",
    category:"Dupatta Shawl",
    productName:"Pink Dupatta",
    price:400,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/19/53b7facd-2b71-4082-8e52-dad0ebe77b1f1611050163500-1.jpg",
    gender:"Female",
    recommandedBy:[
        {
            influencerId:2,
            influencerName:"Influencer2"
        },
        {
            influencerId:10,
            influencerName:"Influencer10"
        },
        {
            influencerId:5,
            influencerName:"Influencer5"
        },
        {
            influencerId:1,
            influencerName:"Influencer1"
        },
        {
            influencerId:7,
            influencerName:"Influencer7"
        }
    ],
    Likes:240
});
productDataArray.push(product21);

const product22= new Product({
    brandName:"Levis",
    category:"Jacket",
    productName:"Denim Jacket",
    price:800,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12279352/2020/10/23/30c49d6b-f999-4a4e-8452-45e2192297601603433815389-Roadster-Women-Jackets-6561603433812959-1.jpg",
    gender:"Female",
    recommandedBy:[
        {
            influencerId:3,
            influencerName:"Influencer3"
        },
        {
            influencerId:9,
            influencerName:"Influencer9"
        },
    ],
    Likes:67
});
productDataArray.push(product22);

const product23= new Product({
    brandName:"Lyra",
    category:"Leggings",
    productName:"White Leggings",
    price:400,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14268676/2021/6/21/0c427481-8ab1-4af8-b17e-dd77cdda1bd41624276474873-HERENOW-Women-White-Solid-Ankle-Length-Leggings-851624276474-1.jpg",
    gender:"Female",
    recommandedBy:[
        {
            influencerId:9,
            influencerName:"Influencer9"
        },
    ],
    Likes:28
});
productDataArray.push(product23);

const product24= new Product({
    brandName:"Puma",
    category:"Sports Shoes",
    productName:"White Sport Shoe",
    price:1300,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/6/19/2838ca0b-d645-4e81-b8d2-c653dbb6f72a1624120057030-1.jpg",
    gender:"Male",
    recommandedBy:[
        {
            influencerId:1,
            influencerName:"Influencer1"
        },
        {
            influencerId:9,
            influencerName:"Influencer9"
        },
        {
            influencerId:2,
            influencerName:"Influencer2"
        },
        {
            influencerId:6,
            influencerName:"Influencer6"
        },
        {
            influencerId:7,
            influencerName:"Influencer7"
        },
        {
            influencerId:8,
            influencerName:"Influencer8"
        },
    ],
    Likes:300
});
productDataArray.push(product24);

const product25= new Product({
    brandName:"Jockey",
    category:"Socks",
    productName:"Socks set",
    price:300,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1616312/2018/10/8/c2d14220-e4ac-4808-89ce-23a0c9fc22051538997563353-HRX-by-Hrithik-Roshan-Men-Pack-of-3-Ankle-Length-Socks-6541538997563113-1.jpg",
    gender:"Male And Female",
    recommandedBy:[
        {
            influencerId:9,
            influencerName:"Influencer9"
        },
        {
            influencerId:1,
            influencerName:"Influencer1"
        },
        {
            influencerId:8,
            influencerName:"Influencer8"
        },
        {
            influencerId:6,
            influencerName:"Influencer6"
        },
    ],
    Likes:28
});

productDataArray.push(product25);

    
module.exports=productDataArray;
