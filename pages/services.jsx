import { Button, TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../components/Footer";
import SelectVariants from "../components/Form/Select";
import Navbar from "../components/Navbar";

const Services = () => {
  const [activeTab, setActiveTab] = useState(-1);

  return (
    <div>
      <div className="bg-[#044841] w-screen min-h-[30rem]">
        <div>
          <Navbar textColor="white" />
        </div>
        <div className="flex items-center justify-between px-20 text-white py-2">
          <div className="w-8/12">
            <p className="text-7xl font-semibold">
              We provide professional and value design system
            </p>
            <p className="py-12 text-2xl">
              We create insights on how to make you sell better, we also create
              magnetic advertisements, memorable brand identities, User friendly
              websites and practical marketing strategies.
            </p>
          </div>
          <div className="w-4/12 flex items-center justify-center">
            <Image
              src="/images/contactbg.png"
              alt="Avatar"
              width={494}
              height={494}
            />
          </div>
        </div>
      </div>
      <section className="px-20 py-16">
        <div className="w-3/5 space-y-6">
          <div>
            <p className="flex justify-between items-center border-b border-black px-4 py-2 ">
              <span className="font-semibold text-lg">Business Strategy </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  activeTab !== 0 ? setActiveTab(0) : setActiveTab(-1);
                }}
              >
                <Image
                  src={`/vectors/${
                    activeTab == 0 ? "caret-down.svg" : "caretup.svg"
                  }`}
                  alt="Avatar"
                  width={20}
                  height={10}
                />
              </span>
            </p>
            {activeTab === 0 && (
              <p className="pt-6 pb-10">
                In 2015 our founder & CEO, Toyin Umesiri, made a trip to Africa
                for a family emergency and that trip changed her life. She
                returned committed to leveraging years of experience, network
                and unique trade skills working for leading global brand
                including Walmart Corporation to support Africa’s quest for
                sustainable economic transformation. In Africa’s case, people
                wonder what good can come out of the continent that has an
                history laden with war and famine and our response is to come
                join us and see.... The new and emerging Africa is filled with
                hard working men and women, young and old focused on positioning
                themselves for a greater future. Nazaru champions these efforts
                and invite others to join us on the journey. Contact Us for more
                information on how we can serve you.{" "}
              </p>
            )}
          </div>
          <div>
            <p className="flex justify-between items-center border-b border-black px-4 py-2 ">
              <span className="font-semibold text-lg">
                Does the water bowl act to purify the hookah aerosol? ?
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  activeTab !== 1 ? setActiveTab(1) : setActiveTab(-1);
                }}
              >
                <Image
                  src={`/vectors/${
                    activeTab == 1 ? "caret-down.svg" : "caretup.svg"
                  }`}
                  alt="Avatar"
                  width={20}
                  height={10}
                />
              </span>
            </p>
            {activeTab === 1 && <p className="pt-6 pb-10">hh</p>}
          </div>
          <div>
            <p className="flex justify-between items-center border-b border-black px-4 py-2 ">
              <span className="font-semibold text-lg">Branding & Design </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  activeTab !== 2 ? setActiveTab(2) : setActiveTab(-1);
                }}
              >
                <Image
                  src={`/vectors/${
                    activeTab == 2 ? "caret-down.svg" : "caretup.svg"
                  }`}
                  alt="Avatar"
                  width={20}
                  height={10}
                />
              </span>
            </p>
          </div>
          <div>
            <p className="flex justify-between items-center border-b border-black px-4 py-2 ">
              <span className="font-semibold text-lg">Digital Marketing </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  activeTab !== 3 ? setActiveTab(3) : setActiveTab(-1);
                }}
              >
                <Image
                  src={`/vectors/${
                    activeTab == 3 ? "caret-down.svg" : "caretup.svg"
                  }`}
                  alt="Avatar"
                  width={20}
                  height={10}
                />
              </span>
            </p>
          </div>
          <div>
            <p className="flex justify-between items-center border-b border-black px-4 py-2 ">
              <span className="font-semibold text-lg">Motion Design </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  activeTab !== 4 ? setActiveTab(4) : setActiveTab(-1);
                }}
              >
                <Image
                  src={`/vectors/${
                    activeTab == 4 ? "caret-down.svg" : "caretup.svg"
                  }`}
                  alt="Avatar"
                  width={20}
                  height={10}
                />
              </span>
            </p>
          </div>
          <div>
            <p className="flex justify-between items-center border-b border-black px-4 py-2 ">
              <span className="font-semibold text-lg">Art & Photography</span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  activeTab !== 5 ? setActiveTab(5) : setActiveTab(-1);
                }}
              >
                <Image
                  src={`/vectors/${
                    activeTab == 5 ? "caret-down.svg" : "caretup.svg"
                  }`}
                  alt="Avatar"
                  width={20}
                  height={10}
                />
              </span>
            </p>
          </div>
          <div>
            <p className="flex justify-between items-center border-b border-black px-4 py-2 ">
              <span className="font-semibold text-lg">Web & App Project </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  activeTab !== 6 ? setActiveTab(6) : setActiveTab(-1);
                }}
              >
                <Image
                  src={`/vectors/${
                    activeTab == 6 ? "caret-down.svg" : "caretup.svg"
                  }`}
                  alt="Avatar"
                  width={20}
                  height={10}
                />
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="px-20 mt-7">
        <div className="flex items-center">
          <form
            action=""
            className="w-3/5 pr-12 grid grid-cols-2 gap-x-10 gap-y-4"
          >
            <p className="col-span-2 text-6xl text-[#046C62]">
              Don’t know where to start, Book a FREE Consultation Now{" "}
            </p>
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
            <TextField
              id="standard-basic"
              label="What Services  do you  Offer?"
              variant="standard"
              className="col-span-2"
            />
            <div className="col-span-2 mt-16">
              <Button
                variant="contained"
                className="bg-[#502A7A] w-64 py-4 hover:bg-[#502A7A]"
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

export default Services;
