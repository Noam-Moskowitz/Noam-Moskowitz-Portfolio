import React, { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      if (index + 1 > images.length) {
        setIndex(0);
      } else {
        setIndex((prevState) => prevState + 1);
      }
    }, 3500);
  }, [index]);

  return (
    <div>
      <img
        className="fade rounded shadow-md transition-all"
        src={images[index]}
        alt="presentation images"
      />
    </div>
  );
};

export default Carousel;
