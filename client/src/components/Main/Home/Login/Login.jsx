import React, { useState, useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Hourglass } from 'react-loader-spinner';
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUserData } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.get(`/api/users?email=${email}`); //http://localhost:3000
      console.log('existe user:', res.data[0]);

      if (!res.data[0]) {
        setError('Email o contraseña incorrectos');
      } else {
        if (password === res.data[0].password) {
          updateUserData(res.data[0])
          navigate('/');
          alert('usuario correcto');
        } else {
          setError('Email o contraseña incorrectos');
        }
      }
    } catch (err) {
      setError('Email o contraseña incorrectos');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner-container">
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              colors={['#306cce', '#72a1ed']}
            />
          </div>
        </div>
      )}
      <div className="login-container">
        <Card className="login-card shadow">
          <Card.Body>
            <Card.Title className="login-title">Iniciar Sesión</Card.Title>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Introduzca su email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="login-button" disabled={loading}>
                Iniciar Sesión
              </Button>
            </Form>
            <Card.Link as={Link} to="/registro" onClick={Link} className='signup-link'>Regístrate aquí</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Login;