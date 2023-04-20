import {Link} from 'react-router-dom';

const Header = () => {
    return <section>
    <ul className="nav-line">
          <li className="nav-list-left"><Link to="/">Home</Link></li>
          <li className="nav-list-left"><Link to="/reviews">Reviews</Link></li>
          <li className='nav-list-center'><h1>NC Games Board</h1></li>
          <li className="nav-list-right">Welcome!</li>
        </ul>
  </section>
};

export default Header;