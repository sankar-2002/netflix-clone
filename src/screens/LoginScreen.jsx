import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);
    return (
        <div className='loginScreen'>
            <div className="loginScreen_background">

                <img className="loginScreen_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />


                <button className='loginScreen_button' onClick={() => setSignIn(true)}>
                    Sign In
                </button>


                <div className="loginScreen_gradient">

                </div>  

                <div className="loginScreen_body">

                    {signIn ? (<SignUpScreen />) :
                        (<>
                            <h1>Unlimited Films, TV Programs and
                                More</h1>
                            <h2> Watch Anywhere.Cancel Anytime</h2>
                            <h3>Ready To Watch ? Enter Your Email To Create Or Restart Your MemberShip</h3>

                            <div className="loginScreen_input">
                                <form action="">
                                    <input type="email" placeholder="Email Address" />
                                    <button className='loginScreen_getStarted' onClick={() => setSignIn(true)}> Get Started</button>
                                </form>
                            </div>

                        </>)
                    }
                </div>
            </div>

        </div>
    )
}

export default LoginScreen
