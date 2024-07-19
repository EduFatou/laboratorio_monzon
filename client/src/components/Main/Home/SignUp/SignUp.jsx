import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Debes introducir un nombre';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email necesario';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email no válido';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Teléfono necesario';
    }
    if (!formData.password) {
      errors.password = 'Password necesario';
    } else if (formData.password.length < 6) {
      errors.password = 'La contraseña debe tener una longitud mínima de 6 caracteres';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await axios.post(`http://localhost:3000/api/users`, formData);
        console.log('Usuario creado:', res.data);
        // Aquí puedes agregar lógica adicional después de un registro exitoso
      } catch (error) {
        console.error('Error posting data:', error.response?.data || error.message);
        setErrors({ submit: 'Error al crear el usuario. Por favor, inténtalo de nuevo.' });
      }
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Registro</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
                required
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Teléfono"
                required
              />
              {errors.phone && <div className="text-danger">{errors.phone}</div>}
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contraseña"
                required
              />
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;

