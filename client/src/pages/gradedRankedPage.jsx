import RankedGradedStudents from "../components/RankedGradedStudents.jsx";
import Header from "../components/Header";

const GradedRankedPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <RankedGradedStudents />
      </div>
    </>
  );
};

export default GradedRankedPage;
