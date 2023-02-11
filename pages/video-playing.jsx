// import React from "react";
// import Footer from "../components/Footer";
// import Link from "next/link";
// import Image from "next/image";
// import Logo from "../components/vectors/Logo";

// import Love from "../public/vectors/love.svg";
// import search from "../public/vectors/search.svg";
// import InterviewCard from "../components/InterviewCard";

// const videoPlaying = () => {
//   return (
//     <div className="bg-white">
//       <nav className="flex items-center justify-between px-20 py-8">
//         <Link href="/">
//           <Logo color="#000" />
//         </Link>
//         <div className="flex items-center justify-between gap-[9.5rem] ">
//           <Image src={search} />
//           <span>Search</span>
//           <span>Most Watched</span>
//           <Image src={Love} />
//         </div>
//       </nav>
//       <main className="mt-16  px-20 grid grid-cols-[1fr,auto] gap-x-[2.315rem]">
//         <section classNme="flex flex-col justify-center">
//           <div className="w-full">
//             <iframe
//               src="https://player.vimeo.com/video/636370372?h=734c780ecc"
//               width="1100"
//               height="688"
//               style={{
//                 padding: 0,
//                 margin: 0,
//               }}
//               frameborder="0"
//               allow="autoplay; fullscreen; picture-in-picture"
//               allowfullscreen
//             ></iframe>
//             {/* <p>
//               <a href="https://vimeo.com/636370372">
//                 Ariwa-Leather-Fashion.mp4
//               </a>{" "}
//               from <a href="https://vimeo.com/user147594847">John Ademiluyi</a>{" "}
//               on <a href="https://vimeo.com">Vimeo</a>.
//             </p> */}
//           </div>
//           <div className="flex flex-col mt-12">
//             <h3 className="text-[3rem]">
//               60 minutes with Adaeze of CAV Digital
//             </h3>
//             <span className="my-6">24 Oct 2021</span>
//             <p className="max-w-[65.4rem]">
//               We start by defining a clear image of exactly who you serve and
//               precisely how they think. Why? Because you can’t help people
//               unless you know them – their hopes, their fears, their problems,
//               and their pitfalls. What converts a total stranger into a die-hard
//               fan of your brand? A constant pull of value and inspiration. At
//               this stage, we map out your customer’s journey so you’ll be able
//               to meet them at their point of need before one of your competitors
//               does. We partner with brands to take communication.
//             </p>
//           </div>
//         </section>
//         <section className="mb-60 mt-8 flex flex-col gap-y-[0.886rem]">
//           {Array(5)
//             .fill("")
//             .map((video, videoIndex) => (
//               <InterviewCard key={`video-playing-other-videos${videoIndex}`} />
//             ))}
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default videoPlaying;
