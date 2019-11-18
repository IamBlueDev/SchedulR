import React from 'react';
import OAuth from '../../OAuth/OAuth.js';
import io from 'socket.io-client';
import './Login.scss'
const socket = io('http://localhost:3001/');
class Login extends React.Component {
    render(){
        return(
            <div class="Login">
                <div className="Selection">
                <h1>Welcome to SchedulR</h1>

                    <OAuth
        provider='facebook'
        key='facebook'
        display="F"
        socket= {socket}
        />
            <OAuth
        provider='google'
        key='google'
        display="G"
        socket= {socket}
        />
                </div>
                 {/* <div className="Main Card">
        <div className="Card__Header">

        Login
        <div className="Options"> <a>F</a> <a>G</a></div>
        <OAuth
        provider='facebook'
        key='facebook'
        socket= {socket}
      />
            <OAuth
        provider='google'
        key='google'
        socket= {socket}
      />
        </div>
        <div className="Card__Content"></div>
        <div className="Card__Footer"> Support</div>
        </div> */}
            </div>
        );
    }
}

export default Login;
