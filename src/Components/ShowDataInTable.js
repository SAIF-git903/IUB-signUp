import React, { useEffect, useState } from "react";

function ShowDataInTable(props) {
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
