import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from './layouts/Main';
import Doctor from './pages/Doctor';
import Patient from './pages/Patient';
import Admin from './pages/Admin';
import About from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';
import LoginForm from './components/LoginForm';
import RegisterPatient from './pages/RegisterPatient';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Main>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="admin" element={<Admin/>} />
            <Route exact path="doctor" element={<Doctor/>} />
            <Route exact path="patient" element={<Patient/>} />
            <Route exact path="about" element={<About/>} />
            <Route exact path="contact" element={<ContactUs />} />
            <Route exact path="register" element={<Register />} />
            <Route exact path="registerpatient" element={<RegisterPatient />} />
            <Route exact path="login" element={<LoginForm />} />
            <Route exact path="dashboard" element={<Dashboard />} />
          </Routes>
        </Main>
      </BrowserRouter>
      </div>  
  );
}

