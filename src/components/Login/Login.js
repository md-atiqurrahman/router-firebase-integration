import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleSignInWithGoogle} style={{ margin: '20px' }}>
                Google sign in
            </button>
            <form>
                <input type="email" placeholder='your email' />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;