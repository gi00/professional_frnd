import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { postSignUp } from "@/services/profile.js";

import { useRouter } from "next/navigation";
import { useState } from "react";

import style from "./Login.module.css";
import Link from "next/link";

export default function SignUpFormControl() {

  const router = useRouter();
  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    password: "",
    name:"",
    lastname:"",
    birthday:"",
    profile: "user"+ Math.floor(Math.random() * 1000000)
  });

  const handleChange = (e) => {
    setSignUpFormData({
      ...signUpFormData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signUpFormData.birthday)
    const postData = await postSignUp(signUpFormData);

    console.log(signUpFormData)
    console.log(postData)
  }

  return (
    <div
      className={"h-100 w-100 " + style.login_form_control}
      role="form control"
    >
      <div
        className={"d-flex align-items-center h-100 w-100 " + style.form_border}
      >
        <Form onSubmit={handleSubmit}>
          <h2 className="">Crea tu cuenta para continuar</h2>
          <Container className="mt-5" fluid>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="email"
                name="email"
                className="form-control"
                onChange={handleChange}
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <Form.Label htmlFor="floatingInput">Email address</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                id="password  floatingInput"
                required
              />
              <Form.Label htmlFor="floatingInput">Contraseña</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="password"
                
                id="confirmPassword floatingInput"
                required
              />
              <Form.Label htmlFor="floatingInput">Confirmar Contraseña</Form.Label>
            </Form.Group>
            <Row className="mb-3">
              <Col>
                <Form.Group className="form-floating">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    id="name floatingInput"
                    required
                  />
                  <Form.Label htmlFor="floatingInput">Nombre</Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="form-floating">
                  <Form.Control
                    type="text"
                    name="lastname"
                    placeholder="Name"
                    onChange={handleChange}
                    id="lastname floatingInput"
                    required
                  />
                  <Form.Label htmlFor="floatingInput">Apellido</Form.Label>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="col-6">
                <Form.Group className="form-floating">
                  <Form.Control
                    type="date"
                    name="birthday"
                    placeholder="Cumpleaños"
                    onChange={handleChange}
                    id="date floatingInput"
                    required
                  />
                  <Form.Label htmlFor="floatingInput">Fecha nacimiento</Form.Label>
                </Form.Group>
              </Col>
              {/*<Col>
                <Form.Group>
                  <Form.Select name="" aria-label="Default select example" className={style.custom_select}>
                    <option value="null">Elija el Sexo</option>
                    <option value="1">Femenino</option>
                    <option value="2">Masculino</option>
                  </Form.Select>
                </Form.Group>
              </Col>*/}
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
