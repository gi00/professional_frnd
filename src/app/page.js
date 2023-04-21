// import Image from 'next/image'
import { Rubik } from "next/font/google";
import NavBar from "@/components/login/Navbar.js";
import Link from "next/link";
import Image from "next/image";

import { digitalMedia } from "@/data/index.js";
// import styles from './page.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const rubik = Rubik({ subsets: ["latin"] });

export default function Landing() {
  return (
    <main className="container bg-lihgt">
      <NavBar />
      <section role="landing page content" className="landing">
        <h1 className="text-center">
          <p>Encuentra tu bienestar emocional con nuestros</p>
          <p>
            expertos en psicología
          </p>{" "}
        </h1>
        <div className="mt-3">
          <p className="text-center text-muted fs-5">
            En nuestra plataforma, encontrarás a los mejores psicólogos para
            ayudarte a enfrentar los desafíos emocionales de la vida. Regístrate
            ahora y descubre la guía y el apoyo que necesitas para alcanzar tu
            bienestar emocional.
          </p>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Link href="/signup" className="btn btn-primary text-center">
            Regístrate ahora
          </Link>
        </div>

        <div className="mt-5 d-flex justify-content-center">
          <Image 
          src={digitalMedia.saludMental.src}
          alt={digitalMedia.saludMental.alt}
          title={digitalMedia.saludMental.title}
          className="landing-img"
          height={420}
          />
        </div>
      </section>
    </main>
  );
}
