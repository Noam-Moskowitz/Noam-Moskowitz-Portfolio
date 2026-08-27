import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import ContactItem from "./ContactItem";

const ContactInfo = () => {
  const contactArr = [
    {
      icon: <MdEmail size={25} />,
      content: "noammz101@gmail.com",
      link: "mailto:noammz101@gmail.com",
      copyValue: "noammz101@gmail.com",
    },
    {
      icon: <FaPhone size={23} />,
      content: "054-610-7337",
      link: "tel:0546107337",
      copyValue: "0546107337",
    },
    {
      icon: <FaLinkedin size={25} />,
      content: "LinkedIn",
      link: "https://www.linkedin.com/in/noam-moskowitz",
    },
    {
      icon: <FaGithub size={25} />,
      content: "GitHub",
      link: "https://github.com/Noam-Moskowitz",
    },
    {
      icon: <FaWhatsapp size={25} />,
      content: "WhatsApp",
      link: "https://wa.me/972546107337",
    },
  ];

  return (
    <div className="md:w-[50%] flex items-center">
      <div className="w-full flex justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-xl">
          {contactArr.map((item) => (
            <ContactItem
              key={item.content}
              content={item.content}
              icon={item.icon}
              link={item.link}
              copyValue={item.copyValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
