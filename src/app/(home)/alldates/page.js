import TablesCitas from "@/components/Appointments/TablesCitas.js"
import style from "../Home.module.css";

export default function alldates(){
  return (
    <section role="principal content" className={style.section}>
      <h1>Todas las Citas</h1>

      <div className="conainer">
        <div className="row ">
          <div className="col-3">
            <TablesCitas></TablesCitas>
          </div>
        </div>
      </div>
    </section>
  );
}