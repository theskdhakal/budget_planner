import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";

const initialState = {
  passWord: "Earth@2023",
  confirmPassWord: "Earth@2023",
};

export const Register = () => {
  const [frmData, setFrmData] = useState(initialState);
  const [error, setError] = useState("");
  const inputFields = [
    { label: "First Name", name: "fName", placeholder: "Sam", required: true },
    { label: "Last Name", name: "lName", placeholder: "Smith", required: true },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "smith@sam.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "********",
      required: true,
      value: frmData.password,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "********",
      required: true,
      value: frmData.confirmPassword,
    },
  ];

  return (
    <div className="form-container">
      <div className="border p-5 rounded shadow-lg">
        <h3>Join our System</h3>
        <hr />

        {inputFields.map((item, i) => (
          <CustomInput key={i} {...item} />
        ))}

        <div className="p-3">
          <Form.Text>
            Password should be longer than 6 characters containing at least one
            number, one uppercase and one lowercase.
            {error && (
              <ul>
                <li className="text-danger fw-bolder">{error}</li>
              </ul>
            )}
          </Form.Text>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};
