import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import {getNews} from '../services/api'
import Article from './Article'

const Articles = () => {

  const [newsData , setNewsData] = useState([])
    
    useEffect(()=>{
        dailyNews();
    }, [])

    const dailyNews = async()=>{
     const response = await getNews();
     setNewsData(response.data)

    }

  return (
    <Box>{
         newsData.map(article =>(
          <Article article={article}/>
       ))

    }
    </Box>
  )
}

export default Articles