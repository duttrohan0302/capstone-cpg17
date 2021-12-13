import Card from "../Ui/Card.js";
import classes from "./Content.module.css";
import { Link } from "react-router-dom";
function Content(props) {
  return (
    <Card>
      <div className={classes.content}>
        <h1>{props.title}</h1>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
      <div className={classes.actions}>
        <Link
          to={
            props.title === "Get your paper analysed in just 2 minutes"
              ? "/upload-paper"
              : "/sample-paper"
          }
        >
          <button>{props.show}</button>
        </Link>
      </div>
    </Card>
  );
}

export default Content;
