import Image from "next/image";
import React from "react";

const SocialButtons = () => {
  return (
    <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0  lg:space-x-4  items-center">
      <p className="cursor-pointer py-3 px-12 flex items-center justify-center  bg-[#4477AA] lg:max-w-max w-full">
        <Image src="/vectors/twitter.svg" alt="Avatar" width={20} height={20} />
        <span className="text-xs pl-3"> TWITTER</span>
      </p>
      <p className="cursor-pointer py-3 px-12 flex items-center justify-center  bg-[#1275B1] lg:max-w-max w-full ">
        <Image src="/vectors/linkdin.svg" alt="Avatar" width={20} height={20} />
        <span className="text-xs pl-3"> LINKEDIN</span>
      </p>{" "}
      <p className="cursor-pointer py-3 px-12 flex items-center justify-center  bg-black lg:max-w-max w-full">
        <Image src="/vectors/medium.svg" alt="Avatar" width={20} height={20} />
        <span className="text-xs pl-3"> MEDIUM</span>
      </p>
    </div>
  );
};

export default SocialButtons;
