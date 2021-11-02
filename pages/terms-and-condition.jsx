import React from "react";
import Navbar from "../components/Navbar";
import Sections from "../components/Sections";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";

import { termsAndConditionData } from "../data";

const TermsAndCondition = () => {
  return (
    <div>
      <div className="w-full bg-black">
        <div>
          <Navbar textColor="white" />
        </div>
        <div className="flex items-center justify-between px-20 py-8 bg-black ">
          <div className="flex flex-col text-white text-8xl font-semibold leading-tight">
            <span>Terms and</span>
            <span>Conditions</span>
          </div>
          <img
            src="/images/terms-and-conditions.png"
            alt="terms-and-condition-icon"
          />
        </div>
      </div>
      <div className={`bg-white ${styles.privacyContent}`}>
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
