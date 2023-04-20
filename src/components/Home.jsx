import { useState, useContext, useEffect } from 'react';
import { fetchUsers } from '../api';
import { UserContext } from '../utils/context';

const Home = ({isLoggedIn, setIsLoggedIn}) => {
    const [username, setUsername] = useState('');
    const [currentUsers, setCurrentUsers] = useState([]);
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        fetchUsers()
        .then((users) => {
            setCurrentUsers(users);
        })
    }, [])

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