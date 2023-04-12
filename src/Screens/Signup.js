import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { Form, Button, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Top from '../components/Navbar';
import { Link } from 'react-router-dom';
  
function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Remove the uid state as it is not needed


  const handleSubmit = async (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user =userCredential.user
        localStorage.setItem('uid',user.uid)
        console.log(user.uid)
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
        setMessage(errorMessage);
        
      });
  };


  return (
    <>
    <Top/>
      <div className='card mx-auto m-3' style={{"width":"400px"}}>
      <Form onSubmit={handleSubmit} className='card-body m-3 p-3'>
      <Form.Group controlId="formBasicEmail">
        <Form.Text className="h1 mx-auto">
          Sign up
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
 <Link style={{"color":"#5805ab"}} to ="/login">Already signed up</Link>
      </div>
      </div>

    </Form>
        </div>
        <Footer/>
        </>
  );
}

export default Signup;
