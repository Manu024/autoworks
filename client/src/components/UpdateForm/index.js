import React, { useState } from "react";
import {
  Form,
  FormBtn,
  FormBtnWrapper,
  FormContainer,
  FormHeading,
  FormInput,
  FormLabel,
  FormWrapper,
  CloseIcon,
  Icon,
  FormSelect,
} from "./UpdateFormElements";
import emailjs from "emailjs-com";
import axios from "axios";

const UpdateForm = ({ toggleForm, id }) => {
  const [info, setInfo] = useState();
  const [message, setMessage] = useState("Send mail");
  const [disable, setDisable] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setMessage("Sending");
    setDisable(true);
    const data = {
      email: e.target[0].value,
      model: e.target[1].value,
      status: e.target[2].value,
    };
    axios
      .post("/user/update-status", data)
      .then(async (res) => {
        try {
          const result = await emailjs.sendForm(
            "service_ue52x8i",
            "template_qudmnw2",
            e.target,
            "user_b6cqyyCAoCRPO9Te091oY"
          );
          if (result.text === "OK") {
            setInfo(
              <p style={{ color: "green" }}>Mail sent, now you can close</p>
            );
            e.target.reset();
          }
        } catch (error) {
          setInfo(
            <p style={{ color: "red" }}>Mail wasn't sent, contact service</p>
          );
        }
      })
      .catch((err) => {
        setInfo(
          <p style={{ color: "red" }}>Mail wasn't sent, contact service</p>
        );
      });
    setMessage("Send mail");
    setDisable(false);
  };

  return (
    <FormContainer>
      <FormWrapper>
        <FormHeading>Update Status</FormHeading>
        <CloseIcon onClick={toggleForm}>
          <Icon />
        </CloseIcon>
        {info}
        <Form onSubmit={(e) => submitHandler(e)}>
          <FormLabel>Customer Email: </FormLabel>
          <FormInput name="to_name" type="email" required />
          <FormLabel>Model: </FormLabel>
          <FormInput name="model" type="text" required />
          <FormLabel>Status: </FormLabel>
          <FormSelect name="status">
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="out_for_delivery">Ready for delivery</option>
            <option value="delivered">Delivered</option>
          </FormSelect>
          <FormLabel>Message: </FormLabel>
          <FormInput type="text" />
          <FormBtnWrapper>
            <FormBtn type="submit" disabled={disable}>
              {message}
            </FormBtn>
          </FormBtnWrapper>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
};

export default UpdateForm;
