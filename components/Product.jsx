import React from "react";
import LikeIcon from "./vectors/LikeIcon";
const Product = ({ name, img, price }) => {
  return (
    <div>
      <div
        className="h-[33rem] flex justify-end pt-3 px-4"
        style={{
          background: `url("/images/${img}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="h-16 w-16 flex items-center justify-center rounded-full bg-white ">
          <LikeIcon />
        </span>
      </div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default Product;
