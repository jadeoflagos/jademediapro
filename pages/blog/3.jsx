import Image from "next/image";
import Navbar from "../../components/Navbar";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
import SocialButtons from "../../components/SocialButtons";
import Tags from "../../components/Tags";

const HyperLinkStyle = { color: "blue" };

const BlogPost3 = () => {
  return (
    <div>
      <div className=" w-screen ">
        <div>
          <Navbar darkLogo dropDownBg="white" />
        </div>
        <p className="px-5 lg:px-20 w-full lg:w-7/12 py-12 text-3xl lg:text-7xl lg:tracking-wider">
          Branding For Profitability
        </p>
      </div>
      <section className="lg:mt-12 px-5 lg:px-20 lg:py-20 flex lg:flex-row flex-col lg:gap-x-[10rem]">
        <div className="lg:w-4/5">
          <SocialButtons />
          <div className="lg:hidden">
            <Tags />
          </div>
          <div className="mt-16 lg:mt-28 text-[#666666] text-xs lg:text-base">
            <Image
              src="/images/blogs/blog3/03-A.jpg"
              alt="avatar"
              height={600}
              width={1000}
            />
            <p className="my-3 lg:my-10">
              The marketing practice of giving a product or company a symbol or
              model that distinguishes it from other commodities is known as
              Branding, for profitability. In intensely challenging
              marketplaces, a{" "}
              <a
                style={{ color: "blue" }}
                href="https://martech.org/building-a-brand-strategy-essentials-for-long-term-success/"
              >
                powerful brand strategy
              </a>{" "}
              gives you a competitive edge. A term, design, or concept that is
              easily recognizable by the public is regularly included in
              branding.
            </p>
            <p className="my-3 lg:my-10">
              Branding is a subset of marketing. Marketing is defined as the set
              of tools, processes, and strategies you use to actively{" "}
              <a
                style={{ color: "blue" }}
                href="http://www.jademediapro.com/services/digitalmarketing"
              >
                promote your product, service, and company
              </a>
              , while branding, on the other hand, is the marketing practice of
              actively shaping your brand. Branding is about defining who you
              are and what your company stands for.
            </p>
            <p className="my-3 lg:my-10">
              Branding can be done for a product or company. Likewise, personal
              branding can be done for a person, examples are sportsmen and
              women, musicians, and other celebrities.
            </p>
            <div className="my-3 lg:my-10">
              The importance of branding can’t be overemphasized, the branding
              communicates several things about the company, things like;
              <ul className="list-inside list-disc">
                <ListItem>Core values and principles.</ListItem>
                <ListItem>The mission.</ListItem>
                <ListItem>The inspiration to build the business.</ListItem>
                <ListItem>
                  Motivation for offering products or services to a target
                  market.
                </ListItem>
                <ListItem>
                  What makes the product and services stand out.
                </ListItem>
                <ListItem> Company culture.</ListItem>
                <ListItem>
                  The feeling the organization wants a business name to elicit
                  from customers.
                </ListItem>
                <ListItem>
                  How consumers should feel about the business when they think
                  of it.
                </ListItem>
                <ListItem>How customers should describe the business.</ListItem>
              </ul>
            </div>
            <Image
              src="/images/blogs/blog3/03-B.jpg"
              alt="avatar"
              height={600}
              width={1000}
            />
            <p className="my-3 lg:my-10">
              Your brand is how people view you when they interact with your
              company—both the ones you can influence and the ones you can't.
              Branding is to increase the apparent value of a firm or its
              products to customers, hence{" "}
              <a
                style={{ color: "blue" }}
                href="https://blog.franchise.neighborly.com/how-to-increase-brand-awareness"
              >
                increasing brand franchise and brand share values
              </a>
              . Having a very good brand also enables manufacturers to charge
              more for the product. The value of the brand is determined by how
              much profit it generates for the manufacturer. This makes{" "}
              <a
                style={{ color: "blue" }}
                href="http://www.jademediapro.com/services/branding"
              >
                brand management
              </a>{" "}
              a very important aspect of a company's growth.
            </p>
            <p className="my-3 lg:my-10">
              Brand recognition is earned by a brand that is well-known in the
              marketplace. When a brand's recognition has grown to the point
              where it has widespread positive feelings in the market, it has
              reached brand franchise. One of the critical goals in brand
              recognition is building a brand to the extent that the brand can
              be widely identified without the name of the company present.
              Apple Inc. is an example of a company that has built a very
              successful brand. The logo, seen anywhere, will raise a feeling of
              quality, luxury, and reliability in consumers anywhere in the
              world. Companies like McDonald's, Coca-Cola, Google, Iker, and
              many more have also built a very successful brand which makes
              acceptability easy when new products are introduced.
            </p>
            <p className="my-3 lg:my-10">
              Some elements of branding include the;
            </p>
            <p className="my-3 lg:my-10">
              Logos (main logo, secondary logos, and icons), color palettes and
              schemes, typography, other images to be used, the voice and tone
              behind writings must all pass a message,{" "}
              <a
                style={{ color: "blue" }}
                href="https://www.bluleadz.com/blog/how-to-craft-the-perfect-core-values-for-your-business"
              >
                clearly representing your company's core values
              </a>
              .
            </p>
            <p className="my-3 lg:my-10">
              Branding is a marketing strategy, the totality of ideas, imagery,
              pictures taken into consideration helps to form consumers'
              perspectives about a product. So{" "}
              <a
                style={{ color: "blue" }}
                href="http://www.jademediapro.com/projects/process/marketingprocess"
              >
                branding is a marketing strategy
              </a>{" "}
              , and the brand is what has a meaning to the consumer.
            </p>
            <p className="my-3 lg:my-10">
              The term brand can be understood as many things, which can be
              summarized as follows;
            </p>
            <p className="my-3 lg:my-10">
              It is simply a logo e.g., the Mark that signifies NIKE.
            </p>
            <p className="my-3 lg:my-10">It is a company e.g., Coca-Cola.</p>
            <p className="my-3 lg:my-10">
              It's a risk reducer. The brand reassures of quality, even in
              unfamiliar territory.
            </p>
            <p className="my-3 lg:my-10">
              Branding means positioning. Branding helps in the categorization
              of brands in terms of quality, speed of delivery, and reliability
              in the minds of consumers.
            </p>
            <p className="my-3 lg:my-10">
              It is a cluster of values e.g., Telegram is reliable, ethical,
              invaluable, innovative, and so on.
            </p>
            <p className="my-3 lg:my-10">
              It signifies added value, where the consumer sees value in a brand
              over its competitors e.g., Apple EarPods over other brands of
              earbuds, a Versace branded shirt over a non-branded shirt, and
              Volkswagen over Skoda - despite similarities.
            </p>
            <Image
              src="/images/blogs/blog3/03-C.jpg"
              alt="avatar"
              height={600}
              width={1000}
            />
            <h2 className="text-base lg:text-3xl font-bold mt-6 lg:my-10 text-black">
              Branding the right way
            </h2>
            <p className="my-3 lg:my-10">
              There are some components that make up a good branding plan and
              these components are not independent of themselves, i.e., they
              have to run concurrently. They include:
            </p>
            <ol className="list-decimal list-inside">
              <ListItem>
                One must have a “Clear Vision for a Brand”: Delivering value
                consistently is the only way to acquire a solid consumer base.
                So, there is a need to make what is being offered to consumers
                clear. Why does the business exist? Is it to help people, to
                make them feel good? Chances are the business means more to the
                individual than money. There is a need to formalize what that
                reason is in a vision statement. The vision statement tells
                employees and customers what the business is, to what purpose
                and also markets the core values directly to a target audience.
              </ListItem>
              <ListItem>
                There must be “Consistency in Messages posted across all
                Platforms”: The importance of consistency in messages cannot be
                overemphasized to build a brand name people will remember.
                Ensure consistency with a style that will always clearly outline
                not only the logo and slogan, but also acceptable color schemes,
                fonts, and tones that the brand is to be known for.
              </ListItem>
              <ListItem>
                You need to “Extend the Brand throughout the Company”: ensure
                everyone in your company is fully aware of your brand and what
                it stands for and understands how to communicate with customers
                to convey it. They are your unofficial marketing team members
                and it is crucial to note that all successful brands are
                strengthened by employee support.
              </ListItem>
              <Image
                src="/images/blogs/blog3/03-D.jpg"
                alt="avatar"
                height={600}
                width={1000}
              />
              <ListItem>
                An Emotional Connection must be created between the consumers
                and the Brand: The emotions of your different advert campaigns
                in the target audience matter a lot. Some strong emotional
                triggers elicit empathy, provide a feeling of connection, and
                make people's lives easier. Your brand voice is the conduit for
                your brand story and it should be leveraged strongly. You want
                your customer base to feel something when they see your logo or
                hear your company name. A good brand strategy will deliver that
                power to your business.
              </ListItem>
              <ListItem>
                Loyalty to the brand needs to be nurtured in clients: a
                successful branding strategy should nurture loyalty in
                customers. This can be achieved by appreciating customers (in
                words, cash, and kind) and making them feel special with loyalty
                rewards like discounts and promos.
              </ListItem>
            </ol>
            <p className="my-3 lg:my-10">
              In conclusion, for you to build a very competitive and profitable
              business, it is of utmost importance to{" "}
              <a
                style={{ color: "blue" }}
                href="http://www.jademediapro.com/services/branding"
              >
                work on your branding
              </a>
              . The stronger your brand, the greater chance your company has at
              being successful, reaching, converting, and retaining customers.
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

const ListItem = ({ children }) => {
  return <li className="list-disc my-1 lg:my-3">{children}</li>;
};

export default BlogPost3;
