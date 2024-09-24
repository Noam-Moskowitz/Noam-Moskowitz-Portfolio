import Ripple from "@/components/magicui/ripple";

const HeroImage = () => {
  return (
    <div className="relative flex h-[400px] w-full md:h-[500px] lg:h-[700px] md:w-[50%] flex-col items-center justify-center rounded-lg ">
      <img
        className="rounded-full h-[200px] md:h-[400px]"
        src="../src/images/heroImage.jpeg"
        alt=""
      />
      <Ripple className="hidden md:block" mainCircleSize={460} numCircles={4} />
      <Ripple className="block md:hidden" mainCircleSize={260} numCircles={4} />
    </div>
  );
};

export default HeroImage;
