'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faFile} from "@fortawesome/free-solid-svg-icons";
//import Image from "next/inmage";
import Link from 'next/link';

import { digitalMedia } from "@/data/index.js";

//import {fa-solid fa-calendar-days } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
  const path1 = {
    date: "/dates",
    error: "/signin#error",
  }

  const path2 = {
    history: "/history",
    error: "/signin#error",
  }

  return (
    
    <div className="container-fluid">
      <h3>Bienvenido</h3>
      <div >
        <div className="card text-bg-primary mb-3">
         
          <div className="card-img-overlay text-white">
            <h5 className="card-title">Hola Bienvenido</h5>
            <p className="card-text">Sinthia</p>
            <p className="card-text"><small>Ultima vez hace 3 dias</small></p>
          </div>
        </div>
      </div>
      


      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <Link href={path1.date}>
              
                <div className="card">
                  <FontAwesomeIcon icon={faCalendarDays} size="lg" />
                  <div className="card-body">
                    <h5 className="card-title">Crear Cita</h5>
                  </div>
                </div>
              
            </Link>
          </div>
          <div className="col">
          <Link href={path2.history}>
              
                <div className="card">
                  <FontAwesomeIcon icon={faFile}  size="lg"  />
                  <div className="card-body">
                    <h5 className="card-title">Historial</h5>
                  </div>
                </div>
              
            </Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

