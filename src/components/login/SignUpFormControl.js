import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import style from "./Login.module.css";
import Link from "next/link";

export default function SignUpFormControl() {
  return (
    <div
      className={"h-100 w-100 " + style.login_form_control}
      role="form control"
    >
      <div
        className={"d-flex align-items-center h-100 w-100 " + style.form_border}
      >
        <Form>
          <h2 className="">Crea tu cuenta para continuar</h2>
          <Container className="mt-5" fluid>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <Form.Label for="floatingInput">Email address</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="password"
                placeholder="password"
                id="password  floatingInput"
                required
              />
              <Form.Label for="floatingInput">Contraseña</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="password"
                placeholder="password"
                id="confirmPassword floatingInput"
                required
              />
              <Form.Label for="floatingInput">Confirmar Contraseña</Form.Label>
            </Form.Group>
            <Row className="mb-3">
              <Col>
                <Form.Group className="form-floating">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    id="name floatingInput"
                    required
                  />
                  <Form.Label for="floatingInput">Nombre</Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="form-floating">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    id="lastname floatingInput"
                    required
                  />
                  <Form.Label for="floatingInput">Apellido</Form.Label>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="form-floating">
                  <Form.Control
                    type="date"
                    placeholder="Cumpleaños"
                    id="date floatingInput"
                    required
                  />
                  <Form.Label for="floatingInput">Fecha nacimiento</Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Select aria-label="Default select example" className={style.custom_select}>
                    <option value="null">Elija el Sexo</option>
                    <option value="1">Femenino</option>
                    <option value="2">Masculino</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="d-flex justify-content-end align-items-end mt-5">
              <Button className="btn-primary" type="submit">
                Crear Usuario
              </Button>
            </Form.Group>
          </Container>
        </Form>
      </div>
    </div>
  );
}
