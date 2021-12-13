import { Route, Routes } from "react-router-dom";

import PreviousYearPaperPage from "./pages/PreviousYearPaperPage.js";
import QuestionPaperAnalysisPage from "./pages/QuestionPaperAnalysisPage";
import SamplePaperGenerationPage from "./pages/SamplePaperGenerationPage";
import UploadingPage from "./pages/UploadingPage.js";
import AnalysisPage from "./pages/AnalysisPage.js";
import StudentPercentilePage from "./pages/StudentPercentilePage.js";
import AnalyticsPage from "./pages/AnalyticsPage.js";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<QuestionPaperAnalysisPage />} />
      <Route path="/sample-paper" element={<SamplePaperGenerationPage />} />
      <Route path="/previous-year" element={<PreviousYearPaperPage />} />
      <Route path="/upload-paper" element={<UploadingPage />} />
      <Route path="/analysis-paper" element={<AnalysisPage />} />
      <Route path="/analytics-paper" element={<AnalyticsPage />} />
      <Route path="/student-percentile" element={<StudentPercentilePage />} />
    </Routes>

  );
}

export default App;
