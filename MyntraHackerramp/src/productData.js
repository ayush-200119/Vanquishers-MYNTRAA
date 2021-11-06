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
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:3,
            influencerName:"Influencer 3",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg"
        },
        {
            influencerId:5,
            influencerName:"Influencer 5",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg"
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
            influencerName:"Influencer 5",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg"
        },
        {
            influencerId:7,
            influencerName:"Influencer 7",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c4368240-c5e4-4e17-9107-8bcd35d7a5f61635534079972-croppedImage-1635534078086.jpg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
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
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:6,
            influencerName:"Influencer 6",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/f0f87491-bfd8-4110-b71a-c2717270fa161635156156991-153FF4D7-BBE3-4BE9-9298-70B99A2C6E57.jpeg"
        },
        {
            influencerId:3,
            influencerName:"Influencer 3",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg"
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
            influencerName:"Influencer 5",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg"
        },
        {
            influencerId:9,
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
        {
            influencerId:3,
            influencerName:"Influencer 3",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
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
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:8,
            influencerName:"Influencer 8",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
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
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:8,
            influencerName:"Influencer 8",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
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
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:8,
            influencerName:"Influencer 8",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
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
            influencerName:"Influencer 6",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/f0f87491-bfd8-4110-b71a-c2717270fa161635156156991-153FF4D7-BBE3-4BE9-9298-70B99A2C6E57.jpeg"
        },
        {
            influencerId:9,
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
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
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:3,
            influencerName:"Influencer 3",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
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
            influencerName:"Influencer 5",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
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
            influencerName:"Influencer 5",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
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
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
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
            influencerName:"Influencer 7",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c4368240-c5e4-4e17-9107-8bcd35d7a5f61635534079972-croppedImage-1635534078086.jpg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
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
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
        {
            influencerId:8,
            influencerName:"Influencer 8",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG"
        },
        {
            influencerId:7,
            influencerName:"Influencer 7",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c4368240-c5e4-4e17-9107-8bcd35d7a5f61635534079972-croppedImage-1635534078086.jpg"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
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
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:8,
            influencerName:"Influencer 8",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG"
        },
        {
            influencerId:6,
            influencerName:"Influencer 6",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/f0f87491-bfd8-4110-b71a-c2717270fa161635156156991-153FF4D7-BBE3-4BE9-9298-70B99A2C6E57.jpeg"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
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
            influencerName:"Influencer 8",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
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
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
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
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:3,
            influencerName:"Influencer 3",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg"
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
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:9,
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
        {
            influencerId:6,
            influencerName:"Influencer 6",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/f0f87491-bfd8-4110-b71a-c2717270fa161635156156991-153FF4D7-BBE3-4BE9-9298-70B99A2C6E57.jpeg"
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
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:9,
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
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
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:5,
            influencerName:"Influencer 5",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:7,
            influencerName:"Influencer 7",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c4368240-c5e4-4e17-9107-8bcd35d7a5f61635534079972-croppedImage-1635534078086.jpg"
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
            influencerName:"Influencer 3",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg"
        },
        {
            influencerId:9,
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
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
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
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
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:9,
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:6,
            influencerName:"Influencer 6",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/f0f87491-bfd8-4110-b71a-c2717270fa161635156156991-153FF4D7-BBE3-4BE9-9298-70B99A2C6E57.jpeg"
        },
        {
            influencerId:7,
            influencerName:"Influencer 7",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c4368240-c5e4-4e17-9107-8bcd35d7a5f61635534079972-croppedImage-1635534078086.jpg"
        },
        {
            influencerId:8,
            influencerName:"Influencer 8",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG"
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
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:8,
            influencerName:"Influencer 8",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG"
        },
        {
            influencerId:6,
            influencerName:"Influencer 6",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/f0f87491-bfd8-4110-b71a-c2717270fa161635156156991-153FF4D7-BBE3-4BE9-9298-70B99A2C6E57.jpeg"
        },
    ],
    Likes:28
});

productDataArray.push(product25);

const product26= new Product({
    brandName:"ShopEthnos",
    category:"Sarees",
    productName:"Silk Saree",
    price:1200,
    discount:5,
    images:"https://m.media-amazon.com/images/I/91d17vEsP9L._UY550_.jpg",
    gender:"Female",
    recommandedBy:[
        {
            influencerId:3,
            influencerName:"Influencer 3",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg"
        },
        {
            influencerId:7,
            influencerName:"Influencer 7",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c4368240-c5e4-4e17-9107-8bcd35d7a5f61635534079972-croppedImage-1635534078086.jpg"
        },
        {
            influencerId:6,
            influencerName:"Influencer 6",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/f0f87491-bfd8-4110-b71a-c2717270fa161635156156991-153FF4D7-BBE3-4BE9-9298-70B99A2C6E57.jpeg"
        },
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
    ],
    Likes:35
});

productDataArray.push(product26);

const product27= new Product({
    brandName:"Macmerise",
    category:"Phone case",
    productName:"Black & White Naruto iPhone Case",
    price:499,
    discount:20,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/6/27/87f25919-8552-4395-9d02-f99bb9bc49ab1593210539653-1.jpg",
    gender:"Male and Female",
    recommandedBy:[
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:3,
            influencerName:"Influencer 3",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg"
        },
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:5,
            influencerName:"Influencer 5",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg"
        }
    ],
    Likes:120
});

productDataArray.push(product27);

const product28= new Product({
    brandName:"Nike",
    category:"Sports Shoes",
    productName:"Black & White Sport Shoes",
    price:700,
    discount:10,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15386880/2021/10/5/bdfbf24d-a7fc-4a96-aa6c-ee46b3d30b4f1633421157414-Nike-Air-Max-Oketo-Mens-Shoes-9601633421156799-1.jpg",
    gender:"Male",
    recommandedBy:[
        {
            influencerId:5,
            influencerName:"Influencer 5",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg"
        },
        {
            influencerId:7,
            influencerName:"Influencer 7",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c4368240-c5e4-4e17-9107-8bcd35d7a5f61635534079972-croppedImage-1635534078086.jpg"
        },
        {
            influencerId:8,
            influencerName:"Influencer 8",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        }
    ],
    Likes:135
});

productDataArray.push(product28);

const product29= new Product({
    brandName:"Fire-Boltt",
    category:"Smartwatch",
    productName:"Full Touch Smartwatch",
    price:2000,
    discount:20,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15759786/2021/10/18/fc0fe19f-6bdf-4a13-9b75-39a5ad822d661634558545853-Fire-Boltt-Black-Ninja-Touch-to-Wake-SpO2-Smartwatch-07BSWAA-1.jpg",
    gender:"Male and female",
    recommandedBy:[
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:5,
            influencerName:"Influencer 5",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg"
        },
        {
            influencerId:9,
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
        {
            influencerId:6,
            influencerName:"Influencer 6",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/f0f87491-bfd8-4110-b71a-c2717270fa161635156156991-153FF4D7-BBE3-4BE9-9298-70B99A2C6E57.jpeg"
        },
        {
            influencerId:3,
            influencerName:"Influencer 3",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        }
    ],
    Likes:300
});
productDataArray.push(product29);

const product30= new Product({
    brandName:"Wrogn",
    category:"Watch",
    productName:"Silver Toned Analogue Watch",
    price:800,
    discount:15,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13036796/2021/1/6/bb6d18c9-39c1-4632-bc4a-f452606965ef1609906124788-WROGN-Men-Silver-Toned-Analogue-Watch-WRG00048A-802160990612-1.jpg",
    gender:"Male",
    recommandedBy:[
        {
            influencerId:5,
            influencerName:"Influencer 5",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg"
        },
        {
            influencerId:9,
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
        {
            influencerId:3,
            influencerName:"Influencer 3",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        }
    ],
    Likes:280
});
productDataArray.push(product30);

const product31= new Product({
    brandName:"Vanesa",
    category:"Perfumes",
    productName:"Envy Women Vanesa Eau De Parfum",
    price:500,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4374566/2021/6/9/d309e17f-b586-48bd-b685-db26c5d399591623234200083-Envy-Women-Vanesa-Eau-De-Parfum-30-ml-3751623234200028-1.jpg",
    gender:"Female",
    recommandedBy:[
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        }
    ],
    Likes:70
});
productDataArray.push(product31);

const product32= new Product({
    brandName:"teakwood Leathers",
    category:"Leather Belt",
    productName:"Black-Brown Reversible Leather Belt",
    price:800,
    discount:10,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1158696/2016/7/29/11469777538547-Teakwood-Leathers-Men-Black--Brown-Reversible-Leather-Belt-2951469777532248-1.jpg",
    gender:"Male",
    recommandedBy:[
        {
            influencerId:8,
            influencerName:"Influencer 8",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG"
        },
        {
            influencerId:5,
            influencerName:"Influencer 5",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg"
        }
    ],
    Likes:90
});
productDataArray.push(product32);

const product33= new Product({
    brandName:"Puma",
    category:"Caps",
    productName:"Black Cap",
    price:400,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/30/a2adfa2a-3246-48c9-878d-21b57b083a141609320341561-1.jpg",
    gender:"Male and Female",
    recommandedBy:[
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:8,
            influencerName:"Influencer 8",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        }
    ],
    Likes:179
});
productDataArray.push(product33);

const product34= new Product({
    brandName:"Wildcraft",
    category:"Backpack",
    productName:"Black-Lunar-Laptop-Backpack",
    price:1000,
    discount:10,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12361350/2020/9/12/5eecd2dc-d684-4a71-8640-ff6db02fdad01599889647840-Wildcraft-Unisex-Black-Lunar-Laptop-Backpack-851599889646488-1.jpg",
    gender:"Male And Female",
    recommandedBy:[
        {
            influencerId:6,
            influencerName:"Influencer 6",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/f0f87491-bfd8-4110-b71a-c2717270fa161635156156991-153FF4D7-BBE3-4BE9-9298-70B99A2C6E57.jpeg"
        },
        {
            influencerId:9,
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        }
    ],
    Likes:100
});
productDataArray.push(product34);

const product35= new Product({
    brandName:"Safari",
    category:"Trolley Bags",
    productName:"Printed-Hardsided-Super-Size-Trolley-Bag",
    price:1200,
    discount:15,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13171870/2021/1/19/67b6d8cd-6a72-4723-9e60-b633c66359c91611038593293-Safari-Unisex-Printed-Hardsided-Super-Size-Trolley-Bag-26816-1.jpg",
    gender:"Male and Female",
    recommandedBy:[
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:3,
            influencerName:"Influencer 3",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg"
        },
        {
            influencerId:5,
            influencerName:"Influencer 5",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        }
    ],
    Likes:300
});
productDataArray.push(product35);

const product36= new Product({
    brandName:"Trase",
    category:"Boots",
    productName:"Brown Heeled Boots",
    price:800,
    discount:20,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/17/95e1e28a-c133-4661-8b10-fb3556ddfd611608210624529-1.jpg",
    gender:"Female",
    recommandedBy:[
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
        }
    ],
    Likes:86
});
productDataArray.push(product36);

const product37= new Product({
    brandName:"Puma",
    category:"Sport Shoes",
    productName:"Pink Women Sport Shoes",
    price:1100,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12528248/2020/10/7/4b6d6d65-8e25-4737-b8d5-db72dff2466a1602054692367-Puma-Women-Sports-Shoes-9681602054690773-1.jpg",
    discount:5,
    gender:"Female",
    recommandedBy:[
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        }
    ],
    Likes:69
});
productDataArray.push(product37);

const product38= new Product({
    brandName:"Lakme",
    category:"Face Wash",
    productName:"Women Face Wash and Cleanser",
    price:200,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4384875/2018/4/18/11524043885903-Lakme-Women-Face-Wash-and-Cleanser-9941524043885838-1.jpg",
    discount:10,
    gender:"Female",
    recommandedBy:[
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        }
    ],
    Likes:70
});
productDataArray.push(product38);

const product39= new Product({
    brandName:"Lotus",
    category:"Moisturizer",
    productName:"WhiteGlow Skin Gel Creme",
    price:200,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1920200/2020/10/10/5f2c3eed-16a5-4aa3-bc12-5d71658a16271602272543274LotusHerbalsSustainableWomenWhiteGlowSkinTighteningBrighteni1.jpg",
    discount:15,
    gender:"Female",
    recommandedBy:[
        {
            influencerId:7,
            influencerName:"Influencer 7",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c4368240-c5e4-4e17-9107-8bcd35d7a5f61635534079972-croppedImage-1635534078086.jpg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        }
    ],
    Likes:169
});
productDataArray.push(product39);

const product40= new Product({
    brandName:"MCaffeine",
    category:"Body Scrub",
    productName:"Coffee Body Scrub",
    price:480,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10901940/2021/10/19/1454335a-19f2-4dd7-bff8-16eeb92c6d701634639734427-MCaffeine-Naked--Raw-Tan-Removal-Coffee-Body-Scrub-100-g-125-15.jpg",
    gender:"Male and Female",
    recommandedBy:[
        {
            influencerId:9,
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
        {
            influencerId:8,
            influencerName:"Influencer 8",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG"
        },
        {
            influencerId:7,
            influencerName:"Influencer 7",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c4368240-c5e4-4e17-9107-8bcd35d7a5f61635534079972-croppedImage-1635534078086.jpg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
        }
    ],
    Likes:980
});
productDataArray.push(product40);

const product41= new Product({
    brandName:"Lakme",
    category:"Sunscreen Lotion",
    productName:"Women UV Sunscreen Lotion",
    price:200,
    discount:15,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/154046/2019/9/25/86d1c40c-c11f-4d1f-a512-8bddbaeea45e1569403304023-Lakme-Women-Sun-Expert-Fairness--UV-Sunscreen-Lotion-3151569-1.jpg",
    gender:"Female",
    recommandedBy:[
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:8,
            influencerName:"Influencer 8",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG"
        },
        {
            influencerId:6,
            influencerName:"Influencer 6",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/f0f87491-bfd8-4110-b71a-c2717270fa161635156156991-153FF4D7-BBE3-4BE9-9298-70B99A2C6E57.jpeg"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
        }
    ],
    Likes:110
});
productDataArray.push(product41);

const product42= new Product({
    brandName:"Vaseline",
    category:"Hand Cream",
    productName:"Anti bacterial Hand Cream",
    price:150,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12688516/2021/3/9/b65e270a-7a1a-4f0b-88b9-4a6ea1365f941615232696237-Vaseline-Unisex-Hand-and-Feet-Cream-7011615232696047-1.jpg",
    gender:"Male and female",
    recommandedBy:[
        {
            influencerId:8,
            influencerName:"Influencer 8",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
        }
    ],
    Likes:80
});
productDataArray.push(product42);

const product43= new Product({
    brandName:"Maybelline",
    category:"Lipstick",
    productName:"Creamy Matte Lipstick",
    price:180,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1963299/2017/6/23/11498203520561-Maybelline-Nude-Nuance-Creamy-Matte-Lipstick-685-42-g-2571498203520453-1.jpg",
    discount:5,
    gender:"Female",
    recommandedBy:[
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
        },
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:3,
            influencerName:"Influencer 3",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg"
        }
    ],
    Likes:790
});
productDataArray.push(product43);

const product44= new Product({
    brandName:"Rubans",
    category:"Earrings",
    productName:"Blue Oxidised Classic Studs",
    price:250,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11476036/2021/10/1/791eedba-9934-47b0-949f-f22b220b2bf61633078994753-Rubans-Silver-Toned--Blue-Oxidised-Classic-Studs-96516330789-1.jpg",
    discount:15,
    gender:"Female",
    recommandedBy:[
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:3,
            influencerName:"Influencer 3",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg"
        }
    ],
    Likes:98
});
productDataArray.push(product44);

const product45= new Product({
    brandName:"YouBella",
    category:"Chains",
    productName:"Set of 2 Gold-Plated Chains",
    price:399,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/5/15/74ef45d3-2acd-4a8b-a3a2-dc099955d0551621056130389-1.jpg",
    discount:20,
    gender:"Female",
    recommandedBy:[
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:6,
            influencerName:"Influencer 6",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/f0f87491-bfd8-4110-b71a-c2717270fa161635156156991-153FF4D7-BBE3-4BE9-9298-70B99A2C6E57.jpeg"
        }
    ],
    Likes:140
});
productDataArray.push(product45);

const product46= new Product({
    brandName:"KLOTTHE",
    category:"Bedsheets",
    productName:"Purple Cotton Bedsheets",
    price:900,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13183424/2020/12/9/11f03a12-9c88-4a6f-9f2b-2efe8d986ccc1607520964497-KLOTTHE-Purple-Geometric-210-TC-Cotton-1-King-Bedsheet-with--1.jpg",
    gender:"Male and Female",
    recommandedBy:[
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:9,
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
        {
            influencerId:5,
            influencerName:"Influencer 5",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg"
        }
    ],
    Likes:140
});
productDataArray.push(product46);

const product47= new Product({
    brandName:"GoodHomes",
    category:"Cups",
    productName:"set of 4 cups",
    price:600,
    discount:5,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12360750/2020/9/1/2ea95b06-0ea8-4c23-b881-f9ee4d914ad41598948398511HappinessisSetof41.jpg",
    gender:"Male and Female",
    recommandedBy:[
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        },
        {
            influencerId:7,
            influencerName:"Influencer 7",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c4368240-c5e4-4e17-9107-8bcd35d7a5f61635534079972-croppedImage-1635534078086.jpg"
        }
    ],
    Likes:240
});
productDataArray.push(product47);

const product48= new Product({
    brandName:"Wonderland",
    category:"Showpieces",
    productName:"Ganesh Idol Showpiece",
    price:1500,
    discount:18,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15359134/2021/9/4/6d42e1dd-8a84-4e2c-acd5-a4f96e90b40a1630760900475Showpieces1.jpg",
    gender:"Male and Female",
    recommandedBy:[
        {
            influencerId:3,
            influencerName:"Influencer 3",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:5,
            influencerName:"Influencer 5",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg"
        },
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:9,
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
    ],
    Likes:270
});
productDataArray.push(product48);

const product49= new Product({
    brandName:"Home Centre",
    category:"Doormat",
    productName:"Blue Printed Doormat",
    price:400,
    discount:15,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/5/29/0ce6ae97-e0bf-4159-9c38-a3ada891e1cc1622264283350-1.jpg",
    gender:"Male and Female",
    recommandedBy:[
        {
            influencerId:9,
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
    ],
    Likes:28
});
productDataArray.push(product49);

const product50= new Product({
    brandName:"Spaces",
    category:"Bath Towels",
    productName:"Set of 10 Gray & Pink Towels",
    price:1000,
    discount:12,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/9/06926ffd-448f-496e-80e6-fddba37e8cc81612885306577-1.jpg",
    gender:"Male and Female",
    recommandedBy:[
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:9,
            influencerName:"Influencer 9",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg"
        },
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        }
    ],
    Likes:67
});
productDataArray.push(product50);

const product51= new Product({
    brandName:"Bianca",
    category:"Pillows",
    productName:"Set of 2 White Pillows",
    price:1318,
    discount:25,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/4/16/bff7e441-f364-4c70-bbb4-a1f7dba0042e1618558442121-1.jpg",
    gender:"Male and Female",
    recommandedBy:[
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:4,
            influencerName:"Influencer 4",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg"
        }
    ],
    Likes:86
});
productDataArray.push(product51);

const product52= new Product({
    brandName:"Presto",
    category:"Carpets",
    productName:"Printed Anti-Skid Carpet",
    price:3118,
    images:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/6/5a3e4264-009b-4429-a3ff-5258712cbc181573032937219-1.jpg",
    discount:25,
    gender:"Male and Female",
    recommandedBy:[
        {
            influencerId:1,
            influencerName:"Influencer 1",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg"
        },
        {
            influencerId:10,
            influencerName:"Influencer 10",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg"
        },
        {
            influencerId:2,
            influencerName:"Influencer 2",
            influencerImage:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg"
        }
    ],
    Likes:256
});
productDataArray.push(product52);

module.exports=productDataArray;
