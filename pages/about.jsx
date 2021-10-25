import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
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
          <p className="text-5xl">Our Identity</p>
          <p>
            In 2015 our founder & CEO, Toyin Umesiri, made a trip to Africa for
            a family emergency and that trip changed her life. She returned
            committed to leveraging years of experience, network and unique
            trade skills working for leading global brand including Walmart
            Corporation to support Africa’s quest for sustainable economic
            transformation. In Africa’s case, people wonder what good can come
            out of the continent that has an history laden with war and famine
            and our response is to come join us and see.... The new and emerging
            Africa is filled with hard working men and women, young and old
            focused on positioning themselves for a greater future. Nazaru
            champions these efforts and invite others to join us on the journey.
            Contact Us for more information on how we can serve you.
          </p>
        </div>
        <p className="text-6xl px-8">
          We are on a Mission to Grow your small Business like never before
          crafting your Brand Message
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
