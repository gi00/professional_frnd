import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "./Login.module.css";
import Link from "next/link";

export default function SignInFormControl() {
  return (
    <div
      className={"h-100 w-100 " + style.login_form_control}
      role="form control"
    >
      <div
        className={"d-flex align-items-center h-100 w-100 " + style.form_border}
      >
        <Form>
          <h2 className="">Iniciar sesión para continuar</h2>
          <Container className="mt-5" fluid>
            <Form.Group className="form-floating mb-3" controlId="email floatingInput">
              
              <Form.Control
                type="email"
                placeholder="correo electrónico o usuario"
                required
              />
              <Form.Label for="floatingInput">Email</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-3" controlId="password floatingInput">
              <Form.Control type="password" placeholder="password" required />
              <Form.Label for="floatingInput">Contraseña</Form.Label>
            </Form.Group>
            <Form.Group className="d-flex justify-content-between align-items-end mt-5">
              <Form.Label className="m-0">
                <Link href="#">¿Has olvidado tu contraseña?</Link>
              </Form.Label>
              <Button className="btn-primary" type="submit">
                Iniciar Sesión
              </Button>
            </Form.Group>
          </Container>
        </Form>
      </div>
    </div>
  );
}
