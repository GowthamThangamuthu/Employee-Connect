import React, { useContext } from 'react';
import Context from './Authentication';

function Home(props) {
    const reader = useContext(Context);
    const {mail,name,logout} = reader;
    return (
        <div>
            <div>{name}</div>
            <div>{mail}</div>
            <div>
                <button onClick={logout}>LOGOUT</button>
            </div>
        </div>
    );
}

export default Home;