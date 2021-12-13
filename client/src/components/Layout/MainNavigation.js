import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">EXAM IDEA</Link>
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
