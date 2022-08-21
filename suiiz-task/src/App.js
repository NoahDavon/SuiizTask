import React, { useState, useEffect } from 'react';
import './App.css';
import BookCard from './components/BookCard';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import Spinner from './components/Spinner';
function App() {
  async function getPage(link)
  {
    setLoading(true);
    const response = await fetch(link).then(res => res.json());
    console.log(response)
    setBooks(response.results);
    setPages({nextPage: response.next, previousPage: response.previous});
    setLoading(false);
  }

  const nextPage = () => 
  {
    if(pages.nextPage) getPage(pages.nextPage);
  }

  const prevPage = () => 
  {
    if(pages.previousPage) getPage(pages.previousPage);
  }

  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([])
  const [pages, setPages] = useState({nextPage: null, previousPage: null})
  useEffect(() =>
  {
    getPage('http://gutendex.com/books');
  },[])
  return (
    <div className='App p-20 bg-gray-900 min-h-screen'>
      <SearchBar getPage={getPage}/>
      {loading?
      <Spinner/>
      :
      <div className="grid grid-cols-4 gap-20">
        {books.map(book =>
          <BookCard book={book}/>
            )}
      </div>
      }
      <Pagination hasNext={pages.nextPage!==null} hasPrevious={pages.previousPage!==null} next={nextPage} prev={prevPage}/>
    </div>

  );
}

export default App;
