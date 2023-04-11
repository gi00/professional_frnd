'use client'
//import Main from '@/components/login/Main.js';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProviderAuth from '@/components/login/ProviderAuth.js';
import FormControl from '@/components/login/SignUpFormControl.js';
// import Prueba from './Prueba.js';

export default function Signup() {
  return (
    <main className="d-flex body-login">
      
      <div className="container align-self-center w-100" role="login section">
      <Container className="">
        <Row>
          <Col className="p-0">
            <ProviderAuth />
          </Col>
          <Col className="p-0">
            <FormControl />
          </Col>
        </Row>
      </Container>
    </div>
    </main>
  );
}

