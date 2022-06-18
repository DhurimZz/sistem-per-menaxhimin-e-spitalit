import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from './layouts/Main';
import Doctor from './pages/doctor/Doctor';
import Patient from './pages/patient/Patient';
import Admin from './pages/admin/Admin';
import About from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Register from './pages/auth/Register';
import LoginForm from './components/LoginForm';
import RegisterPatient from './pages/auth/RegisterPatient';
import Dashboard from './pages/admin/Dashboard';
import DrDashboard from './pages/doctor/DrDashboard';
import PDashboard from './pages/patient/PDashboard';
import Doctors from './pages/admin/Doctors';
import Specialisations from './pages/admin/Specialisations';
import EditSpecialisation from './pages/admin/EditSpecialisation';
import EditDoctor from './pages/admin/EditDoctor';
import Countries from './pages/admin/Countries';
import EditCountry from './pages/admin/EditCountry';
import Cities from './pages/admin/Cities';
import EditCity from './pages/admin/EditCity';
import Contacts from './pages/admin/Contacts';
import Patients from './pages/admin/Patient';

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
            <Route exact path="contactus" element={<ContactUs />} />
            <Route exact path="register" element={<Register />} />
            <Route exact path="registerpatient" element={<RegisterPatient />} />
            <Route exact path="login" element={<LoginForm />} />
            <Route exact path="dashboard" element={<Dashboard />} />
            <Route exact path="drdashboard" element={<DrDashboard />} />
            <Route exact path="pdashboard" element={<PDashboard />} />
            <Route exact path="doctors" element={<Doctors />} />
            <Route exact path="specialisations" element={<Specialisations />} />
            <Route exact path="specialisations/edit/:id" element={<EditSpecialisation />} />
            <Route exact path="doctors/edit/:id" element={<EditDoctor />} />
            <Route exact path="countries" element={<Countries />} />
            <Route exact path="countries/edit/:id" element={<EditCountry />}/>
            <Route exact path="cities" element={<Cities />} />
            <Route exact path="cities/edit/:id" element={<EditCity />} />
            <Route exact path="contacts" element={<Contacts />} />
            <Route exact path="patients" element={<Patients />} />
          </Routes>
        </Main>
      </BrowserRouter>
      </div>  
  );
}


