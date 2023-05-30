import { useState, useContext, useEffect } from 'react';
import { fetchUsers } from '../api';
import { UserContext } from '../utils/context';
import ErrorHandler from "./ErrorHandler";
import 'animate.css';


const Home = ({isLoggedIn, setIsLoggedIn}) => {
    const [username, setUsername] = useState('');
    const [currentUsers, setCurrentUsers] = useState([]);
    const {user, setUser} = useContext(UserContext);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchUsers()
        .then((users) => {
            setCurrentUsers(users);
        })
        .catch((err) => {
            setError(true);
        })
    }, [])

    if(error){ return <ErrorHandler/>}

    const submitHandler = (event) => {
        event.preventDefault();
            setUser(username);
            setUsername('');
            setIsLoggedIn(true);
    }

    return <section className='login-section'>
        <form className='form' onSubmit={submitHandler}>
            <label htmlFor="username-input">Username: </label>
            <select id="username-input" value={username} onChange={(event) => {setUsername(event.target.value);}}>
                <option value="">Select User</option>
                {currentUsers.map((user) => {
                    return <option key={user.username} value={user.username}>{user.username}</option>
                })}
            </select>
            <button disabled={isLoggedIn}>Login</button>
        </form>
        {isLoggedIn ? <button className='logout-btn' onClick={() => {setIsLoggedIn(false); setUser('');}}>Logout</button> : null}
        {isLoggedIn ? <h2 className='welcome-user'>Welcome {user}!</h2> : null}
    </section>
}

export default Home;