import { Button } from "@mui/material";
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
          <div>
            {Painting.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Digital art",
        description: (
          <div>
            {DigitalArt.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Photography",
        description: (
          <div>
            {Photography.map((item, itemIndex) => (
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
    title: "Branding & Design",
    details: [
      {
        title: "Brand strategy",
        description: (
          <div>
            {BrandStrategy.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Logo and Brand identity",
        description: (
          <div>
            {LogoBrandIdentity.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Products branding and packaging",
        description: (
          <div>
            {ProductsBrandingPackaging.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Brand collateral/stationery design",
        description: (
          <div>
            {BrandCollateralDesign.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Company Profile & Editorial design",
        description: (
          <div>
            {CompanyProfileDesign.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Environmental & Retail Graphics",
        description: (
          <div>
            {EnvironmentalRetailGraphics.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Infographic and Illustration Graphics",
        description: (
          <div>
            {InfographicIllustrationGraphics.map((item, itemIndex) => (
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
    title: "Business Strategy",
    details: [
      {
        title: "Business Planning",
        description: (
          <div>
            {BusinessPlanning.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Analysis & Consultation",
        description: (
          <div>
            {AnalysisandConsultation.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
            <Button
              variant="contained"
              className="bg-[#502A7A] w-64 my-5 py-4 hover:bg-[#502A7A] hover:bg-opacity-70"
            >
              GET QOUTE
            </Button>
          </div>
        ),
      },
      {
        title: "Business Process Automation",
        description: (
          <div>
            {BusinessAutomation.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Growth & Expansion System",
        description: (
          <div>
            {GrowthAndExpansion.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Project Management",
        description: (
          <div>
            {ProjectManagement.map((item, itemIndex) => (
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
    title: "Digital Marketing",
    details: [
      {
        title: "Multicultural content marketing",
        description: (
          <div>
            {MulticulturalContentMarketing.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Social media management/marketing",
        description: (
          <div>
            {SocialMediaManagement.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Search engine optimization",
        description: (
          <div>
            {SearchEngineOptimization.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Advertising campaigns",
        description: (
          <div>
            {AdvertisingCampaigns.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Lead generation",
        description: (
          <div>
            {LeadGeneration.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Data analytics",
        description: (
          <div>
            {DataAnalytics.map((item, itemIndex) => (
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
    title: "Motion Design",
    details: [
      {
        title: "Whiteboard Animation Video",
        description: (
          <div>
            {WhiteboardAnimationVideo.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
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
