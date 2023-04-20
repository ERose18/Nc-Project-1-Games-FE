import './App.css';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Review from './components/Review';
import Comments from './components/Comments';
import { useState } from 'react';
import { loginContext } from './utils/context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  return (
    <div>
       <loginContext.Provider value={[user, isLoggedIn]}>
          <Header/>
          <Routes>
            <Route path="/" element={<Home setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/reviews" element={<Reviews />}/>
            <Route path="/reviews/:review_id" element={<Review />}/>
            <Route path="/reviews/:review_id/comments" element={<Comments />}/>
          </Routes>
       </loginContext.Provider>
    </div>
  );
}

export default App;
