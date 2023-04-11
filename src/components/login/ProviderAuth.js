import style from "./Login.module.css";
import Image from "next/image";
import Link from "next/link";
import { digitalMedia } from "@/data/index.js";

export default function ProviderAuth() {
  return (
    <div className={"shadow "+style.login_background}>
      <header className="">
        <Image
          src={digitalMedia.logoLight.src}
          alt={digitalMedia.logoLight.alt}
          title={digitalMedia.logoLight.title}
          className="m-5"
        />
      </header>
      <div role="login providers" className={style.provider_body}>
        <div className={"d-flex flex-column " + style.provider_auth}>
          <p className="text-center text-secondary">
            O inicia sesión con:
          </p>
          <Link href="#" className="btn btn-ligth bg-light text-secondary">
            <Image
              src={digitalMedia.google.src}
              alt={digitalMedia.google.alt}
              title={digitalMedia.title}
              height={16}
            />
            Continuar con Google
          </Link>
          <Link href="#" className="btn btn-ligth bg-light text-secondary">
            <Image
              src={digitalMedia.microsoft.src}
              alt={digitalMedia.microsoft.alt}
              title={digitalMedia.microsoft.title}
              height={16}
            />
            Continuar con Microsoft
          </Link>
        </div>
      </div>
    </div>
  );
}
