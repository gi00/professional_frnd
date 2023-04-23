"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMessage,
  faClock,
  faCircleXmark,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

import style from "./Home.module.css";

export default function Saidbar() {
  const pathname = usePathname();
  const [href, setHref] = useState(" ");
  const isActive = (path) => (path === href ? "active" : "");

  useEffect(() => {
    setHref(pathname === "home" ? "/home" : pathname);
  }, [pathname]);

  const navList = [
    {
      icon: faHouse,
      path: "/home",
      name: "Inicio",
    },
    {
      icon: faMessage,
      path: "/requests",
      name: "Solicitudes",
    },
    {
      icon: faClock,
      path: "/history",
      name: "Historial",
    },
    {
      icon: faCalendarDays,
      path: "/dates",
      name: "Crear Citas",
    },
  ];

  const navigation = navList.map((item) => {
    return (
      <Link
        key={item.path}
        href={item.path}
        onClick={() => setHref(item.path)}
        className={
          style.nav_list +
          " list-group-item list-group-item-action " +
          isActive(item.path)
        }
      >
        <FontAwesomeIcon icon={item.icon} />
        {item.name}
      </Link>
    );
  });

  return (
    <>
      <nav className={style.header_nav + " w-100"}>
        <div className="list-group">{navigation}</div>
      </nav>

      
      <div className={"list-group w-100"}>
        <button
          type="submit"
          className={
            style.nav_list + " list-group-item list-group-item-action "
          }
        >
          <FontAwesomeIcon icon={faCircleXmark} />
          Cerrar sesión
        </button>
      </div>
    </>
  );
}
