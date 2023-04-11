"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProviderAuth from "./ProviderAuth";
import FormControl from "./SignInFormControl";

export default function Main() {
  return (
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
  );
}
