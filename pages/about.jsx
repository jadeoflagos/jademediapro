import { Button, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
// import CompanyButtons from "../components/CompanyButtons";
import Footer from "../components/Footer";
import SelectVariants from "../components/Form/Select";
import Navbar from "../components/Navbar";
import CompanyButtons from "../components/CompanyButtons";
import TimePickerComponent from "../components/TimePicker";
import DatePickerComponent from "../components/DatePicker";
import { culture, opportunities, team, values, wwwh } from "../data";
import SectionHeader from "../components/organism/SectionHeader";

const About = () => {
  return (
    <div>
      <SectionHeader
        bgColor="#000000"
        navBarColor="white"
        title="The leading branding and digital marketing company"
        headerImage="blogbg.png"
        subTitle="We implement the most effective design and digital marketing
              strategies that drives more traffic to your website by offering a
              broad spectrum of advantages."
      />

      <div className=" items-center px-20 mt-28 mb-14 grid grid-cols-2 gap-x-8">
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
            <div className="flex items-center" key={`wwwh-${wIndex}`}>
              <div className="w-32 mr-6">
                <img
                  className="w-full h-full"
                  src={`/gifs/${w.gif}.gif`}
                  alt="wwwh-gif"
                />
              </div>
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
        <h1 className="text-4xl mb-12">Culture & Values</h1>
        <div className="grid grid-cols-3 gap-y-10 gap-x-20">
          {culture.map((c, cIndex) => (
            <div key={cIndex} className="py-10 px-14 border-2 border-[#77459B]">
              <h3>{c.title}</h3>
              <span className="mt-8 mb-12 w-12 border-b-2 flex border-[#77459B]" />
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-20 mt-32">
        <p className="mb-10 text-4xl">Volunteering</p>
        <p className="text-5xl leading-tight font-bold">
          Bridging Africa’s transition from the analog age to the Digital age by
          Training young Professionals and solving Digital challenges at
          individual and corporate levels.
        </p>
      </section>
      <section className="grid grid-cols-2  px-20 py-20">
        <div>
          <video width="900" height="450" controls>
            <source src="/arcnet.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mx-20">
          <p>
            In a world of uncontrolled population and widespread poverty, The
            case of individuals being brought up without access to the basic
            standards of living required for proper development is not
            far-fetched. This problem would, without doubt, lead to stunting of
            human development as such persons account for a great part of the
            population and inevitably the state of affairs of society.
          </p>
          <div className="flex items-center justify-between my-10">
            <p className="flex flex-col">
              <span className="text-[#046C62] text-4xl">$ 1.2M</span>
              <span className="text-lg">funded</span>
            </p>
            <p className="flex flex-col">
              <span className="text-[#046C62] text-4xl">1.6K</span>
              <span className="text-lg">volunteers</span>
            </p>
            <p className="flex flex-col">
              <span className="text-[#046C62] text-4xl">5.3K</span>
              <span className="text-lg">Life’s changed</span>
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className=" bg-[#8A57A3] w-6/12  px-16 py-2 flex items-center justify-center cursor-pointer text-white uppercase">
              Donate Now
            </p>
            <span className="w-2/12" />
            <p className="border flex items-center justify-center border-[#8A57A3] px-12 py-2 w-4/12 cursor-pointer">
              SHARE
            </p>
          </div>
        </div>
      </section>
      <section className="px-20 mt-10 flex flex-col items-start">
        <p className="text-4xl">The Team</p>
        <div className="w-full flex justify-between mt-6">
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
              <p className="mt-5 mb-2 font-bold text-2xl">{teammember.name}</p>
              <p>{teammember.position}</p>
            </div>
          ))}
        </div>
        <p className="my-8 text-5xl font-bold">
          We are a team. We love what we do. Simple.
        </p>
        <div className="w-full flex justify-between mt-6">
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
              <p className="mt-5 mb-2 font-bold text-2xl">{teammember.name}</p>
              <p>{teammember.position}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-20 mt-20">
        <p className="text-3xl">Career Development</p>
        <p className="text-6xl max-w-screen-xl my-8 font-semibold">
          We exist for your Growth and Success. Got what it takes?
          <span className="text-[#046C62]"> Join our Team today</span>
        </p>
        <div className="grid grid-cols-2 gap-x-16">
          <div className="flex flex-col h-full">
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
                  <p key={opportunityIndex} className="my-1 flex items-center">
                    <Image
                      src={`/vectors/caret-right.svg`}
                      alt="Avatar"
                      width={24}
                      height={24}
                    />
                    <span>{opportunity}</span>
                  </p>
                ))}
              </div>
              We seek these qualities and more in young professionals. We're
              looking for creative people that share our company's basic values
              of excellence.
            </div>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#502A7A",
              }}
              variant="contained"
              className="w-3/5  py-4 hover:opacity-90"
            >
              APPLY NOW
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/careerpeople.png"
              alt="Avatar"
              width={650}
              height={500}
            />
          </div>
        </div>
      </section>
      <section className="px-20 my-20">
        <h3 className="text-4xl">Testimonials</h3>
        <div className="grid grid-cols-2 gap-x-20 my-6">
          <p className="text-5xl font-semibold">
            Many people have already seen how working with Jade Media Pro has
            enabled them to rebrand and grow their businesses.
          </p>
          <div className="flex items-start relative">
            <div className="">
              <Image
                src="/images/GOAT.png"
                alt="Avatar"
                width={200}
                height={200}
              />
            </div>
            <div className="ml-10">
              <p className="font-bold text-3xl mb-1">Rustam raz</p>
              <p className="text-xl">CEO CRISPR BIOTECH</p>
            </div>
            <div className="flex absolute top-1/3 left-12 space-x-14">
              <Image
                src="/vectors/qou.svg"
                alt="Avatar"
                width={60}
                height={72}
              />
              <p className=" bg-[#044841] text-white px-9 py-12 w-96 h-80">
                In 2015 our founder & CEO, Toyin Umesiri, made a trip to Africa
                for a family emergency and that trip changed her life. She
                returned committed to leveraging years of experience, for
                leading global brand including Walmart Corporation to support
                Africa’s quest for sustainable economic transformation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <p className="px-20 text-4xl mt-48 mb-8">Our Clients </p>
      <CompanyButtons />
      <section className="px-20 grid grid-cols-3 gap-x-20 my-24">
        {values.map((value, valueIndex) => (
          <div
            key={`value-${valueIndex}`}
            className="bg-[#46BFB2] p-6 h-full flex flex-col"
          >
            <h3 className="mb-16 text-2xl">{value.title}</h3>
            <p className="flex-grow flex items-end">{value.details}</p>
            <div className="flex items-center mt-10">
              <p className="pr-2">Learn More</p>
              <Image
                src="/vectors/arrow-left.svg"
                alt="Avatar"
                width={25}
                height={17}
              />
            </div>
          </div>
        ))}
      </section>
      <section className="px-20 mb-16">
        <p className="text-6xl font-bold">Book Your FREE Consultation Now</p>
        <div className="flex py-4 space-x-14 items-start">
          <form
            action=""
            className=" w-3/5 grid grid-cols-2 gap-10 place-content-start"
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
            <div className="col-span-2">
              <TextField
                fullWidth
                id="standard-basic"
                label="Message"
                variant="standard"
              />
            </div>
            <div className="col-span-2 mt-12">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#502A7A",
                }}
                variant="contained"
                className="w-3/5  py-4 hover:opacity-90"
              >
                Book Appointment
              </Button>
            </div>
          </form>
          <div className="w-2/5 flex items-start">
            <Image
              src="/vectors/blogger.svg"
              alt="Avatar"
              width={517}
              height={488}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
