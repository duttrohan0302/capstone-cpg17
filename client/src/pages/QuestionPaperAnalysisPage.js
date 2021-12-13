import Content from "../components/Content/Content";
import Layout from "../components/Layout/Layout";

function QuestionPaperAnalysisPage() {
  const content = {
    heading: "Get your paper analysed in just 2 minutes",
    description:
      "We will check every section of your paper in a very detailed manner and give you insights that you can use to improve you paper. All it takes in just few clicks.",
    buttoncontent: "Upload your Paper",
  };

  const contentSample = {
    heading: "Generate your own sample question paper",
    description:
      "If you don't have your own paper and you want to generate one then we are here for you. Your own question paper is just 5 clicks away",
    buttoncontent: "Generate My Sample Paper",
  };

  return (
    <Layout>
      <section>
        <Content
          title={content.heading}
          description={content.description}
          show={content.buttoncontent}
        />
        <br />
        <Content
          title={contentSample.heading}
          description={contentSample.description}
          show={contentSample.buttoncontent}
        />
      </section>
    </Layout>
  );
}

export default QuestionPaperAnalysisPage;
