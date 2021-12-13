import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function AnalysisNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">EXAM IDEA</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/analysis-paper">Analysis</Link>
          </li>
          <li>
            <Link to="/analytics-paper">Analytics</Link>
          </li>
          <li>
            <Link to="/student-percentile">
              Student percentile Distribution
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AnalysisNavigation;
