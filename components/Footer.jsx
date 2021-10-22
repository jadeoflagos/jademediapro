import React from "react";
import Image from "next/image";
import Logo from "./vectors/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#070707] px-20 py-6">
      <div className="flex justify-end mb-2">
        <Image
          src="/vectors/arrow-up.svg"
          alt="Avatar"
          width={50}
          height={50}
        />
      </div>
      <div className="grid grid-cols-6 text-white">
        <div className="flex flex-col">
          <Link href="/about">
            <a href="" className="mb-4 text-2xl">
              About
            </a>
          </Link>
          <div className="flex flex-col space-y-2">
            <Link href="/about">What we do</Link>
            <Link href="/about">Our Team</Link>
            <Link href="/about">Testimonials</Link>
            <Link href="/about">Volunteering</Link>
            <Link href="/about">Career</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <Link href="/about">
            <a href="" className="mb-4 text-2xl">
              Services
            </a>
          </Link>
          <div className="flex flex-col space-y-2">
            <Link href="/about">Business</Link>
            <Link href="/about">Branding</Link>
            <Link href="/about">Design</Link>
            <Link href="/about">Marketing</Link>
            <Link href="/about">Motion</Link>
            <Link href="/about">Printing</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <Link href="/about">
            <a href="" className="mb-4 text-2xl">
              Projects
            </a>
          </Link>
          <div className="flex flex-col space-y-2">
            <Link href="/about">Process</Link>
            <Link href="/about">Showreel</Link>
            <Link href="/about">Case Study</Link>
            <Link href="/about">Training</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <Link href="/about">
            <a href="" className="mb-4 text-2xl">
              Hub
            </a>
          </Link>
          <div className="flex flex-col space-y-2">
            <Link href="/blog">Blog</Link>
            <Link href="/about">Interview</Link>
            <Link href="/about">Community</Link>
            <Link href="/about">Collaboration</Link>
            <Link href="/about">Event</Link>
            <Link href="/about">Job/Internship</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <Link href="/about">
            <a href="" className="mb-4 text-2xl">
              Resources
            </a>
          </Link>
          <div className="flex flex-col space-y-2">
            <Link href="/about">Store</Link>
            <Link href="/about">Freebies</Link>
            <Link href="/about">Tool</Link>
            <Link href="/about">Report a bug</Link>
          </div>
        </div>
        <div>
          <p className="text-4xl">
            Stay
            <br /> connected <br />
            to infinite
            <br /> support
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <p className="cursor-pointer py-3 px-12 flex justify-center mt-12  bg-[#0DFFE5] max-w-max ">
          JOIN OUR NEWSLETTER
        </p>
      </div>
      <div>
        <Logo />
      </div>
      <div className="text-white mt-10 grid grid-cols-2 items-end">
        <div className="flex items-center">
          <span className="border-b">(123) 456-7890</span>
          <span className="border-b ml-9">solutions@jademediapro.agency </span>
        </div>
        <div>
          <p>Connect with us on our platforms:</p>
          <div className="flex items-center justify-between mt-3">
            <Image src="/vectors/fb.svg" alt="Avatar" width={50} height={50} />
            <Image
              src="/vectors/twitter.svg"
              alt="Avatar"
              width={50}
              height={50}
            />
            <Image
              src="/vectors/linkdin.svg"
              alt="Avatar"
              width={50}
              height={50}
            />
            <Image
              src="/vectors/youtube.svg"
              alt="Avatar"
              width={50}
              height={50}
            />{" "}
            <Image src="/vectors/ig.svg" alt="Avatar" width={50} height={50} />
            <Image
              src="/vectors/googleplus.svg"
              alt="Avatar"
              width={50}
              height={50}
            />
            <Image
              src="/vectors/pintrest.svg"
              alt="Avatar"
              width={50}
              height={50}
            />{" "}
            <Image src="/vectors/rss.svg" alt="Avatar" width={50} height={50} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center text-white mt-28 font-normal">
        <p>© 2021 Jade Media Pro. All rights reserved. </p>
        <div className="flex items-center justify-end">
          <p className="mr-8">Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
