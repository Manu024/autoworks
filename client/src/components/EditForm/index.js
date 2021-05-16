import React, { useState } from "react";
import {
  FormContainer,
  Form,
  FormInput,
  FormLabel,
  FormWrapper,
  FormBtn,
  FormHeading,
  FormBtnWrapper,
  CloseIcon,
  Icon,
} from "./EditFormElements";
import axios from "axios";

const EditForm = ({ toggleClick, form }) => {
  const [info, setInfo] = useState();
  const [message, setMessage] = useState("Add Service");
  const [disabled, setDisable] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setMessage("Adding");
    setDisable(true);
    const data = {
      service_name: e.target[0].value,
      service_cost: e.target[1].value,
    };
    const url = form === "update" ? "/update-services" : "/delete-services";
    axios
      .post(url, data)
      .then((res) => {
        if (res.status === 200)
          setInfo(<p style={{ color: "green" }}>Updated, Now you can close</p>);
      })
      .catch((err) => {
        setInfo(<p style={{ color: "red" }}>Error Occured, Try Again!!</p>);
      });
    setMessage("Update Service");
    setDisable(false);
  };
  return (
    <FormContainer>
      <FormWrapper>
        <FormHeading>
          {form === "update" ? "Update" : "Delete"} Service
        </FormHeading>
        <CloseIcon onClick={toggleClick}>
          <Icon />
        </CloseIcon>
        {info}
        <Form onSubmit={(e) => submitHandler(e)}>
          <FormLabel>Service Name: </FormLabel>
          <FormInput type="text" required />
          <FormLabel>Service Cost: </FormLabel>
          <FormInput type="number" />
          <FormBtnWrapper>
            <FormBtn type="submit" disabled={disabled}>
              {message}
            </FormBtn>
          </FormBtnWrapper>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
};

export default EditForm;
