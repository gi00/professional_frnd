'use client'

import Container from "react-bootstrap/Container";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import Button from "react-bootstrap/Button";

import Image from "next/image";
import { digitalMedia } from "@/data/index.js";

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" fluid>
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src={digitalMedia.logo.src}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="gap-3">
            <Link href="/signin" className="btn btn-outline-primary">Inciar sesión</Link>
            <Link href="/signup" className="btn btn-primary">Crear Cuenta</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
