"use client";

import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import style from "./Home.module.css";

import Image from "next/image";
import { digitalMedia } from "@/data/index.js";

export default function NavBar() {
  return (
    <>
      <Navbar className={"fixed-top container-fluid"}>
        <Container fluid className={style.navbar}>
          <Navbar.Brand href="/home">
            <Image
              src={digitalMedia.logoLight.src}
              alt={digitalMedia.logoLight.alt}
              title={digitalMedia.logoLight.title}
              height={26}
            />
          </Navbar.Brand>
          <Navbar.Text>
            <SplitButton
              id="dropdown-split-variants-primary"
              variant={"primary"}
              title={"Danny Matute"}
            >
              <Dropdown.Item eventKey="1" active>
                Inicio
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">Perfil</Dropdown.Item>
              <Dropdown.Item eventKey="3">Chats</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Cerrar Sesión</Dropdown.Item>
            </SplitButton>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}
