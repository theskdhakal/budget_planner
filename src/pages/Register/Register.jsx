import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { toast } from "react-toastify";

const initialState = {
  password: "Earth@2023",
  confirmPassword: "Earth@2023",
};

export const Register = () => {
  const [frmData, setFrmData] = useState(initialState);
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      setError("");
      value.length < 6 && setError("Password is too short");
      !/[0-9]/.test(value) && setError("Must include number");
      !/[A-Z]/.test(value) && setError("Must include uppercase");
      !/[a-z]/.test(value) && setError("Must include lowercase");
    }

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    // try {
    e.preventDefault();

    const { confirmPassword, password } = frmData;
    if (confirmPassword !== password) {
      return toast.error("Password do not match");
    } else {
      alert("password matches");
    }
    // } catch (error) {
    //   toast.error(error.message);
    // }
  };

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
      <Form onSubmit={handleOnSubmit} className="border p-5 rounded shadow-lg">
        <h3>Join our System</h3>
        <hr />

        {inputFields.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
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
        <Button variant="primary" type="submit" disabled={error}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
