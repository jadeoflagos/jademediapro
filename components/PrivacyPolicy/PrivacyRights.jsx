import InShort from "./InShort";
import Paragraph from "./Paragraph";
import PrivacyPolicySection from "./PrivacyPolicySection";

export default function PrivacyRights() {
  return (
    <PrivacyPolicySection title=" What are your privacy rights?">
      <InShort>
        In some regions, such as the European Economic Area (EEA) and United
        Kingdom (UK), you have rights that allow you greater access to and
        control over your personal information. You may review, change, or
        terminate your account at any time.
      </InShort>
      <Paragraph>
        In some regions (like the EEA and UK), you have certain rights under
        applicable data protection laws. These may include the right (i) to
        request access and obtain a copy of your personal information, (ii) to
        request rectification or erasure; (iii) to restrict the processing of
        your personal information; and (iv) if applicable, to data portability.
        In certain circumstances, you may also have the right to object to the
        processing of your personal information. To make such a request, please
        use the{" "}
        <a
          style={{ color: "blue" }}
          href="https://app.termly.io/dashboard/website/d3006cac-876a-4d3a-904e-a836b1ae1653/privacy-policy#contact"
        >
          contact details
        </a>{" "}
        provided below. We will consider and act upon any request in accordance
        with applicable data protection laws.
      </Paragraph>
      <Paragraph>
        If we are relying on your consent to process your personal information,
        you have the right to withdraw your consent at any time. Please note
        however that this will not affect the lawfulness of the processing
        before its withdrawal, nor will it affect the processing of your
        personal information conducted in reliance on lawful processing grounds
        other than consent.
      </Paragraph>
      <Paragraph>
        If you are a resident in the EEA or UK and you believe we are unlawfully
        processing your personal information, you also have the right to
        complain to your local data protection supervisory authority. You can
        find their contact details{" "}
        <a
          target="_blank"
          style={{ color: "blue" }}
          href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm."
        >
          here.
        </a>{" "}
      </Paragraph>
      <Paragraph>
        If you are a resident in Switzerland, the contact details for the data
        protection authorities are available{" "}
        <a
          target="_blank"
          style={{ color: "blue" }}
          href="https://www.edoeb.admin.ch/edoeb/en/home.html"
        >
          here.
        </a>{" "}
      </Paragraph>
      <Paragraph>
        If you have questions or comments about your privacy rights, you may
        email us at{" "}
        <a style={{color: 'blue'}} href="mail:solutions@jademediapro.com.">
          solutions@jademediapro.com.
        </a>
      </Paragraph>
    </PrivacyPolicySection>
  );
}
