import { Button, TextField } from "@mui/material";
import React, { Component } from "react";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { handleChange, values } = this.props;
    return (
      <>
        <TextField
          id="standard-basic"
          label="More Details"
          variant="standard"
          onChange={handleChange()}
        //   defaultValue={values.firstName}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Last Name"
          variant="standard"
          onChange={handleChange()}
        //   defaultValue={values.lastName}
        />
        <br />
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          onChange={handleChange()}
        //   defaultValue={values.email}
        />
        <br />
        <Button variant="contained" onClick={this.continue}>
          Continue
        </Button>
        <Button variant="contained" onClick={this.back}>
          Previous
        </Button>
      </>
    );
  }
}

export default FormPersonalDetails;
