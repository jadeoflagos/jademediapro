import React, { useState } from "react";
import { Button } from "@mui/material";
import Image from "next/image";

const BussinessStrategy = () => {
  const [analysis, setAnalysis] = useState(false);

  return (
    <div>
      <p
        className="p-2 text-3xl font-normal border-b-2 border-black"
        style={{ width: "52.5%" }}
      >
        Business Planning
      </p>
      <p
        className="p-2 text-3xl font-normal border-b-2 border-black cursor-pointer"
        style={{ width: "52.5%" }}
        onClick={() => setAnalysis(!analysis)}
      >
        Analysis & Consultation
      </p>
      {analysis && (
        <div className="grid grid-cols-2 gap-x-20  items-center w-full">
          <p className="p-2 py-4  text-[#666666]">
            The 80/20 Rule. You’re probably aware that 80 percent of your income
            is determined by 20 percent of your customers. If this isn't the
            case, you're probably missing out on a lot of profitable
            opportunities. What's really needed is a method to capture leads,
            convert those leads into small-time customers, and gradually build
            them towards customers that spend more with you.
            <br />
            <br /> Our consultation workshop will help you to understand,
            analyse, and prioritize your business market supplying a summary of
            typical strategies and implementation describing how your product or
            service will be sold, managing your customers' expectations, and how
            the plan will be put into action together with its milestones to
            focus on a clear vision and achieve the anticipated growth.
          </p>
          <div className=" pl-20  space-y-8">
            <Image
              src="/images/market.png"
              alt="Avatar"
              width={480}
              height={259}
            />
            <Button
              style={{
                backgroundColor: "#502A7A",
              }}
              variant="contained"
              className="w-64 py-4 hover:opacity-90"
            >
              GET QUOTE
            </Button>
          </div>
        </div>
      )}
      <p
        className="p-2 text-3xl font-normal border-b-2 border-black "
        style={{ width: "52.5%" }}
      >
        Business Process Automation
      </p>
      <p
        className="p-2 text-3xl font-normal border-b-2 border-black"
        style={{ width: "52.5%" }}
      >
        Growth & Expansion System
      </p>
      <p
        className="p-2 text-3xl border-b-2 border-black"
        style={{ width: "52.5%" }}
      >
        Project Management
      </p>
    </div>
  );
};

export default BussinessStrategy;
