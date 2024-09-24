import React, { useEffect, useState } from "react";

interface CarouselProps {
  images: any[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);
  console.log(index);

  useEffect(() => {
    const switchImageTimeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearTimeout(switchImageTimeout);
    };
  }, [index, images.length]);

  return <div className="overflow-hidden h-full">{images[index]}</div>;
};

export default Carousel;
