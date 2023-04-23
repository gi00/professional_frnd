'use client'
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


import { postCitaCreadaData } from "@/services/psicologo.js"


import { useRouter } from "next/navigation";
import  {useState}  from "react";

export default function TablesCitas(){

    const router = useRouter();
    
    const { id } = router.query;

    const[TablaCitasData, setTablaCita] = useState({
     id: "",
    });

    const handleChange = (e) => {
        setTablaCita({
          ...TablaCitasData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        const client = id;
        const data = await  postCitaCreadaData(TablaCitasData, client);
        setTablaCita(data)
      }
      

    return(
      <div>
        <div className= "container">
        <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" onSubmit={handleSubmit}>
                <Form.Label>Ingrese su Id</Form.Label>
                <Form.Control 
                type="text" 
                name= "id"
                value= {id}
                placeholder="Ingrese su Id" 
                onChange={handleChange}
                required
                />
                <Form.Text className="text-muted">
                    Por favor ingrese su ID
                </Form.Text>
            </Form.Group>
                <Button variant="primary" type="submit">
                    Buscar Citas Creadas
                </Button>
        </form>
        

        <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email psicólogo</th>
              <th>Fecha</th>
              <th>Hora Inicio</th>
              <th>Hora Final</th>
              <th>Realizada</th>
              <th>Comentario</th>
              <th>Disponible</th>
            </tr>
          </thead>
          <tbody>
            {TablaCitasData.map((cita,index) => (
                <tr key={cita._id}>
                    <td>{index + 1}</td>
                    <td>{cita.emailPsicologo}</td>
                    <td>{cita.fecha}</td>
                    <td>{cita.date}</td>
                    <td>{cita.start_time}</td>
                    <td>{cita.end_time}</td>
                </tr> 
            ))}
          </tbody>
        </Table>

        </div>

        </div>
      </div>
    )
} 