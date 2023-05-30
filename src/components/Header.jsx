import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../utils/context';
import 'animate.css';


const Header = () => {
  const {user, setUser} = useContext(UserContext);
  
    return <section>
    <ul className="nav-line">
          <li className="nav-list-left"><Link to="/">Home</Link></li>
          <li className="nav-list-left"><Link to="/reviews">Reviews</Link></li>
          <li className='nav-list-center'><h1>NC Games Board</h1></li>
          <li className="nav-list-right">Welcome {user}</li>
        </ul>
  </section>
};

export default Header;