import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import contactServices from '../services/contact.services';
import Top from '../components/Navbar';
import "./Contact.css"
import Footer from '../components/Footer';
function Contact() {
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [text,setText] = useState("");

  const handleSubmit =()=>{
    contactServices.addData({email,name,text});
    alert("message sent")
  }
  return (<>
  <Top/>
  <div className='row'>
      
      <div className='col-md-6 background'></div>
      <div className='col-md-6'>
      <Form onSubmit={handleSubmit} className='m-3 p-3'>
      <Form.Group controlId="formBasicEmail">
        <Form.Text className="h1 mx-auto">
          CONTACT US
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>Message</Form.Label>
        <Form.Control style={{"height":"100px"}} value={text} type="text" placeholder="Enter Text" onChange={(e) => setText(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    </div>
<Footer/>
  </>

    
  );
}

export default Contact;