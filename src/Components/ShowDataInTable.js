import React, { useEffect } from "react";

function ShowDataInTable(props) {
  const { data, handlePrev } = props;
  useEffect(() => {
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
  }, [data]);

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
        <button
          id="submit"
          type="submit"
          className="btn btn-secondary btn-warning"
          onClick={handlePrev}
        >Previous</button>
      </div>
    </>
  );
}

export default ShowDataInTable;
