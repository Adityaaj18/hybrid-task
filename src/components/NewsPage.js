import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsCard from './NewsCard'
import ReactPaginate from 'react-paginate'
import Loading from './Loading'

const NewsPage = () => {
   const [currentPage, setCurrentPage] = useState(0)
   const [articles, setArticles] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [totalPages, setTotalPages] = useState(0)
   const [query, setQuery] = useState('')
   const [searchInput, setSearchInput] = useState()

   const handlePageChange = (event) => {
      console.log(event.selected)
      setCurrentPage(event.selected)
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      setCurrentPage(0)
      setQuery(searchInput)
   }

   useEffect(() => {
      setIsLoading(true)
      const fetchData = async () => {
         try {
            const { data } = await axios.get(
               'http://hn.algolia.com/api/v1/search?',
               {
                  params: { page: currentPage, query }
               }
            )
            const { hits, nbPages } = data
            setArticles(hits)
            setTotalPages(nbPages)
         } catch (err) {
            console.log(err)
         } finally {
            setIsLoading(false)
         }
      }
      fetchData()
   }, [currentPage, query])

   return (
      <div className="">
         <div
            style={{
               backgroundColor: '#a044ff',
               color: '#fff',
               padding: '16px 0px',
               fontWeight: 'bold'
            }}
         >
            <h1 className="container">Hacker News</h1>
         </div>

         <form
            onSubmit={handleSubmit}
            className="container"
            style={{ padding: '20px 10px' }}
         >
            <input
               placeholder="search news"
               value={searchInput}
               onChange={(e) => setSearchInput(e.target.value)}
               id="input"
            />
            <button id="submit" type="submit">
               Search
            </button>
         </form>
         <div>
            {isLoading ? (
               <Loading />
            ) : (
               articles.map((article) => (
                  <NewsCard article={article} key={article.objectID} />
               ))
            )}
         </div>
         <ReactPaginate
            nextLabel=">>"
            previousLabel="<<"
            breakLabel="..."
            forcePage={currentPage}
            pageCount={totalPages}
            renderOnZeroPageCount={null}
            onPageChange={handlePageChange}
            className="pagination"
            activeClassName="active-page"
            prevClassName="previous-page"
            nextClassName="next-page"
         />
      </div>
   )
}

export default NewsPage
