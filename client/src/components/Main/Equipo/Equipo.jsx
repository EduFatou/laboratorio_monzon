import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import imgEduardo from '../../../assets/eduardo1.jpg';
import imgJuanma from '../../../assets/juanma1.jpeg';
import imgJuan from '../../../assets/juan1.jpeg';
import imgGerman from '../../../assets/eduardo1.jpg';
import imgcabecera from '../../../assets/cabeceraequipo.jpg';

const equipoData = [
  {
    id: 1,
    name: 'Eduardo Fatou',
    role: 'Especialista en ',
    description: 'Descripción1',
    imgUrl: imgEduardo
  },
  {
    id: 2,
    name: 'Juanma',
    role: 'Especialista en',
    description: 'Descripción2',
    imgUrl: imgJuanma
  },
  {
    id: 3,
    name: 'Germán Pérez',
    role: 'Especialista en',
    description: 'Descripción3',
    imgUrl: 'https://via.placeholder.com/150' 
  },
  {
    id: 4,
    name: 'Juan',
    role: 'Especialista en',
    description: 'Descripción4',
    imgUrl: imgJuan
  }
];

const Equipo = () => {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Image src={imgcabecera} fluid className="portada" />
        </Col>
      </Row>
      <Row>
        {equipoData.map((member, index) => (
          <Col md={12} key={member.id} className="mb-4">
            <Card className={`shadow ${index % 2 === 0 ? 'left' : 'right'}`}>
              <Row nogutters="true" className={`align-items-center ${index % 2 === 0 ? 'flex-md-row' : 'flex-md-row-reverse'}`}>
                <Col md={4} className={`text-center`}>
                  <Image src={member.imgUrl} roundedCircle className="mb-3 equipo-img" />
                </Col>
                <Col md={8} className={`text-center`}>
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                    <Card.Text>{member.description}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Equipo;
