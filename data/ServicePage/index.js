import GetQoute from "../../components/GetQoute";
import { DigitalArt, Painting, Photography } from "./ArtAndPhotography";
import {
  BrandCollateralDesign,
  BrandStrategy,
  CompanyProfileDesign,
  EnvironmentalRetailGraphics,
  InfographicIllustrationGraphics,
  LogoBrandIdentity,
  ProductsBrandingPackaging,
} from "./BrandingDesign";
import {
  AnalysisandConsultation,
  BusinessAutomation,
  BusinessPlanning,
  GrowthAndExpansion,
  ProjectManagement,
} from "./BusinessStrategy";
import {
  AdvertisingCampaigns,
  DataAnalytics,
  LeadGeneration,
  MulticulturalContentMarketing,
  SearchEngineOptimization,
  SocialMediaManagement,
} from "./DigitalMarketing";
import {
  CorporatePromotionalVideo,
  DAnimationVideo,
  Postproduction,
  ProductionFilming,
  WhiteboardAnimationVideo,
} from "./MotionDesign";
import {
  EcommerceManagement,
  MobileApplicationDevelopment,
  SoftwareDevelopment,
  UIUXDesign,
  WebsiteDevelopment,
} from "./WebAndApp";

export const serviceData = [
  {
    title: "Art & Photography",
    details: [
      {
        title: "Painting",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12 ">
              {Painting.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="lg:w-5/12 ">
              <img src="/gifs/Painting.gif" className="w-64" />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Digital art",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12">
              {DigitalArt.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img src="/gifs/DigitalArt.gif" className="w-64" />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Photography",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12">
              {Photography.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img src="/gifs/Photography.gif" className="w-64" />
              <GetQoute />
            </div>
          </div>
        ),
      },
    ],
  },
  {
    title: "Branding & Design",
    details: [
      {
        title: "Brand strategy",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12 ">
              {BrandStrategy.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img src="/gifs/Brandstrategy.gif" className="w-64" />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Logo and Brand identity",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12 ">
              {LogoBrandIdentity.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img src="/gifs/LogoBrandidentity.gif" className="w-64" />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Products branding and packaging",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12 ">
              {ProductsBrandingPackaging.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img
                src="/gifs/Productsbrandingandpackaging.gif"
                className="w-64"
              />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Brand collateral/stationery design",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12 ">
              {BrandCollateralDesign.map((item, itemIndex) => (
                <p className="mb-12 " key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img
                src="/gifs/Brandcollateral-Stationery.gif"
                className="w-64"
              />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Company Profile & Editorial design",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12 ">
              {CompanyProfileDesign.map((item, itemIndex) => (
                <p className="mb-12  " key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img src="/gifs/CompanyProfileEditorial.gif" className="w-64" />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Environmental & Retail Graphics",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12 ">
              {EnvironmentalRetailGraphics.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img
                src="/gifs/EnvironmentalRetailGraphics.gif"
                className="w-64"
              />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Infographic and Illustration Graphics",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12 ">
              {InfographicIllustrationGraphics.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img
                src="/gifs/InfographicIllustrationGraphics.gif"
                className="w-64"
              />
              <GetQoute />
            </div>
          </div>
        ),
      },
    ],
  },
  {
    title: "Business Strategy",
    details: [
      {
        title: "Business Planning",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12 ">
              {BusinessPlanning.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img src="/gifs/BusinessPlanning.gif" className="w-64" />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Analysis & Consultation",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12">
              {AnalysisandConsultation.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img src="/gifs/AnalysisConsult.gif" className="w-64" />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Business Process Automation",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12">
              {BusinessAutomation.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img src="/gifs/BusinessProcessAutomation.gif" className="w-64" />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Growth & Expansion System",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12">
              {GrowthAndExpansion.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img src="/gifs/Growth&Expansion.gif" className="w-64" />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Project Management ",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12">
              {ProjectManagement.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img src="/gifs/ProjectManagement.gif" className="w-64" />
              <GetQoute />
            </div>
          </div>
        ),
      },
    ],
  },
  {
    title: "Digital Marketing",
    details: [
      {
        title: "Multicultural content marketing",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12">
              {MulticulturalContentMarketing.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img
                src="/gifs/DigitalMarketing/MulticulturalContentmarketing.gif"
                className="w-64"
              />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Social media management/marketing",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12">
              {SocialMediaManagement.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img
                src="/gifs/DigitalMarketing/SocialMediaMarketing.gif"
                className="w-64"
              />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Search engine optimization",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12">
              {SearchEngineOptimization.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img
                src="/gifs/DigitalMarketing/SearchEngineOptimization.gif"
                className="w-64"
              />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Advertising campaigns",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12">
              {AdvertisingCampaigns.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img
                src="/gifs/DigitalMarketing/AdvertisingCampaign.gif"
                className="w-64"
              />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Lead generation",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12">
              {LeadGeneration.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img
                src="/gifs/DigitalMarketing/LeadGeneration.gif"
                className="w-64"
              />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Data analytics",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12">
              {DataAnalytics.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img
                src="/gifs/DigitalMarketing/DataAnalytics.gif"
                className="w-64"
              />
              <GetQoute />
            </div>
          </div>
        ),
      },
    ],
  },
  {
    title: "Motion Design",
    details: [
      {
        title: "Whiteboard Animation Video",
        description: (
          <div
            className="flex lg:flex-row flex-col items-center w-full "
            style={{ gap: "3.875rem" }}
          >
            <div className="w-full lg:w-7/12">
              {WhiteboardAnimationVideo.map((item, itemIndex) => (
                <p className="mb-12" key={itemIndex}>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <img
                src="/gifs/MotionDesign/WhiteboardAnimationVideo.gif"
                className="w-64"
              />
              <GetQoute />
            </div>
          </div>
        ),
      },
      {
        title: "Corporate Promotional Video ",
        description: (
          <div>
            {CorporatePromotionalVideo.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "2D/3D Animation Video",
        description: (
          <div>
            {DAnimationVideo.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Production/Filming",
        description: (
          <div>
            {ProductionFilming.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Post production",
        description: (
          <div>
            {Postproduction.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
    ],
  },
  {
    title: "Web & App Project",
    details: [
      {
        title: "UI/UX design",
        description: (
          <div>
            {UIUXDesign.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Website development",
        description: (
          <div>
            {WebsiteDevelopment.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Mobile application development",
        description: (
          <div>
            {MobileApplicationDevelopment.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Software development",
        description: (
          <div>
            {SoftwareDevelopment.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "E-commerce management",
        description: (
          <div>
            {EcommerceManagement.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
    ],
  },
];
