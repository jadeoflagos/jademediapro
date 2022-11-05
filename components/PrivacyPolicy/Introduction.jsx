import Link from "next/link";
import PrivacyPolicySection from "./PrivacyPolicySection";

export default function Introduction() {
  return <PrivacyPolicySection title="Introduction" underline>
    Thank you for choosing to be part of our community at Jade Media Pro LLC
    ("Company," "we," "us," or "our"). We are committed to protecting your
    personal information and your right to privacy. Please read this Privacy
    Policy carefully, providing consent to both documents in order to have
    permission to use our services. If you have any questions or concerns about
    this privacy notice or our practices with regard to your personal
    information, please contact us at solutions@jademediapro.com.
    <div className="mt-4">
      This privacy notice describes how we might use your information if you:
      <ul className="list-inside list-disc">
        <li className="lg:my-2">
          Visit our website at{" "}
          <Link href="/">https://www.jademediapro.com</Link>
        </li>
        <li>
          Engage with us in other related ways - including any sales, marketing,
          or events
        </li>
      </ul>
    </div>
    <div className="mt-4">
      In this privacy notice, if we refer to:
      <ul className="list-inside list-disc">
        <li className="lg:my-2">
          <b>"Website,"</b> we are referring to any website of ours that
          references or links to this policy
        </li>
        <li>
          <b>"Services,"</b> we are referring to our website, and other related
          services, including any sales, marketing, or events.
        </li>
      </ul>
    </div>
  </PrivacyPolicySection>;
}
