import { TextareaAutosize, TextField } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Footer from "../components/Footer";
import CompanyButtons from "../components/CompanyButtons";
import {
  MobileTimePickerComponent,
  TimePickerComponent,
} from "../components/TimePicker";
import { culture, opportunities, team, values, wwwh } from "../data";
import SectionHeader from "../components/organism/SectionHeader";
import EyeBrow from "../components/organism/EyeBrow";
import { wwhighlight } from "../data/AboutPage";
import {
  DatePickerComponent,
  MobileDatePickerComponent,
} from "../components/DatePicker";
import Button from "../components/Button";
import ReviewSlider from "../components/ReviewSlider";
import { useRouter } from "next/router";
import LearnMoreArrow from "../components/LearnMoreArrow";
import CompanySlider from "../components/CompanySlider";
import Link from "next/link";
import SocialShare from "../components/SocialShare";
import { useClickAway } from "react-use";

const About = () => {
  const router = useRouter();
  const ref = useRef(null);
  const [OpenShareModal, setOpenShareModal] = useState(false);
  useClickAway(ref, () => setOpenShareModal(false));

  return (
    <>
      <div>
        <SectionHeader
          imageWidth="415.79"
          imageHeight="415.79"
          bgColor="#000000"
          navBarColor="white"
          title="The leading branding and digital marketing company"
          headerImage="About-header.png"
          subTitle="We implement the most effective design and digital marketing
              strategies that drives more traffic to your website by offering a
              broad spectrum of advantages."
        />

        <div className="items-center lg:px-20 px-5 mt-12 lg:mt-28 mb-14   ">
          <p className="text-lg lg:text-[2.18rem] mb-5 lg:mb-10 col-span-2">
            Our Identity
          </p>
          <div className="lg:flex lg:space-x-[4.8rem] justify-items-stretch items-center ">
            <div className="lg:text-black text-[#666666]  flex flex-col self-stretch  lg:w-[54%] text-[1rem]">
              <p>
                Our origin lies in 2016 as Jade Grafix operating from a very
                small room. Today we are Africa's most renowned content-creation
                graphic design and integrated digital marketing service company
                focused on creating strategic solutions for brand development,
                communication, and business marketing. Jade Media Pro is a
                business services company that connects Africa to the world
                through design, products, market strategy, consulting, and
                training.
              </p>
              <p className="mt-2">
                The new and emerging Africa is filled with hard-working young
                and old focused on positioning themselves for a greater future.
                Jade Media Pro champions these efforts and invites others to
                join us on the journey with a fast-growing team of 11 young and
                vibrant minds who have worked on over 300 projects leading the
                digital space in Africa. We offer feasible and cost-effective
                solutions in the projects that we enter into contracts with our
                clients. We focus on setting visual, verbal, and experiential
                standards that drive impactful experiences for our clients.
              </p>
            </div>
            <div className="flex self-stretch lg:w-[46%]">
              <EyeBrow
                text="We are on a Mission to help our clients achieve excellence using
          sustainable digital strategies"
              />
            </div>
          </div>
        </div>
        <div
          className="w-screen h-24 lg:h-[25rem]"
          style={{
            background: `url("/images/about-ouridentity.jpeg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <section className="bg-[#044841] px-5 lg:px-20 py-14 lg:py-24 lg:grid lg:grid-cols-2 lg:gap-x-8 text-white">
          <div>
            <Image
              src="/vectors/w-logo.svg"
              alt="Avatar"
              width={530}
              height={88}
            />
            {wwhighlight.map((dat, datIndex) => (
              <div
                className="mt-2 lg:flex lg:flex-col text-xs lg:text-base"
                key={`data-${datIndex}`}
              >
                <span className="lg:text-xl font-semibold">{dat.heading} </span>
                <span>{dat.desc}</span>
              </div>
            ))}
          </div>
          <div
            className="lg:mx-20 mt-5 lg:mt-0 flex flex-col space-y-5 lg:space-y-0 justify-between"
            id="what-we-do"
          >
            {wwwh.map((w, wIndex) => (
              <div
                className="flex lg:items-center items-start"
                key={`wwwh-${wIndex}`}
              >
                <div className="w-32 mr-6">
                  <img
                    className="w-full h-full"
                    src={`/gifs/${w.gif}.gif`}
                    alt="wwwh-gif"
                  />
                </div>
                <div>
                  <p className="font-bold text-xs lg:text-2xl py-1">
                    {w.title}{" "}
                  </p>
                  <span className="text-xs lg:text-base">{w.desc}</span>
                </div>
              </div>
            ))}
            <a
              href="contact#contactus"
              className="border border-[#8A57A3] hover:bg-[#0DFFE5] hover:border-transparent px-12 py-2 max-w-max mt-8 cursor-pointer lg:mx-20"
            >
              BECOME A PARTNER
            </a>
          </div>
        </section>
        <section className="mt-16 lg:mt-24 px-5 lg:px-20">
          <h1 className="text-sm lg:text-4xl mb-12">Culture & Values</h1>
          <div className="grid grid-cols-2 gap-x-2 lg:grid-cols-3 gap-y-10 lg:gap-x-20">
            {culture.map((c, cIndex) => (
              <div
                key={cIndex}
                className="lg:py-10 py-5 px-5 lg:px-14 text-xs lg:text-xl border-2 border-[#77459B]"
              >
                <h3 className="font-semibold">{c.title}</h3>
                <span className="lg:mt-8 mt-7 lg:mb-12 mb-9 w-12 border-b-2 flex border-[#77459B]" />
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-5 lg:px-20 mt-16 lg:mt-32" id="volunteering">
          <p className="mb-10 text-sm lg:text-4xl">Volunteering</p>
          <p className="text-[2.8rem] lg:leading-[3.375rem] font-semibold">
            Bridging Africa’s transition from the analog age to the Digital age
            by Training young Professionals and solving Digital challenges at
            individual and corporate levels.
          </p>
        </section>
        <section className="lg:grid lg:grid-cols-2 lg:gap-x-[3.875rem] px-5 lg:px-20 lg:py-20 py-4">
          <div>
            <iframe
              className="lg:hidden"
              src="https://player.vimeo.com/video/672077617?h=d303fb69fb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              height="194.92px"
              width="300px"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
            <iframe
              src="https://player.vimeo.com/video/672077617?h=d303fb69fb&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="100%"
              className="lg:block hidden"
              height="321"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Parnership-video.mp4"
            ></iframe>
          </div>
          <div className="w-full lg:flex lg:flex-col">
            <p className="text-[#666666] text-xs lg:text-[0.9rem] lg:leading-5 mt-4 lg:mt-0">
              Individuals being raised without access to the fundamental
              conditions of living essential for normal development is not a
              far-fetched scenario in a world of uncontrolled population, social
              unrest, and widespread poverty. This is why, as ardent believers
              in each individual as the building block of any society, we have
              chosen to take it upon ourselves to ensure that everyone has
              unhindered access to high-quality living and enhance the overall
              quality of global development.
            </p>
            <div className="place-items-center grid grid-cols-3 gap-x-4 flex-grow px-3 lg:px-0">
              {[
                { text: "$ 1.2M", desc: "funded" },
                { text: "1.6K", desc: "volunteers" },
                { text: "5.3K", desc: "Life’s changed" },
              ].map((item, itemIndex) => (
                <p className="flex flex-col items-center" key={itemIndex}>
                  <span className="text-[#046C62] text-base lg:text-4xl">
                    {item.text}
                  </span>
                  <span className="lg:text-lg text-xs">{item.desc}</span>
                </p>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div className="  w-6/12 ">
                <a
                  href="http://www.oladepotimilehinfoundation.org"
                  target="_blank"
                >
                  {" "}
                  <Button label=" Donate Now" />
                </a>
              </div>
              <span className="w-2/12" />
              <div className="w-4/12">
                <Button
                  outline
                  label="SHARE"
                  onClick={() => setOpenShareModal(true)}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className="lg:px-20 px-5 mt-10 flex flex-col items-start"
          id="our-team"
        >
          <p className="text-4xl">The Team</p>
          <div className="w-full hidden lg:flex justify-between mt-6 gap-x-[3.6rem]">
            {team.slice(0, 3).map((teammember, memberIndex) => (
              <div
                key={`member-${memberIndex}`}
                className="flex flex-col items-center"
              >
                <Image
                  src={`/images/${teammember.img}`}
                  alt="Avatar"
                  width={400}
                  height={500}
                />
                <p className="mt-5 mb-2 font-bold text-2xl">
                  {teammember.name}
                </p>
                <p>{teammember.position}</p>
              </div>
            ))}
          </div>
          <div className="w-full lg:hidden grid grid-cols-2 gap-x-12 gap-y-4 mt-6 text-[0.8rem]">
            {team.slice(0, 4).map((teammember, memberIndex) => (
              <div
                key={`member-${memberIndex}`}
                className="flex flex-col items-center"
              >
                <Image
                  src={`/images/${teammember.img}`}
                  alt="Avatar"
                  width={400}
                  height={500}
                />
                <p className="mt-2 font-bold ">{teammember.name}</p>
                <p className="whitespace-nowrap">{teammember.position}</p>
              </div>
            ))}
          </div>
          <div className="my-8 ">
            <EyeBrow text="We are a team. We love what we do. Simple." />
          </div>
          <div className="hidden w-full lg:flex justify-between gap-x-[3.6rem] mt-6">
            {team.slice(3).map((teammember, memberIndex) => (
              <div
                key={`member-${memberIndex}`}
                className="flex flex-col items-center"
              >
                <Image
                  src={`/images/${teammember.img}`}
                  alt="Avatar"
                  width={400}
                  height={500}
                />
                <p className="mt-5 mb-2 font-bold text-2xl">
                  {teammember.name}
                </p>
                <p>{teammember.position}</p>
              </div>
            ))}
          </div>
          <div className="w-full lg:hidden grid grid-cols-2 gap-x-12 gap-y-4 mt-6 text-[0.8rem]">
            {team.slice(0, 2).map((teammember, memberIndex) => (
              <div
                key={`member-${memberIndex}`}
                className="flex flex-col items-center"
              >
                <Image
                  src={`/images/${teammember.img}`}
                  alt="Avatar"
                  width={400}
                  height={500}
                />
                <p className="mt-2 font-bold ">{teammember.name}</p>
                <p className="whitespace-nowrap">{teammember.position}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-5 lg:px-20 mt-20 " id="career">
          <p className=" text-base lg:text-3xl">Career Development</p>
          <p className="text-[2rem] leading-9 lg:text-6xl max-w-screen-xl my-8 font-semibold">
            We exist for your Growth and Success. Got what it takes?
            <span className="text-[#046C62]"> Join our Team today</span>
          </p>
          <div className="grid lg:grid-cols-2 lg:gap-[6.6rem] ">
            <div className="lg:w-full flex flex-col h-full order-2 lg:order-1">
              <div className="mb-6 flex-grow">
                Professional opportunities for career growth and improvement in
                personal skills and knowledge with great expectations are
                available at Jade Media Pro. Our training and job/internship
                programs offer a well-structured path to all-around professional
                development and career advancement. We are dedicated to creating
                and sustaining an environment that fosters creativity which is
                excellent for young professionals. Great opportunities await you
                in Jade Media Pro if you are:
                <div className="my-2">
                  {opportunities.map((opportunity, opportunityIndex) => (
                    <div
                      key={opportunityIndex}
                      className="my-1 flex items-start"
                    >
                      <div className="mt-0.5 lg:mt-0">
                        <Image
                          src={`/vectors/caret-right.svg`}
                          alt="Avatar"
                          width={24}
                          height={24}
                        />
                      </div>
                      <span>{opportunity}</span>
                    </div>
                  ))}
                </div>
                We seek these qualities and more in young professionals. We're
                looking for creative people that share our company's basic
                values of excellence.
              </div>
              <div className="w-64">
                <a href="contact#contactus">
                  <Button label="APPLY NOW" />
                </a>
              </div>
            </div>
            <div className=" lg:w-full  order-1 lg:order-2 py-5 lg:py-0 ">
              <img
                src="/images/About-CareerDevelopment-image.jpeg"
                alt="Avatar"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </section>
        <section
          className="px-5 lg:px-20 mt-32 lg:mb-20 mb-64"
          id="testimonials"
        >
          <h3 className="text-xs lg:text-4xl">Testimonials</h3>
          <div className="lg:grid grid-cols-2 gap-x-[6.6rem] my-6">
            <p className="text-3xl lg:text-[2.8rem] font-semibold lg:leading-[3.375rem] lg:pr-10">
              Many people have already seen how working with Jade Media Pro has
              enabled them to rebrand and grow their businesses.
            </p>
            <div>
              <ReviewSlider />
            </div>
          </div>
        </section>
        <p className="lg:px-20  px-5 text-base lg:text-4xl mt-48 mb-8">
          Our Clients
        </p>
        <CompanyButtons />
        <section
          className="px-5 lg:px-20 lg:grid gap-20 space-y-4  lg:space-y-0 my-24"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(20.625rem, 1fr))",
          }}
        >
          {values.map((value, valueIndex) => (
            <div
              key={`value-${valueIndex}`}
              className="bg-[#46BFB2] p-6 h-full flex flex-col"
            >
              <h3 className="mb-16 text-2xl">{value.title}</h3>
              <p className="flex-grow flex items-end mb-10">{value.details}</p>
              <Link
                href={{
                  pathname: "/services",
                  query: { id: value.link },
                }}
              >
                <a className="flex items-center">
                  <LearnMoreArrow />
                </a>
              </Link>
            </div>
          ))}
        </section>
        <section className="px-5 lg:px-20 mb-16">
          <p className="lg:text-6xl text-3xl font-bold">
            Book Your FREE Consultation Now
          </p>
          <div className="flex lg:flex-row flex-col py-4 space-x-14 items-start">
            <form
              action=""
              className=" lg:w-3/5 grid grid-cols-2 gap-10 place-content-start lg:order-1 order-2"
            >
              <TextField
                id="standard-basic"
                label="Full name"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Email address"
                variant="standard"
                type="email"
              />
              <div className="lg:hidden">
                <MobileTimePickerComponent />
              </div>
              <div className="hidden lg:flex">
                <DatePickerComponent />
              </div>
              <div className="hidden lg:flex">
                <TimePickerComponent />
              </div>
              <div className="lg:hidden">
                <MobileDatePickerComponent />
              </div>
              <div className="col-span-2">
                <textarea
                  name=""
                  id=""
                  rows={2}
                  className="border-b border-gray-500 focus:outline-none w-full resize-none"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-span-2 mt-12">
                <div className="lg:w-3/5 w-auto">
                  <Button label="Book Appointment" />
                </div>
              </div>
            </form>
            <div className="lg:w-2/5 flex items-start lg:order-2 order-1">
              <img src="/gifs/Contact.gif" alt="Avatar" />
            </div>
          </div>
        </section>
        <Footer />
      </div>
      {OpenShareModal && (
        <div className="flex items-center justify-center fixed h-screen w-screen inset-0 bg-black bg-opacity-30 z-[60]">
          <SocialShare modalRef={ref} close={setOpenShareModal} />
        </div>
      )}
    </>
  );
};

export default About;
