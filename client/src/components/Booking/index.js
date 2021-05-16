import React, { useState, useEffect } from "react";
import {
  BookingContainer,
  BookingWrapper,
  BookingHeading,
  BookingForm,
  BookingLabel,
  BookingInput,
  BookingLabelServiceContainer,
  BookingLabelServiceWrapper,
  BookingServiceInput,
  BookingServiceLabel,
  BookingBtnWrapper,
  BookingBtn,
  CloseIcon,
  Icon,
} from "./BookingElements";
import axios from "axios";
import emailjs from "emailjs-com";

const Booking = ({ toggleClick, email }) => {
  const [info, setInfo] = useState();
  const [message, setMessage] = useState("Book");
  const [disabled, setDisable] = useState(false);
  const [services, setServices] = useState();
  const [total, setTotal] = useState(0);

  const submitHandler = async (e) => {
    e.preventDefault();
    setMessage("Booking...");
    setDisable(true);
    let services = {};
    for (let i = 5; i < e.target.length - 2; i++) {
      services[e.target[i].value] = e.target[i].value;
    }
    const dataObj = {
      name: e.target[0].value,
      phone: e.target[1].value,
      email: e.target[2].value,
      address: e.target[3].value,
      model: e.target[4].value,
      services: {
        ...services,
      },
      total: total,
      date: e.target[9].value,
    };
    const { data } = await axios.post(
      `/user/add-order?email=${email}`,
      dataObj
    );
    if (data.message === "OK") {
      try {
        const result = await emailjs.sendForm(
          "service_ue52x8i",
          "template_em6allc",
          e.target,
          "user_b6cqyyCAoCRPO9Te091oY"
        );
        if (result.text === "OK")
          setInfo(<p style={{ color: "green" }}>Booked, Now you can close</p>);
      } catch (error) {
        setInfo(<p style={{ color: "red" }}>Booked, contact service</p>);
      }
    } else {
      setInfo(
        <label style={{ color: "red" }}>
          Can't able to make orders now, Try again later..
        </label>
      );
    }
    setMessage("Book");
    setDisable(false);
    e.target.reset();
  };

  const updateTotal = (isChecked, cost) => {
    if (isChecked) setTotal((prev) => prev + cost);
    else setTotal((prev) => prev - cost);
  };

  const fetchServices = () => {
    axios
      .get("/get-services")
      .then((res) => {
        if (res.status === 200) {
          setServices(
            res.data.map((service) => {
              return (
                <BookingLabelServiceWrapper key={service._id}>
                  <BookingServiceLabel>
                    <BookingServiceInput
                      type="checkbox"
                      name="services"
                      value={service.service_name}
                      onChange={(e) =>
                        updateTotal(e.target.checked, service.cost)
                      }
                    />
                    {service.service_name}-Cost:
                  </BookingServiceLabel>
                  <BookingServiceLabel>{service.cost}</BookingServiceLabel>
                </BookingLabelServiceWrapper>
              );
            })
          );
        }
      })
      .catch((err) => setServices("No services found"));
  };
  useEffect(() => {
    fetchServices();
  }, [total]);

  return (
    <BookingContainer>
      <BookingWrapper>
        <CloseIcon onClick={toggleClick}>
          <Icon />
        </CloseIcon>
        <BookingHeading>Book for Service</BookingHeading>
        {info}
        <BookingForm onSubmit={(e) => submitHandler(e)}>
          <BookingLabel>Name: </BookingLabel>
          <BookingInput name="from_name" type="text" required />
          <BookingLabel>Contact: </BookingLabel>
          <BookingInput name="phone" type="tel" maxLength="10" required />
          <BookingLabel>Email: </BookingLabel>
          <BookingInput name="from_email" type="email" required />
          <BookingLabel>Address: </BookingLabel>
          <BookingInput type="text" required />
          <BookingLabel>Bike Model: </BookingLabel>
          <BookingInput name="model" type="text" required />
          <BookingLabel>Services required: </BookingLabel>
          <BookingLabelServiceContainer>
            {services}
          </BookingLabelServiceContainer>
          <BookingLabel>Total: </BookingLabel>
          <BookingInput name="total_cost" value={total} />
          <BookingLabel>Date: </BookingLabel>
          <BookingInput name="date" type="date" required />
          <BookingBtnWrapper>
            <BookingBtn type="submit" disabled={disabled}>
              {message}
            </BookingBtn>
          </BookingBtnWrapper>
        </BookingForm>
      </BookingWrapper>
    </BookingContainer>
  );
};

export default Booking;
