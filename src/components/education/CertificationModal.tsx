import React, { useState } from "react";

const CertificationModal = () => {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <div>
      <span onClick={() => setIsClosed(false)} className="underline cursor-pointer">
        View Certification
      </span>
      {!isClosed && (
        <div
          onClick={() => setIsClosed(true)}
          className="size-full fixed top-0 left-0 bg-black cursor-pointer bg-opacity-80 flex p-10 justify-center z-50"
        >
          <div onClick={(e) => e.stopPropagation()} className="cursor-default">
            <img
              className="relative h-[90vh] certificate"
              src="./src/images/hacker-u-certificate.jpg"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationModal;
