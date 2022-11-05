import PrivacyPolicySection from "./PrivacyPolicySection";
export default function TableOfContents () {
   return (
     <PrivacyPolicySection className="lg:hidden" title="Table of Contents">
       <ol className="list-inside list-decimal">
         <li>What information do we collect?</li>
         <li>How do we use your information?</li>
         <li>Will your information be shared with anyone?</li>
         <li>Do we use cookies and other tracking technologies?</li>
         <li>How do we handle your social logins?</li>
         <li>What is our stance on third-parrty websites?</li>
         <li>How long do we keep your information?</li>
         <li>How do we keep your information safe?</li>
         <li>What are your privacy rights?</li>
         <li>Controls for do-not-track features</li>
         <li>Do we make updates to this notice?</li>
         <li>How can you contact us about this notice?</li>
         <li>
           How can you review, update or delete the data we collect from you?
         </li>
       </ol>
     </PrivacyPolicySection>
   );
}