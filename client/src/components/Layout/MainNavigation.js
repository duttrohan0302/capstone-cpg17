import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import Icon from "./favicon.png";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
        <img src={Icon} alt="" width={100}/>
          </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/upload-paper">Question Paper Analysis</Link>
          </li>
          <li>
            <Link to="/sample-paper">Sample Paper Analysis</Link>
          </li>
          <li>
            <Link to="/previous-year">Previous Year Papers</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
