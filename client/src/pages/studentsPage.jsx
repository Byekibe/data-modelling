import Header from "../components/Header";
import AllStudents from "../components/allStudents";

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
