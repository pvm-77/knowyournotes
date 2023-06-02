import './App.css';
import SignUpForm from './components/signupform/SignUpForm';
import LoginForm from './components/loginform/LoginForm';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ForgotPassword from './components/forgotpass/ForgotPassword';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <Router>
      <div className='site-h site-position'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
        </Routes>

      </div>

    </Router>
  );
}
export default App;
