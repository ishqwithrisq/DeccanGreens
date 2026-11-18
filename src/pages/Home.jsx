import React from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiCheck,
  FiDroplet,
  FiGlobe,
  FiUsers,
  FiClock ,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import SolutionConsultancy from "./SolnCunsult";

import {
  GiFarmTractor,
  GiGreenhouse,
  GiPlantSeed,
  GiFlowerPot,
  GiWheat,
  GiTreeGrowth,
} from "react-icons/gi";
import { FaSeedling } from "react-icons/fa";
import "./home.css";
import HeroGreenhouse from "../assets/images/HeroHome.jpeg";

const photo = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const capabilities = [
  {
    number: "01",
    title: "WE CONSULT",
    text: "Expert agricultural guidance to help you plan, improve and grow with confidence.",
    tone: "mint",
    Icon: FiUsers,
  },
  {
    number: "02",
    title: "WE TRAIN",
    text: "Practical, hands-on learning through workshops and skill-building programmes.",
    tone: "yellow",
    Icon: GiPlantSeed,
  },
  {
    number: "03",
    title: "WE SUPPLY",
    text: "Quality products, materials and resources for modern growing needs.",
    tone: "blue",
    Icon: FiDroplet,
  },
  {
    number: "04",
    title: "WE DIGITALIZE",
    text: "Smart technology and digital tools that make agriculture more efficient.",
    tone: "lavender",
    Icon: FiGlobe,
  },
];

const audiences = [
  {
    title: "Farmers & FPOs",
    text: "Practical guidance, crop planning, training and sustainable practices for rural growth.",
    photo: "photo-1500382017468-9049fed747ef",
    Icon: GiFarmTractor,
    tone: "mint",
  },
  {
    title: "Agribusiness & Startups",
    text: "Business-building support, planning, technical knowledge and entrepreneurship.",
    photo: "photo-1464226184884-fa280b87c399",
    Icon: GiGreenhouse,
    tone: "yellow",
  },
  {
    title: "Urban Growers",
    text: "Balcony gardens, kitchen gardens, terrace farming and green living solutions.",
    photo: "photo-1416879595882-3373a0480b5b",
    Icon: GiFlowerPot,
    tone: "mint",
  },
  {
    title: "Institutions & Organizations",
    text: "Collaborative projects, CSR initiatives, training and capacity-building programmes.",
    photo: "photo-1472396961693-142e6e269027",
    Icon: FiUsers,
    tone: "lavender",
  },
];

const ecosystem = [
  { title: "Hydroponics & Soilless Cultivation", Icon: FiDroplet },
  { title: "Commercial Horticulture", Icon: GiFlowerPot },
  { title: "Protected Cultivation", Icon: GiGreenhouse },
  { title: "Nursery Development", Icon: GiPlantSeed },
  { title: "Integrated Agriculture", Icon: GiFarmTractor },
  { title: "Urban Gardening", Icon: FaSeedling },
  { title: "Medicinal & Aromatic Plants", Icon: GiTreeGrowth },
  { title: "Agriculture Farming", Icon: GiWheat },
];

const learningCards = [
  {
    tag: "LEARN & GROW",
    title: "Training Courses",
    text: "Practical training programmes in hydroponics, horticulture, urban farming and sustainable agriculture.",
    action: "Explore Courses",
    photo: "photo-1464226184884-fa280b87c399",
    Icon: FiBookOpen,
    tone: "green",
  },
  {
    tag: "GROW WITH CONFIDENCE",
    title: "Agricultural Products",
    text: "Quality inputs, growing media, gardening tools and solutions for successful cultivation.",
    action: "View Products",
    photo: "photo-1585320806297-9794b3e4eeae",
    Icon: FaSeedling,
    tone: "gold",
  },
  {
    tag: "KNOWLEDGE RESOURCES",
    title: "E-Books & Digital Resources",
    text: "Practical guides, e-books, learning resources and digital tools for every grower.",
    action: "Explore Resources",
    photo: "photo-1492496913980-501348b61469",
    Icon: FiBookOpen,
    tone: "purple",
  },
];

const articles = [
  {
    category: "SUSTAINABLE FARMING",
    title: "Farming for a Greener Tomorrow",
    date: "02 Nov 2026",
    photo: "photo-1500382017468-9049fed747ef",
  },
  {
    category: "URBAN GARDENING",
    title: "Grow More in Small Spaces",
    date: "28 Oct 2026",
    photo: "photo-1416879595882-3373a0480b5b",
  },
  {
    category: "AGRICULTURE",
    title: "Smarter and Better Growing",
    date: "21 Oct 2026",
    photo: "photo-1464226184884-fa280b87c399",
  },
  {
    category: "PLANT KNOWLEDGE",
    title: "Discover the Power of Plants",
    date: "15 Oct 2026",
    photo: "photo-1497250681960-ef046c08a56e",
  },
];

function Eyebrow({ children }) {
  return <span className="dg-eyebrow">{children}</span>;
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
}) {
  return (
    <div className={`dg-section-title ${centered ? "is-centered" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="deccan-home">

      {/* HERO SECTION */}

      <section className="dg-hero" id="home">
        <img
  className="dg-hero-image"
  src={HeroGreenhouse}
  alt="Sunlit hydroponic greenhouse with lush green lettuce rows"
/>

        <div className="dg-hero-overlay" />

        <div className="dg-hero-content">
          <Eyebrow>
            PARTNERS IN GROWTH. ROOTED IN SUSTAINABILITY.
          </Eyebrow>

          <h1>
            Real Challenges.
            <br />
            Practical Solutions.
            <br />
            <em>Sustainable Growth.</em>
          </h1>

          <p className="dg-hero-lead">
            Your Partner in Agriculture, Horticulture &amp; Agritech.
          </p>

          <p className="dg-hero-description">
            At Deccan Green, we bring together agricultural expertise,
            practical training, quality growing materials and innovative
            digital resources to solve real challenges in rural and urban
            agriculture.
          </p>

          <div className="dg-hero-actions">
           <Link
  to="/solutions"
  className="dg-button dg-button-primary"
>
  Explore Our Solutions <FiArrowRight />
</Link>

            <a className="dg-button dg-button-light" href="#contact">
              Contact Our Experts <FiArrowUpRight />
            </a>
          </div>

          <div className="dg-trust-points">
            <span><FiCheck /> Expert Guidance</span>
            <span><FiCheck /> Practical Training</span>
            <span><FiCheck /> Sustainable Growth</span>
          </div>
        </div>

        <div className="dg-hero-note">
          <FaSeedling />
          <strong>
            Growing
            <br />
            Knowledge for a
            <br />
            Greener Tomorrow
          </strong>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}

      <section
        className="dg-section dg-capabilities"
        id="capabilities"
      >
        <SectionTitle
          eyebrow="OUR CAPABILITIES"
          title="Four Capabilities. One Integrated Platform."
          subtitle="Everything you need to move your agricultural journey forward."
        />

        <div className="dg-capability-grid">
          {capabilities.map(
            ({ number, title, text, tone, Icon }) => (
              <article
                className={`dg-capability-card ${tone}`}
                key={title}
              >
                <span className="dg-capability-icon">
                  <Icon />
                </span>

                <span className="dg-capability-number">
                  {number}
                </span>

                <h3>{title}</h3>

                <p>{text}</p>

                <a
                  href="#contact"
                  aria-label={`Learn more about ${title}`}
                >
                  <FiArrowUpRight />
                </a>
              </article>
            )
          )}
        </div>
      </section>

      {/* WHO WE SERVE SECTION */}

      <section
        className="dg-section dg-audience"
        id="audience"
      >
        <SectionTitle
          eyebrow="BUILT FOR EVERY GROWER"
          title="Who We Serve"
          subtitle="Solutions designed around the people and organisations shaping agriculture."
        />

        <div className="dg-audience-grid">
          {audiences.map(
            ({ title, text, photo: imageId, Icon, tone }) => (
              <article
                className="dg-audience-card"
                key={title}
              >
                <div className="dg-audience-image">
                  <img
                    src={photo(imageId, 650)}
                    alt={title}
                    loading="lazy"
                  />

                  <span className={`dg-audience-icon ${tone}`}>
                    <Icon />
                  </span>
                </div>

                <div className="dg-audience-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      {/* ECOSYSTEM SECTION */}

      <section
        className="dg-section dg-ecosystem"
        id="ecosystem"
      >
        <SectionTitle
          eyebrow="OUR EXPERTISE"
          title="From Concept to Cultivation"
        />

        <div className="dg-ecosystem-grid">
          {ecosystem.map(({ title, Icon }) => (
            <div className="dg-ecosystem-item" key={title}>
              <span>
                <Icon />
              </span>

              <strong>{title}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* LEARNING AND RESOURCES SECTION */}

      <section
        className="dg-section dg-learning"
        id="learning"
      >
        <div className="dg-learning-heading">
          <SectionTitle
            centered={false}
            eyebrow="EXPLORE OUR KEY OFFERINGS"
            title="Learn. Grow. Access. Apply."
          />

          {/* <a className="dg-view-all" href="#contact">
            View All Offerings <FiArrowRight />
          </a> */}
        </div>

        <div className="dg-learning-grid">
          {learningCards.map(
            ({
              tag,
              title,
              text,
              action,
              photo: imageId,
              Icon,
              tone,
            }) => (
              <article
                className="dg-learning-card"
                key={title}
              >
                <div className="dg-learning-image">
                  <img
                    src={photo(imageId, 750)}
                    alt={title}
                    loading="lazy"
                  />

                  <span className={`dg-learning-icon ${tone}`}>
                    <Icon />
                  </span>
                </div>

                <div className="dg-learning-copy">
                  <span className="dg-card-tag">
                    {tag}
                  </span>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  

<Link
  to={`/asd?tab=${
    title === "Training Courses"
      ? "courses"
      : title === "Agricultural Products"
      ? "products"
      : "ebooks"
  }`}
>
  {action} <FiArrowRight />
</Link>


                </div>
              </article>
            )
          )}
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="dg-cta" id="contact">
        <div className="dg-cta-mark">
          <FaSeedling />
        </div>

        <div className="dg-cta-copy">
          <Eyebrow>
            HAVE AN AGRICULTURAL CHALLENGE OR BUSINESS IDEA ?
          </Eyebrow>

          <h2>
            Let's explore the right solution together.
          </h2>

          <div className="dg-cta-actions">
            <a className="dg-cta-button" href="/#contact">
              Book a Consultation <FiArrowRight />
            </a>

            <a className="dg-cta-outline" href="/#contact">
              Contact Our Team
            </a>
          </div>
        </div>


      </section>

      {/* LATEST ARTICLES SECTION */}

      <section
        className="dg-section dg-insights"
        id="insights"
      >
        <div className="dg-insights-heading">
          <SectionTitle
            centered={false}
            eyebrow="FROM OUR KNOWLEDGE HUB"
            title="Latest Articles & Insights"
          />

          <a className="dg-view-all" href="#insights">
            View All Articles <FiArrowRight />
          </a>
        </div>

        <div className="dg-article-grid">
          {articles.map(
            ({ category, title, date, photo: imageId }) => (
              <article
                className="dg-article-card"
                key={title}
              >
                <img
                  src={photo(imageId, 500)}
                  alt={title}
                  loading="lazy"
                />

                <div>
                  <span className="dg-card-tag">
                    {category}
                  </span>

                  <h3>{title}</h3>

                  <p className="dg-article-date">
                    <FiClock />
                    <span>{date}</span>
                  </p>

                  <a href="#contact">
                    Read More <FiArrowRight />
                  </a>
                </div>
              </article>
            )
          )}
        </div>
      </section>

    </main>
  );
}