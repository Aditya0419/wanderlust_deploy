const mongoose=require("mongoose");
const initData=require("./data.js");//an object will be required having key named data
const Listing=require("../models/listing.js");
const MONGODB_URL="mongodb+srv://neq_user_19:GKfUQm6KW5K2FA9w@cluster0.cysg2eq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});
 async function main(){
    await mongoose.connect(MONGODB_URL);
 }
 const initDb=async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>
        ({...obj,owner:"65afa906347532db7116d7d6"})
    );
    await Listing.insertMany(initData.data);
    console.log("Data was intialized");
 };

 initDb();