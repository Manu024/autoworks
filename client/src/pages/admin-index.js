import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import AdminIndex from "../components/Admin-Index";
import EditForm from "../components/EditForm";
import Sidebar from "../components/Sidebar";

const Adminindex = (props) => {
  const [click, setClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState();

  const toggleClick = (form) => {
    setClick(!click);
    setForm(form);
  };
  const toggleBar = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar {...props} toggleClick={toggleClick} toggleBar={toggleBar} />
      <Sidebar
        {...props}
        isOpen={isOpen}
        toggleBar={toggleBar}
        toggleClick={toggleClick}
      />
      <AdminIndex {...props} toggleClick={toggleClick} />
      <Services />
      {click ? <EditForm toggleClick={toggleClick} form={form} /> : null}
      <Footer />
    </>
  );
};

export default Adminindex;
