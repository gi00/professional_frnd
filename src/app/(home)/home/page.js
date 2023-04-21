import style from "../Home.module.css";
import Card from "@/components/Home/Card.js";

export default function Home() {
  return (
    <section role="principal content" className={style.section}>
      <h1>Home</h1>

      <div className="conainer">
        <div className="row ">
          <div className="col-3">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}
