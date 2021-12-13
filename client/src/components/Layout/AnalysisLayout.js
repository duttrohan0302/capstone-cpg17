import AnalysisNavigation from "./AnalysisNavigation";
import classes from "./Layout.module.css";

function AnalysisLayout(props) {
  return (
    <div>
      <AnalysisNavigation />
      <main className={classes.main2}>{props.children}</main>
    </div>
  );
}

export default AnalysisLayout;
