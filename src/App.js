import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import { Firestore } from 'firebase/firestore';
import { db } from './firebase-config';
import MedicinePage from './Pages/MedicinePage/MedicinePage';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />}/>
      <Route path="/main" element={<HomePage />}/>
      <Route path="/details" element={<DetailsPage />}/>
      <Route path="/medicine" element={<MedicinePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
