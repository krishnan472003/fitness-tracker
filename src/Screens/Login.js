import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import "../Screens/Home.css"
import { Form, Button, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Top from '../components/Navbar';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user =userCredential.user
        localStorage.setItem('uid',user.uid)
        console.log(user.uid)
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <>
    <Top/>
      <div className='card mx-auto m-3' style={{"width":"400px"}}>
      <Form onSubmit={handleSubmit} className='card-body m-3 p-3'>
      <Form.Group controlId="formBasicEmail">
        <Form.Text className="h1 mx-auto">
          Login
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
        {message || error}
        </Form.Text>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password: </Form.Label>
        <Form.Control value={password} type="password" placeholder="Enter Name" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <div className='row'>
      <div className='col-md-6'>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </div>
      <div className='col-md-6'>
 <Link style={{"color":"#5805ab"}} to ="/signup">Want to Sign up?</Link>
      </div>
      </div>

    </Form>
        </div>
        <Footer/>
        </>
  );
}

      // <button className="link-btn" onClick={() => navigate('/signup')}>
      //   Sign up
      // </button>