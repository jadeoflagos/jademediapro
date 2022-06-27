import InShort from "./InShort";
import Li from "./Li";
import Paragraph from "./Paragraph";
import PPSSubHeading from "./PPSSubHeading";
import PrivacyPolicySection from "./PrivacyPolicySection";

export default function CarliforniaPrivacyRights() {
  return (
    <PrivacyPolicySection title="Do California residents have specific privacy rights?">
      <InShort>
        Yes, if you are a resident of California, you are granted specific
        rights regarding access to your personal information.
      </InShort>
      <Paragraph>
        California Civil Code Section 1798.83, also known as the "Shine The
        Light" law, permits our users who are California residents to request
        and obtain from us, once a year and free of charge, information about
        categories of personal information (if any) we disclosed to third
        parties for direct marketing purposes and the names and addresses of all
        third parties with which we shared personal information in the
        immediately preceding calendar year. If you are a California resident
        and would like to make such a request, please submit your request in
        writing to us using the contact information provided below.
      </Paragraph>
      <Paragraph>
        If you are under 18 years of age, reside in California, and have a
        registered account with the Website, you have the right to request
        removal of unwanted data that you publicly post on the Website. To
        request removal of such data, please contact us using the contact
        information provided below, and include the email address associated
        with your account and a statement that you reside in California. We will
        make sure the data is not publicly displayed on the Website, but please
        be aware that the data may not be completely or comprehensively removed
        from all our systems (e.g., backups, etc.).
      </Paragraph>
      <div className="lg:mt-3"></div>
      <PPSSubHeading>CCPA Privacy Notice</PPSSubHeading>
      <Paragraph>
        The California Code of Regulations defines a "resident" as:
      </Paragraph>
      <ol className="list-inside list-decimal">
        <Li>
          every individual who is in the State of California for other than a
          temporary or transitory purpose, and
        </Li>
        <Li>
          every individual who is domiciled in the State of California who is
          outside the State of California for a temporary or transitory purpose.
        </Li>
      </ol>
      <div className="lg:mt-3"></div>
      <Paragraph>
        All other individuals are defined as "non-residents."
      </Paragraph>
      <Paragraph>
        If this definition of "resident" applies to you, we must adhere to
        certain rights and obligations regarding your personal information.
      </Paragraph>
    </PrivacyPolicySection>
  );
}
