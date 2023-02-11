// import Image from "next/image";
// import Navbar from "../../components/Navbar";
// import BlogCard from "../../components/BlogCard";
// import Footer from "../../components/Footer";
// import SocialButtons from "../../components/SocialButtons";
// import Tags from "../../components/Tags";

// const HyperLinkStyle = { color: "blue" };

// const BlogPost2 = () => {
//   return (
//     <div>
//       <div className=" w-screen ">
//         <div>
//           <Navbar darkLogo dropDownBg="white" />
//         </div>
//         <p className="px-5 lg:px-20 w-full lg:w-7/12 py-12 text-3xl lg:text-7xl lg:tracking-wider">
//           A Beginner's Guide to Brand Identity for Small Businesses
//         </p>
//       </div>
//       <section className="lg:mt-12 px-5 lg:px-20 lg:py-20 flex lg:flex-row flex-col lg:gap-x-[10rem]">
//         <div className="lg:w-4/5">
//           <SocialButtons />
//           <div className="lg:hidden">
//             <Tags />
//           </div>
//           <div className="mt-16 lg:mt-28 text-[#666666] text-xs lg:text-base">
//             <Image
//               src="/images/blogs/blog2/02-A.jpg"
//               alt="avatar"
//               height={600}
//               width={1000}
//             />
//             <p className="my-3 lg:my-10">
//               Your brand is how people view you whenever they interact with your
//               company. The marketing practice of giving a product a name,
//               symbol, or design, that distinguishes it from other items is known
//               as{" "}
//               <a
//                 href="http://www.jademediapro.com/projects/process/brandingprocess"
//                 style={HyperLinkStyle}
//               >
//                 branding
//               </a>
//               . Maintaining a good brand is very vital for a business because
//               according to research, 75% of purchase decisions are based on
//               emotion. As branding is primarily what influences a customer's
//               perceptions and feelings towards a company overall, these
//               statistics highlight the undeniable importance of branding a new
//               business effectively. Having understood the{" "}
//               <a
//                 href="https://99designs.com/blog/tips/brand-identity/#developstrong"
//                 style={HyperLinkStyle}
//               >
//                 importance of maintaining a good brand
//               </a>
//               , it is vital to outline the steps required by small businesses to
//               build a solid brand.
//             </p>
//             <h2 className="text-base lg:text-3xl font-bold mt-6 lg:my-10 text-black">
//               What is your brand's purpose?
//             </h2>
//             <p className="my-3 lg:my-10">
//               You must have a "Clear Vision for Your Brand": The only way to
//               build a loyal customer base is to continually deliver value. As a
//               result, you must make it clear to customers what you are
//               delivering and why you are in business. If you're in business to
//               help people or to make them feel good, chances are you care about
//               your customers more than money. A vision statement is required to
//               codify what that reason is. Your vision statement informs
//               employees and consumers alike about who you are, what your mission
//               is, and what your basic values are.
//             </p>
//             <h2 className="text-base lg:text-3xl font-bold mt-6 lg:my-10 text-black">
//               Who is your ideal customer? And use your knowledge carefully.
//             </h2>
//             <div className="my-3 lg:my-10">
//               When it comes to branding your business, you'll need a clear
//               handle on your target audience, just as you do with your business
//               goals.{" "}
//               <a
//                 href="https://devrix.com/tutorial/how-to-leverage-data-driven-decision-making-business-growth/"
//                 style={HyperLinkStyle}
//               >
//                 "Who are you attempting to market to?"{" "}
//               </a>{" "}
//               is a question that many people ask. your answer should not be
//               “everyone”. To start you can study the customer base of your
//               competitors, and use the information to build your average
//               customer persona. This is very important to be able to build a
//               brand that resonates with the customers. Questions like;
//               <ul>
//                 <ListItem>
//                   Their age range: what age group does the majority of your
//                   customers fall into?
//                 </ListItem>
//                 <ListItem>
//                   Are there more males or females in the group you're trying to
//                   reach?
//                 </ListItem>
//                 <ListItem>
//                   What is their educational level: is it high school, college,
//                   post-graduate?
//                 </ListItem>
//                 <ListItem>
//                   What type of employment do they have: Are they self-employed,
//                   employed by a corporation, or the owner of multiple
//                   businesses? Are they looking for work?
//                 </ListItem>
//                 <ListItem>
//                   Their way of life: what do they do for a living and in their
//                   spare time?
//                 </ListItem>
//                 <ListItem>
//                   Their challenges: what do they struggle with? And how can you
//                   help them?
//                 </ListItem>
//               </ul>
//             </div>
//             <p className="mb-5">
//               These are very important questions to answer. And utilizing these
//               answers judiciously will make it easier to create a brand that
//               will resonate with the customers.
//             </p>
//             <Image
//               src="/images/blogs/blog2/02-B.png"
//               alt="avatar"
//               height={600}
//               width={1000}
//             />
//             <h2 className="text-base lg:text-4xl font-bold mt-6 lg:my-13 text-black">
//               Brand Distinction
//             </h2>
//             <p className="my-3 lg:my-10">
//               It is very important for your brand to spell out what sets it
//               apart from other companies. It can be your pricing, wider range of
//               products, or effectiveness. This needs to be expressed in some
//               form on every platform through which you are{" "}
//               <a href="http://www.jademediapro.com/projects/process/marketingprocess">
//                 advertising your company.
//               </a>
//             </p>
//             <h2 className="text-base lg:text-3xl font-bold mt-6 lg:my-10 text-black">
//               Which element of branding will you use?
//             </h2>
//             <p className="my-3 lg:my-10">
//               Some common elements of branding are; logos (principal logo,
//               secondary logos, and icons), color palettes and schemes,
//               typography, other images to be used, and the voice and tone used
//               in writings must all convey a message that clearly represents your
//               company's essential beliefs. There must always be consistency in
//               the messages your company passes out at all times. Develop a color
//               palette from which you can pick colors for each of your brand
//               elements. There should be a consistency in the fonts used, images
//               and every other element must always represent the company's ideas
//               at all times.
//             </p>
//             <h2 className="text-base lg:text-3xl font-bold mt-6 lg:my-10 text-black">
//               Which toole will you use to spread the word about your brand?
//             </h2>
//             <p className="my-3 lg:my-10">
//               It is usually easier for larger corporations to build and maintain
//               their brands, mostly due to the availability of funds, to employ
//               media experts and{" "}
//               <a
//                 href="http://www.jademediapro.com/services/digitalmarketing/advertisingcampaigns"
//                 style={HyperLinkStyle}
//               >
//                 run advertisement campaigns
//               </a>
//               , but that is not to say all hope is lost for smaller businesses.
//               The internet provides a lot of free and inexpensive options for
//               business publicity. Social media platforms and instant messaging
//               apps, like Facebook, Instagram, Twitter, WhatsApp, are some
//               examples of platforms that small businesses can utilize to create
//               awareness for their brands. There are inexpensive tools for
//               graphic design that can be used by an inexperienced user, websites
//               that give royalty-free images, and many more.{" "}
//               <a
//                 href="http://www.jademediapro.com/services/web&appproject"
//                 style={HyperLinkStyle}
//               >
//                 Creating a website
//               </a>{" "}
//               is also easy via different platforms like blogger, WordPress, etc.
//               All this makes it easy to push out your brand to a larger
//               audience. It should however be noted that there is a great need to
//               consistently express your brand, post images, write-ups, etc.
//               Consistently put your brand out to the world.
//             </p>
//             <Image
//               src="/images/blogs/blog2/02-C.jpg"
//               alt="avatar"
//               height={600}
//               width={1000}
//             />
//             <h2 className="text-base lg:text-3xl font-bold mt-6 lg:my-10 text-black">
//               How can you delve deeper into your brand and grow it?
//             </h2>
//             <p className="my-3 lg:my-10">
//               When you{" "}
//               <a
//                 href="http://www.jademediapro.com/services/branding/logo&brandidentity"
//                 style={HyperLinkStyle}
//               >
//                 create a brand identity for yourself
//               </a>{" "}
//               , it's important to have a “learner's mindset.” Stay open to the
//               needed tools and ideas that are working to build memorable brands
//               today. Learn about the habits of your consumers, follow your
//               competitors, the changing market needs, the technological and
//               social media habits of your customer base, etc. Try to{" "}
//               <a
//                 href="https://devrix.com/tutorial/research-competitors-determine-strategies/"
//                 style={HyperLinkStyle}
//               >
//                 understand your competitor's campaign strategy
//               </a>{" "}
//               and always try to stand out with your campaign strategies.
//             </p>

//             <h2 className="text-base lg:text-5xl font-bold mt-6 text-black">
//               Conclusion
//             </h2>
//             <div className="my-3 lg:my-8">
//               Proper branding of your business should be a pressing concern for
//               you, especially if you have not previously considered doing that.
//               This post has tried to explain the importance of branding your
//               business — and more specifically what really constitutes good
//               branding practice — and how to achieve that. Let's have a recap of
//               the steps you will want to follow:
//               <ul>
//                 <ListItem>
//                   Define your key goals to provide a foundation for your
//                   branding efforts.
//                 </ListItem>
//                 <ListItem>
//                   Take into account a suitable target audience such that you
//                   know exactly who you're aiming your brand at.
//                 </ListItem>
//                 <ListItem>
//                   To unify your efforts, create a personality and identity that
//                   is connected to your target audience and goals.
//                 </ListItem>
//                 <ListItem>
//                   Make sure your{" "}
//                   <a
//                     href="http://www.jademediapro.com/projects/process/marketingprocess"
//                     style={HyperLinkStyle}
//                   >
//                     marketing strategy
//                   </a>{" "}
//                   as well as{" "}
//                   <a
//                     href="https://devrix.com/tutorial/social-media-marketing-saas-products/"
//                     style={HyperLinkStyle}
//                   >
//                     social media pages
//                   </a>{" "}
//                   are in order for you to start building a solid conversion
//                   funnel.
//                 </ListItem>
//               </ul>
//             </div>
//             <p>
//               Branding can impact your company's success greatly, whether in the
//               short or long term. The good news is that{" "}
//               <a href="http://www.jademediapro.com/services/branding">
//                 branding your business
//               </a>{" "}
//               doesn't have to be difficult.
//             </p>
//           </div>
//         </div>
//         <div className="hidden lg:block lg:w-1/5">
//           <Tags />
//         </div>
//       </section>

//       <section className="px-5 lg:px-20 my-12 w-full lg:grid lg:grid-cols-3 lg:gap-x-20 gap-y-5 lg:space-y-0">
//         <h3 className="col-span-3 mb-8 text-3xl lg:text-5xl font-bold">
//           Similar articles recommended
//         </h3>
//         <BlogCard date="Nov 01 2020" />
//         <BlogCard date="Oct 31 2021" />
//         <BlogCard date="Oct 31 2021" />
//       </section>
//       <Footer />
//     </div>
//   );
// };

// const ListItem = ({ children }) => {
//   return <li className="list-disc my-1 lg:my-3">{children}</li>;
// };

// export default BlogPost2;
