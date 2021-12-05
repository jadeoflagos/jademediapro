import Image from "next/image";
import React from "react";

const CompanyButtons = () => {
  return (
    <section>
      <div className="bg-[#E8E8E8] px-2 lg:p-14 grid gap-x-6 lg:gap-x-12 grid-cols-5">
        <Image
          src="/images/microsoft_logo.png"
          alt="Avatar"
          width={100}
          height={20}
        />
        <Image
          src="/images/amazonlogo.png"
          alt="Avatar"
          width={210}
          height={73}
        />
        <Image
          src="/images/googlelogo.png"
          alt="Avatar"
          width={134}
          height={45}
        />
        <Image src="/images/ibmlogo.png" alt="Avatar" width={100} height={40} />
        <Image src="/images/uberlogo.png" alt="Avatar" width={50} height={20} />
      </div>
    </section>
  );
};

export default CompanyButtons;
