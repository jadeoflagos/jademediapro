import Image from "next/image";
import {
  animationProcess,
  brandingProcess,
  illustrationProcess,
  marketingProcess,
  webProcesses,
} from "./Process";

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
      {
        title: "Animation Process",
        description: (
          <div>
            <p className="w-full lg:w-[60%] ">
              At Jade Media Pro, our animation process differs slightly for
              every project we create, partly due to the range of clients we
              have, but also for the range of projects we create. However, our
              underlying process principles and general order of production
              remain consistent. In fact, we have successfully created over 112+
              animated videos using this very animation workflow:
            </p>
            <div>
              {animationProcess.map((item, itemIndex) => (
                <div className=" mt-7" key={itemIndex}>
                  <p className="font-semibold text-xl text-black">
                    {item.header}
                  </p>
                  <div className="flex lg:flex-row flex-col  items-center">
                    <p className="w-full lg:w-7/12">{item.description}</p>
                    <div className="flex-grow lg:w-5/12  flex justify-center">
                      <Image
                        src={`/images/${item.img}`}
                        width={370}
                        height={240}
                        alt="illustration"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        title: "Branding Process",
        description: (
          <div>
            <p className="w-full lg:w-5/12">
              At Jade Media Pro, we deliver brand strategies that will support
              the success of your business for years to come whether you are
              launching a new business, product or service, or rebranding an
              existing one. Our branding and rebranding process is highly
              dynamic and transformative, with a unique "Customer Experience"
              approach built through the following workflow:
            </p>
            <div>
              {brandingProcess.map((item, itemIndex) => (
                <div className=" mt-7" key={itemIndex}>
                  <p className="font-semibold text-xl text-black">
                    {item.header}
                  </p>

                  <div className="flex lg:flex-row flex-col  items-center">
                    <p className="w-full lg:w-5/12">{item.description}</p>
                    <div className="flex-grow flex justify-center">
                      <Image
                        src={`/images/${item.img}`}
                        width={370}
                        height={240}
                        alt="illustration"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        title: "Illustration Process",
        description: (
          <div>
            <p className="w-full lg:w-5/12">
              At Jade Media Pro, we have created a big bunch of illustrations
              for not only our clients but also studio projects using so many
              different styles and techniques, and there’s definitely no right
              or wrong way to do it. Our systematic design approach effectively
              supports websites, blog articles, product presentations, events,
              and video production using the following workflow:
            </p>
            <div>
              {illustrationProcess.map((item, itemIndex) => (
                <div className=" mt-7" key={itemIndex}>
                  <p className="font-semibold text-xl text-black">
                    {item.header}
                  </p>

                  <div className="flex lg:flex-row flex-col  items-center">
                    <p className="w-full lg:w-5/12">{item.description}</p>
                    <div className="flex-grow flex justify-center">
                      <Image
                        src={`/images/${item.img}`}
                        width={370}
                        height={240}
                        alt="illustration"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        title: "Marketing Process",
        description: (
          <div>
            <p className="w-full lg:w-[60%] ">
              At Jade Media Pro, we constantly find ways to maximize our digital
              marketing strategy to increase productivity, keep up with
              technology trends and all the tools online marketing offers in
              order to get the job done and strengthen your brand presence. We
              strategically set your business up for success and make sure your
              valuable time and resources don’t go to waste with these
              processes:
            </p>
            <div>
              {marketingProcess.map((item, itemIndex) => (
                <div className="mt-7" key={itemIndex}>
                  <p className="font-semibold text-xl text-black">
                    {item.header}
                  </p>
                  <div className="flex lg:flex-row flex-col  items-center">
                    <p className="w-full lg:w-5/12">{item.description}</p>
                    <div className="flex-grow flex justify-center">
                      <Image
                        src={`/images/${item.img}`}
                        width={370}
                        height={240}
                        alt="illustration"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        title: "Web/App Dev. Process",
        description: (
          <div>
            <p className="w-full lg:w-[60%] ">
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
                  <p className="font-semibold text-xl text-black">
                    {item.header}
                  </p>

                  <div className="flex lg:flex-row flex-col items-center mt-4">
                    <p className="w-full lg:w-7/12 ">{item.description}</p>
                    <div className="flex-grow lg:w-5/12  flex justify-center">
                      {item.img && (
                        <Image
                          src={`/images/${item.img}`}
                          width={370}
                          height={240}
                          alt="illustration"
                        />
                      )}
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
