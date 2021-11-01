import { Button, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
// import CompanyButtons from "../components/CompanyButtons";
import Footer from "../components/Footer";
import SelectVariants from "../components/Form/Select";
import Navbar from "../components/Navbar";
import CompanyButtons from "../components/CompanyButtons";

const About = () => {
  const wwwh = [
    {
      title: "Expand Your Reach",
      desc:
        "Implement a mix of strategies to both retain old customers and acquire new ones to produce sustainable growth for your businesses.",
      img: "reachlogo.png",
    },
    {
      title: "Building  Quality Relationship ",
      desc:
        "Remember that your customers are the ones who keep your business running, so getting to know them and caring about them is crucial.",
      img: "",
    },
    {
      title: "Set Goals and Track Them",
      desc:
        "When goals are set, it’s very important to track your progress to know if your business grows at all and how quickly it grows. ",
      img: "",
    },
  ];
  const culture = [
    {
      title: "Proudly African",
      desc:
        "We stay true to our roots and embrace our diversity while we engage the global audience.",
    },
    {
      title: "People Oriented",
      desc:
        "We value the well-being and contributions of our team as our most important asset.",
    },
    {
      title: "Result Oriented",
      desc:
        "We focus our time, energy, assets, and passion on quality results rather than process.",
    },
    {
      title: "Excellence",
      desc:
        "We work persistently to deliver excellent services and satisfy our clients with utmost care.v",
    },
    {
      title: "Integrity",
      desc:
        "We treat everyone with dignity, honesty, and hold our team and clients in high regard.",
    },
    {
      title: "Communication",
      desc:
        "We have an open-door approach when it comes to communicating our functional message, values, and mission.",
    },
  ];
  return (
    <div>
      <div className="bg-black w-screen min-h-[30rem]">
        <div>
          <Navbar textColor="white" />
        </div>
        <div className="flex items-center justify-between px-20 text-white py-8">
          <div className="w-7/12">
            <p className="text-7xl font-semibold">
              The leading branding and digital marketing company
            </p>
            <p className="py-12 text-2xl tracking-wider">
              We implement the most effective design and digital marketing
              strategies that drives more traffic to your website by offering a
              broad spectrum of advantages.
            </p>
          </div>
          <span className="w-1/12" />
          <div className="w-4/12 flex items-center justify-center">
            <Image
              src="/images/aboutbg.png"
              alt="Avatar"
              width={494}
              height={494}
            />
          </div>
        </div>
      </div>

      <div className=" items-center px-20 my-14 grid grid-cols-2 gap-x-8">
        <div>
          <p className="text-5xl mb-10">Our Identity</p>
          <div>
            <p>
              Our origin lies in 2016 as Jade Grafix operating from a very small
              room. Today we are Africa's most renowned content-creation graphic
              design and integrated digital marketing service company focused on
              creating strategic solutions for brand development, communication,
              and business marketing. Jade Media Pro is a business services
              company that connects Africa to the world through design,
              products, market strategy, consulting, and training.{" "}
            </p>
            <p className="my-2">
              The new and emerging Africa is filled with hard-working young and
              old focused on positioning themselves for a greater future. Jade
              Media Pro champions these efforts and invites others to join us on
              the journey with a fast-growing team of 11 young and vibrant minds
              who have worked on over 300 projects leading the digital space in
              Africa. We offer feasible and cost-effective solutions in the
              projects that we enter into contracts with our clients. We focus
              on setting visual, verbal, and experiential standards that drive
              impactful experiences for our clients.
            </p>
          </div>
        </div>
        <p className="text-5xl pl-16 pr-8">
          We are on a Mission to help our clients achieve excellence using
          sustainable digital strategies
        </p>
      </div>
      <div
        className="w-screen h-[25rem]"
        style={{
          background: `url("/images/aboutbg1.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <section className="bg-[#044841] px-20 py-24 grid grid-cols-2 gap-x-8 text-white">
        <div>
          <Image
            src="/vectors/w-logo.svg"
            alt="Avatar"
            width={530}
            height={88}
          />
          <div className="mt-4">
            <p className="text-xl font-semibold">What:</p>
            <p>
              We bring brands to life through creative solutions, strong brand
              identity and help market businesses, products, or services achieve
              their dreams, earn income, and increase their impact.
            </p>
          </div>
          <div className="mt-2">
            <p className="text-xl font-semibold">Why: </p>
            <p>
              We do all the hard work to ensure that we are the preferred
              facilitator of the world's most successful brands, providing
              people with accessible solutions to their problems.
            </p>
          </div>
          <div className="mt-2">
            <p className="text-xl font-semibold">Who:</p>
            <p>
              We are here to give you the best solution whether you are a
              start-up, small- or medium-sized business, and help you grow and
              achieve your dreams at a very affordable cost and innovative way.
            </p>
          </div>
          <div className="mt-2">
            <p className="text-xl font-semibold">How: </p>
            <p>
              We create effective strategies, powerful identities, seamless
              interactions, and memorable experiences to connect people to
              brands and organizations.
            </p>
          </div>
        </div>
        <div className="mx-20 flex flex-col justify-between">
          {wwwh.map((w, wIndex) => (
            <div className="flex">
              <Image
                src={`/images/${w.img}`}
                alt="Avatar"
                width={80}
                height={77}
              />
              <div>
                <p className="font-bold text-2xl">{w.title} </p>
                <span>{w.desc}</span>
              </div>
            </div>
          ))}
          <p className="border border-[#8A57A3] px-12 py-2 max-w-max mt-8 cursor-pointer">
            BECOME A PARTNER
          </p>
        </div>
      </section>
      <section className="mt-24 px-20">
        <h1 className="text-4xl">Culture & Values</h1>
        <div className="grid grid-cols-3">
          {culture.map((c, cIndex) => (
            <div key={cIndex}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-20 py-20">
        <p className="mb-10">Volunteering</p>
        <p className="text-6xl">
          Bridging Africa’s transition from the analog age to the Digital age by
          Training young Professionals and solving Digital challenges at
          individual and corporate levels.
        </p>
      </section>
      <section className="grid grid-cols-2 gap-x-8 px-20 py-20">
        <p>video</p>
        <div>
          <p>
            In 2015 our founder & CEO, Toyin Umesiri, made a trip to Africa for
            a family emergency and that trip changed her life. She returned
            committed to leveraging years of experience, network and unique
            trade skills working for leading global brand including Walmart
            Corporation to support Africa’s quest for sustainable economic
            transformation. She returned committed to years of experience.
          </p>
        </div>
      </section>
      <section className="px-20">
        <p>The Team</p>
      </section>
      <CompanyButtons />
      <section className="px-20">
        <p>Book Your FREE Consultation Now</p>
        <div className="flex items-center">
          <form action="" className="w-3/5 grid grid-cols-2 gap-x-10">
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
            <SelectVariants />
            <SelectVariants />
            <div className="col-span-2 mt-16">
              <Button
                variant="contained"
                className="bg-[#502A7A] w-7/12 py-2 hover:bg-[#502A7A]"
              >
                Book Appointment
              </Button>
            </div>
          </form>
          <Image
            src="/vectors/blogger.svg"
            alt="Avatar"
            width={517}
            height={688}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
