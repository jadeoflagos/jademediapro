import InShort from "./InShort";
import Li from "./Li";
import Paragraph from "./Paragraph";
import PrivacyPolicySection from "./PrivacyPolicySection";

export default function InformationShare () {
   return (
     <PrivacyPolicySection title=" Who will your information be shared with?">
       <InShort>
         We only share information with the following categories of third
         parties.
       </InShort>
       <Paragraph>
         We only share and disclose your information with the following
         categories of third parties. If we have processed your data based on
         your consent and you wish to revoke your consent, please contact us
         using the contact details provided in the section below titled "how can
         you contact us about this notice?".
       </Paragraph>
       <ul className="list-inside list-disc">
         <Li>Payment Processors</Li>
         <Li>Order Fulfilment</Li>
         <Li>Service Providers</Li>
         <Li>Product Engineering & Design Tools</Li>
         <Li>Sales & Marketing Tools</Li>
         <Li>User Account Registration & Authentication Services</Li>
         <Li>Communication & Collaboration Tools</Li>
       </ul>
     </PrivacyPolicySection>
   );
}