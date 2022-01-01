import React from "react";
import Image from "next/image";
import { Button, TextField } from "@mui/material";
import { TimePickerComponent } from "../TimePicker";
import { DatePickerComponent } from "../DatePicker";

const InfoCollector = ({ title = "", buttonText = "Button" }) => {
  return (
    <section className="  my-[13rem]">
      <p className="lg:text-6xl text-3xl font-bold">{title}</p>
      <div className="flex lg:flex-row flex-col py-4 space-x-14 items-start">
        <form
          action=""
          className=" lg:w-3/5 grid grid-cols-2 gap-10 place-content-start lg:order-1 order-2"
        >
          <TextField id="standard-basic" label="Full name" variant="standard" />
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
              className="w-3/5 py-4 hover:opacity-90"
            >
              {buttonText}
            </Button>
          </div>
        </form>
        <div className="lg:w-2/5 flex items-start lg:order-2 order-1">
          <Image
            src="/vectors/blogger.svg"
            alt="Avatar"
            width={517}
            height={488}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoCollector;
