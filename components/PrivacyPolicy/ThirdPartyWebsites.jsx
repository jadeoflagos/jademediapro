import InShort from "./InShort";
import Paragraph from "./Paragraph";
import PrivacyPolicySection from "./PrivacyPolicySection";

export default function ThirdPartyWebsites() {
   return (
     <PrivacyPolicySection title=" What is our stance on third-party websites?">
       <InShort>
         We are not responsible for the safety of any information that you share
         with third-party providers who advertise, but are not affiliated with,
         our Website.
       </InShort>
       <Paragraph>
         The Website may contain advertisements from third parties that are not
         affiliated with us and which may link to other websites, online
         services or mobile applications. We cannot guarantee the safety and
         privacy of data you provide to any third parties. Any data collected by
         third parties is not covered by this privacy notice. We are not
         responsible for the content or privacy and security practices and
         policies of any third parties, including other websites, services or
         applications that may be linked to or from the Website. You should
         review the policies of such third parties and contact them directly to
         respond to your questions.
       </Paragraph>
     </PrivacyPolicySection>
   );
}

