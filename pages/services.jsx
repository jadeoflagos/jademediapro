import { Button, TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../components/Footer";
import SelectVariants from "../components/Form/Select";
import Navbar from "../components/Navbar";
import DatePicker from "../components/DatePicker";
import TimePicker from "../components/TimePicker";
import { serviceData } from "../data";

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
            <p className="text-6xl font-bold leading-tight">
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
              src="/images/servicebg.png"
              alt="Avatar"
              width={494}
              height={494}
            />
          </div>
        </div>
      </div>
      {/* <CompanyButtons /> */}
      <section className="px-20 py-16">
        <div className="w-full space-y-6">
          {serviceData.map((service, serviceIndex) => (
            <div key={`service-${serviceIndex}`}>
              <p className="flex justify-between items-center border-b-2 border-black px-4 py-2 w-3/5 ">
                <span className="text-4xl font-semibold">{service.title}</span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    activeTab == serviceIndex
                      ? setActiveTab(-1)
                      : setActiveTab(serviceIndex);
                  }}
                >
                  <Image
                    src={`/vectors/${
                      activeTab == serviceIndex
                        ? "caret-down.svg"
                        : "caretup.svg"
                    }`}
                    alt="Avatar"
                    width={20}
                    height={10}
                  />
                </span>
              </p>

              {activeTab == serviceIndex ? (
                <p className="pt-6 pb-10 flex justify-end">
                  <p className="w-[85%]">{serviceData[serviceIndex].details}</p>
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="px-20 mt-7">
        <div className="flex items-center">
          <form
            action=""
            className="w-3/5 pr-12 grid grid-cols-2 gap-x-10 gap-y-4"
          >
            <p className="col-span-2 text-6xl text-[#046C62] font-bold">
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
            <DatePicker />
            <TimePicker />
            <TextField
              id="standard-basic"
              label="Message"
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
