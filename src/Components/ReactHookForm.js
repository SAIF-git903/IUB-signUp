import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function ReactHookForm() {
  const btn_Style = {
    backgroundColor: "goldenrod",
    border: "0",
  };

  const schema = yup.object({
    username: yup.string().required("UserName is Required "),
    email: yup
      .string()
      .required("Email is a required field")
      .email("Email is not valid!"),
    password: yup
      .string()
      .required()
      .min(6)
      .matches(/[A-Z\s]+/, "Must include one uppercase letter"),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Password must be same"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          {...register("username")}
        />
      </div>
      <p>{errors.username?.message}</p>
      <div>
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          {...register("email")}
        />
      </div>
      <p>{errors.email?.message}</p>
      <div>
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <p>{errors.password?.message}</p>
      <div>
        <label htmlFor="confirmPassword"></label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
      </div>
      <p>{errors.confirmPassword?.message}</p>
      <div>
        <button style={btn_Style}>Submit</button>
      </div>
    </form>
  );
}

export default ReactHookForm;
