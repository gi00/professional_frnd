import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./Login.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import { postSignUp } from "@/services/profile.js";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInFormControl() {
  const path = {
    home: "/home",
    error: "/signin#error",
  };

  const router = useRouter();

  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setSignInFormData({
      ...signInFormData,
      [e.target.name]: e.target.value,
    });
  };

  //submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = await postSignUp(signInFormData);

    console.log(postData);

    if (!postData.success) {
      handleShow();
    }
    router.push(path.home);
  };

  return (
    <div
      className={"h-100 w-100 " + style.login_form_control}
      role="form control"
    >
      <div
        className={"d-flex align-items-center h-100 w-100 " + style.form_border}
      >
        <Form onSubmit={handleSubmit}>
          <h2 className="">Iniciar sesión para continuar</h2>
          <Container className="mt-5" fluid="true">
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="correo electrónico o usuario"
                onChange={handleChange}
                required
              />
              <Form.Label htmlFor="floatingInput">Email</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                required
              />
              <Form.Label htmlFor="floatingInput">Contraseña</Form.Label>
            </Form.Group>
            <Form.Group className="d-flex justify-content-between align-items-end mt-5">
              <Form.Label className="m-0">
                <Link href="/">¿Has olvidado tu contraseña?</Link>
              </Form.Label>
              <Button className="btn-primary" type="submit">
                Iniciar Sesión
              </Button>
            </Form.Group>
          </Container>
        </Form>
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
              <FontAwesomeIcon icon={faCircleExclamation} /> Inicio de sesión fallida
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>Error al iniciar sesión, inténtalo de nuevo</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Continuar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    </div>
  );
}
