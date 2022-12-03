import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step, firstName, lastName, email, occupation, city, bio } =
      this.state;
    const values = { step, firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            handleChange={this.handleChange}
            values={values}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            handleChange={this.handleChange}
            values={values}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
    }
  }
}

export default UserForm;
