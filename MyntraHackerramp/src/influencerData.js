const Influencer=require(__dirname+"/models/influencer.modal.js");
const product=require(__dirname+"/productData.js");

const influencers=[];

const influencer1=new Influencer({
    influencerId:1,
    name:"Influencer 1",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/9bc514e1-6d69-4253-9a4f-4968dc2b28fd1635771567432-IMG_3315.HEIC.jpg",
    gender:"Female",
    followers:25,
    likes:10,
    comments:65,
    recommendedProducts:[product[0],product[1],product[3],product[4],product[5],product[8],product[10],product[11],product[12],product[14],product[20],product[23],product[24]]
});
influencers.push(influencer1);

const influencer2=new Influencer({
    influencerId:2,
    name:"Influencer 2",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/28/da922869-2630-480a-a211-0d12561a2b0f1635424397845-IMG_5264.jpg",
    gender:"Female",
    followers:30,
    likes:25,
    comments:2,
    recommendedProducts:[product[2],product[4],product[5],product[6],product[10],product[11],product[18],product[19],product[20],product[23]]
});
influencers.push(influencer2);

const influencer3=new Influencer({
    influencerId:3,
    name:"Influencer 3",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/0994cf1f-cf53-4123-9a75-e8bd3c8543421635513644542-image00001.jpeg",
    gender:"Female",
    followers:20,
    likes:8,
    comments:21,
    recommendedProducts:[product[0],product[2],product[3],product[8],product[17],product[21]]
});
influencers.push(influencer3);

const influencer4=new Influencer({
    influencerId:4,
    name:"Influencer 4",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/9af41cf7-78bd-4cc3-80fe-109399bfb2da1635523104905-IMG_5828.jpg",
    gender:"Female",
    followers:40,
    likes:30,
    comments:50,
    recommendedProducts:[product[4],product[5],product[6],product[9],product[13],product[14],product[15],product[16],product[17]]
});
influencers.push(influencer4);

const influencer5=new Influencer({
    influencerId:5,
    name:"Influencer 5",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/958c0371-b214-46a9-8f7a-e6e0f5230b9c1635106477686-croppedImage-1635106476551.jpg",
    gender:"Male",
    followers:45,
    likes:30,
    comments:19,
    recommendedProducts:[product[0],product[1],product[3],product[9],product[10],product[20]]
});
influencers.push(influencer5);

const influencer6=new Influencer({
    influencerId:6,
    name:"Influencer 6",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/25/f0f87491-bfd8-4110-b71a-c2717270fa161635156156991-153FF4D7-BBE3-4BE9-9298-70B99A2C6E57.jpeg",
    gender:"Female",
    followers:27,
    likes:20,
    comments:30,
    recommendedProducts:[product[2],product[7],product[14],product[18],product[23],product[24]]
});
influencers.push(influencer6);

const influencer7=new Influencer({
    influencerId:7,
    name:"Influencer 7",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c4368240-c5e4-4e17-9107-8bcd35d7a5f61635534079972-croppedImage-1635534078086.jpg",
    gender:"Female",
    followers:38,
    likes:10,
    comments:5,
    recommendedProducts:[product[1],product[12],product[13],product[20],product[23]]
});
influencers.push(influencer7);

const influencer8=new Influencer({
    influencerId:8,
    name:"Influencer 8",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/30/c32afb54-0f4d-4c42-881e-3e0c95d011591635578184021-Sports.JPG",
    gender:"Male",
    followers:59,
    likes:39,
    comments:25,
    recommendedProducts:[product[4],product[5],product[6],product[13],product[14],product[15],product[23],product[24]]
});
influencers.push(influencer8);

const influencer9=new Influencer({
    influencerId:9,
    name:"Influencer 9",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/e92f21d0-2d1f-467e-bb59-cf18d8e3a8101635775844835-ED9326E8-68A9-4181-A742-35161A70CA45.jpg",
    gender:"Male",
    followers:49,
    likes:40,
    comments:7,
    recommendedProducts:[product[3],product[4],product[7],product[11],product[13],product[18],product[19],product[21],product[22],product[23],product[24]]
});
influencers.push(influencer9);

const influencer10=new Influencer({
    influencerId:10,
    name:"Influencer 10",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/fc06c6ab-479a-4bd2-9c88-76abf8ec49501635756045966-croppedImage-1635756045730.jpg",
    gender:"Female",
    followers:46,
    likes:32,
    comments:29,
    recommendedProducts:[product[5],product[6],product[7],product[8],product[10],product[11],product[17],product[18],product[19],product[20]]
});
influencers.push(influencer10);

module.exports=influencers;