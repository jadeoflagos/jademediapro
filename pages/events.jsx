import Image from "next/image";
import React, { useState } from "react";
import Calendar from "../components/Calendar";
import DailyEmailForm from "../components/DailyEmailForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

const Events = () => {
  const tags = [
    "Technology",
    "Open Source",
    "JavaScript",
    "Minimalism",
    "Self-help",
    "Animals",
    "Herbivores",
    "HTML",
    "CSS",
    "PHP",
    "Web Technologies",
    "Career",
    "Life",
    "Spirituality",
    "Food",
    "Cooking",
    "Sports",
    "Racing",
    "Mountain Hiking",
    "Cruising",
  ];
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <div className="bg-[#044841] w-screen min-h-[30rem]">
        <div>
          <Navbar textColor="white" />
        </div>
        <div className="flex items-center justify-between px-20 text-white py-2">
          <div className="w-8/12">
            <p className="text-7xl font-semibold">
              Bringing people of like-mind and goals together
            </p>
            <p className="py-12 text-2xl">
              Jade Media Pro has always been about people while exploring
              projects of all systems and sizes. Here you'll find the individual
              stories behind the work.
            </p>
          </div>
          <div className="w-4/12 flex items-center justify-center">
            <Image
              src="/images/eventbg.png"
              alt="Avatar"
              width={363}
              height={644}
            />
          </div>
        </div>
      </div>
      <section className="grid grid-cols-3 mt-12">
        <main className="col-span-2"></main>
        <div className="">
          <Calendar />
          <div>
            <h2 className="mb-4">Tags</h2>
            <div className="space-y-4">
              {tags.map((tag, tagIndex) => (
                <p key={tagIndex}>{tag}</p>
              ))}
            </div>
          </div>
          <DailyEmailForm />
        </div>
      </section>
      <section className="px-20">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>
      <Footer />
    </div>
  );
};

export default Events;
