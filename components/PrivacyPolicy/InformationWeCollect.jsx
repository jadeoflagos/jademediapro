import Li from "./Li";
import PrivacyPolicySection from "./PrivacyPolicySection";
import PPSSubHeading from "./PPSSubHeading";
import InShort from "./InShort";
import Paragraph from "./Paragraph";

export default function InformationWeCollect() {
  return (
    <PrivacyPolicySection title="What information do we collect?">
      <PPSSubHeading>Personal information you disclose to us.</PPSSubHeading>
      <InShort>We collect personal information that you provide to us.</InShort>
      <Paragraph>
        We collect personal information that you voluntarily provide to us when
        you register on the Website, express an interest in obtaining
        information about us or our products and Services, when you participate
        in activities on the Website or otherwise when you contact us.
      </Paragraph>
      <Paragraph>
        The personal information that we collect depends on the context of your
        interactions with us and the Website, the choices you make and the
        products and features you use. The personal information we collect may
        include the following:
      </Paragraph>
      <ul>
        <Li>
          <b>Personal Information Provided by You.</b> We collect names; phone
          numbers; email addresses; mailing addresses; usernames; passwords; job
          titles; contact preferences; contact or authentication data; billing
          addresses; debit/credit card numbers; and other similar information.
        </Li>
        <Li>
          <b>Payment Data.</b> We may collect data necessary to process your
          payment if you make purchases, such as your payment instrument number
          (such as a credit card number), and the security code associated with
          your payment instrument. All payment data is stored by Shopify. You
          may find their privacy notice link(s){" "}
          <a
            color="blue"
            target="_blank"
            href="https://www.shopify.com.ng/legal/privacy"
          >
            here.
          </a>
        </Li>
        <Li>
          <b>Social Media Login Data.</b> We may provide you with the option to
          register with us using your existing social media account details,
          like your Facebook, Twitter or other social media account. If you
          choose to register in this way, we will collect the information
          described in the section called "how do we handle your social logins?"
          below.
        </Li>
      </ul>
      <p className="lg:mt-3 lg:mb-4">
        All personal information that you provide to us must be true, complete
        and accurate, and you must notify us of any changes to such personal
        information.
      </p>
      <PPSSubHeading>Information Automatically Collected</PPSSubHeading>
      <InShort>
        Some information — such as your Internet Protocol (IP) address and/or
        browser and device characteristics — is collected automatically when you
        visit our website.
      </InShort>
      <Paragraph>
        We automatically collect certain information when you visit, use or
        navigate the Website. This information does not reveal your specific
        identity (like your name or contact information) but may include device
        and usage information, such as your IP address, browser and device
        characteristics, operating system, language preferences, referring URLs,
        device name, country, location, information about how and when you use
        our website and other technical information. This information is
        primarily needed to maintain the security and operation of our Website,
        and for our internal analytics and reporting purposes.
      </Paragraph>
      <Paragraph>
        Like many businesses, we also collect information through cookies and
        similar technologies. You can find out more about this in our{" "}
        <a style={{ color: "blue" }} href="http://www.jademediapro.com/cookies">
          Cookie Notice.
        </a>
      </Paragraph>
      <Paragraph>The information we collect includes:</Paragraph>
      <ul>
        <Li>
          <b>Log and Usage Data.</b> Log and usage data is service-related,
          diagnostic, usage and performance information our servers
          automatically collect when you access or use our website and which we
          record in log files. Depending on how you interact with us, this log
          data may include your IP address, device information, browser type and
          settings and information about your activity in the Website (such as
          the date/time stamps associated with your usage, pages and files
          viewed, searches and other actions you take such as which features you
          use), device event information (such as system activity, error reports
          (sometimes called 'crash dumps') and hardware settings).
        </Li>
        <Li>
          <b>Device Data.</b> We collect device data such as information about
          your computer, phone, tablet or other device you use to access the
          Website. Depending on the device used, this device data may include
          information such as your IP address (or proxy server), device and
          application identification numbers, location, browser type, hardware
          model Internet service provider and/or mobile carrier, operating
          system and system configuration information.
        </Li>
        <li className="mt-4 lg:mt-3 lg:mb-4">
          <b>Location Data.</b> We collect location data such as information
          about your device's location, which can be either precise or
          imprecise. How much information we collect depends on the type and
          settings of the device you use to access the Website. For example, we
          may use GPS and other technologies to collect geolocation data that
          tells us your current location (based on your IP address). You can opt
          out of allowing us to collect this information either by refusing
          access to the information or by disabling your Location setting on
          your device. Note however, if you choose to opt out, you may not be
          able to use certain aspects of the Services.
        </li>
      </ul>
      <PPSSubHeading>Information collected from other sources</PPSSubHeading>
      <InShort>
        We may collect limited data from public databases, marketing partners,
        social media platforms, and other outside sources.
      </InShort>
      <Paragraph>
        In order to enhance our ability to provide relevant marketing, offers
        and services to you and update our records, we may obtain information
        about you from other sources, such as public databases, joint marketing
        partners, affiliate programs, data providers, social media platforms, as
        well as from other third parties. This information includes mailing
        addresses, job titles, email addresses, phone numbers, intent data (or
        user behaviour data), Internet Protocol (IP) addresses, social media
        profiles, social media URLs and custom profiles, for purposes of
        targeted advertising and event promotion. If you interact with us on a
        social media platform using your social media account (e.g., Facebook or
        Twitter), we receive personal information about you such as your name,
        email address, and gender. Any personal information that we collect from
        your social media account depends on your social media account's privacy
        settings.
      </Paragraph>
    </PrivacyPolicySection>
  );
}
