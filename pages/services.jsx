import { Button, TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { DatePickerComponent } from "../components/DatePicker";
import { TimePickerComponent } from "../components/TimePicker";
import { serviceData } from "../data/ServicePage";
import SectionHeader from "../components/organism/SectionHeader";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Services = () => {
  const [activeTab, setActiveTab] = useState(-1);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const { query } = useRouter();
  const id = query.id;
  useEffect(() => {
    setActiveTab(id);
  }, [id]);

  return (
    <div>
      <SectionHeader
        imageHeight="418.34"
        imageWidth="418.34"
        bgColor="#044841"
        title="We provide professional and value design system"
        headerImage="Services-header.png"
        subTitle="We create magnetic advertisement videos, memorable brand identities, user-friendly websites, and practical marketing strategies. We also create insights on how you can be profitable."
      />

      <section className="lg:px-20 px-5 py-16">
        <div className="w-full space-y-6">
          {serviceData.map((service, serviceIndex) => (
            <div key={`service-${serviceIndex}`}>
              <div
                className="flex justify-between items-center border-b-2 border-black px-4 py-2 w-full lg:w-[70%] cursor-pointer "
                onClick={() => {
                  activeTab == serviceIndex
                    ? setActiveTab(-1)
                    : setActiveTab(serviceIndex);
                }}
              >
                <span className="text-xl lg:text-4xl font-semibold">
                  {service.title}
                </span>
                <span className="">
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
              </div>

              {activeTab == serviceIndex ? (
                <div className="pt-6 pb-10">
                  <div className="w-full">
                    {serviceData[serviceIndex].details.map(
                      (item, itemIndex) => (
                        <div key={itemIndex}>
                          <div className="flex items-center w-full">
                            <p className="w-[35%]" />
                            <p
                              className="w-full lg:w-[35%] py-2 px-3 text-lg lg:text-3xl border-b-2 border-black cursor-pointer "
                              onClick={() => {
                                activeSubTab == itemIndex
                                  ? setActiveSubTab(-1)
                                  : setActiveSubTab(itemIndex);
                              }}
                            >
                              {item.title}
                            </p>
                          </div>
                          {activeSubTab == itemIndex && (
                            <div className=" w-full flex items-center mt-12">
                              <p className="w-[35%]" />
                              <div className="lg:w-[35%] w-9/12">
                                {item.description}
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="px-5 lg:px-20 mt-7">
        <p className="lg:w-2/3 text-3xl lg:text-6xl text-[#046C62] font-bold">
          Don’t know where to start, Book a FREE Consultation Now
        </p>

        <div className="flex flex-col lg:flex-row items-start ">
          <form
            action=""
            className="lg:w-3/5 lg:pr-12 grid grid-cols-2 gap-x-10 gap-y-4 lg:pt-11  order-2 lg:order-1"
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
            <DatePickerComponent />
            <TimePickerComponent />
            <TextField
              id="standard-basic"
              label="Message"
              variant="standard"
              className="col-span-2"
            />
            <div className="col-span-2 mt-16 mb-10 lg:mb-0 ">
              <Button
                variant="contained"
                className="bg-[#502A7A] w-64 py-4 hover:bg-[#502A7A] hover:bg-opacity-70"
              >
                Book Appointment
              </Button>
            </div>
          </form>
          <div className="order-1 lg:order-2">
            <Image
              src="/vectors/blogger.svg"
              alt="Avatar"
              width={517}
              height={588}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
