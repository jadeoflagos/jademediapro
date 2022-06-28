import Image from "next/image";
import Navbar from "../../components/Navbar";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
import SocialButtons from "../../components/SocialButtons";
import Tags from "../../components/Tags";

const BlogPost4 = () => {
  return (
    <div>
      <div className=" w-screen ">
        <div>
          <Navbar darkLogo dropDownBg="white" />
        </div>
        <p className="px-5 lg:px-20 w-full lg:w-7/12 py-12 text-3xl lg:text-7xl lg:tracking-wider">
          The Psychology of Graphic Design
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
              src="/images/blogs/blog4/04-A.jpg"
              alt="avatar"
              height={600}
              width={1000}
            />
            <p className="my-3 lg:my-10">
              Graphic design is a method of visual communication that combines
              images, portraits, drawings, alterations, words, and intelligence
              to communicate information to the public with the sole purpose of
              achieving a specific goal. Expertise in graphic design psychology
              is required to properly adjust the graphic design to arrest the
              mind and heart of a potential client.
            </p>
            <p className="my-3 lg:my-10">
              The source of graphic design can be traced back to the days of
              human evolution. A long time ago in Babylon, cuneiform
              inscriptions were inscribed into tablets, clay bricks and other
              construction materials, showing the names of the reigning monarch,
              other elites and dignitaries as well as the builder's name. This
              source can also be traced back to the caves of Lascaux, the neon
              lights of Ginza, the illuminated manuscripts of the Middle Ages,
              Rome's Trajan's Column and many more. Hieroglyphics communication
              was developed by the Egyptians as far back 136 B.C. using picture
              symbols found on the Rosetta Stone. Benjamin Franklin of the
              United States began the graphic design with his newspaper The
              Pennsylvania Gazette to understand, facilitate and promote the
              publicity of his books to impact the masses.
            </p>
            <p className="my-3 lg:my-10">
              Graphic design over the years has developed and evolved beyond the
              level of ordinary logo creation. Graphic design has reached a
              stage of marketing and aesthetic appeal. It is of utmost
              importance that graphic designers working in the user experience
              (UX) design level should be able to inculcate justifiable
              stylistic choices regarding fonts, colors, image locations and
              pictures with a human-centered approach. Invariably, designers
              should fixate on and try to empathize with users while creating
              captivating designs that maximize usability. Aesthetics is a core
              value in UX design, design is not just created for the sake of
              design. Therefore, there is a need that the graphic designer
              understands the nitty-gritty of visual design.
            </p>
            <div className="my-3 lg:my-10">
              Unlike UX design which has a core value of maximizing customer
              satisfaction, UI design (User Interface) requires a detailed and
              comprehensive understanding of the precise need of the user
              because it focuses on what the client needs to do and the tools to
              turn those needs into desired results. Elements such as toggles,
              dropdown lists, notifications, breadcrumbs, and many more.
              Communal designs are UI, even if they blend passive images.
            </div>
            <h2 className="text-base lg:text-3xl font-bold mt-6 lg:my-10 text-black">
              Elements of graphic design
            </h2>
            <p className="my-3 lg:my-10">
              The basic units of any visual design that constitute the design's
              structure and transmit its visual messages are known as components
              of art. Some of the components of graphic design are discussed
              below.
            </p>
            <Image
              src="/images/blogs/blog4/04-B.svg"
              alt="avatar"
              height={600}
              width={1000}
            />
            <p className="my-3 lg:my-10">
              <b>Line:</b> These are the most elementary components of graphics
              design. A line as a component of design can simply be defined as a
              mark produced on a surface that connects two or more different
              points. A line can be straight, bent, thick, thin,
              two-dimensional, three-dimensional, and so on.
            </p>
            <p className="my-3 lg:my-10">
              <b>Shape:</b> A shape in simple terms is a specified
              two-dimensional area formed by lines. Geometric, abstract, and
              organic shapes are only a few of the many sorts of shapes that
              make up a design.
            </p>
            <p className="my-3 lg:my-10">
              <b>Colour:</b> One other core component of graphic design is
              colour. It is essential in captivating the attention of the
              general audience because there is a psychology behind the emotions
              that colours may elicit. The three main attributes to colour are
              the colour family (hue), how light or dark the colour is (value),
              the purity of the colour (saturation).
            </p>
            <p className="my-3 lg:my-10">
              <b>Typography:</b> This is an art of type organization and
              construction. It is of great importance to consider typography
              because it greatly affects the design's messages critically.
              Different colours, sizing, spacing, combined with the weights
              (light, regular, or bold) can add or reduce the value of the
              message the designer is trying to pass.
            </p>
            <p className="my-3 lg:my-10">
              <b>Texture:</b> Design texture refers to the structure of things
              if they were to be touched. Texture can be smooth, rough, hard,
              soft or even glossy. The texture is a major component for drawing
              the attention of the general audience. Texture can be mixed and
              introduced to other components such as colour, shape, and type.
            </p>
            <p className="my-3 lg:my-10">
              <b>Size:</b> This is the degree of how large or small a thing is.
              The usage of different sizes in graphic design is to create
              optical interest and to highlight the importance of a subject.
            </p>
            <p className="my-3 lg:my-10">
              <b>Space:</b> Space in graphic design is those unoccupied areas.
              The areas left void may include but are not limited to any areas
              or distance above, below, between, and even around other design
              components. Graphic designers specifically add spaces in the
              graphic design to prioritize some specific areas of the design.
            </p>
            <h2 className="text-base lg:text-3xl font-bold mt-6 lg:my-10 text-black">
              Principles of graphic design
            </h2>
            <p className="my-3 lg:my-10">
              The fundamentals of graphic design help the graphic designer to
              systematically itemize the various components that are required to
              link the designs together.
            </p>
            <Image
              src="/images/blogs/blog4/04-C.svg"
              alt="avatar"
              height={600}
              width={1000}
            />
            <p className="my-3 lg:my-10">
              <b>Balance:</b> The visual weight of objects, colours, texture,
              and space is distributed in a way that is pleasing to the eye.
              Asymmetry and symmetry are employed in graphic design to achieve
              aesthetic balance. These elements should be balanced if the design
              is a scale for it to feel stable. The size, colour, texture, and
              shape of the area can all be varied.
            </p>
            <p className="my-3 lg:my-10">
              <b>Alignment:</b> The term "alignment" refers to the process of
              maintaining a design in order. To make a visual connection between
              the pieces, all aspects of the design should be aligned with the
              top, bottom, middle, or sides.
            </p>
            <p className="my-3 lg:my-10">
              <b>Repetition:</b> Repeat those patterns throughout the design
              once you've decided how to employ your elements. This repetition
              binds separate parts together and reinforces the design while also
              giving it a sense of motion.
            </p>
            <p className="my-3 lg:my-10">
              <b>Proximity:</b> Proximity establishes a visible connection
              between the design elements. It reduces clutter, improves the
              viewer's understanding, and gives viewers a focus point. It
              doesn't mean the related items have to be placed adjacent to each
              other; it just implies they should be visually connected.
            </p>
            <p className="my-3 lg:my-10">
              <b>Contrast:</b> Contrast is specifically used to draw attention
              to specific areas of the design Contrast allows you to emphasize
              differences between pieces, highlighting the important elements of
              your design you want to stand out.
            </p>
            <h2 className="text-base lg:text-3xl font-bold mt-6 lg:my-10 text-black">
              Types of graphic design
            </h2>
            <p className="my-3 lg:my-10">
              Graphic design has evolved into a very diverse field. Different
              fields and specialties make up the overall notion. The following
              are some of the most common graphic design styles:
            </p>
            <Image
              src="/images/blogs/blog4/04-D.jpg"
              alt="avatar"
              height={600}
              width={1000}
            />

            <p className="my-3 lg:my-10">
              <b>Corporate design:</b> Graphic design for the purpose of
              promoting a company's branding objectives employs visuals such as
              shapes, images, and color to express a brand's persona in the most
              precise and desirable way possible. It specializes in producing
              logos, image libraries, typography, and color palettes that
              perfectly reflect a company's brand strategy. And also responsible
              for establishing style guidelines to describe best practices and
              to ensure visual branding consistency across all media, in
              addition to designing visuals for corporate stationery and
              business cards.
            </p>
            <p className="my-3 lg:my-10">
              <b>Marketing and advertising design:</b> Marketing and advertising
              are probably the two most well-known types of graphic design. The
              majority of people associate graphic design with marketing and
              advertising. This extensively utilized style of graphic design
              includes things like social media graphics, magazine ads,
              billboards, brochures, email marketing templates, and content
              marketing.
            </p>
            <p className="my-3 lg:my-10">
              <b>Digital art and Illustration design:</b> Despite the fact that
              graphic design and art are not the same category, they work
              closely together to create stunning artworks. In diverse
              situations, creative art and illustration are employed as part of
              promotional designs for commercial usage on T-shirts, stock
              pictures, websites, textile patterns, graphic novels, video games,
              comic books, book covers, album art, infographics, picture books,
              concept art, sports illustration, and so on.
            </p>
            <p className="my-3 lg:my-10">
              <b>Environmental design:</b> This style of graphic design is
              frequently disregarded, at least from a personal perspective. The
              employment of visual components in surroundings to connect people
              to those places is called environmental graphic design. The
              environmental design seeks to improve people's experiences in
              those areas, either by making the encounter more memorable or by
              informing the spectator. The environmental design includes
              architecture, road signs, signage, event areas, and murals.
            </p>
            <p className="my-3 lg:my-10">
              <b>Publication design:</b> Traditional publication design refers
              to the print medium, however, with our generation's rapid
              digitization, it has shifted to digital publishing. To guarantee
              that layout, typography, and images are tastefully blended,
              publication designers must collaborate closely with editors and
              publishers. Books, newspapers, newsletters, magazines, and eBooks
              are all examples of publication graphic design.
            </p>
            <p className="my-3 lg:my-10">
              <b>Packaging design:</b> When a customer buys a new product, it
              almost certainly has some sort of packaging or visual element,
              like a label, sticker, or wrapping, which is used to prepare the
              product for distribution or sale; package designers develop these
              elements. To achieve successful product marketing, these designers
              must be informed of current market trends.
            </p>
            <p className="my-3 lg:my-10">
              <b>Motion design:</b> Motion graphic design is a subgenre of
              graphic design that entails moving visuals. Animation, video
              games, apps, GIFs, website features, and so on fall within this
              category. As technical advances have allowed designers to explore
              new mediums, it is still a relatively young subject in graphic
              design.
            </p>
            <p className="my-3 lg:my-10">
              <b>UI design:</b> The goal of this graphic design method is to
              create user-friendly interfaces. It entails altering the
              appearance and positioning of graphical elements like menus and
              buttons in order to improve the visual experience of users. UI
              designers work on mobile apps, games, desktop apps, and online
              apps to create user interfaces to achieve the ideal combination of
              technical functionality and aesthetic appeal. They work alongside
              UX designers and UI developers to create game interfaces, app
              design, theme design, and web page design, among other things.
            </p>
            <p className="my-3 lg:my-10">
              <b>NFTs Design:</b> All over the internet, there is a lot of
              surprises about NFTs as the graphic design trend for 2022. NFTs
              can be made from any digital design such as 3D models, digital
              art, pictures, music, logo design, and anything else related to
              digital content assets. Making an NFT design by creating an
              exclusive piece of work and adding it to the NFT chain can help
              you raise the value of your work. Memes, graphic design posters,
              GIFs, and videos can all be used to create NFTs.
            </p>
            <p className="my-3 lg:my-10">
              Finally, for a graphic designer to be able to provide an
              aesthetically pleasing design, understanding the psychology behind
              the art of design is a very important factor. The proper use and
              integration of its components and fundamentals will help in
              developing a media design that will pass across a very captivating
              message, no matter the type or form in which the graphic is
              presented.
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

export default BlogPost4;
