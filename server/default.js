import { data } from "./constant/data.js";
import News from "./modal/news-schema.js";

const defaultData = async()=>{
try {
   await News.insertMany(data)
   console.log("Data Entered succesfully in database")
} catch (error) {
    console.log("Error while calling default data",error)
}
}

export default defaultData;