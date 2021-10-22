import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Illus from "../components/vectors/Iluust";

const Card = ({ title, description }) => {
  return (
    <div className="w-full text-white flex flex-col bg-black py-4 px-6 rounded-sm">
      <span className="bg-[#C4C4C4] w-20 h-20 mb-16" />
      <p className="text-3xl">{title}</p>
      <span className="py-4 flex-grow">{description}</span>
      <p className="cursor-pointer py-2 px-10 flex justify-center text-black bg-[#0DFFE5] max-w-max ">
        LEARN MORE
      </p>
    </div>
  );
};
export default function Home() {
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
          <p className="font-bold text-8xl">
            The passion of Idea, Business & Creativity:
          </p>
          <p className="my-10 text-2xl font-normal">
            Helping startups and small businesses grow and achieve their dreams,
            earn income, and increase their impact in this post-pandemic world
            by developing innovative as well as sustainable design system and
            marketing strategies to help you standout in a crowded marketplace
            and make profit. YES! YOU CAN.
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
          <p className="text-6xl">
            Unlock your future by taking advantage of Branding & Digital
            marketing
          </p>
          <div>
            <p className="mt-8">
              Harness the collective power of people, data, and modern software
              practices to reimagine your customer experience across regulated
              environments. Businesses are under pressure to increase their
              competitive advantage by creating compelling new experiences for
              customers while adding value to existing software.
            </p>
            <p className="my-8">
              Well-planned and executed API architecture is essential for
              seamlessly connecting legacy software and data to modern cloud
              applications.
            </p>
            <p>
              Implementing API architecture doesn't just enable businesses to
              deliver leading customer experiences and new functionality. It
              also forms part of the foundation for delivering value frequently.
            </p>
            <p className="mt-8">
              We have a simple idea—put money, attention and resources where
              it's most effective— in front of students, not in administrators,
              buildings, parking lots or monuments. Bring people together to
              form a vibrant community and safe space to share, discuss and
              learn. Connect learners from different cultures, interests, age
              groups and life experiences. Enlist a global network of the most
              dynamic teachers, and allow them to profit form their ideas.
            </p>
            <p className="flex items-center mt-8">
              <span className="mr-2">
                Find out more on what is Branding and how does it helps your
                Business?
              </span>
              <Image
                src="/vectors/arrow-right.svg"
                alt="Avatar"
                width={35}
                height={35}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-24 flex items-center px-8 bg-[#502A7A]">
        <div className="w-5/12"></div>
        <div className="w-7/12 px-12 text-white">
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
            We start by defining a clear image of exactly who you serve and
            precisely how they think. Why? Because you can’t help people unless
            you know them – their hopes, their fears, their problems, and their
            pitfalls. What converts a total stranger into a die-hard fan of your
            brand? A constant pull of value and inspiration. At this stage, we
            map out your customer’s journey so you’ll be able to meet them at
            their point of need before one of your competitors does.At this
            stage, we will determine your unique sweet spot that makes you
            different from your competitors and how we can place you as the
            perfect choice for your customers. Together, we will discuss
            critical questions like who you are, what you stand for, and how you
            do things.
          </p>
          <p className="cursor-pointer py-3 px-12 flex justify-center text-black bg-[#0DFFE5] max-w-max ">
            Get your Brand process
          </p>
        </div>
      </div>
      <p className="px-20 pt-20 pb-12 text-6xl text-center">
        Put money, attention, and resources where it's most effective to
        generate income
      </p>
      <div className="grid grid-cols-4 gap-x-8 px-20">
        <Card
          title="Business Strategy"
          description="Ideas not well developed will only generate poor performance. We design
        brands that tell compelling stories that resonate with customers,
        strengthen loyalty, communicate shared values and explore new
        possibilities."
        />
        <Card
          title="Branding"
          description="We seamlessly combine expertise in brand identity, web development and product design to define every aspect of a brand’s experience."
        />
        <Card
          title="Digital Marketing"
          description="We partner with brands to take communication beyond ethos and marketplace positioning conversed."
        />
        <Card
          title="Motion Design"
          description="We design brands that tell compelling stories that resonate with customers, strengthen loyalty, communicate shared values and explore new possibilities. "
        />
      </div>
      <p className="px-20 pt-32 pb-12 text-7xl text-center">
        Exclusive interviews with industry leading professionals
      </p>
      <div></div>
      <Footer />
    </div>
  );
}
