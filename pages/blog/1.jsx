import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
import SocialButtons from "../../components/SocialButtons";
import Tags from "../../components/Tags";

const BlogPost1 = () => {
  return (
    <div>
      <div className=" w-screen ">
        <div>
          <Navbar darkLogo dropDownBg="white" />
        </div>
        <p className="px-5 lg:px-20 w-full lg:w-7/12 py-12 text-3xl lg:text-7xl lg:tracking-wider">
          Helpful Tips on Using Video Advertising to Promote Your Business
          Effectively
        </p>
      </div>
      <section className="lg:mt-12 px-5 lg:px-20 lg:py-20 flex lg:flex-row flex-col">
        <div className="lg:w-4/5">
          <SocialButtons />
          <div className="lg:hidden">
            <Tags />
          </div>
          <div className="mt-16 lg:mt-28 text-[#666666] text-xs lg:text-base">
            <Image
              src="/images/blogs/blog1/01-A.jpg"
              alt="avatar"
              height={600}
              width={1000}
            />
            <p className="my-3 lg:my-10">
              The world is constantly changing and it is very important that you
              move your business in the direction of the flow of the present
              age. A company or an innovative group that participates in
              commercial, industrial, or professional activity is known as a
              business. Businesses can be for-profit or non-profit entities
              working for a good purpose. Businesses can be small or huge, and
              their scale can range from sole proprietorships to international
              corporations. Research shows that video contributes to raising
              awareness, communicating with their target audience, and
              establishing trust with clients.{" "}
            </p>
            <p>
              Commercial content that displays before, during, or after a video
              transmission is known as{" "}
              <a
                href="https://www.marketing91.com/video-advertising/"
                style={{ color: "blue" }}
              >
                video advertising
              </a>
              . Video can help you improve your search engine rankings and
              increase customer and client engagement. Some marketers include
              display ads containing video content, such as those that start
              playing when the mouse cursor hovers over them, and native video
              ads delivered through digital ad networks, in their definition of
              video advertising. The world of digital video is ever-changing.
              Skilled marketers understand the need of being up to date on new
              developments in order to achieve what their target customers want
              and require. The usage of video greatly depends on the nature of
              business and service or products that you have to offer to your
              proposed client. Discover nine helpful tips on using video
              advertising to promote your business effectively.{" "}
            </p>
            <Point id={1} heading="Make testimonies come to life.">
              Testimonies are an essential part of{" "}
              <Link href="/projects/process/marketingprocess">
                digital marketing and advertisement
              </Link>
              . Your proposed customers and clients are moved by the testimony
              from other customers or clients that have previously been served
              in the time past. This helps to build confidence in the intending
              customers. On their websites, many businesses include written
              testimonials. If you have an interview with people or allow
              customers to share videos of them using your items, you can
              generate greater interest and authenticity. This gives your
              business a facelift.
            </Point>
            <Point id={2} heading="Share your expertise knowledge.">
              You can use video to share your expert knowledge to offer detailed
              information about your business. When you share your expert
              knowledge, your would-be customers or clients are convinced to
              patronize you because of the professionalism you are willing and
              able to offer to them. This will greatly help you to build your
              influence and will definitely give you a head in effectively
              promoting your business.
            </Point>
            <Point id={3} heading="Music incorporation.">
              Music is life and it unites the world. When you incorporate good
              music or sound clips into your adverts, it draws the attention of
              both clients and passers-by to your adverts. Good music brings a
              kind of sensation that cannot be underemphasized. Therefore, it is
              very important that you incorporate good musicals into your video
              for the sole purpose of drawing the attention of your would-be
              customers or clients.
            </Point>
            <Point id={4} heading="Show off a product.">
              Many customers and clients are extremely moved by what they see;
              you should never get tired of showing off your business with{" "}
              <a
                href="http://www.jademediapro.com/projects/showreel"
                style={{ color: "blue" }}
              >
                short skits and adverts
              </a>
              . Many customers would prefer to have a detailed knowledge of what
              they want to purchase, they want a clear picture of what they want
              to get from you. If you're selling a physical item, video is a
              great method to show customers, clients, and passers-by what it
              looks like, how it feels, and what it's made of. If you're selling
              furniture, for example, a video can assist you to explain the
              quality of the construction. Never get tired of showing off what
              your products and services are.
            </Point>
            <Image
              src="/images/blogs/blog1/01-B.gif"
              alt="avatar"
              height={600}
              width={1000}
            />
            <Point id={5} heading="Regularly upload new videos.">
              As much as possible, develop new videos and constantly equip the
              videos with the latest trend that can give your business a big
              boost. Regularly updating and uploading new videos enhance the
              trust your customer has in you. Customers and clients want to see
              something new every time they check in on you. You should not
              repeat the old and rugged videos.
            </Point>
            <Point id={6} heading="Give a detailed procedure on self-service.">
              Self-service is a do-it-yourself style. When you give customers
              and clients detailed information on self-service at the same time
              reminding them of your products, it brings satisfaction to
              customers and equally makes your business stand out. For instance,
              if you are selling hair dye, you could create a video explaining
              the best way to dye hair.
            </Point>
            <Point id={7} heading="Add a personal touch.">
              Welcome visitors to your website, introduce your employees, or
              create a 'day in the life video. This form of material adds
              personality to your business and helps it to come to life. This
              may influence someone's decision to conduct business with you.
              Customers and clients are wowed by your etiquette.
            </Point>
            <Point id={8} heading="Make sure your video gets found.">
              Another important tip is making sure your video gets found on the
              internet. You can make use of various social media platforms as
              well as search engines. This method gives your business a wider
              range.
            </Point>
            <Point id={9} heading="Keep your videos short.">
              Keeping your videos short and sweet goes a long way in promoting
              your business because lengthy materials tend to bring boredom to
              people as they have a shorter attention span as a result of
              technological advancement.{" "}
              <a
                href="http://www.jademediapro.com/projects/process/animationprocess"
                style={{ color: "blue" }}
              >
                Creating your videos with a touch of professionalism
              </a>{" "}
              is a direct message to your customers and clients that you can
              adequately and professionally transact business with them. A
              lengthy video does not attract the attention of your customers or
              clients, you should always avoid taking too much of their time
              with lengthy videos. However, keep it short, simple, and
              professional.
            </Point>
            <h2 className="text-base lg:text-5xl font-bold mt-6 text-black">
              Conclusion
            </h2>
            <p className="my-3 lg:my-8">
              Does it sound like there is a lot that goes into{" "}
              <a
                href="http://www.jademediapro.com/services/motiondesign"
                style={{ color: "blue" }}
              >
                creating an advertising video?
              </a>
            </p>
            <p className="my-3 lg:my-8">
              Yes, there is! Not only do you have to strategically as well as
              effectively map out and develop an inspiring yet concise story,
              but promote it with all you've got. However, you also have to
              consider the time frame, as well as the financial strength
              involved in putting all of these together.
            </p>
            <p className="my-3 lg:my-8">
              Though it seems like a lot, the investment time and cost for a
              professionally produced video is definitely worth the power to{" "}
              <a
                href="http://www.jademediapro.com/services/digitalmarketing"
                style={{ color: "blue" }}
              >
                generate more leads, increase sales,
              </a>{" "}
              grow your overall business and connect with your target customers
              and clients.
            </p>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/5">
          <Tags />
        </div>
      </section>

      <section className="px-5 lg:px-20 my-12 w-full lg:grid lg:grid-cols-3 lg:gap-x-20 gap-y-5 lg:space-y-0">
        <h3 className="col-span-3 mb-8 text-3xl lg:text-5xl font-bold">
          Similar articles recommended
        </h3>
        <BlogCard date="Nov 01 2020" />
        <BlogCard date="Oct 31 2021" />
        <BlogCard date="Oct 31 2021" />
      </section>
      <Footer />
    </div>
  );
};

const Point = ({ id, heading, children }) => {
  return (
    <>
      <h2 className="text-base lg:text-3xl font-bold mt-6 lg:my-6 text-black">
        {id}. {heading}
      </h2>
      <p className="my-3 lg:my-10">{children} </p>
    </>
  );
};

export default BlogPost1;
