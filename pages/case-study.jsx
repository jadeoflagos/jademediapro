import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

const CaseStudy = () => {
  return (
    <div>
      <Navbar dropDownBg="black" bg="#fff" textColor="#000" darkLogo />
      <Image
        // layout="fill"
        src="/images/awotele.png"
        width={1920}
        height={1027}
      />
    </div>
  );
};

export default CaseStudy;
