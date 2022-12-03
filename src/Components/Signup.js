import React, { useState, useEffect } from "react";
import ShowDataInTable from "./ShowDataInTable";
import SignUpInterface from "./SignUpInterface";
import { Routes, Route, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const data = {
    step: 1,
    firstName: "",
    lastName: "",
    fatherName: "",
    email: "",
    phone: "",
    cnic: "",
    address: "",
    password: "",
    confirmPassword: "",
    gender: "",
  };

  const [form, setForm] = useState(data);
  const [formSubmit, setFormSubmit] = useState(false);

  useEffect(() => {
    ValidityState(form);
    function ValidityState(value) {
      // if conditions is not satisfied
      function ifNot(id) {
        let passwordsMatch = document.getElementById(id);
        passwordsMatch.classList.remove("fa-check");
        passwordsMatch.classList.add("fa-remove");
        passwordsMatch.style.color = "rgb(255, 0, 4)";
      }

      // if conditions is  satisfied
      function ifYes(id) {
        let passwordsMatch = document.getElementById(id);
        passwordsMatch.classList.remove("fa-remove");
        passwordsMatch.classList.add("fa-check");
        passwordsMatch.style.color = "rgb(0, 164, 30)";
      }

      if (value.password === "") {
        ifNot("8char");
        ifNot("num");
        ifNot("lcase");
        ifNot("ucase");
        ifNot("pwmatch");
        return false;
      }

      if (
        value.password === "" ||
        value.confirmPassword === "" ||
        value.firstName === "" ||
        value.lastName === "" ||
        value.email === "" ||
        value.fatherName === "" ||
        value.cnic === "" ||
        value.phone === "" ||
        value.gender === ""
      ) {
        setFormSubmit(false);
      } else {
        setFormSubmit(true);
      }

      if (value.password === value.confirmPassword) {
        // //
        ifYes("pwmatch");
        console.log("Passwords matched...");
      } else {
        ifNot("pwmatch");
      }

      let Password_Length = value.password.length;
      let confirmPsw_Length = value.confirmPassword.length;

      console.log(Password_Length);
      if (Password_Length >= 8 || confirmPsw_Length >= 8) {
        ifYes("8char");
        console.log("Length is good enough");
      } else {
        ifNot("8char");
      }

      const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

      num.forEach((num) => {
        if (value.password.includes(num)) {
          ifYes("num");
          console.log("Number Included");
        }
      });

      const alphabets = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];

      alphabets.forEach((abc) => {
        let lowerAlphabet = abc.toLowerCase();
        if (value.password.includes(lowerAlphabet)) {
          console.log("lowerCase included");
          console.log(abc);
          ifYes("lcase");
        }
      });

      alphabets.forEach((abc) => {
        let upperAlphabet = abc.toUpperCase();
        if (value.password.includes(upperAlphabet)) {
          console.log("uppercase included");
          console.log(abc);
          ifYes("ucase");
        }
      });
    }
  }, [form]);

  onchange = (input) => (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (formSubmit === true) {
      navigate("/ShowDataInTable");
    }
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <SignUpInterface onchange={onchange} handleSubmit={handleSubmit} />
          }
        />
        <Route
          path="/ShowDataInTable"
          element={<ShowDataInTable data={form} />}
        />
      </Routes>
    </>
  );
}

export default Signup;
