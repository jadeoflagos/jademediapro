import { TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import SelectVariants from "../components/Form/Select";
import Navbar from "../components/Navbar";

const About = () => {
  const wwwh = [
    {
      title: "Expand Your Reach",
      desc: "With just a few clicks you can save time and resources where it",
      img: "reachlogo.png",
    },
    {
      title: "Empower Your Manpower ",
      desc:
        "The mobile app instantly matches consumers and businesses in need you can save time and where",
      img: "",
    },
    {
      title: "Track Your Manpower In Real-Time",
      desc: "We work hard to ensure that you get the most out of our service, ",
      img: "",
    },
    {
      title: "Boost Your Revenue ",
      desc: "We can build and support community-centered services to ",
      img: "",
    },
    {
      title: "Easy HR Management Dashboard ",
      desc: "We provide you with trained and quality Partners, on-hand to ",
      img: "",
    },
    {
      title: "Productivity Insights & Analytics",
      desc: "We provide the tech platform for all that have free time, to be ",
      img: "",
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
      <div className=" items-center px-20 my-14 grid grid-cols-2">
        <div>
          <p className="text-5xl mb-10">Our Identity</p>
          <div>
            <p>
              In 2015 our founder & CEO, Toyin Umesiri, made a trip to Africa
              for a family emergency and that trip changed her life. She
              returned committed to leveraging years of experience, network and
              unique trade skills working for leading global brand including
              Walmart Corporation to support Africa’s quest for sustainable
              economic transformation.
            </p>
            <p className="my-2">
              {" "}
              In Africa’s case, people wonder what good can come out of the
              continent that has an history laden with war and famine and our
              response is to come join us and see.... The new and emerging
              Africa is filled with hard working men and women, young and old
              focused on positioning themselves for a greater future.
            </p>
            <p>
              Nazaru champions these efforts and invite others to join us on the
              journey. Contact Us for more information on how we can serve you.
            </p>
          </div>
        </div>
        <p className="text-6xl px-8">
          We are on a Mission to Grow your small Business like never before
          crafting your Brand Message
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
      <section className="bg-[#044841] px-20 py-24 grid grid-cols-3 gap-x-8 text-white">
        <div>
          <Image
            src="/vectors/w-logo.svg"
            alt="Avatar"
            width={530}
            height={88}
          />
          <p className="mt-4">
            What: we doOur entire team at MyKuya is focused on creating a
            platform that is mutually beneficial to everyone.
          </p>
          <p className="mt-2">
            Why: we do work hard to ensure that you get the most out of our
            service, providing you accessible solutions to your problems.
          </p>
          <p className="mt-2">
            When: do we work hard to ensure that you get the most out of our
            service, providing you accessible solutions to your problems.
          </p>
          <p className="mt-2">
            How: do we work hard to ensure that you get the most out of our
            service, providing you accessible solutions to your problems.
          </p>
          <p className="border border-[#8A57A3] px-12 py-2 max-w-max mt-14 cursor-pointer">
            BECOME A PARTNER
          </p>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-x-8">
          {wwwh.map((w, wIndex) => (
            <div className="flex">
              <Image
                src={`/images/${w.img}`}
                alt="Avatar"
                width={80}
                height={77}
              />
              <div>
                <p>{w.title} </p>
                <span>{w.desc}</span>
              </div>
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
      <section className="px-20">
        <p>Book Your FREE Consultation Now</p>
        <div className="flex items-center">
          <form action="" className="w-3/5 grid grid-cols-2 gap-x-10">
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <SelectVariants />
            <SelectVariants />
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
