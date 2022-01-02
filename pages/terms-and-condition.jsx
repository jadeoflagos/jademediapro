import React from "react";
import Navbar from "../components/Navbar";
import Sections from "../components/Sections";
import TableOfContent from "../components/TableOfContent";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";

import { termsAndConditionData, termsAndConditionTOC } from "../data";

const TermsAndCondition = () => {
  return (
    <div>
      <div className="w-full bg-black">
        <div>
          <Navbar textColor="white" />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between px-[1.83rem] lg:px-20 py-8 bg-black ">
          <div className="flex flex-col text-white text-[4rem] lg:text-8xl font-semibold leading-tight">
            <span>Terms and</span>
            <span>Conditions</span>
          </div>
          <img
            className="mt-12 lg:mt-0"
            src="/images/terms-and-conditions.png"
            alt="terms-and-condition-icon"
          />
        </div>
      </div>
      <div className="lg:hidden px-[1.83rem] my-[5.33rem]">
        <h2 className="font-semibold text-[1.08rem]">
          GENERAL TERMS AND CONDITIONS FOR SERVICES
        </h2>
        <TableOfContent items={termsAndConditionTOC} />
      </div>
      <div className={`bg-white hidden lg:block ${styles.privacyContent}`}>
        <Sections
          pageTitle="terms-and-condition"
          data={termsAndConditionData}
        />
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndCondition;
