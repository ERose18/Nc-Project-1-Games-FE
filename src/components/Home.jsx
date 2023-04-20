import { useState, useContext } from 'react';
import { fetchUsername } from '../api';
import { loginContext } from '../utils/context';

const Home = ({setUser, isLoggedIn, setIsLoggedIn}) => {
    const [username, setUsername] = useState('');
    const user = useContext(loginContext);

    const submitHandler = (event) => {
        event.preventDefault();
        fetchUsername(username)
        .then(() => {
            setUser(username);
            setUsername('');
            setIsLoggedIn(true);
        })
    }

    return <section className='login-section'>
        <h4>Please Login With "Tickle122" or "jessjelly"</h4>
        <form className='form' onSubmit={submitHandler}>
            <label htmlFor="username-input">Username: </label>
            <input id="username-input" value={username} onChange={(event) => {setUsername(event.target.value);}}></input>
            <button disabled={isLoggedIn}>Login</button>
        </form>
        {isLoggedIn ? <button className='logout-btn' onClick={() => {setIsLoggedIn(false); setUser('');}}>Logout</button> : null}
        {isLoggedIn ? <h2 className='welcome-user'>Welcome {user}!</h2> : null}
    </section>
}

export default Home;