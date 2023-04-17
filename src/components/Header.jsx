import {Link} from 'react-router-dom';

const Header = () => {
    return <nav>
           <ul className="nav-line">
             <li className="nav-list-left"><Link to="/">Home</Link></li>
             <li className="nav-list-left"><Link to="/reviews">Reviews</Link></li>
             <li className='nav-list-center'><h1>Games</h1></li>
             <li className="nav-list-right"><Link to="/login">Login</Link></li>
           </ul>
    </nav>
};

export default Header;