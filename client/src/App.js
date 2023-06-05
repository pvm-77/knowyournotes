import './App.css';
import SignUpForm from './components/signupform/SignUpForm';
import LoginForm from './components/loginform/LoginForm';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ForgotPassword from './components/forgotpass/ForgotPassword';
import Navbar from './components/navbar/Navbar';
import { useEffect, useState } from 'react';
// import NoteEditor from './components/noteeditor/NoteEditor';
import Notes from './components/notes/Notes';
import NewNote from './components/notes/NewNote';
import noteService from './API/notes';
import Footer from './components/footer/Footer';
function App() {
  const [notes, setNotes] = useState([]);

  const [user, setUser] = useState(null);
  console.log('user', user)
  const login = (user) => {
    setUser(user);
  }
  useEffect(() => {
    noteService.getNotes().then(response => {
      setNotes(response.data)
    })
  }, [])
  return (
    <Router>
      <div className='site-h site-position'>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<Notes notes={notes} />} />
          <Route path='/login' element={<LoginForm onLogin={login} />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
        </Routes>
        {user ? <NewNote /> : ''}

        <Footer />
      </div>

    </Router>
  );
}
export default App;
