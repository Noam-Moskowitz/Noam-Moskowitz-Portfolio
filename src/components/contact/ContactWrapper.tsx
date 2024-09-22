import React from "react";
import ContactCircles from "./ContactCircles";

const ContactWrapper = () => {
  return (
    <div className="p-10  bg-secondary w-[100vw] flex justify-center border-2">
      <div className="w-[50vw]">
        <ul>
          <li>facebook</li>
        </ul>
      </div>
      <ContactCircles />
    </div>
  );
};

export default ContactWrapper;
