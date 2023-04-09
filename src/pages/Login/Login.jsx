import React from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";

export const Login = () => {
  const inputFields = [
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Smith@emial.com",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "*****",
      required: true,
    },
  ];
  return (
    <div className="mt-5">
      <Form className="border p-5 rounded shadow-lg">
        <h3>Welcome back!</h3>
        <hr />

        {inputFields.map((item, i) => (
          <CustomInput key={i} {...item} />
        ))}

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};
