import Image from "next/image";
import React from "react";
import Button from "./Button";
const DailyEmailForm = () => {
  const ariaLabel = { "aria-label": "description" };

  return (
    <div className="bg-[#502A7A] w-full lg:w-80 p-9 text-white">
      <Image src="/vectors/send-icon.svg" alt="Avatar" width={53} height={56} />

      <p className="text-3xl">Want to keep up-to-date?</p>
      <form action="" className="mt-4 flex flex-col">
        <h3>Get a daily email of all new events</h3>
        <input
          type="text"
          className="my-8 border-white border-b text-white bg-[#502A7A] outline-none"
        />
        <div className=" flex justify-between">
          <span />
          <div className="w-1/2">
            <Button label="SUBMIT" greenBtn />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DailyEmailForm;
