import mongoose from "mongoose";

const connectDB= async(DATABASE_URL)=>
{
    try {
         const DB_options={
         dbname:"Durga"
        }
        await mongoose.connect(DATABASE_URL,DB_options)
        console.log("Successfully Connected!!")
    } catch (error) {
        console.log(error)
    }
    
}

export default connectDB