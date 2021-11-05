const Influencer=require(__dirname+"/models/influencer.model.js");
const product=require(__dirname+"/productData.js");

const influencers=[];

const influencer1=new Influencer({
    influencerId:1,
    name:"Influencer 1",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/26/d596aaa8-8206-49d4-8f14-4586abc1956a1635256583286-croppedImage-1635256582161.jpg",
    gender:"Female",
    followers:25,
    likes:10,
    comments:65,
    recommendedProducts:[product[0],product[1],product[3],product[4],product[5],product[8],product[10],product[11],product[12],product[14],product[20],product[23],product[24]],
    link:"https://www.myntra.com/studio/influencer/27cf1efc.a614.4b80.8ff8.fc4dd231d03fyFzJEghOfd/Sonali-Malhotra?analytics=%5Bobject%20Object%5D&appRoute=%5Bobject%20Object%5D&followRequestBody=%5Bobject%20Object%5D&isFollowing=false&key=%2Fstudio%2Finfluencer%2F27cf1efc.a614.4b80.8ff8.fc4dd231d03fyFzJEghOfd27cf1efc.a614.4b80.8ff8.fc4dd231d03fyFzJEghOfd&postId=18282&query=%5Bobject%20Object%5D&referrer=%5Bobject%20Object%5D"
});
influencers.push(influencer1);

const influencer2=new Influencer({
    influencerId:2,
    name:"Influencer 2",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/5/18/75f124f2-c3fc-46da-98c9-019e371e7dd21621341852692-croppedImage-1621341816990.jpg",
    gender:"Female",
    followers:30,
    likes:25,
    comments:2,
    recommendedProducts:[product[2],product[4],product[5],product[6],product[10],product[11],product[18],product[19],product[20],product[23]],
    link:"https://www.myntra.com/studio/influencer/e26fd87f.bee5.4572.b872.398a7976b7f1NuaKKTh13E/Ashima-Makhija?appRoute=%7B%22url%22%3A%22%2Fstudio%2Finfluencer%2Fe26fd87f.bee5.4572.b872.398a7976b7f1NuaKKTh13E%22%7D&followRequestBody=%7B%22url%22%3A%22https%3A%2F%2Fapi.myntra.com%2Fv1%2Fmynsta%2Ffollow%22%2C%22body%22%3A%7B%22option%22%3A%22FOLLOW_AUTHOR%22%2C%22ids%22%3A%5B%22e26fd87f.bee5.4572.b872.398a7976b7f1NuaKKTh13E%22%5D%7D%7D&isFollowing=false&postId=25153&query=%7B%7D"
});
influencers.push(influencer2);

const influencer3=new Influencer({
    influencerId:3,
    name:"Influencer 3",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/29/a9eef581-c35a-4264-94a3-191363a10e011635520354954-IMG_2558.jpg",
    gender:"Female",
    followers:20,
    likes:8,
    comments:21,
    recommendedProducts:[product[0],product[2],product[3],product[8],product[17],product[21]],
    link:"https://www.myntra.com/studio/influencer/bc9f2065.67be.4fae.94d8.15fc45ab1e6aHSpCZCYKPB/Divyanshi-Tripathi?appRoute=%7B%22url%22%3A%22%2Fstudio%2Finfluencer%2Fbc9f2065.67be.4fae.94d8.15fc45ab1e6aHSpCZCYKPB%22%7D&followRequestBody=%7B%22url%22%3A%22https%3A%2F%2Fapi.myntra.com%2Fv1%2Fmynsta%2Ffollow%22%2C%22body%22%3A%7B%22option%22%3A%22FOLLOW_AUTHOR%22%2C%22ids%22%3A%5B%22bc9f2065.67be.4fae.94d8.15fc45ab1e6aHSpCZCYKPB%22%5D%7D%7D&isFollowing=false&postId=20399&query=%7B%7D"
});
influencers.push(influencer3);

const influencer4=new Influencer({
    influencerId:4,
    name:"Influencer 4",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/6/8/e12d009c-ae7e-4527-857a-4338cdeaab491623135695067-croppedImage-1623136095458.jpg",
    gender:"Female",
    followers:40,
    likes:30,
    comments:50,
    recommendedProducts:[product[4],product[5],product[6],product[9],product[13],product[14],product[15],product[16],product[17]],
    link:"https://www.myntra.com/studio/influencer/67450aec.af03.4b7e.8924.2092abba031czOGhL2GPnD/Riya-Jain?appRoute=%7B%22url%22%3A%22%2Fstudio%2Finfluencer%2F67450aec.af03.4b7e.8924.2092abba031czOGhL2GPnD%22%7D&followRequestBody=%7B%22url%22%3A%22https%3A%2F%2Fapi.myntra.com%2Fv1%2Fmynsta%2Ffollow%22%2C%22body%22%3A%7B%22option%22%3A%22FOLLOW_AUTHOR%22%2C%22ids%22%3A%5B%2267450aec.af03.4b7e.8924.2092abba031czOGhL2GPnD%22%5D%7D%7D&isFollowing=false&postId=28670&query=%7B%7D"
});
influencers.push(influencer4);

const influencer5=new Influencer({
    influencerId:5,
    name:"Influencer 5",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/7/28/d75bde9c-52d6-4eb6-8913-5c8710d04b5d1627474441484-croppedImage-1627474438937.jpg",
    gender:"Male",
    followers:45,
    likes:30,
    comments:19,
    recommendedProducts:[product[0],product[1],product[3],product[9],product[10],product[20]],
    link:"https://www.myntra.com/studio/influencer/a59f54db.8e61.4717.bccb.6ae7c4ec8c2aNNgcfBp6H6/Vaibhav-Keswani?appRoute=%7B%22url%22%3A%22%2Fstudio%2Finfluencer%2Fa59f54db.8e61.4717.bccb.6ae7c4ec8c2aNNgcfBp6H6%22%7D&followRequestBody=%7B%22url%22%3A%22https%3A%2F%2Fapi.myntra.com%2Fv1%2Fmynsta%2Ffollow%22%2C%22body%22%3A%7B%22option%22%3A%22FOLLOW_AUTHOR%22%2C%22ids%22%3A%5B%22a59f54db.8e61.4717.bccb.6ae7c4ec8c2aNNgcfBp6H6%22%5D%7D%7D&isFollowing=false&postId=22760&query=%7B%7D"
});
influencers.push(influencer5);

const influencer6=new Influencer({
    influencerId:6,
    name:"Influencer 6",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/1/73036323-816e-4fc5-ba8f-58020ee665b61635756692437-Myntra-Stylecast-August---Sangria_Option-C.jpg",
    gender:"Female",
    followers:27,
    likes:20,
    comments:30,
    recommendedProducts:[product[2],product[7],product[14],product[18],product[23],product[24]],
    link:"https://www.myntra.com/studio/influencer/fb3a6bb3.2533.4703.8fb3.3a2e69aef95eivkuUpQjOj/Sangita-Ghosh?appRoute=%7B%22url%22%3A%22%2Fstudio%2Finfluencer%2Ffb3a6bb3.2533.4703.8fb3.3a2e69aef95eivkuUpQjOj%22%7D&followRequestBody=%7B%22url%22%3A%22https%3A%2F%2Fapi.myntra.com%2Fv1%2Fmynsta%2Ffollow%22%2C%22body%22%3A%7B%22option%22%3A%22FOLLOW_AUTHOR%22%2C%22ids%22%3A%5B%22fb3a6bb3.2533.4703.8fb3.3a2e69aef95eivkuUpQjOj%22%5D%7D%7D&isFollowing=false&postId=17119&query=%7B%7D"
});
influencers.push(influencer6);

const influencer7=new Influencer({
    influencerId:7,
    name:"Influencer 7",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/10/26/e47ff20c-5f73-45a2-bfe4-3f8a29b145751635251541209-croppedImage-1635251538586.jpg",
    gender:"Female",
    followers:38,
    likes:10,
    comments:5,
    recommendedProducts:[product[1],product[12],product[13],product[20],product[23]],
    link:"https://www.myntra.com/studio/influencer/7becd7ac.597f.4779.bee0.628a30811383ajCp2sCYLt/Pryanca-Talukdar?appRoute=%7B%22url%22%3A%22%2Fstudio%2Finfluencer%2F7becd7ac.597f.4779.bee0.628a30811383ajCp2sCYLt%22%7D&followRequestBody=%7B%22url%22%3A%22https%3A%2F%2Fapi.myntra.com%2Fv1%2Fmynsta%2Ffollow%22%2C%22body%22%3A%7B%22option%22%3A%22FOLLOW_AUTHOR%22%2C%22ids%22%3A%5B%227becd7ac.597f.4779.bee0.628a30811383ajCp2sCYLt%22%5D%7D%7D&isFollowing=false&postId=28651&query=%7B%7D"
});
influencers.push(influencer7);

const influencer8=new Influencer({
    influencerId:8,
    name:"Influencer 8",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/3/c6434a8a-0358-4fda-b7d3-e8e9c6418cc61635925226015-croppedImage-1635925229064.jpg",
    gender:"Male",
    followers:59,
    likes:39,
    comments:25,
    recommendedProducts:[product[4],product[5],product[6],product[13],product[14],product[15],product[23],product[24]],
    link:"https://www.myntra.com/studio/influencer/2948b371.ac76.408f.a8c6.1f1494f98649bvyod7R2So/Tejeshwar-Sandhoo?appRoute=%7B%22url%22%3A%22%2Fstudio%2Finfluencer%2F2948b371.ac76.408f.a8c6.1f1494f98649bvyod7R2So%22%7D&followRequestBody=%7B%22url%22%3A%22https%3A%2F%2Fapi.myntra.com%2Fv1%2Fmynsta%2Ffollow%22%2C%22body%22%3A%7B%22option%22%3A%22FOLLOW_AUTHOR%22%2C%22ids%22%3A%5B%222948b371.ac76.408f.a8c6.1f1494f98649bvyod7R2So%22%5D%7D%7D&isFollowing=false&postId=28678&query=%7B%7D"
});
influencers.push(influencer8);

const influencer9=new Influencer({
    influencerId:9,
    name:"Influencer 9",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/5/22/6110dc54-a423-4940-b776-eddad3dcb99c1621704903283-croppedImage-1621704859518.jpg",
    gender:"Male",
    followers:49,
    likes:40,
    comments:7,
    recommendedProducts:[product[3],product[4],product[7],product[11],product[13],product[18],product[19],product[21],product[22],product[23],product[24]],
    link:"https://www.myntra.com/studio/influencer/5c506e57.4efe.4747.91b8.13bdbfc91976YCsKBf6BsY/Vipul-Juneja?analytics=%5Bobject%20Object%5D&appRoute=%5Bobject%20Object%5D&followRequestBody=%5Bobject%20Object%5D&isFollowing=false&key=%2Fstudio%2Finfluencer%2F5c506e57.4efe.4747.91b8.13bdbfc91976YCsKBf6BsY5c506e57.4efe.4747.91b8.13bdbfc91976YCsKBf6BsY&postId=18489&query=%5Bobject%20Object%5D&referrer=%5Bobject%20Object%5D"
});
influencers.push(influencer9);

const influencer10=new Influencer({
    influencerId:10,
    name:"Influencer 10",
    image:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/7/28/2a715aa4-f72f-4b9e-a4da-caf0db765d5c1627468144650-croppedImage-1627468143386.jpg",
    gender:"Female",
    followers:46,
    likes:32,
    comments:29,
    recommendedProducts:[product[5],product[6],product[7],product[8],product[10],product[11],product[17],product[18],product[19],product[20]],
    link:"https://www.myntra.com/studio/influencer/0e65a413.ee06.4f20.b78d.9b066284a7aa3sMxEU5PKC/Debasree-Banerjee?appRoute=%7B%22url%22%3A%22%2Fstudio%2Finfluencer%2F0e65a413.ee06.4f20.b78d.9b066284a7aa3sMxEU5PKC%22%7D&followRequestBody=%7B%22url%22%3A%22https%3A%2F%2Fapi.myntra.com%2Fv1%2Fmynsta%2Ffollow%22%2C%22body%22%3A%7B%22option%22%3A%22FOLLOW_AUTHOR%22%2C%22ids%22%3A%5B%220e65a413.ee06.4f20.b78d.9b066284a7aa3sMxEU5PKC%22%5D%7D%7D&isFollowing=false&postId=28688&query=%7B%7D"
});
influencers.push(influencer10);

module.exports=influencers;