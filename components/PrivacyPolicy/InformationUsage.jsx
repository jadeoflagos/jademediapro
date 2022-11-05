import InShort from "./InShort";
import Paragraph from "./Paragraph";
import PrivacyPolicySection from "./PrivacyPolicySection";

export default function InformationUsage() {
  return (
    <PrivacyPolicySection title="How do we use your information?">
      <InShort>
        We process your information for purposes based on legitimate business
        interests, the fulfilment of our contract with you, compliance with our
        legal obligations, and/or your consent.
      </InShort>
      <Paragraph>
        We use personal information collected via our Website for a variety of
        business purposes described below. We process your personal information
        for these purposes in reliance on our legitimate business interests, in
        order to enter into or perform a contract with you, with your consent,
        and/or for compliance with our legal obligations. We indicate the
        specific processing grounds we rely on next to each purpose listed
        below.
      </Paragraph>
      <Paragraph>We use the information we collect or receive:</Paragraph>
      <ul>
        <li className="lg:mt-3">
          <b>To facilitate account creation and logon process.</b> If you choose
          to link your account with us to a third-party account (such as your
          Google or Facebook account), we use the information you allowed us to
          collect from those third parties to facilitate account creation and
          logon process for the performance of the contract. See the section
          below headed "how do we handle your social logins?" for further
          information.
        </li>
        <li className="lg:mt-3">
          <b>To post testimonials.</b> We post testimonials on our Website that
          may contain personal information. Prior to posting a testimonial, we
          will obtain your consent to use your name and the content of the
          testimonial. If you wish to update, or delete your testimonial, please
          contact us at solutions@jademediapro.com and be sure to include your
          name, testimonial location, and contact information.
        </li>
        <li className="lg:mt-3">
          <b>Request feedback.</b>
          We may use your information to request feedback and to contact you
          about your use of our Website.
        </li>
        <li className="lg:mt-3">
          <b>To enable user-to-user communications.</b>
          We may use your information in order to enable user-to-user
          communications with each user's consent.
        </li>
        <li className="lg:mt-3">
          <b>To manage user accounts.</b> We may use your information for the
          purposes of managing our account and keeping it in working order.
        </li>
        <li className="lg:mt-3">
          <b>To send administrative information to you.</b> We may use your
          personal information to send you product, service and new feature
          information and/or information about changes to our terms, conditions,
          and policies.
        </li>
        <li className="lg:mt-3">
          <b>To protect our Services.</b> We may use your information as part of
          our efforts to keep our Website safe and secure (for example, for
          fraud monitoring and prevention).
        </li>
        <li className="lg:mt-3">
          <b>
            To enforce our terms, conditions and policies for business purposes,
            to comply with legal and regulatory requirements or in connection
            with our contract.
          </b>
        </li>
        <li className="lg:mt-3">
          <b>To respond to legal requests and prevent harm.</b>
          If we receive a subpoena or other legal request, we may need to
          inspect the data we hold to determine how to respond.
        </li>
        <li className="lg:mt-3">
          <b>Fulfil and manage your orders.</b> We may use your information to
          fulfil and manage your orders, payments, returns, and exchanges made
          through the Website.
        </li>
        <li className="lg:mt-3">
          <b>Administer prize draws and competitions.</b> We may use your
          information to administer prize draws and competitions when you elect
          to participate in our competitions.
        </li>
        <li className="lg:mt-3">
          <b>To deliver and facilitate delivery of services to the user.</b>
          We may use your information to provide you with the requested service.
        </li>
        <li className="lg:mt-3">
          <b>To respond to user inquiries/offer support to users.</b> We may use
          your information to respond to your inquiries and solve any potential
          issues you might have with the use of our Services.
        </li>
        <li className="lg:mt-3">
          <b>To send you marketing and promotional communications.</b>
          We and/or our third-party marketing partners may use the personal
          information you send to us for our marketing purposes, if this is in
          accordance with your marketing preferences. For example, when
          expressing an interest in obtaining information about us or our
          Website, subscribing to marketing or otherwise contacting us, we will
          collect personal information from you. You can opt-out of our
          marketing emails at any time (see the "what are your privacy rights?"
          below).
        </li>
        <li className="lg:mt-3">
          Deliver targeted advertising to you. We may use your information to
          develop and display personalized content and advertising (and work
          with third parties who do so) tailored to your interests and/or
          location and to measure its effectiveness. For more information see
          our <a style={{color: 'blue'}} href="http://www.jademediapro.com/cookies">Cookie Notice</a>.
        </li>
        <li className="lg:mt-3">
          <b>For other business purposes.</b> We may use your information for
          other business purposes, such as data analysis, identifying usage
          trends, determining the effectiveness of our promotional campaigns and
          to evaluate and improve our Website, products, marketing and your
          experience. We may use and store this information in aggregated and
          anonymized form so that it is not associated with individual end users
          and does not include personal information.
        </li>
      </ul>
    </PrivacyPolicySection>
  );
}
