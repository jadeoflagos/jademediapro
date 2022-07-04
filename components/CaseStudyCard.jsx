import React from "react";
import Image from "next/image";

const CaseStudyCard = ({ title = "", contents = [], images = [] }) => {
  return (
    <div className="flex-flex-col mt-16 mb-[4.2rem]">
      <h3 className="text-4xl">{title}</h3>
      <div className="flex flex-col gap-y-2 mt-14 mb-[3.3rem] ">
        {contents.map((content, contentIndex) => (
          <p key={`${title}-content${contentIndex}`}>{content}</p>
        ))}
      </div>
      <div className="flex flex-col">
        {images.map(({ img, width, height }, imgIndex) => (
          <Image
            key={`${title}-image${imgIndex}`}
            src={img}
            width={width}
            height={height}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCard;
