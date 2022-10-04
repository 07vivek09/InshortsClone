import News from "../modal/news-schema.js"

export const getNews = async(request, response)=>{
    try {
       const data = await News.find({})
        response.status(200).json(data)
    } catch (error) {
        response.status(500).json({message:error.message})
    }
  
}