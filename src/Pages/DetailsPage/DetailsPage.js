import './DetailsPage.css'
import NavBarLogin from '../../Components/NavBarLogin/NavBarLogin';
// import app from '../../firebase-config';
import { db } from '../../firebase-config';
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import NavBarDetails from '../../Components/NavBarDetails/NavBarDetails';

function DetailsPage() {

    const [members, setMembers] = useState([]);
    const [name, setName] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        getMembers();
    }, []);

    const getMembers = async () => {
        const querySnapshot = await getDocs(collection(db, "easy"));
        setMembers(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));
    }


    return (
        <div>
            <div className='divpage'>
                <NavBarDetails />

                <div className='header1'>
                    Channeliing | Doctors Today
                </div>

                <div className='header11'>
                    2023 / 02 / 25
                </div>

                <div className="col taaable">
                    <table class="table llt">
                        <thead className='tablehead'>
                            <tr>

                                <th scope="col">Dr. Name</th>
                                <th scope="col">Time</th>

                            </tr>
                        </thead>
                        <tbody className='tavv'>
                            {
                                members.map(easy => {
                                    return (
                                        <tr>

                                            <td>{easy.name}</td>
                                            <td>{easy.time}</td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className='trainhere'></div>

                {/* <footer className='footer11'>
                    <div className='footer22'>
                        &copy; 2022 Train Schedule App | Chamika Srimantha
                    </div>
                </footer> */}
            </div>
            <div className='ff1'>
                <p className='ff2'>&copy; 2023 Easy Health Care Pvt Ltd</p>
            </div>
        </div>
    );
}
export default DetailsPage;