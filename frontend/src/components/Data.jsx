import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SingleData from "./SingleData";
import Pagination from "./Pagination";
const Data = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState({
    status: "",
    launch: "",
    type: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);


  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getdata = async () => {
    await axios
      .get(
        `https://api.spacexdata.com/v3/capsules?status=${searchData.status}&original_launch=${searchData.launch}&type=${searchData.type}`
      )
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getdata();
  }, [searchData]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  console.log(currentRecords);


  return (
    <>
      <div className="dataPage">
        <div className="filterContainer">
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Search by status"
              name="status"
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              placeholder="Search by Original launch"
              name="launch"
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              placeholder="Search by Type"
              name="type"
              onChange={handleChange}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="dataContainer">
          {currentRecords.map((e, index) => {
            return <SingleData data={e} key={index} />;
          })}
        </div>
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Data;
