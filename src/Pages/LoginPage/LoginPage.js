import './LoginPage.css'
import NavBarLogin from '../../Components/NavBarLogin/NavBarLogin';
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from "react";
import app from '../../firebase-config';
import { db } from '../../firebase-config';


function LoginPage() {

    const auth = getAuth();

    useEffect(() => {
        document.title="EASY Health Care | SignIn";
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Successfully Signed In !")
                shesheshe();
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                alert("Please enter correct email or password")
            });
    }

    const navigate = useNavigate();

    const heheHe = () => {
        navigate("/signup")
    }

    const shesheshe = () => {
        navigate("/main")
    }

    return (

        <div>

            <NavBarLogin />


            <div class="d1">

                <div class="d2">
                    <div class="d3">
                        <div className='xx'>
                            <div className='xxx'></div>
                        </div>
                    </div>

                    <div class="d4">

                        <div class="i1">Sign In</div>

                        <div class="i2">
                            <div class="i3"></div>
                        </div>

                        <div class="i4">
                            <div class="i5">Email</div>
                            <input class="i6" type='email' onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div class="i4">
                            <div class="i5">Password</div>
                            <input class="i6" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div class="i7">
                            <input type="checkbox" />
                            <div class="i8">Remember Me</div>
                        </div>

                        <div class="i9">
                            <button class="i10" onClick={SignIn}>Sign In</button>
                            <button class="i11" onClick={heheHe} >Register</button>
                        </div>

                    </div>

                </div>

            </div>
            <div className='ff1'>
                <p className='ff2'>&copy; 2023 Easy Health Care Pvt Ltd</p>
            </div>
        </div>

    );

}

export default LoginPage;