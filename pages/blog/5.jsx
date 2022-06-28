import Image from "next/image";
import Navbar from "../../components/Navbar";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
import SocialButtons from "../../components/SocialButtons";
import Tags from "../../components/Tags";

const BlogPost5 = () => {
  return (
    <div>
      <div className=" w-screen ">
        <div>
          <Navbar darkLogo dropDownBg="white" />
        </div>
        <p className="px-5 lg:px-20 w-full lg:w-7/12 py-12 text-3xl lg:text-7xl lg:tracking-wider">
          Building A Solid Business Strategy
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
              src="/images/blogs/blog5/05-A.jpg"
              alt="avatar"
              height={600}
              width={1000}
            />
            <p className="my-3 lg:my-10">
              A successful business venture begins with a good business
              strategy.
            </p>
            <p className="my-3 lg:my-10">
              So then, what is a business strategy?
            </p>
            <p className="my-3 lg:my-10">
              A business strategy is a master plan that a company's management
              creates and implements to maintain a competitive position in the
              market, continue operations, satisfy consumers, and accomplish the
              intended business outcomes. It is a long-term vision of where the
              company wants to go.
            </p>
            <div className="my-3 lg:my-10">
              When writing a business strategy, it is critical to consider
              current resources and impediments, as well as people, money,
              power, and materials, all of which must be in alignment with the
              organization's vision, mission, and goals.
            </div>
            <p className="my-3 lg:my-10">
              Business strategies frequently employ a variety of ways to meet
              the company's objectives. Some of those include: giving
              information, reinforcing support, removing barriers, and
              allocating resources to ensure the desired success while achieving
              the vision and mission.
            </p>
            <p className="my-3 lg:my-10">
              On the other hand, strategies describe how to proceed to achieve
              intended outcomes. The strategies assist the business in
              determining how to concentrate on the most important aspects of
              its vision and goals.
            </p>
            <p className="my-3 lg:my-10">
              Strategic management can assist in achieving a planned dynamism
              that motivates senior management and strategists in the firm to
              develop strategic thinking and vision for the future by perceiving
              reality and predicting market variables, responding quickly to
              customer needs, and predicting future behavior to gain a
              competitive advantage.
            </p>
            <h2 className="text-base lg:text-3xl font-bold mt-6 lg:my-10 text-black">
              Levels of Busines Strategy
            </h2>
            <p className="my-3 lg:my-10">Three levels exist. viz:</p>
            <ol className="list-inside list-decimal">
              <ListItem>The Corporate Level</ListItem>
              <ListItem>The Business level</ListItem>
              <ListItem>The Functional level</ListItem>
            </ol>
            <h2 className="text-base lg:text-2.5xl font-bold mt-6 lg:my-8 text-black">
              1. The Corporate level strategy:
            </h2>
            <p className="my-3 lg:my-10">
              At the corporate level, the business areas in which your
              organization will operate are defined.
            </p>
            <p className="my-3 lg:my-10">
              It has to do with managing resource deployments across multiple
              business areas, both related and unconnected.
            </p>
            <p className="my-3 lg:my-10">
              At this level, strategy design comprises combining and managing
              multiple businesses while attaining corporate synergy. The
              business strategy lays out the steps that must be taken to realize
              your company's goal.
            </p>
            <h2 className="text-base lg:text-2.5xl font-bold mt-6 lg:my-8 text-black">
              2. The Business level strategy:
            </h2>
            <p className="my-3 lg:my-10">
              Business-level strategies are developed for individual strategic
              business units and are focused on a single product market segment.
              It comprises determining the competitive position of a key
              business unit.
            </p>
            <p className="my-3 lg:my-10">
              The business-level strategy is developed using the general
              strategies of overall cost leadership, differentiation, and focus.
            </p>
            <p className="my-3 lg:my-10">
              The CEOs of strategic business units and their teams decide on
              company level strategy based on the unique characteristics of the
              industry in which they operate.
            </p>
            <h2 className="text-base lg:text-2.5xl font-bold mt-6 lg:my-8 text-black">
              3. The Functional level strategy:
            </h2>
            <p className="my-3 lg:my-10">
              These plans are developed by functional heads, first-line
              managers, and supervisors, in collaboration with their teams. They
              are aligned with business-level strategies. At the functional
              level, strategies comprise setting short-term functional goals
              that will help realize the business-level plan.
            </p>
            <p className="my-3 lg:my-10">
              In business, many strategies at various levels are usually
              required because a single strategy is not only insufficient but
              also ineffective. As a result, a typical corporate structure will
              always have three layers.
            </p>
            <h2 className="text-base lg:text-3xl font-bold mt-6 lg:my-10 text-black">
              Steps to creating a strong business strategy.
            </h2>
            <ol className="list-decimal list-inside">
              <ListItem>
                <b>Develop a clear vision:</b> A vision, often known as a vision
                statement, is a projection of the future. It should include
                ambitions for the type of organization you want to be, and,
                unlike a mission statement, it must define success in concrete
                terms (customers, markets, volume, etc.).
              </ListItem>
              <ListItem>
                <b>Determine what constitutes a competitive advantage:</b>{" "}
                Identifying how a firm can give distinctive value to its
                customers is at the heart of strategy. Companies in many sectors
                of the economy are drowning in a sea of similarities. In its
                service offering, pricing model, delivery method, and other
                areas, a well-thought-out business strategy should evaluate how
                a company might create space from competitors.
              </ListItem>
              <ListItem>
                <b>Define your objectives:</b> Poor targeting is one of the most
                major hurdles to growth. Companies suffer from a confusing
                message and, as a result, misalignment between sales and
                marketing in the absence of extremely specific aims. Companies
                can focus resources by defining niches and expertise (of course,
                some companies are generalists by design). Clear target markets
                enable a corporation to develop an integrated sales and
                marketing strategy, in which marketing facilitates sales
                productivity.
              </ListItem>
              <Image
                src="/images/blogs/blog5/05-B.jpg"
                alt="avatar"
                height={600}
                width={1000}
              />
              <ListItem>
                <b>Concentrate on long-term growth:</b> A thriving firm is a
                growing firm. Companies can only afford good technology, the
                best staff, and better equipment if they are growing. The
                strategic plan should indicate which areas a company will grow
                in and by what percentage such that the product mix produces a
                certain net margin. Only after reaching such conclusions will a
                corporation be able to determine how much overhead, and other
                expenses it can afford.
              </ListItem>
              <ListItem>
                <b>Make informed decisions:</b> It's a "garbage in, rubbish out"
                exercise when it comes to strategy. Executives frequently
                complain about a lack of good data, but we regularly unearth
                information that helps them design strategies. We once assisted
                a Vistage member who was attempting to calculate the value of
                various segments served. We were able to quantify real shipments
                of merchandise by potential customers by consulting the public
                records of a local port.
              </ListItem>
              <ListItem>
                <b>Think long term:</b> Planning horizons are shorter than they
                used to be in the face of rapid change. On the other hand, only
                thinking in quarters is a trap that can deprive businesses of
                their potential to see around corners. Best-in-class companies
                develop strategies as a constant process rather than a one-time
                event. Companies can consider long term while remaining
                adaptable. For example, an external forces analysis is a crucial
                aspect of strategy. Companies should be reviewing long-term
                external pressures and pivoting based on fresh knowledge, to
                continually remain competitive.
              </ListItem>
              <ListItem>
                <b>Make an effort to be inclusive:</b> Companies should involve
                more people in their strategy than in the past to remain
                dynamic. There will undoubtedly be an upwards trend in company
                growth with greater inclusiveness and transparency, which
                introduces new ideas to the firm. Choosing who to involve in the
                strategy development process is a crucial decision. Business
                owners should surround themselves with individuals they can
                trust and who can think strategically, deeply and critically.
              </ListItem>
              <ListItem>
                <b>Measure your outcomes and execute flawlessly:</b> there is a
                need to check the effectiveness of the strategies put in place
                and tweak it when necessary. Rigidity is an absolute no-no!
              </ListItem>
            </ol>
            <p className="my-3 lg:my-10">
              As a result of all these, it is pertinent that strategic planning
              must be implemented to build a successful business venture.
              Discipline in following the strategies is a must; and senior
              executives must take a proactive approach to implement this plan,
              as they are the ones most responsible for promoting processes that
              keep a team focused on the goal to achieve it. Strategies, on the
              other hand, outline how to proceed to accomplish the desired
              results. The strategies assist the organization in determining how
              to concentrate on the most important aspects to attain its vision
              and goals. the company's desired success.
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

export default BlogPost5;
