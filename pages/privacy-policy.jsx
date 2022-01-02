import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sections from "../components/Sections";
import TableOfContent from "../components/TableOfContent";
import { privacyPolicyData, privacyPolicyTOC } from "../data";
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
            className="mt-12 lg:mt-0"
            src="/images/privacy-policy.png"
            alt="privacy-policy-icon"
          />
        </div>
      </div>
      <div className="lg:hidden px-[1.83rem] my-[5.33rem]">
        <div className="intro text-[1.08rem] ">
          <h2 className="font-semibold">Introduction:</h2>
          <div className="text-[#666666] my-4 pb-4 border-b-[1px] border-black">
            Thank you for choosing to be part of our community at Jade Media Pro
            LLC ("Company," "we," "us," or "our"). We are committed to
            protecting your personal information and your right to privacy.
            Please read this Privacy Policy carefully, providing consent to both
            documents in order to have permission to use our services. If you
            have any questions or concerns about this privacy notice or our
            practices with regard to your personal information, please contact
            us at solutions@jademediapro.com. This privacy notice describes how
            we might use your information if you: Visit our website at
            https://www.jademediapro.com Engage with us in other related ways ―
            including any sales, marketing, or events In this privacy notice, if
            we refer to: "Website," we are referring to any website of ours that
            references or links to this policy "Services," we are referring to
            our website, and other related services, including any sales,
            marketing, or events. The purpose of this privacy notice is to
            explain to you in the clearest way possible what information we
            collect, how we use it, and what rights you have in relation to it.
            If there are any terms in this privacy notice that you do not agree
            with, please discontinue use of our Services immediately.
          </div>
          <span className="text-[#77459B]">
            Please read this privacy notice carefully, as it will help you
            understand what we do with the information that we collect
          </span>
        </div>
        <TableOfContent items={privacyPolicyTOC} />
      </div>
      <div className={`bg-white hidden lg:block ${styles.privacyContent}`}>
        <Sections pageTitle="privacy-policy" data={privacyPolicyData} />
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
