import React from "react";
import Image from "next/image";
import Logo from "./vectors/Logo";
import Link from "next/link";
import { handleRoutes, scrollToArea } from "../utils/helper";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#070707] lg:block hidden px-20 py-6">
        <div className="flex justify-end mb-2">
          <Image
            src="/vectors/arrow-up.svg"
            alt="Avatar"
            width={50}
            height={50}
            onClick={() => scrollToArea("top")}
          />
        </div>
        <div
          className="grid text-white"
          style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 25rem" }}
        >
          <div className="flex flex-col">
            <Link href="/about">
              <a href="/about" className="mb-4 text-2xl">
                About
              </a>
            </Link>
            <div className="flex flex-col space-y-2">
              <Link href={handleRoutes("What we do", "about")}>What we do</Link>
              <Link href={handleRoutes("Our Team", "about")}>Our Team</Link>
              <Link href={handleRoutes("Testimonials", "about")}>
                Testimonials
              </Link>
              <Link href={handleRoutes("Volunteering", "about")}>
                Volunteering
              </Link>
              <Link href={handleRoutes("Career", "about")}>Career</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Link href="/services">
              <a href="/services" className="mb-4 text-2xl">
                Services
              </a>
            </Link>
            <div className="flex flex-col space-y-2">
              <Link href={handleRoutes("Business", "services")}>Business</Link>
              <Link href={handleRoutes("Branding", "services")}>Branding</Link>
              <Link href={handleRoutes("Design", "services")}>Design</Link>
              <Link href={handleRoutes("Marketing", "services")}>
                Marketing
              </Link>
              <Link href={handleRoutes("Motion", "services")}>Motion</Link>
              <Link href={handleRoutes("Printing", "services")}>Printing</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Link href="/projects">
              <a href="/projects" className="mb-4 text-2xl">
                Projects
              </a>
            </Link>
            <div className="flex flex-col space-y-2">
              <Link href={handleRoutes("Process", "projects")}>Process</Link>
              <Link href={handleRoutes("Showreel", "projects")}>Showreel</Link>
              <Link href={handleRoutes("case study", "projects")}>
                Case Study
              </Link>
              <Link href={handleRoutes("Training", "projects")}>Training</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Link href="/">
              <a href="" className="mb-4 text-2xl">
                Hub
              </a>
            </Link>
            <div className="flex flex-col space-y-2">
              <Link href="/blog">Blog</Link>
              <Link href="/interview">Interview</Link>
              <Link href="/about">Community</Link>
              <Link href="/about">Collaboration</Link>
              <Link href="/events">Event</Link>
              <Link href="/jobs">Job/Internship</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Link href="/about">
              <a href="" className="mb-4 text-2xl">
                Resources
              </a>
            </Link>
            <div className="flex flex-col space-y-2">
              <Link href="/store">Store</Link>
              <Link href="/freebies">Freebies</Link>
              <Link href="/about">Tool</Link>
              <Link href="/about">Report a bug</Link>
            </div>
          </div>
          <div>
            <p className="text-[3.2rem] max-w-[17.92rem] leading-[3.5rem]">
              Stay connected to infinite support
            </p>{" "}
            <div className="w-full mt-14">
              <Button label="JOIN OUR NEWSLETTER" greenBtn />
            </div>
          </div>
        </div>
        <div>
          <Link href="/">
            <a href="/">
              <Image
                src="/vectors/jade-logo-white.svg"
                width={201}
                height={36}
              />
            </a>
          </Link>
        </div>
        <div className="text-white mt-10 grid grid-cols-2 items-end">
          <div className="flex items-center">
            <a href="tel:+2349027710233" className="border-b ">
              (+234) 902 771 0233
            </a>{" "}
            <a
              href="mailto:solutions@jademediapro.com"
              target="_blank"
              className="border-b ml-9"
            >
              solutions@jademediapro.com{" "}
            </a>
          </div>
          <div>
            <p>Connect with us on our platforms:</p>
            <div className="flex items-center justify-between mt-3">
              <a target="_blank" href="">
                <Image
                  src="/gifs/footer-icon-facebook.gif"
                  alt="Avatar"
                  width={50}
                  height={50}
                />
              </a>
              <a target="_blank" href="https://twitter.com/jademediapro">
                <Image
                  src="/gifs/footer-icon-twitter.gif"
                  alt="Avatar"
                  width={50}
                  height={50}
                />
              </a>
              <a target="_blank" href="">
                <Image
                  src="/gifs/footer-icon-linkedin.gif"
                  alt="Avatar"
                  width={50}
                  height={50}
                />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCDOx6O4BefWkwAD3PK3JFNg"
              >
                <Image
                  src="/gifs/footer-icon-youtube.gif"
                  alt="Avatar"
                  width={50}
                  height={50}
                />{" "}
              </a>
              <a target="_blank" href="https://instagram.com/jademediapro">
                {" "}
                <Image
                  src="/gifs/footer-icon-instagram.gif"
                  alt="Avatar"
                  width={50}
                  height={50}
                />
              </a>
              <a target="_blank" href="https://vimeo.com/jademediapro">
                <Image
                  src="/gifs/footer-icon-vimeo.gif"
                  alt="Avatar"
                  width={50}
                  height={50}
                />
              </a>
              <a target="_blank" href="https://pinterest.com/jademediaproo">
                <Image
                  src="/gifs/footer-icon-pinterest.gif"
                  alt="Avatar"
                  width={50}
                  height={50}
                />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center text-white mt-28 font-normal">
          <p>© 2021 Jade Media Pro. All rights reserved. </p>
          <div className="flex items-center justify-end">
            <Link href="/terms-and-condition">
              <a className="mr-8 hover:opacity-60 cursor-pointer  ">
                Terms & Conditions
              </a>
            </Link>
            <Link href="/privacy-policy">
              <a className="cursor-pointer mt-4 lg:mt-0 hover:opacity-60">
                Privacy Policy
              </a>
            </Link>
          </div>
        </div>
      </footer>
      <footer className="bg-[#070707] lg:hidden px-5 py-6 text-white">
        <div className="flex justify-between mb-2 items-start">
          <p className="text-[2.7rem] mt-[1.25rem] max-w-[24.16rem]">
            Stay connected to infinite support
          </p>
          <Image
            src="/vectors/arrow-up.svg"
            alt="Avatar"
            width={50}
            height={50}
            onClick={() => scrollToArea("top")}
          />
        </div>
        <p className="cursor-pointer py-3 px-12 flex mt-12  bg-[#0DFFE5] max-w-[24.16rem] text-black justify-center">
          JOIN OUR NEWSLETTER
        </p>
        <div className=" grid grid-cols-2 gap-y-9 mt-20">
          <div className="flex flex-col">
            <Link href="/about">
              <a href="/about" className="mb-4 text-2xl">
                About
              </a>
            </Link>
            <div className="flex flex-col space-y-2">
              <Link href={handleRoutes("What we do", "about")}>What we do</Link>
              <Link href={handleRoutes("Our Team", "about")}>Our Team</Link>
              <Link href={handleRoutes("Testimonials", "about")}>
                Testimonials
              </Link>
              <Link href={handleRoutes("Volunteering", "about")}>
                Volunteering
              </Link>
              <Link href={handleRoutes("Career", "about")}>Career</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Link href="/services">
              <a href="/services" className="mb-4 text-2xl">
                Services
              </a>
            </Link>
            <div className="flex flex-col space-y-2">
              <Link href={handleRoutes("Business", "services")}>Business</Link>
              <Link href={handleRoutes("Branding", "services")}>Branding</Link>
              <Link href={handleRoutes("Design", "services")}>Design</Link>
              <Link href={handleRoutes("Marketing", "services")}>
                Marketing
              </Link>
              <Link href={handleRoutes("Motion", "services")}>Motion</Link>
              <Link href={handleRoutes("Printing", "services")}>Printing</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Link href="/projects">
              <a href="/projects" className="mb-4 text-2xl">
                Projects
              </a>
            </Link>
            <div className="flex flex-col space-y-2">
              <Link href={handleRoutes("Process", "projects")}>Process</Link>
              <Link href={handleRoutes("Showreel", "projects")}>Showreel</Link>
              <Link href={handleRoutes("Case Study", "projects")}>
                Case Study
              </Link>
              <Link href={handleRoutes("Training", "projects")}>Training</Link>
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
              <Link href="/interview">Interview</Link>
              <Link href="/about">Community</Link>
              <Link href="/about">Collaboration</Link>
              <Link href="/events">Event</Link>
              <Link href="/jobs">Job/Internship</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Link href="/about">
              <a href="" className="mb-4 text-2xl">
                Resources
              </a>
            </Link>
            <div className="flex flex-col space-y-2">
              <Link href="/store">Store</Link>
              <Link href="/freebies">Freebies</Link>
              <Link href="/about">Tool</Link>
              <Link href="/about">Report a bug</Link>
            </div>
          </div>
        </div>
        <div className="mt-14 mb-6">
          <div className="flex flex-col w-[7.8rem] h-[3rem]">
            <Image
              src="/vectors/jade-logo-footer.svg"
              width={123}
              height={46}
            />
          </div>
        </div>
        <div className="py-8 text-xs space-y-4 ">
          <a href="tel:+2349027710233" className="border-b max-w-max">
            (+234) 902 771 0233
          </a>
          <a
            href="mailto:solutions@jademediapro.com"
            target="_blank"
            className="border-b max-w-max"
          >
            solutions@jademediapro.com{" "}
          </a>{" "}
        </div>
        <div className="mt-10">
          <p>Connect with us on our platforms:</p>
          <div className="flex items-center justify-between mt-3">
            <a href="" target="_blank">
              <Image
                src="/vectors/fb.svg"
                alt="Avatar"
                width={17}
                height={15}
              />
            </a>
            <a href="https://twitter.com/jademediapro" target="_blank">
              <Image
                src="/gifs/footer-icon-twitter.gif"
                alt="Avatar"
                width={17}
                height={15}
              />
            </a>
            <a href="" target="_blank">
              <Image
                src="/vectors/linkdin.svg"
                alt="Avatar"
                width={17}
                height={15}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCDOx6O4BefWkwAD3PK3JFNg"
              target="_blank"
            >
              <Image
                src="/vectors/youtube.svg"
                alt="Avatar"
                width={17}
                height={15}
              />{" "}
            </a>
            <a href="" target="_blank">
              <Image
                src="/vectors/ig.svg"
                alt="Avatar"
                width={17}
                height={15}
              />
            </a>
            <a href="" target="_blank">
              <Image
                src="/vectors/googleplus.svg"
                alt="Avatar"
                width={17}
                height={15}
              />
            </a>
            <a href="https://pinterest.com/jademediaproo" target="_blank">
              <Image
                src="/gifs/footer-icon-pinterest.gif"
                alt="Avatar"
                width={17}
                height={15}
              />
            </a>
            <a href="" target="_blank">
              <Image
                src="/vectors/rss.svg"
                alt="Avatar"
                width={17}
                height={15}
              />
            </a>
          </div>
        </div>
        <p className="mt-32 mb-[3.5rem] text-xs">
          © 2021 Jade Media Pro. All rights reserved.{" "}
        </p>
        <div className="text-xs">
          <Link href="/terms-and-condition">
            <a className="mr-8 hover:opacity-60 cursor-pointer  ">
              Terms & Conditions
            </a>
          </Link>
          <Link href="/privacy-policy">
            <a className="cursor-pointer mt-4 lg:mt-0 hover:opacity-60">
              Privacy Policy
            </a>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
