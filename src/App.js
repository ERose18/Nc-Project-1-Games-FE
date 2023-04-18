import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Reviews from './components/Reviews';

function App() {
  return (
    <div>
      <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reviews" element={<Reviews />}/>
      </Routes>
    </div>
  );
}

export default App;
