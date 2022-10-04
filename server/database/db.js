import mongoose from 'mongoose'

const Connection = async(URL)=>{
    try {
        await mongoose.connect(URL, { useNewUrlParser:true })
        console.log("Database connected Succesfully");
    } catch (error) {
        console.log("Error occured while connecting database")
    }
   
}

export default Connection;