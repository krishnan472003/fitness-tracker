import React from 'react';
import './Contact.css';
import { useState } from 'react';
import Top from '../components/Navbar';
import { Form, Button, Card } from 'react-bootstrap';
import dataService from '../services/data.services';
import { useNavigate } from 'react-router-dom';

export default function FormData() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    height: '',
    weight: '',
    waterPercent: '',
    muscleMass: '',
    fatPercent: '',
  });

  const handleSubmit = async () => {
    const users = localStorage.getItem('uid');
    const date = new Date();
    const newData = { ...data, users, date };
    await dataService.addData(newData);
    navigate("/")
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Top style={{ position: 'fixed', top: 0 }} />
      <div className="row">
        <div className="col-md-6">
          <div className="background"></div>
        </div>
        <div className="col-md-6 box">
          <div className="card">
            <Card>
              <h1>Enter Data</h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>height</Form.Label>
                  <Form.Control
                    type="number"
                    name="height"
                    value={data.height}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>weight</Form.Label>
                  <Form.Control
                    type="number"
                    name="weight"
                    value={data.weight}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Water percent</Form.Label>
                  <Form.Control
                    type="text"
                    name="waterPercent"
                    value={data.waterPercent}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Muscle mass</Form.Label>
                  <Form.Control
                    type="text"
                    name="muscleMass"
                    value={data.muscleMass}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Fat percent</Form.Label>
                  <Form.Control
                    type="text"
                    name="fatPercent"
                    value={data.fatPercent}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="button">
                  Submit
                </Button>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
