import './App.css';
import Carousel from './components/carousel/Carousel';
import Button from './components/button/Button';
import SignUpForm from './components/signupform/SignUpForm';
import LoginForm from './components/loginform/LoginForm';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
        </Routes>

      </div>

    </Router>
  );
}
export default App;
