import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import React, { Component } from "react";

export class FormUserDetails extends Component {
  
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { handleChange, values } = this.props;
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
       <div className="container">
       <TextField
          id="standard-basic"
          label="First Name"
          variant="standard"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Last Name"
          variant="standard"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
        <Button variant="contained" onClick={this.continue}>
          Continue
        </Button>
       </div>
      </>
    );
  }
}

export default FormUserDetails;
