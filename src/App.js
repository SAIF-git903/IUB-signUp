import React from "react";
import Signup from "./Components/Signup";
import { BrowserRouter } from "react-router-dom";
import ReactHookForm from "./Components/ReactHookForm"

function App() {
  return (
    <>
      {/* <ReactHookForm /> */}
      {/* IUB SIGNUP FORM WITHOUT REACT FORM HOOK */}
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    </>
  );
}

export default App;
