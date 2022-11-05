import React from "react";

const PrivacyPolicyIntro = () => {
  return (
    <div className="intro text-[1.08rem] ">
      <h2 className="font-semibold">Introduction:</h2>
      <div className="text-[#666666] my-5 pb-4 border-b-[1px] border-black">
        <p>
          Thank you for choosing to be part of our community at Jade Media Pro
          LLC ("Company," "we," "us," or "our"). We are committed to protecting
          your personal information and your right to privacy. Please read this
          Privacy Policy carefully, providing consent to both documents in order
          to have permission to use our services. If you have any questions or
          concerns about this privacy notice or our practices with regard to
          your personal information, please contact us at
          solutions@jademediapro.com.
        </p>
        <div className="mt-4">
          <div>
            <span>
              This privacy notice describes how we might use your information if
              you:
            </span>
            <ul className="list-inside list-disc my-4 ml-3">
              <li>Visit our website at https://www.jademediapro.com</li>
              <li>
                Engage with us in other related ways ― including any sales,
                marketing, or events
              </li>
            </ul>
          </div>
          <div>
            <span>In this privacy notice, if we refer to:</span>
            <ul className="list-inside list-disc my-4 ml-3 ">
              <li>
                <strong>"Website,"</strong> we are referring to any website of
                ours that references or links to this policy
              </li>
              <li>
                <strong>"Services,"</strong> we are referring to our website,
                and other related services, including any sales, marketing, or
                events.
              </li>
            </ul>
          </div>
        </div>
        <p>
          The purpose of this privacy notice is to explain to you in the
          clearest way possible what information we collect, how we use it, and
          what rights you have in relation to it. If there are any terms in this
          privacy notice that you do not agree with, please discontinue use of
          our Services immediately.
        </p>
      </div>
      <span className="text-[#77459B]">
        Please read this privacy notice carefully, as it will help you
        understand what we do with the information that we collect
      </span>
    </div>
  );
};

export default PrivacyPolicyIntro;
