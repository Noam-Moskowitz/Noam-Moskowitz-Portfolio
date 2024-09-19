import React from "react";
import AboutParagrah from "./AboutParagrah";

const AboutWrapper = () => {
  const aboutMe = [
    {
      title: "About Me",
      content:
        "I am a motivated Full Stack Developer with extensive hands-on experience in a wide range of technologies, including JavaScript, TypeScript, React, Node.js, MongoDB, MySQL, HTML, CSS, React Native, and AWS. My journey in web development has been fueled by a passion for solving complex problems and building innovative solutions.",
    },
    {
      title: "Education & Achievements",
      content:
        "I graduated with honors in Full Stack Web Development from HackerU, achieving an outstanding average project grade of 99.5. This academic success reflects my dedication to mastering the latest web technologies and delivering high-quality projects.",
    },
    {
      title: "Notable Projects",
      content:
        "One of my key accomplishments is the development of a client and admin app for a personal trainer, which serves 70+ users. I utilized AWS to optimize performance and reduce hosting costs, ensuring a seamless and scalable experience for both the trainer and their clients.",
    },
    {
      title: "Professional Qualities",
      content:
        "I am known for my strong commitment to continuous learning, teamwork, and delivering effective, high-quality solutions in dynamic, task-driven environments. I thrive in situations where complex challenges need innovative and reliable answers.",
    },
  ];

  return (
    <div id="about" className="flex p-10 bg-secondary border-y-8 border-lime-700">
      {aboutMe.map((para, i) => (
        <AboutParagrah key={i} content={para.content} title={para.title} />
      ))}
    </div>
  );
};

export default AboutWrapper;
