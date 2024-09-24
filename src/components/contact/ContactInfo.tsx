import ContactItem from "./ContactItem";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaPhone,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const ContactInfo = () => {
  const contactArr = [
    {
      icon: <FaPhone size={25} />,
      content: `054-610-7337`,
      link: `tel:0546107337`,
    },
    {
      icon: <FaRegEnvelope size={25} />,
      content: `noammz101@gmail.com`,
      link: `mailto:noammz101@gmail.com`,
    },
    {
      icon: <FaWhatsapp size={25} />,
      content: `Whatsapp Me!`,
      link: `https://wa.me/972546107337?text=Hi%20Noam,%20I%20am%20contacting%20you%20in%20regards%20to`,
    },
    {
      icon: <FaLinkedin size={25} />,
      content: `Check Out My Linked In!`,
      link: `https://www.linkedin.com/in/noam-moskowitz?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app`,
    },
    {
      icon: <FaGithubSquare size={25} />,
      content: `Check Out My GitHub!`,
      link: `https://github.com/Noam-Moskowitz`,
    },
    {
      icon: <FaFacebookSquare size={25} />,
      content: `Check Out My Facebook!`,
      link: `https://www.facebook.com/share/hJArBfrWziqxn5SW/?mibextid=LQQJ4d`,
    },
  ];
  return (
    <div className="md:w-[50%] flex items-center">
      <div className="  w-full flex  justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 ">
          {contactArr.map((item, i) => (
            <ContactItem key={i} content={item.content} icon={item.icon} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
