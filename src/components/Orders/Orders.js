import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Orders = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Who is orders this</h2>
            <h4>{user ? user.displayName : 'voot nath'}</h4>
        </div>
    );
};

export default Orders;