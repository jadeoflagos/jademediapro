import InShort from "./InShort";
import Paragraph from "./Paragraph";
import PrivacyPolicySection from "./PrivacyPolicySection";

export default function InformationSafety () {
   return (
     <PrivacyPolicySection title="How do we keep your information safe?">
       <InShort>
         We aim to protect your personal information through a system of
         organizational and technical security measures.
       </InShort>
       <Paragraph>
         We have implemented appropriate technical and organizational security
         measures designed to protect the security of any personal information
         we process. However, despite our safeguards and efforts to secure your
         information, no electronic transmission over the Internet or
         information storage technology can be guaranteed to be 100% secure, so
         we cannot promise or guarantee that hackers, cybercriminals, or other
         unauthorized third parties will not be able to defeat our security, and
         improperly collect, access, steal, or modify your information. Although
         we will do our best to protect your personal information, transmission
         of personal information to and from our Website is at your own risk.
         You should only access the Website within a secure environment.
       </Paragraph>
     </PrivacyPolicySection>
   );
}