import InShort from "./InShort";
import Paragraph from "./Paragraph";
import PrivacyPolicySection from "./PrivacyPolicySection";

export default function CookiesAndTracking() {
   return (
     <PrivacyPolicySection
       title="Do we use cookies and other tracking technologies?
"
     >
       <InShort>
         We may use cookies and other tracking technologies to collect and store
         your information.
       </InShort>
       <Paragraph>
         We may use cookies and similar tracking technologies (like web beacons
         and pixels) to access or store information. Specific information about
         how we use such technologies and how you can refuse certain cookies is
         set out in our{" "}
         <a style={{color: 'blue'}} href="http://www.jademediapro.com/cookies">Cookie Notice.</a>{" "}
       </Paragraph>
     </PrivacyPolicySection>
   );
}