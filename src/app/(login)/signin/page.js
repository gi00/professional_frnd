
//import Main from '@/components/login/Main.js';
/*import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";*/
'use client'
import ProviderAuth from '@/components/login/ProviderAuth.js';
import FormControl from '@/components/login/SignInFormControl.js';
// import Prueba from './Prueba.js';


export default function Signin() {
  return (
    <main className="d-flex body-login">
      
      <div className="container align-self-center w-100" role="login section">
      <div className="container">
        <div className="row">
          <div className="col p-0">
            <ProviderAuth />
          </div>
          <div className="col p-0">
            <FormControl />
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}