import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sections from "../components/Sections";
import { privacyPolicyData } from "../data";
import styles from "../styles/Home.module.css";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="w-full bg-black">
        <div>
          <Navbar textColor="white" />
        </div>
        <div className="flex items-center justify-between px-20 py-8 bg-black ">
          <div className="flex flex-col text-white text-[6rem] font-semibold leading-tight">
            <span>Privacy</span>
            <span>Policy</span>
          </div>
          <img src="/images/privacy-policy.png" alt="privacy-policy-icon" />
        </div>
      </div>
      <div className={`bg-white ${styles.privacyContent}`}>
        <Sections pageTitle="privacy-policy" data={privacyPolicyData} />
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
