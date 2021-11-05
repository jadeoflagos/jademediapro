import { Input } from "@mui/material";
import Image from "next/image";
import React from "react";

const DailyEmailForm = () => {
  const ariaLabel = { "aria-label": "description" };

  return (
    <div className="bg-[#8B5CF6] w-60 p-9 text-white">
      <Image src="/vectors/send-icon.svg" alt="Avatar" width={53} height={56} />

      <p className="text-3xl">Want to keep up-to-date?</p>
      <form action="" className="mt-4">
        <h3>Get a daily email of all new events</h3>
        <Input inputProps={ariaLabel} className="border-white" />
      </form>
    </div>
  );
};

export default DailyEmailForm;
