import Li from "./Li";
import Paragraph from "./Paragraph";
import PrivacyPolicySection from "./PrivacyPolicySection";

export default function Categories() {
  return (
    <PrivacyPolicySection title="What categories of personal information do we collect?">
      <Paragraph>
        We have collected the following categories of personal information in
        the past twelve (12) months:
      </Paragraph>
      <Paragraph>
        <table className="table-fixed w-full text-[0.79rem] text-left border-[1.5px] border-black">
          <thead className="w-full">
            <tr className="h-[30px]">
              <th
                scope="col"
                className="px-2 w-[30%] border-[1.5px] border-black"
              >
                <b>Categories</b>
              </th>
              <th scope="col" className="px-2 border-[1.5px] border-black">
                <b>Examples</b>
              </th>
              <th
                scope="col"
                className="px-2 w-[25%] border-[1.5px] border-black"
              >
                <b>Collected</b>
              </th>
            </tr>
          </thead>
            <Row
              col1="A. Identifiers"
              col2="Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address and account name."
            />
            <Row
              col1="B. Personal information categories listed in the California Customer Records statute"
              col2="Name, contact information, education, employment, employment history and financial information"
            />
            <Row
              col1="C. Protected classification characteristics under California or federal law"
              col2="Gender and date of birth"
            />
            <Row
              col1="D. Commercial information"
              col2="Transaction information, purchase history, financial details and payment information"
            />
            <Row
              col1="E. Biometric information"
              col2="Fingerprints and voiceprints"
            />
            <Row
              col1="F. Internet or other similar network activity"
              col2="Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems and advertisements"
            />
            <Row col1="G. Geolocation data" col2="Device location" />
            <Row
              col1="H. Audio, electronic, visual, thermal, olfactory, or similar information"
              col2="Images and audio, video or call recordings created in connection with our business activities"
            />
            <Row
              col1="I. Professional or employment-related information"
              col2="Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us"
            />
            <Row
              col1="J. Education Information"
              col2="Student records and directory information"
            />
            <Row
              col1="K. Inferences drawn from other personal information"
              col2="Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics"
            />
        </table>
      </Paragraph>
      <Paragraph>
        We may also collect other personal information outside of these
        categories instances where you interact with us in-person, online, or by
        phone or mail in the context of:
        <ul className="list-inside list-disc">
          <Li>Receiving help through our customer support channels;</Li>
          <Li>Participation in customer surveys or contests; and</Li>
          <Li>
            Facilitation in the delivery of our Services and to respond to your
            inquiries.
          </Li>
        </ul>
      </Paragraph>
    </PrivacyPolicySection>
  );
}

function Row({ col1, col2, col3 }) {
  return (
    <tr>
      <td className="border-[1.5px] border-black px-2">{col1}</td>
      <td className="border-[1.5px] border-black px-2">{col2}</td>
      <td className="border-[1.5px] border-black px-2">{col3 ?? "YES"}</td>
    </tr>
  );
}
