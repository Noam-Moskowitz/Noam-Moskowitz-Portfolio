import OrbitingCircles from "../magicui/orbiting-circles";

const ContactCircles = () => {
  return (
    <>
      <div className="relative flex h-[500px] w-full  md:w-[50vw] flex-col items-center justify-center  rounded-lg p-10">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-background-1 to-divider bg-clip-text text-center text-6xl font-semibold leading-none text-transparent z-40">
          Contact Me
        </span>

        {/* Inner Circles */}
        <OrbitingCircles
          className="size-[30px] bg-transparent"
          duration={20}
          delay={20}
          radius={80}
        >
          <img src="./src/images/gmail.svg" alt="gmail icon" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={80}
        >
          <img src="./src/images/whatsapp.svg" alt="whatsapp icon" />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={180}
          duration={20}
          reverse
        >
          <img src="./src/images/linkedin.svg" alt="linked in icon" />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={180}
          duration={20}
          delay={20}
          reverse
        >
          <img src="./src/images/github.svg" alt="github icon" />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[35px] border-none bg-transparent"
          radius={150}
          duration={20}
          reverse
        >
          <img src="./src/images/phone-call.svg" alt="phone icon" />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[35px] border-none bg-transparent"
          radius={150}
          duration={20}
          delay={20}
        >
          <img src="./src/images/facebook.svg" alt="facebook icon" />
        </OrbitingCircles>
      </div>
    </>
  );
};

export default ContactCircles;
