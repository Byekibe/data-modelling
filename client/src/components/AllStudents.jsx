import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const AllStudents = () => {
  const [allData, setAllData] = useState([]);
  // const serverAddress = "/api/students";
  const serverAddress = "http://localhost:7070/api/students";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(serverAddress);
        const data = await res.json();
        console.log(data);
        setAllData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return <div>{loading ? <Spinner /> : JSON.stringify(allData)}</div>;
};

export default AllStudents;
