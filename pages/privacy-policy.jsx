import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrivacyPolicy from "../components/PrivacyPolicy";

export default function PPPage() {
  return (
    <div>
      <div className="w-full bg-black">
        <div>
          <Navbar textColor="white" />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between px-[1.83rem] lg:px-20 py-8 bg-black">
          <div className="flex flex-col text-white text-[4rem] lg:text-8xl font-semibold leading-tight">
            <span>Privacy</span>
            <span>Policy</span>
          </div>
          <img
            className="mt-12 lg:mt-0 lg:mr-28"
            height={320.16}
            width={320.16}
            src="/images/PrivacyPolicy-header.png"
            alt="privacy-policy-icon"
          />
        </div>
      </div>
      <div className="bg-white pt-[2.75rem] lg:block lg:pt-[9.8rem]">
        <PrivacyPolicy.Introduction />
        <PrivacyPolicy.Purpose />
        <PrivacyPolicy.TableOfContents />
        <PrivacyPolicy.InformationWeCollect />
        <PrivacyPolicy.InformationUsage/>
        <PrivacyPolicy.InformationAccess/>
        <PrivacyPolicy.InformationShare/>
        <PrivacyPolicy.CookiesAndTracking/>
        <PrivacyPolicy.SocialLogins/>
        <PrivacyPolicy.ThirdPartyWebsites/>
        <PrivacyPolicy.InformationDuration/>
        <PrivacyPolicy.InformationSafety/>
        <PrivacyPolicy.PrivacyRights/>
        <PrivacyPolicy.AccountInformation/>
        <PrivacyPolicy.DoNotTrackFeatures/>
        <PrivacyPolicy.CarliforniaPrivacyRights/>
        <PrivacyPolicy.Categories/>
        <PrivacyPolicy.PersonalInformationUsage/>
      </div>
      <Footer />
    </div>
  );
}
