import React, { useState } from "react";
import LikeIcon from "./vectors/LikeIcon";
import SmallLikeIcon from "./vectors/SmallLikeIcon";

const Product = ({ title, img, price, delivery }) => {
  const [like, setLike] = useState(false);
  return (
    <div>
      <div
        className="h-56 lg:h-[33rem] flex justify-end pt-3 px-4 product transition-all"
        style={{
          background: `url("/images/${img}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={`${!like ? "like" : "h-16 w-16"}`}>
          <span
            className={`h-full w-full hidden lg:flex items-center justify-center rounded-full cursor-pointer ${
              like && "bg-white"
            } `}
            onClick={() => setLike(!like)}
          >
            <LikeIcon />
          </span>
          <span className="h-[1.8rem] w-[1.8rem] flex  lg:hidden items-center justify-center rounded-full  ">
            <SmallLikeIcon />
          </span>
        </div>
      </div>

      <p className="mt-[1rem] mb-[0.5rem] text-xs lg:text-base">{title}</p>
      <div className="flex items-center gap-[0.64rem]">
        <p className="font-semibold text-xs lg:text-[1.5rem]">{price}</p>
        <span className="bg-[#C4C4C4] rounded-[1rem] text-[0.4rem] lg:text-base  py-0.5 font-normal px-2  lg:px-8">
          {delivery}
        </span>
      </div>
    </div>
  );
};

export default Product;
