import InShort from "./InShort";
import Paragraph from "./Paragraph";
import PrivacyPolicySection from "./PrivacyPolicySection";

export default function InformationDuration () {
   return (
     <PrivacyPolicySection title="How long do we keep your information?">
       <InShort>
         We keep your information for as long as necessary to fulfil the
         purposes outlined in this privacy notice unless otherwise required by
         law.
       </InShort>
       <Paragraph>
         We will only keep your personal information for as long as it is
         necessary for the purposes set out in this privacy notice, unless a
         longer retention period is required or permitted by law (such as tax,
         accounting or other legal requirements). No purpose in this notice will
         require us keeping your personal information for longer than six (6)
         months past the termination of the user's account.
       </Paragraph>
       <Paragraph>
         When we have no ongoing legitimate business need to process your
         personal information, we will either delete or anonymize such
         information, or, if this is not possible (for example, because your
         personal information has been stored in backup archives), then we will
         securely store your personal information and isolate it from any
         further processing until deletion is possible.
       </Paragraph>
     </PrivacyPolicySection>
   );
}