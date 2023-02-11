// import { TextField } from "@mui/material";
// import Image from "next/image";
// import React, { useState } from "react";
// import DateNTime from "../components/DateNTime";
// import Footer from "../components/Footer";
// import SelectVariants from "../components/Form/Select";
// import SectionHeader from "../components/organism/SectionHeader";
// import { faqs } from "../data/Faq";
// import Button from "../components/Button";
// import Navbar from "../components/Navbar";

// const Contact = () => {
//   const [activeTab, setActiveTab] = useState(-1);

//   return (
//     <div>
//       <section
//         className={`w-screen lg:min-h-[30rem] pb-24`}
//         style={{ background: "#000000" }}
//       >
//         <div>
//           <Navbar textColor="white" />
//         </div>
//         <div
//           className="flex flex-col lg:flex-row  lg:items-center justify-between px-5 lg:px-20 text-white lg:pt-16"
//           style={{
//             color: "white",
//           }}
//         >
//           <div className="lg:w-8/12 w-full">
//             <p className="font-semibold  text-3xl lg:text-[4.8rem] leading-[5.28rem]">
//               Ready to START your journey and GROW your Business?
//             </p>
//           </div>
//           <div className="lg:w-4/12 w-full flex items-center justify-center">
//             <Image
//               src={`/images/Contact-header.png`}
//               alt="Avatar"
//               width={450}
//               height={450}
//             />
//           </div>
//         </div>
//       </section>
//       <section className="px-5 lg:px-20 py-16">
//         <h1 className="text-[3.2rem] leading-[3.5rem] font-bold">FAQs</h1>
//         <p className="mt-6 mb-6 lg:mb-14">
//           Frequently asked questions about hookah and association
//         </p>
//         <div className="lg:w-3/5 space-y-6">
//           {faqs.map((faq, faqIndex) => (
//             <div key={`faq-${faqIndex}`}>
//               <div className="flex  gap-x-7 items-end border-b border-black px-4 py-2 ">
//                 <span className="font-semibold text-xs lg:text-lg flex-grow">
//                   {faq.que}
//                 </span>
//                 <div
//                   className="cursor-pointer h-full w-12 flex justify-end "
//                   onClick={() => {
//                     activeTab == faqIndex
//                       ? setActiveTab(-1)
//                       : setActiveTab(faqIndex);
//                   }}
//                 >
//                   <Image
//                     src={`/vectors/${
//                       activeTab == faqIndex ? "caret-down.svg" : "caretup.svg"
//                     }`}
//                     alt="Avatar"
//                     width={20}
//                     height={10}
//                   />
//                 </div>
//               </div>

//               {activeTab == faqIndex ? (
//                 <p className="pt-6 pb-10 text-xs px-4 lg:text-base">
//                   {faqs[faqIndex].ans}
//                 </p>
//               ) : (
//                 ""
//               )}
//             </div>
//           ))}
//         </div>
//       </section>
//       <section id="contactus" className="px-5  lg:px-20 my-7 lg:mt-36 lg:mb-64">
//         <p className="text-3xl lg:w-3/5 pr-12 lg:mb-[4.8rem] lg:text-6xl font-bold">
//           We can help you with the process. Let's talk.
//         </p>

//         <div className="flex items-start lg:flex-row flex-col">
//           <form
//             action=""
//             className="lg:w-3/5 pr-12 grid grid-cols-2 gap-x-10 gap-y-4 order-2 lg:order-1 mb-9 lg:mb-0"
//           >
//             <TextField
//               id="standard-basic"
//               label="Full name"
//               variant="standard"
//             />
//             <TextField
//               id="standard-basic"
//               label="Email address"
//               variant="standard"
//               type="email"
//             />
//             <TextField id="standard-basic" label="mobile" variant="standard" />
//             <DateNTime />
//             <div className="col-span-2">
//               <SelectVariants
//                 menuitems={[
//                   "Art & Photography",
//                   "Branding & Design",
//                   "Business Strategy",
//                   "Digital Marketing",
//                   "Motion Design",
//                   "Web & App Project",
//                 ]}
//                 className="w-full"
//                 label="Select Services of Interest (Optional)"
//               />
//             </div>
//             <TextField
//               id="standard-basic"
//               label="What Services  do you  Offer?"
//               variant="standard"
//               className="col-span-2"
//             />
//             <TextField
//               id="standard-basic"
//               label="How can we help you?"
//               variant="standard"
//               className="col-span-2"
//             />

//             <div className="col-span-2 mt-16">
//               <div className="w-64">
//                 <Button label="SUBMIT" />
//               </div>
//             </div>
//           </form>
//           <div className="order-1 lg:order-2">
//             <Image
//               src="/vectors/blogger.svg"
//               alt="Avatar"
//               width={489}
//               height={367}
//             />
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;
