import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Illus from "../components/vectors/Iluust";
import InterviewCard from "../components/InterviewCard";
import { useState } from "react";
import PostCard from "../components/PostCard";
import ServicesCarousel from "../components/ServicesCarousel";
import Product from "../components/Product";
import { eventData } from "../data";
import Link from "next/link";

export default function Home() {
  const idea = ["Research", "Ideate", "Design", "Implement", "Result"];
  const [activeIdea, setActiveIdea] = useState(1);
  const openings = [
    {
      position: "Project Manager",
      location: "Lagos",
      type: "Full Time",
      company: "GIG Logistics",
    },
    {
      position: "Graphic Designer",
      location: "New Jersey",
      type: "Contract",
      company: "Crane Inc.",
    },
    {
      position: "Sales Executive",
      location: "Abuja",
      type: "Full Time",
      company: "NMI Pharmacy",
    },
  ];
  const products = [
    {
      name: "Imperfection is perfect | Custom Poster",
      price: "USD 45",
      img: "winecup.png",
    },
    {
      name: "Imperfection is perfect | Custom Poster",
      price: "USD 45",
      img: "winebottle.png",
    },
    {
      name: "Imperfection is perfect | Custom Poster",
      price: "USD 45",
      img: "winebottle.png",
    },
  ];
  return (
    <div>
      <div
        className="w-screen min-h-[50rem]"
        style={{
          background: `url("/images/homebg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <Navbar textColor="white" />
        </div>
        <div className="py-20 max-w-[65%] text-white flex flex-col justify-center  px-20">
          <p className="font-extrabold text-8xl">
            The passion of Idea, Business & Creativity:
          </p>
          <p className="my-10 text-2xl font-normal">
            We help small and medium-sized businesses grow and achieve their
            dreams, earn income, and increase their impact in this post-pandemic
            world by developing innovative as well as sustainable design systems
            and marketing strategies to help them stand out in a crowded
            marketplace and make a profit. YES! WE CAN.
          </p>
          <p className="cursor-pointer py-3 px-12 flex justify-center text-black bg-[#0DFFE5] max-w-max ">
            VIEW PROJECTS
          </p>
        </div>
      </div>
      <div className="w-full py-24 flex items-center px-8">
        <div className="w-5/12 ">
          <div className="flex justify-center">
            <Illus />
          </div>
        </div>
        <div className="w-7/12 px-12">
          <p className="text-6xl font-bold">
            Unlock your future by taking advantage of Branding & Digital
            marketing
          </p>
          <div>
            <p className="mt-8">
              Few businesses live the test of time. Many businesses are
              struggling with different strategies and identifying which one
              truly fits. All sorts of brands - personal, entrepreneurial, or
              small and even big players need something special to succeed and
              we get it... you want to stand out in a crowded marketplace. In
              fact, we hold the golden key in our hands. It's in our ability to
              internalize what we actually believe in. Your business requires a
              unique brand vision that you can communicate with the rest of the
              world, as well as values that you can internalize. That’s what
              makes you unique and different. Your brand should have a
              personality. This allows customers and potential customers to
              better relate to your company and your products and services.
              According to studies, current and potential customers are far more
              likely to connect with your business if they can visualize a
              personality type. These are known as archetypes in the branding
              field.
            </p>
            <p className="my-8">
              On the other hand, Digital marketing is the practice of creating
              content to attract more customers and build relationships. It is
              more than just advertising; it is an essential component for any
              company to grow its business. Through digital marketing,
              businesses are able to harness the collective power of people,
              data, and modern software practices to reimagine their customer
              experience. The strategies that are most effective in digital
              marketing with reference to data-driven attribution models, mobile
              optimization, search engine optimization (SEO), email marketing,
              social media advertising, and conversion rates. With these
              strategies in mind and the help of Jade Media Pro, you can expand
              your business and look ahead to the success of your business more
              than it is right now in the coming times whether you are starting
              a new business or you already have an existing business.
            </p>
            <div className=" flex items-center mt-8">
              <p className="mr-1 text-xl " style={{ fontWeight: "bolder" }}>
                Find out more about what is Branding and how does it help your
                Business?
              </p>
              <Link href="/services">
                <a href="/services">
                  <Image
                    src="/vectors/arrow-right.svg"
                    alt="Avatar"
                    width={35}
                    height={35}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-24 flex items-center px-20 bg-[#502A7A]">
        <div className="w-4/12 text-white space-y-8">
          {idea.map((i, index) => (
            <div className="flex items-center space-x-10" key={index}>
              <span
                className={` ${
                  activeIdea == index
                    ? "w-4 h-4 border p-2"
                    : " w-2 h-2 bg-opacity-50"
                }  rounded-full bg-white `}
              />
              <p
                className={`border-b ${
                  activeIdea == index
                    ? "text-7xl font-bold border-white"
                    : "text-xl font-light border-transparent"
                }  `}
              >
                {i}
              </p>
            </div>
          ))}
        </div>
        <div className="w-8/12 px-12 text-white">
          <p className="text-5xl font-bold">
            Our five foundational process to create your strategic brand’s
            success
          </p>
          <div className="grid grid-cols-2 gap-x-6 mt-10">
            <Image
              src="/images/market.png"
              alt="Avatar"
              width={492}
              height={259}
            />{" "}
            <Image
              src="/images/grantchart.png"
              alt="Avatar"
              width={492}
              height={259}
            />
          </div>
          <p className="py-8">
            After we’ve examined all potential causes of the problem and have
            used those questions to boil down exactly what you’re trying to
            solve, it’s time to focus and consolidate values, business
            aspirations, vision for the future and then align an effective
            solution with your vision. Also, we put ourselves in your buyer’s
            position by creating a narrative about them using statistics and
            research data about your target audience like; ‘Where do they
            shop?’, ‘What do they do for fun?’, ‘Which social media channels do
            they use?’. Knowing these will help us optimize your branding and
            marketing decisions. This process phase entails brainstorming
            numerous ideas in a team discussion, selecting the best idea(s),
            working to develop a plan to implement the idea, and finally putting
            the idea into practice to set the tone of your communication, and
            provide a unifying force to develop your brand values and business
            direction.
          </p>
          <p className="cursor-pointer py-3 px-12 flex justify-center text-black bg-[#0DFFE5] max-w-max uppercase">
            Get your Brand process
          </p>
        </div>
      </div>
      <p className="px-20 pt-20 pb-12 text-6xl text-center font-semibold">
        Put money, attention, and resources where it's most effective to
        generate income
      </p>
      <div className="px-20">
        <ServicesCarousel />
      </div>
      <p className="px-20 pt-32 pb-12 text-6xl text-left font-semibold">
        Exclusive interviews with industry leading professionals
      </p>
      <section className="flex items-start px-20">
        <div className="w-4/6">
          <iframe
            src="https://player.vimeo.com/video/636370372?h=734c780ecc"
            width="900"
            height="450"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/636370372">Ariwa-Leather-Fashion.mp4</a>
            from <a href="https://vimeo.com/user147594847">John Ademiluyi</a> on
            <a href="https://vimeo.com">Vimeo</a>.
          </p>
        </div>
        <div className="w-2/6 flex flex-col justify-start ">
          <p className="text-[#046C62] mb-8 text-4xl">
            60 minutes with Adaeze of <u>CAV Digital</u>
          </p>
          <p>
            We start by defining a clear image of exactly who you serve and
            precisely how they think. Why? Because you can’t help people unless
            you know them – their hopes, their fears, their problems, and their
            pitfalls. What converts a total stranger into a die-hard fan of your
            brand? A constant pull of value and inspiration. At this stage, we
            map out your customer’s journey so you’ll be able to meet them at
            their point of need before one of your competitors does.
          </p>
          <p> We partner with brands to take communication.</p>
          <p className="mt-10 cursor-pointer py-3 px-12 flex justify-center text-white bg-[#502A7A] max-w-max uppercase">
            watch more
          </p>
        </div>
      </section>
      <section className="px-20 pt-12 mb-20 grid grid-cols-3 gap-x-8">
        <InterviewCard />
        <InterviewCard />
        <InterviewCard />
      </section>
      <section className="px-20 mt-32">
        <p className="text-6xl font-semibold">
          Discover popular and profitable{" "}
          <span className="border-b-2 border-black">editorials</span>
        </p>
      </section>
      <section className="mt-11 grid grid-cols-3 gap-x-8 px-20 ">
        <PostCard
          date="October 21, 2021"
          title="15 SEO Best Practices: Website Architecture"
          desc="One SEO component called off-site SEO ensures that users of external pages or of social media can find your website. Being optimized for SEO increases the site’s potential to draw customers from other platforms other than the search engine. It also gives you insights on such as location, technologies used, product preferences, etc. "
        />
        <PostCard
          title="A Guide to Google SEO Algorithm Updates"
          desc="Some SEO-related tools such as the Google Keyword Planner and Google Analytics provide quantitative data to help you understand your market, analyze the trends, and know your competitors’ standings. The  search engine management is to helps you identify popular keywords so you can decide how to structure or revise your needed content."
        />
        <PostCard
          title="A Guide to Google SEO Algorithm Updates"
          desc="Some SEO-related tools such as the Google Keyword Planner and Google Analytics provide quantitative data to help you understand your market, analyze the trends, and know your competitors’ standings. The  search engine management is to helps you identify popular keywords so you can decide how to structure or revise your needed content."
        />
      </section>
      <section className="mt-40 px-20">
        <div className=" mb-[4.5rem] grid grid-cols-3 gap-x-20">
          {products.map((product, productIndex) => (
            <Product
              key={`product-${productIndex}`}
              title={product.name}
              price={product.price}
              img={product.img}
              delivery="FREE Delivery"
            />
          ))}
        </div>
        <div className="flex items-center space-x-8 ">
          <h1 className="text-5xl">Explore our full catalogue</h1>
          <p className="cursor-pointer py-3 px-12 flex justify-center text-white bg-[#502A7A] max-w-max uppercase">
            VISIT STORE
          </p>
        </div>
      </section>
      <section className="mt-32 grid grid-cols-2 px-20 mb-44">
        <div className="w-full flex flex-col pr-28">
          <p className="text-5xl font-semibold">
            Don’t miss the next live meeting to experience growth
          </p>
          <div className="grid grid-cols-2 gap-x-9 mt-10 flex-grow">
            {eventData.slice(0, 2).map((event, eventIndex) => (
              <div className="w-full flex flex-col" key={eventIndex}>
                <div className="flex items-end space-x-5">
                  <p className="flex flex-col">
                    <span className="text-xs">{event.month}.</span>
                    <span className="text-6xl">{event.date}</span>
                  </p>
                  <p className="flex flex-col">
                    <span>{event.venue}</span>
                    <span>{event.required}</span>
                  </p>
                </div>
                <div className="text-[#046C62] text-3xl mt-10 flex w-full">
                  {event.title}
                </div>
                <div className="flex items-center mt-12 ">
                  <span className="mx-1 whitespace-nowrap">Get details</span>
                  <Image
                    src="/vectors/arrow-left.svg"
                    alt="Avatar"
                    width={25}
                    height={17}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="cursor-pointer py-3 mt-16 px-12 flex justify-center text-white bg-[#502A7A] max-w-max uppercase hover:opacity-90">
            UPCOMING EVENTS
          </p>
        </div>
        <div className="pl-28 border-l-2 flex flex-col border-black">
          <p className="text-5xl mb-8 font-semibold">
            Find the right job to boost your brilliant career
          </p>
          <div className="space-y-6 flex-grow">
            {openings.map((op, opIndex) => (
              <div
                className="bg-[#46BFB2] grid grid-cols-2 py-3 px-4"
                key={opIndex}
              >
                <p className="text-[2rem] w-1/2">{op.position}</p>
                <div className=" w-1/2 border-l border-black pl-10">
                  <div className="flex flex-col justify-items-stretch">
                    <p>{op.location}</p>
                    <p>{op.type}</p>
                    <p>{op.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/jobs">
            <p className=" py-3 mt-16 px-12 flex justify-center text-white bg-[#502A7A] max-w-max uppercase hover:opacity-90 cursor-pointer">
              VIEW ALL JOBS
            </p>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
