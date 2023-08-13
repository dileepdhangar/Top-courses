import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data"
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";



const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {

    setLoading(true);

    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      // save data into variable 

      setCourses(output);
      console.log("course value update ");
      console.log(courses);

    }
    catch (error) {

      toast.error("something went wrong");
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData();

  }, [])


  return (
    <div>

      <div>  <Navbar /></div>

      <div> <Filter filterData={filterData} /></div>

      <div>{
                 loading  ? (<Spinner/>) : (<Cards courses = {courses}/>)  } </div>

    </div>

  );
};

export default App;


