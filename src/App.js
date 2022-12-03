import React from "react";
import ShowDataInTable from "./Components/ShowDataInTable";
import Signup from "./Components/Signup";
import UserForm from "./Components/UserForm";
// import UserForm from "./Components/UserForm";
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>

      {/* <UserForm/> */}
      <Signup />
      {/* <ShowDataInTable /> */}
      </BrowserRouter>

    </>
  );
}

export default App;
