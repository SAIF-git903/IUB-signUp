import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShowDataInTable(props) {
  const {setActive} = props

  const btn_style = {
    backgroundColor: "#E5AE32",
    borderColor: "#E5AE32",
    height: "54px",
    padding: "20px 130px",
    border: "1px solid transparent",
    textDecoration: "none",
    fontSize: "1rem",
    color: "black",
    borderRadius: "5px",
    color: "#212529",
    fontSize: "20px",
  };

  useEffect(() => {
    const { data } = props;
    for (const [key, value] of Object.entries(data)) {
      const trth = document.getElementById("trth");
      const tdth = document.getElementById("tdth");
      const th = document.createElement("th");
      const td = document.createElement("td");
      th.innerHTML = key;
      td.innerHTML = value;
      trth.append(th);
      tdth.append(td);
      console.log(key, value);
    }
  }, []);

  return (
    <>
      <div className="container my-5">
        <table className="table table-hover ">
          <thead>
            <tr id="trth"></tr>
          </thead>
          <tbody>
            <tr id="tdth"></tr>
          </tbody>
        </table>
        
      </div>
    </>
  );
}

export default ShowDataInTable;
