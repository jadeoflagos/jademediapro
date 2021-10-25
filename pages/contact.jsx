import { Button, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import SelectVariants from "../components/Form/Select";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <div className="bg-black w-screen min-h-[30rem]">
        <div>
          <Navbar textColor="white" />
        </div>
        <div className="flex items-center justify-between px-20 text-white py-2">
          <div className="w-8/12">
            <p className="text-7xl font-semibold">
              Ready to START your journey and GROW your Business?{" "}
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
      <section className="px-20">
        <p>The Team</p>
      </section>
      <section className="px-20">
        <div className="flex items-center">
          <form
            action=""
            className="w-3/5 pr-12 grid grid-cols-2 gap-x-10 gap-y-4"
          >
            <p className="col-span-2 text-6xl">
              We can help you with the process. Let's talk.
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
            <TextField id="standard-basic" label="mobile" variant="standard" />
            <SelectVariants />
            <div className="col-span-2">
              <SelectVariants className="w-full" />
            </div>
            <TextField
              id="standard-basic"
              label="What Services  do you  Offer?"
              variant="standard"
              className="col-span-2"
            />
            <TextField
              id="standard-basic"
              label="How can we help you?"
              variant="standard"
              className="col-span-2"
            />

            <div className="col-span-2 mt-16">
              <Button
                variant="contained"
                className="bg-[#502A7A] w-1/2 py-4 hover:bg-[#502A7A]"
              >
                SUBMIT
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

export default Contact;
