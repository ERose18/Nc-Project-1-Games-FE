import './App.css';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Review from './components/Review';
import Comments from './components/Comments';
import { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/reviews" element={<Reviews />}/>
            <Route path="/reviews/:review_id" element={<Review />}/>
            <Route path="/reviews/:review_id/comments" element={<Comments />}/>
          </Routes>
    </div>
  );
}

export default App;
