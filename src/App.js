import './App.css'
import NewsPage from './components/NewsPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Detail from './components/Detail'

function App() {
   return (
      <div>
         <Router>
            <Routes>
               <Route path="/" element={<NewsPage />} />
               <Route path="/details/:id" element={<Detail />} />
            </Routes>
         </Router>
      </div>
   )
}

export default App
