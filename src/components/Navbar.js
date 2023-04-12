import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from "../firebase"

function Top() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    const userData = localStorage.getItem('uid');
    if (userData) {
      setUser(userData);
    }
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('uid');
        setUser(null);
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container className='flex'>
        <Navbar.Brand >Fitness Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='m-2'>Home</Link>
            <Link to="/about" className='m-2'>About</Link>
            <Link to="/contact" className='m-2'>Contact</Link>
            {user ? (<>
              <Link to="/data" className='m-2'>Add</Link>
              <Link onClick={handleSignOut} className='m-2'>Sign Out</Link></>
            
            ) : (
              <>
                <Link to="/signup" className='m-2'>Signup</Link>
                <Link to="/login" className='m-2'>Login</Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Top;
