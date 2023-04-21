import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
  return (
    <>
      <div class="card" width={18}>
        <div class="card-body">
          <h5 class="card-title text-primary">
            <FontAwesomeIcon icon={faCalendarDays} />
            Card title
          </h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div>
    </>
  );
}
