import './SignUpPage.css'
import NavBarLogin from '../../Components/NavBarLogin/NavBarLogin';
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase-config';
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getfirestore } from "firebase/firestore"
import { db } from '../../firebase-config';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";

function SignUpPage() {

    const auth = getAuth();

    useEffect(() => {
        document.title="EASY Health Care | SignUp";
    }, []);

    useEffect(() => {
        getMembers();
    }, []);

    const addMember = async () => {

        const docRef = await addDoc(collection(db, "hack"), {
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            country: country
        }).then(() => {
            alert("Route added successfully !");
            

        }).catch(() => {
            alert("Route not added !")
        });
    }

    const getMembers = async () => {
        const querySnapshot = await getDocs(collection(db, "hack"));
        setMembers(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));
    }

    // const clearTexts = () => {
    //     setFname('');
    //     setLname('');
    // }


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [country, setCountry] = useState("");
    const [members, setMembers] = useState([]);



    const SignUp = () => {


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Successfully created an account")
                clearTexts();
                yesYes();
                addMember();
                
            })
            .catch((error) => {
                
                // const errorMessage = error.message;
                // error(errorCode)
                alert("Please enter the details to SignUp !")
                clearTexts(); 
            });

    }

    const clearTexts = () => {
        setEmail('');
        setPassword('');
    }

    const navigate = useNavigate();

    const yesYes = () => {
        navigate("/")
    }

    return (
        <div>
            <NavBarLogin />
            <div class="d1">

                <div class="b2">

                    <div class="b3">

                        <div className='b5'>Register</div>

                        <div class="b6">
                            <div class="b7">First Name</div>
                            <input class="b8" onChange={(e) => setFname(e.target.value)}/>
                        </div>

                        <div class="b6">
                            <div class="b7">Email</div>
                            <input class="b8" type='email' onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div class="b6">
                            <div class="b7">Password</div>
                            <input class="b8" type='password' onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div class="b6">
                            <div class="b7">Country</div>
                            <input class="b8" onChange={(e) => setCountry(e.target.value)}/>
                        </div>

                    </div>



                    <div class="b4">

                        <div class="b6">
                            <div class="b7 v1">Second Name</div>
                            <input class="b8" onChange={(e) => setLname(e.target.value)}/>
                        </div>

                        <div class="b6">
                            <div class="b7">Confirm Email</div>
                            <input class="b8" type='email' />
                        </div>

                        <div class="b6">
                            <div class="b7">Confirm Password</div>
                            <input class="b8" type='password' />
                        </div>

                        <div class="b9">
                            <button class="b10" onClick={SignUp}>Sign Up Now</button>
                            <button className='b11' onClick={yesYes}>Back</button>
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

export default SignUpPage;