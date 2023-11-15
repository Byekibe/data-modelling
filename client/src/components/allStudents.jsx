import { useEffect, useState } from "react";

const AllStudents = () => {
  const [allData, setAllData] = useState([]);
  const serverAddress = "http://localhost:7070/api/students";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(serverAddress);
        const data = await res.json();
        console.log(data);
        setAllData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return <div>{JSON.stringify(allData)}</div>;
};

export default AllStudents;
