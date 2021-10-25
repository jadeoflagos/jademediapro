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
        <div className="flex items-center justify-between pl-[9.18rem] pr-[14.12rem] py-8 bg-black ">
          <span className="text-white text-[6.87rem] font-semibold">
            Privacy
            <br />
            Policy
          </span>
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
