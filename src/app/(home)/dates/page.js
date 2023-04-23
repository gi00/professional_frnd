import FormCrearCita from "@/components/Dates/FormCrearCita"
import style from "../Home.module.css";
//import  {useClient}  from "next-slicezone/hooks";

export default function Dates(){
  
  return (
    <section role="principal content" className={style.section}>
      <h1>Formulario Crear Citas</h1>

      <div className="conainer">
        <div className="row ">
          <div className="col-3">
            <FormCrearCita></FormCrearCita>
          </div>
        </div>
      </div>
    </section>
  );
}