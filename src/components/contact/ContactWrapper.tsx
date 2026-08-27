import LetsConnect from "./LetsConnect";
import ContactInfo from "./ContactInfo";

const ContactWrapper = () => {
  return (
    <div
      id="contact"
      className="overflow-hidden py-5 bg-secondary w-full flex flex-col-reverse md:flex-row-reverse justify-center"
    >
      <ContactInfo />
      <LetsConnect />
    </div>
  );
};

export default ContactWrapper;
