import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewsCard = ({ article }) => {
   let navigate = useNavigate()

   if (!article.title) return null
   return (
      <div className="container">
         <div className="card">
            <div className="card-body">
               <h5 onClick={() => navigate(`details/${article.objectID}`)}>
                  {article.title}
               </h5>
            </div>
         </div>
      </div>
   )
}

export default NewsCard
