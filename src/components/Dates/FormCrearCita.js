'use client'
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useRouter } from "next/navigation";
import  {useState}  from "react";

import { postCitaPsico } from "@/services/psicologo.js";



export default function FormCrearCita() {

  const router = useRouter();
  const [citaCreadaData, setCitaCreadaData] = useState ({
    email: "",
    fecha: "",
    hora: "",
  });

  const handleChange = (e) => {
    setCitaCreadaData({
      ...citaCreadaData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const postData = await  postCitaPsico(citaCreadaData);
   

  }
  
  return(
   <div>
    <Form onSubmit={handleSubmit}>
      
      <Container>
      <Form.Group className="mb-3" >
      <Form.Label htmlFor="floatingInput">Email</Form.Label>
        <Form.Control 
          type="email" 
          name="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          required
        />
        
      </Form.Group>

      <Form.Group className="mb-3" c>
      <Form.Label>Fecha</Form.Label>
      <Form.Control
       type="date"
       placeholder="YYYY-MM-DD" 
       name ="fecha"
       onChange={handleChange}
       required
       />
      
      </Form.Group>

      <Form.Group className="mb-3" c>
      <Form.Label>Hora</Form.Label>
      <Form.Control 
       type="time"
       placeholder="00:00" 
       name = "hora"
       onChange={handleChange}
       required
       />
      
      </Form.Group>
      <Form.Group className="mb-3">
        <Button className="btn-primary" type="submit">
          Crear Cita
        </Button>
      </Form.Group>

      </Container>

    </Form>
   </div>
    
  )
}

