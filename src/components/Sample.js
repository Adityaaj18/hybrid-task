import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Sample = () => {
   const [posts, setPosts] = useState([])

   useEffect(() => {
      axios.get('https://hn.algolia.com/api/v1/search?').then((response) => {
         console.log(response)
         setPosts(response.data)
      })
   }, [])
   console.log(posts)
   return <div>{posts.author}</div>
}

export default Sample
