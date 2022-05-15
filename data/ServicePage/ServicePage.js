import { Button } from "@mui/material";
import {
  AdvertisingCampaigns,
  DataAnalytics,
  LeadGeneration,
  MulticulturalContentMarketing,
  SearchEngineOptimization,
  SocialMediaManagement,
} from "./DigitalMarketing";

const BusinessPlanning = [
  "Most people when they think of creating a business offline or online, think of creating a product, selling the product, and hoping to make enough capital to finance their next product idea. This kind of thinking is short-term about what's hot for the next few months and concentrates on selling a product to fill that hot, but limited need and it's not beneficial to a long-term business venture.",
  "It is crucial to develop an executive summary. We tell you about the exact strategies on how to launch your new ideas whether online, offline, or a mix of the two to get the best business opportunities. We help you develop your business plan - your targeted market and services, analysis of the business environment, marketing and operation plan, your business competition, finance planning, etc.",
];

const AnalysisandConsultation = [
  `The 80/20 Rule. You’re probably aware that 80 percent of your
income is determined by 20 percent of your customers. If this
isn't the case, you're probably missing out on a lot of profitable
opportunities. What's really needed is a method to capture leads,
convert those leads into small-time customers, and gradually build
them towards customers that spend more with you.
`,
  `Our consultation workshop will help you to understand, analyse,
and prioritize your business market supplying a summary of typical
strategies and implementation describing how your product or
service will be sold, managing your customers' expectations, and
how the plan will be put into action together with its milestones
to focus on a clear vision and achieve the anticipated growth.
`,
];
const BusinessAutomation = [
  "A lot of businesses today spend so much time, resources, and money carrying out routine business activities that enable them to deliver on their value proposition, unaware of the fact that most of their routine business activities can be automated. Which will save them thousands of dollars in annual running costs and time spent doing their work. The danger of leaving it all to humans is that human error can be unpredictable and happen when you least expect it.",
  "We thoroughly and comprehensively study how your business operates, identify areas that can be improved, and create viable solutions (digital business transformation, integrate new technology, or re-organize your staff routine tasks) that will transform your business, with the aim of simplifying the process, reducing running costs, increasing efficiency, and improving service to boost your business productivity.",
];
const GrowthAndExpansion = [
  "Many small business owners enjoy the greatest satisfaction in owning a business, which often includes working closely with customers and employees, inevitably limiting growth than giving up those satisfactions. While some small business owners choose not to expand their operations even though they have ample opportunity to do so. However, many business expansion problems are the result of poor planning.",
  "We know business growth is often a good thing. We make proper plans, systems, and resources to cope with the increased demand for your products and services. We help your business surmount intractable challenges to grow and expand into new territories and increase your company’s value and profit. We analyse factors such as value-added, number of locations, the complexity of product line, and rate of change in products or production technology to grow your business in a smooth and productive manner.",
];
const ProjectManagement = [
  "Project failures are not only expensive but can have very negative consequences for the reputation of the company and the project team. About 60-80% of project failures can be attributed directly to poor requirements gathering, communications breakdown, analysis, and management. Even big brands make mistakes and, unfortunately for them, those big project failures often end up in the headlines and threaten their very existence.",
  "We can help to ensure you get the most from your business investments using best practice project management. We have a professional, knowledgeable technology assurance team, with experience in strategic planning, product optimization, process automation, financial advisory, and business modelling to solve project problems, seize opportunities, deliver results and drive success in line with your business objectives maximizing gains, increasing efficiency and automation, and reducing costs to remain competitive, agile, innovative and responsive.",
];

// Branding & Design
const BrandStrategy = [
  `Business can’t survive if it doesn’t have a strong brand strategy
– a unified identity, personalized content communication,
exceptional culture, core business mission, and values, etc.
Usually misunderstood, brand strategy is just not your logo,
colour palette, or website, despite the fact that these creative
ingredients are essential to a successful branding strategy.`,
  `Our main goal is to let the world know that your brand exists,
  what purpose it has, what you stand for, the promise you make, the
  personality you convey, and what defines your brand. We bring your
  competitive positioning to life, help you communicate your brand
  personality and tone of voice more effectively with your
  customers, shape how they feel about your brand, and drive
  sustainable brand awareness and brand equity.`,
];

const LogoBrandIdentity = [
  `
Many business owners use logos and brands interchangeably, but
this is incorrect because a logo on its own is not your brand. A
logo is just a small but important piece of your brand and a key
part of your brand’s identity. Logo design is not easy, it’s a
skillful task that not only requires design skills but also proper
research, expertise, and planning to arrive at a solid working
concept.`,
  `We start with a deep analysis of your business purpose to
understand who you are and how we can translate your essence into
a visual language that effectively communicates your brand story.
We make the first impression an everlasting impression by applying
design principles to create a comprehensive logo and brand
identity that is attractive, innovative, dynamic, cohesive, and
promotes your brand integrity at all times in the real world.`,
];
const ProductsBrandingPackaging = [
  `Many businesses are unaware that product design and branding are deeply connected. When a product is not planned, designed, created, marketed, and sold with the brand value at its core, it can sabotage its own success. Besides that, effective packaging not only ensures that the product is protected from damage but also ensures that it is presentable and attractive. Packaging is an effective way of marketing because it is the first thing customers view.
`,
  `We design simple, clear concepts that catch your targeted customers, stir up emotions of excitement, joy, delight, or amazement, and encourage them to buy your product giving them no choice but to keep coming back to your brand. Because first impressions are so important, we develop a unique well-designed high-quality product packaging that appeals to your consumers and encourages them to pick up your product over and over again.
  `,
];

export const serviceData = [
  {
    title: "Art & Photography",
    details: [
      { title: "Painting", description: "" },
      { title: "Digital art", description: "" },
      { title: "Photography", description: "" },
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
            {LogoBrandIdentity.map((item, itemIndex) => (
              <p className="mb-12" key={itemIndex}>
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        title: "Company Profile & Editorial design",
        description: "",
      },
      { title: "Environmental & Retail Graphics", description: "" },
      { title: "Infographic and Illustration Graphics", description: "" },
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
      { title: "Whiteboard Animation Video", description: "" },
      { title: "Corporate Promotional Video ", description: "" },
      { title: "2D/3D Animation Video", description: "" },
      { title: "Production/Filming", description: "" },
      { title: "Post production", description: "" },
    ],
  },
  {
    title: "Web & App Project",
    details: [
      { title: "UI/UX design", description: "" },
      { title: "Website development", description: "" },
      { title: "Mobile application development", description: "" },
      { title: "Software development", description: "" },
      { title: "E-commerce management", description: "" },
    ],
  },
];
