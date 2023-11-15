import Header from "../components/Header";
import AllStudents from "../components/AllStudents";

const StudentsPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <AllStudents />
      </div>
    </>
  );
};

export default StudentsPage;
