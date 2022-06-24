import Li from "./Li";
import InShort from "./InShort";
import Paragraph from "./Paragraph";
import PrivacyPolicySection from "./PrivacyPolicySection";

export default function InformationAccess() {
  return (
    <PrivacyPolicySection title="Will your Information be shared with anyone?">
      <InShort>
        We only share information with your consent, to comply with laws, to
        provide you with services, to protect your rights, or to fulfil business
        obligations.
      </InShort>
      <Paragraph>
        We may process or share your data that we hold based on the following
        legal basis:
      </Paragraph>
      <ul>
        <Li head="Consent:">
          We may process your data if you have given us specific consent to use
          your personal information for a specific purpose.
        </Li>
        <Li head="Legitimate Interests:">
          We may process your data when it is reasonably necessary to achieve
          our legitimate business interests.
        </Li>
        <Li head="Performance of a Contract:">
          Where we have entered into a contract with you, we may process your
          personal information to fulfil the terms of our contract.
        </Li>
        <Li head="Legal Obligations:">
          We may disclose your information where we are legally required to do
          so in order to comply with applicable law, governmental requests, a
          judicial proceeding, court order, or legal process, such as in
          response to a court order or a subpoena (including in response to
          public authorities to meet national security or law enforcement
          requirements).
        </Li>
        <Li head="Virtual Interest:">
          We may disclose your information where we believe it is necessary to
          investigate, prevent, or take action regarding potential violations of
          our policies, suspected fraud, situations involving potential threats
          to the safety of any person and illegal activities, or as evidence in
          litigation in which we are involved.
        </Li>
      </ul>
      <Paragraph>
        More specifically, we may need to process your data or share your
        personal information in the following situations:
      </Paragraph>
      <ul>
        <Li head="Business Transfers.">
          We may share or transfer your information in connection with, or
          during negotiations of, any merger, sale of company assets, financing,
          or acquisition of all or a portion of our business to another company.
        </Li>
        <Li head="Google Maps Platform APIs.">
          We may share your information with certain Google Maps Platform APIs
          (e.g., Google Maps API, Place API). To find out more about Google’s
          Privacy Policy, please refer to this{" "}
          <a
            style={{ color: "blue" }}
            href="https://policies.google.com/privacy"
          >
            link
          </a>
          . We obtain and store on your device ('cache') your location. You may
          revoke your consent anytime by contacting us at the contact details
          provided at the end of this document.
        </Li>
        <Li head="Vendors, Consultants and Other Third-Party Service Providers.">
          We may share your data with third-party vendors, service providers,
          contractors or agents who perform services for us or on our behalf and
          require access to such information to do that work. Examples include:
          payment processing, data analysis, email delivery, hosting services,
          customer service and marketing efforts. We may allow selected third
          parties to use tracking technology on the Website, which will enable
          them to collect data on our behalf about how you interact with our
          Website over time. This information may be used to, among other
          things, analyse and track data, determine the popularity of certain
          content, pages or features, and better understand online activity.
          Unless described in this notice, we do not share, sell, rent or trade
          any of your information with third parties for their promotional
          purposes. We have contracts in place with our data processors, which
          are designed to help safeguard your personal information. This means
          that they cannot do anything with your personal information unless we
          have instructed them to do it. They will also not share your personal
          information with any organization apart from us. They also commit to
          protect the data they hold on our behalf and to retain it for the
          period we instruct.
        </Li>
        <Li head="Third-Party Advertisers.">
          We may use third-party advertising companies to serve ads when you
          visit or use the Website. These companies may use information about
          your visits to our Website(s) and other websites that are contained in
          web cookies and other tracking technologies in order to provide
          advertisements about goods and services of interest to you. See our
          <a
            style={{ color: "blue" }}
            href="http://www.jademediapro.com/cookies"
          >
            Cookie Notice
          </a>{" "}
          for further information.
        </Li>
        <Li head="Affiliates.">
          We may share your information with our affiliates, in which case we
          will require those affiliates to honour this privacy notice.
          Affiliates include our parent company and any subsidiaries, joint
          venture partners or other companies that we control or that are under
          common control with us.
        </Li>
        <Li head="Business Partners.">
          We may share your information with our business partners to offer you
          certain products, services or promotions.
        </Li>
      </ul>
    </PrivacyPolicySection>
  );
}
