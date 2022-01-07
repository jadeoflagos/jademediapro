import Image from "next/image";
const webProcesses = [
  {
    header: "Requirements and feasibility analysis ",
    description:
      "Our collaboration starts with a kick-off meeting, we will take the time necessary to define your requirements, product functionality, business goals, and values. We will help you to define your brilliant idea into a blueprint as precise as possible to give your project a structure without presumptions. The most important task is to get a clear understanding of your future website purposes We will analyse your target audience, business goals technically, operationally, or legally, and give a few pointers on a more sustainable and cost-efficient product.",
    img: "feasibility.png",
  },
  {
    header: "Planning: Sitemap and Wireframe",
    description:
      "At this stage of the development cycle, we will create your sitemap defining how the content; list of pages, their placement, and features from the information that was gathered (scope definition) during the analysis will interrelate. We will also design the wireframe to show you a sketched visual representation of the user interface without putting too much detail on any design elements such as colours, logos, etc. to get your approval that everything looks fine and we can proceed to the next stage.",
    img: "planning.png",
  },
  {
    header: "User Interface (UI) Design",
    description:
      "This is where our exceptional UI designers come in; we will transform the approved wireframes into typography, colours, visual components, animations, buttons, menus, and other elements that define the look and feel of your product while also introducing your branding for a pleasant user experience. In an appealing and user-friendly manner, we will structure the layout design, visualize the content, and highlight the basic functionalities.",
    img: "UI.png",
  },
  {
    header: "Content Writing & Visual elements",
    description:
      "We develop strong, engaging, appealing, and search engine optimizable content that will help you easily retain your customers and inspire them to make a purchase. If you have developed your very own content already, we are happy to accept it. We will also transform some of the content into visual elements that match your brand style to make the reading impressive, more professional, and simpler to understand for your customers.",
    img: "content.png",
  },
  {
    header: "Development",
    description:
      "This is a very technical and important stage in the product development life cycle. Our development team gets hands-on with the infrastructure, frontend, and backend work translating all static pages and features that were designed into a live, responsive, and friendly product that your customers can interact with. We will collaborate together with you through the sprint planning meetings to set the sprint backlog, prioritize features, assess workloads, and subsequently integrate the fully built product based on your choice of technologies and tools.",
    img: "development.png",
  },
  {
    header: "Prototyping & Testing",
    description:
      "Here we dive into conceptual design by sketching, wireframing and visualizing, until we have a high fidelity mockup. This process also yields interactive prototypes for our benefit while designing as well as yours to show stakeholders and potential users. Prototyping allows us to get your designs in front of the people that matter, so we can get the best feedback possible. This is an iterative process so hold on to your seats! It’s going to be a wild (but extremely fun) ride.",
    img: "testing.png",
  },
  {
    header: "Launch",
    description:
      "Here we dive into conceptual design by sketching, wireframing and visualizing, until we have a high fidelity mockup. This process also yields interactive prototypes for our benefit while designing as well as yours to show stakeholders and potential users. Prototyping allows us to get your designs in front of the people that matter, so we can get the best feedback possible. This is an iterative process so hold on to your seats! It’s going to be a wild (but extremely fun) ride.",
    img: "launch.png",
  },
  {
    header: "Operations & Maintenance",
    description:
      "Once your product goes live, we will put your mind at ease with collecting feedback from the end-users, adopting post-launch changes, general updates, and continuous support so you know that you are not left alone even after the project has been launched. We are also aware that as your business grows, you might need to increase the number of pages, add more functionalities and features. We will keep improving, updating, and maintaining it operationally without disruption.",
    img: "operation.png",
  },
];
export const projectData = [
  {
    title: "Case Studies",
    details: [
      { title: "Awotele Project", description: "" },
      { title: "Ariwa Project", description: "" },
      { title: "Gloryland Schools Project", description: "" },
      { title: "Marketing Process", description: "" },
    ],
  },
  {
    title: "Showreel",
    details: [
      { title: "Animation Process", description: "" },
      { title: "Branding Process", description: "" },
      { title: "Illustration Process", description: "" },
      { title: "Marketing Process", description: "" },
    ],
  },
  {
    title: "Process",
    details: [
      { title: "Animation Process", description: "" },
      { title: "Branding Process", description: "" },
      { title: "Illustration Process", description: "" },
      { title: "Marketing Process", description: "" },
      {
        title: "Web/App Dev. Process",
        description: (
          <div>
            <p className="w-full lg:w-5/12">
              At Jade Media Pro, with 5 years of experience in product (website,
              mobile app, and software) development, we break down the project
              life cycle into a step-by-step approach for design and development
              to help you produce amazing results. We professionally plan,
              execute, monitor, and optimize your project essential in the
              development process using the following workflow:
            </p>
            <div>
              {webProcesses.map((item, itemIndex) => (
                <div className=" mt-7" key={itemIndex}>
                  <p className="font-semibold text-xl text-black">{item.header}</p>

                  <div className="flex lg:flex-row flex-col  items-center">
                    <p   className="w-full lg:w-5/12">{item.description}</p>
                    <div className="flex-grow flex justify-center">
                      <Image
                        src={`/images/${item.img}`}
                        width={370}
                        height={240} alt="illustration"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ],
  },
  {
    title: "Training",
    details: [
      { title: "Animation Process", description: "" },
      { title: "Branding Process", description: "" },
      { title: "Illustration Process", description: "" },
      { title: "Marketing Process", description: "" },
    ],
  },
];
