import React from "react";
import ContactCircles from "./ContactCircles";
import ContactInfo from "./ContactInfo";

const ContactWrapper = () => {
  return (
    <div
      id="contact"
      className="overflow-hidden py-5 bg-secondary w-full flex flex-col-reverse md:flex-row justify-center"
    >
      <ContactInfo />
      <ContactCircles />
    </div>
  );
};

export default ContactWrapper;
