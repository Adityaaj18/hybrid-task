import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import Loading from './Loading'

const Detail = () => {
   let { id } = useParams()
   const [post, setPost] = useState('')
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      setIsLoading(true)
      const fetchData = async () => {
         try {
            const { data } = await axios.get(
               `http://hn.algolia.com/api/v1/items/${id}`
            )

            setPost(data)
         } catch (err) {
            console.log(err)
         } finally {
            setIsLoading(false)
         }
      }
      fetchData()
   }, [])
   return (
      <div>
         {isLoading ? (
            <Loading />
         ) : (
            <div style={{ padding: '50px 20px' }}>
               <div className="container">
                  {console.log(post.children)}

                  <h3
                     style={{
                        padding: '20px 0px',
                        color: '#a044ff',
                        fontWeight: 'bold'
                     }}
                  >
                     {post.title}
                  </h3>
                  <h5
                     style={{
                        padding: '10px 0px',
                        color: '#ba78fc',
                        fontWeight: 'bold'
                     }}
                  >
                     Points: {post.points}
                  </h5>
                  <h5
                     style={{
                        padding: '10px 0px',
                        color: '#ba78fc'
                     }}
                  >
                     Comments:
                  </h5>
                  {post.children.map((child) => (
                     <div className="container" key={child.id}>
                        <div class="col-md-12">
                           <div class="media g-mb-30 media-comment">
                              <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                                 <div class="g-mb-15">
                                    <h5 class="h5 g-color-gray-dark-v1 mb-0">
                                       {child.author}
                                    </h5>
                                 </div>

                                 <p>{child.text}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         )}
      </div>
   )
}

export default Detail
