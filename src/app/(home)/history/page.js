'use client';
import style from "../Home.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
/* import { useRouter } from 'next/router'; */
import axios from 'axios';

export default function history() {
/*   const router = useRouter() */
  /* const { id } = router.query // Obtenemos el id del psicólogo de los parámetros de la URL
 */
  const [historial, setHistorial] = useState([])
  const [psicoId, setPsicoId] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.get(`http://localhost:3100/psicologo/cita/historialPsicologo/${psicoId}`)
    setHistorial(response.data)
  }
  

  return (
    <section role="principal content" className={style.section}>
      <h1>Historial</h1>
      <div className="container">
        <div className="row ">
          <div className="col-3">
            <div>
                <form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ingrese su Id</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su Id" 
                            value={psicoId} onChange={(event) => setPsicoId(event.target.value)} 
                        />
                        <Form.Text className="text-muted">
                            Por favor ingrese su ID
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Buscar historial
                    </Button>
                </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>email psicologo</th>
              <th>Paciente</th>
              <th>fecha</th>
              <th>hora Inicio</th>
              <th>hora Final</th>
              <th>realizada</th>
              <th>Comentario</th>
              <th>Disponible</th>
            </tr>
          </thead>
          <tbody>
            {historial.map((cita, index) => (
              <tr key={cita._id}>
                <td>{index + 1}</td>
                <td>{cita.emailPsicologo}</td>
                <td>{cita.email}</td>
                <td>{cita.date}</td>
                <th>{cita.start_time}</th>
                <th>{cita.end_time}</th>
                <td>{cita.realizada}</td>
                <td>{cita.notes}</td>
                <th>{cita.dispoible}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}