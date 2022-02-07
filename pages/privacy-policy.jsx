import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PrivacyPolicyMobile } from "../components/organism/TOCComponents";
import PrivacyPolicyIntro from "../components/PrivacyPolicyIntro";
import Sections from "../components/Sections";
import TableOfContent from "../components/TableOfContent";
import {
  privacyPolicyData,
  privacyPolicyMobileData,
  privacyPolicyTOC,
} from "../data";
import styles from "../styles/Home.module.css";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="w-full bg-black">
        <div>
          <Navbar textColor="white" />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between px-[1.83rem] lg:px-20 py-8 bg-black ">
          <div className="flex flex-col text-white text-[4rem] lg:text-8xl font-semibold leading-tight">
            <span>Privacy</span>
            <span>Policy</span>
          </div>
          <img
            className="mt-12 lg:mt-0 lg:mr-28"
            height={320.16}
            width={320.16}
            src="/images/PrivacyPolicy-header.png"
            alt="privacy-policy-icon"
          />
        </div>
      </div>
      <div className="lg:hidden px-[1.83rem] my-[5.33rem]">
        <PrivacyPolicyIntro />
        <TableOfContent items={privacyPolicyTOC} />
        <PrivacyPolicyMobile data={privacyPolicyMobileData} />
        <p className="text-[#666666] mt-8">
          This privacy policy was created using Termly's Privacy Policy
          Generator.
        </p>
      </div>
      <div className={`bg-white hidden lg:block ${styles.privacyContent}`}>
        <Sections pageTitle="privacy-policy" data={privacyPolicyData} />
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
