import Li from "./Li";
import Paragraph from "./Paragraph";
import PrivacyPolicySection from "./PrivacyPolicySection";

export default function AccountInformation() {
  return (
    <PrivacyPolicySection title="Account Information">
      <Paragraph>
        If you would at any time like to review or change the information in
        your account or terminate your account, you can:
      </Paragraph>
      <ul className="list-inside list-disc">
        <Li>Log in to your account settings and update your user account</Li>
        <Li>Contact us using the contact information provided.</Li>
      </ul>
      <Paragraph>
        Upon your request to terminate your account, we will deactivate or
        delete your account and information from our active databases. However,
        we may retain some information in our files to prevent fraud,
        troubleshoot problems, assist with any investigations, enforce our Terms
        of Use and/or comply with applicable legal requirements.
      </Paragraph>
      <Paragraph>
        <b className="text-underline">Cookies and similar technologies:</b> Most
        Web browsers are set to accept cookies by default. If you prefer, you
        can usually choose to set your browser to remove cookies and to reject
        cookies. If you choose to remove cookies or reject cookies, this could
        affect certain features or services of our Website. To opt-out of
        interest-based advertising by advertisers on our Website visit{" "}
        <a
          target="_blank"
          style={{ color: "blue" }}
          href="http://www.aboutads.info/choices/"
        >
          http://www.aboutads.info/choices/
        </a>
        . For further information, please see our{" "}
        <a
          target="_blank"
          style={{ color: "blue" }}
          href="http://www.jademediapro.com/cookies"
        >
          Cookie Notice.
        </a>
      </Paragraph>
      <Paragraph>
        <b className="text-underline">Opting out of email marketing:</b> You can
        unsubscribe from our marketing email list at any time by clicking on the
        unsubscribe link in the emails that we send or by contacting us using
        the details provided below. You will then be removed from the marketing
        email list — however, we may still communicate with you, for example to
        send you service-related emails that are necessary for the
        administration and use of your account, to respond to service requests,
        or for other non-marketing purposes. To otherwise opt-out, you may:
      </Paragraph>
      <ul className="list-inside list-disc">
        <Li>Access your account settings and update your preferences.</Li>
      </ul>
    </PrivacyPolicySection>
  );
}
