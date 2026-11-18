import React from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiTarget,
  FiBookOpen,
  FiSettings,
  FiTrendingUp,
  FiUsers,
  FiLayers,
  FiDroplet,
  FiHome,
  FiBriefcase,
  FiActivity,
  FiCheckCircle,
} from "react-icons/fi";
import {
  GiGreenhouse,
  GiFarmTractor,
  GiPlantSeed,
  GiFlowerPot,
} from "react-icons/gi";
import { FaSeedling } from "react-icons/fa";

import "./SolnCunsult.css";

const photo = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const services = [
  {
    title: "Agricultural Consultancy",
    text: "Expert guidance for crop planning, farm management and sustainable agricultural practices.",
    image: "photo-1500382017468-9049fed747ef",
    Icon: GiFarmTractor,
  },
  {
    title: "Horticulture Consultancy",
    text: "Practical support for commercial horticulture, plant production and growing systems.",
    image: "photo-1464226184884-fa280b87c399",
    Icon: GiFlowerPot,
  },
  {
    title: "Hydroponics & Soilless Farming",
    text: "Guidance on hydroponic systems, growing techniques, setup and crop management.",
    image: "photo-1585320806297-9794b3e4eeae",
    Icon: FiDroplet,
  },
  {
    title: "Protected Cultivation",
    text: "Planning and technical guidance for greenhouse and protected cultivation projects.",
    image: "photo-1470058869958-2a77ade41c02",
    Icon: GiGreenhouse,
  },
  {
    title: "Nursery Development",
    text: "Support for nursery planning, plant propagation and production management.",
    image: "photo-1416879595882-3373a0480b5b",
    Icon: GiPlantSeed,
  },
  {
    title: "Urban Gardening",
    text: "Solutions for terrace gardens, kitchen gardens, balconies and green spaces.",
    image: "photo-1497250681960-ef046c08a56e",
    Icon: FiHome,
  },
  {
    title: "Project Planning & Implementation",
    text: "End-to-end assistance with project concepts, planning and practical execution.",
    image: "photo-1492496913980-501348b61469",
    Icon: FiLayers,
  },
  {
    title: "Agri-business Development",
    text: "Technical and strategic guidance for agriculture-based businesses and startups.",
    image: "photo-1464226184884-fa280b87c399",
    Icon: FiBriefcase,
  },
];

const steps = [
  [
    FiTarget,
    "Understand",
    "We understand your requirements, goals and project challenges.",
  ],
  [
    FiBookOpen,
    "Plan",
    "We prepare a practical approach based on your needs and resources.",
  ],
  [
    FiSettings,
    "Implement",
    "We support execution with technical guidance and practical solutions.",
  ],
  [
    FiTrendingUp,
    "Grow",
    "We help you evaluate progress and identify opportunities for improvement.",
  ],
];

const strengths = [
  [
    FiUsers,
    "Expert Guidance",
    "Practical knowledge and professional agricultural guidance.",
  ],
  [
    FiTarget,
    "Customized Solutions",
    "Recommendations designed around your specific requirements.",
  ],
  [
    FiActivity,
    "Practical Approach",
    "A focus on workable solutions and real-world implementation.",
  ],
  [
    FiTrendingUp,
    "Sustainable Growth",
    "Long-term thinking for productive and responsible growth.",
  ],
];

const projects = [
  {
    title: "Agriculture & Farming",
    text: "Farm planning, crop development and integrated agriculture.",
    image: "photo-1500382017468-9049fed747ef",
    Icon: GiFarmTractor,
  },
  {
    title: "Horticulture Projects",
    text: "Commercial horticulture and protected cultivation projects.",
    image: "photo-1464226184884-fa280b87c399",
    Icon: GiFlowerPot,
  },
  {
    title: "Hydroponics & Greenhouses",
    text: "Soilless growing systems and greenhouse development.",
    image: "photo-1585320806297-9794b3e4eeae",
    Icon: GiGreenhouse,
  },
  {
    title: "Urban Green Spaces",
    text: "Terrace gardening, kitchen gardens and urban growing.",
    image: "photo-1416879595882-3373a0480b5b",
    Icon: FiHome,
  },
];

function Eyebrow({ children }) {
  return <span className="sc-eyebrow">{children}</span>;
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="sc-section-heading">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function SolutionConsultancy() {
  return (
    <main className="sc-page">

      {/* HERO — MATCHES THE HOME PAGE HERO */}
      <section className="sc-hero">
        <img
          className="sc-hero-image"
          src={photo("photo-1500382017468-9049fed747ef", 1900)}
          alt="Lush green agricultural fields"
        />

        <div className="sc-hero-overlay" />

        <div className="sc-hero-content">
          <Eyebrow>
            EXPERT GUIDANCE. PRACTICAL SOLUTIONS.
          </Eyebrow>

          <h1>
            Grow With
            <br />
            Expert Guidance.
            <br />
            <em>Build a Greener Future.</em>
          </h1>

          <p className="sc-hero-lead">
            Agricultural & Horticultural Consultancy.
          </p>

          <p className="sc-hero-description">
            From planning and technical guidance to project implementation,
            Deccan Greens provides practical consultancy solutions to help
            your agricultural and horticultural projects grow with confidence.
          </p>

          <div className="sc-hero-actions">
            <a className="sc-btn sc-btn-primary" href="#sc-services">
              Explore Our Services <FiArrowRight />
            </a>

            <a className="sc-btn sc-btn-outline" href="/contact">
              Talk to Our Experts <FiArrowUpRight />
            </a>
          </div>

          <div className="sc-trust-points">
            <span><FiCheckCircle /> Expert Guidance</span>
            <span><FiCheckCircle /> Practical Solutions</span>
            <span><FiCheckCircle /> Sustainable Growth</span>
          </div>
        </div>

        <div className="sc-hero-note">
          <FaSeedling />
          <strong>
            Growing Knowledge
            <br />
            for a Greener
            <br />
            Tomorrow
          </strong>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sc-section sc-services" id="sc-services">
        <SectionHeading
          eyebrow="WHAT WE OFFER"
          title="Our Consultancy Services"
          text="Comprehensive guidance and practical solutions for agriculture, horticulture and modern growing projects."
        />

        <div className="sc-service-grid">
          {services.map(({ title, text, image, Icon }) => (
            <article className="sc-service-card" key={title}>
              <img src={photo(image, 650)} alt={title} loading="lazy" />

              <div className="sc-service-content">
                <span className="sc-service-icon">
                  <Icon />
                </span>

                <h3>{title}</h3>
                <p>{text}</p>

                <a href="/contact" aria-label={`Enquire about ${title}`}>
                  <FiArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="sc-approach">
        <div className="sc-section">
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="Our Approach"
            text="A structured and practical approach to help turn your ideas into successful growing projects."
          />

          <div className="sc-steps">
            {steps.map(([Icon, title, text], index) => (
              <React.Fragment key={title}>
                <article className="sc-step">
                  <span className="sc-step-icon">
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>

                {index !== steps.length - 1 && (
                  <span className="sc-step-arrow">
                    <FiArrowRight />
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="sc-section sc-why">
        <div className="sc-why-image">
          <img
            src={photo("photo-1464226184884-fa280b87c399", 1000)}
            alt="Green agricultural cultivation"
            loading="lazy"
          />

          <div className="sc-why-image-caption">
            <span><FaSeedling /></span>
            <div>
              <b>Growing Better, Together.</b>
              <p>
                Knowledge, experience and practical solutions for
                sustainable agricultural development.
              </p>
            </div>
          </div>
        </div>

        <div className="sc-why-content">
          <SectionHeading
            eyebrow="THE DECCAN GREENS ADVANTAGE"
            title="Why Choose Us?"
            text="We combine technical knowledge with a practical understanding of agricultural and horticultural requirements."
          />

          <div className="sc-strength-grid">
            {strengths.map(([Icon, title, text]) => (
              <article className="sc-strength-card" key={title}>
                <span><Icon /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT TYPES */}
      <section className="sc-section sc-projects">
        <SectionHeading
          eyebrow="OUR AREAS OF WORK"
          title="Projects We Support"
          text="We provide consultancy support across a range of agricultural and green development projects."
        />

        <div className="sc-project-grid">
          {projects.map(({ title, text, image, Icon }) => (
            <article className="sc-project-card" key={title}>
              <img src={photo(image, 650)} alt={title} loading="lazy" />

              <div className="sc-project-copy">
                <span><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="sc-bottom-cta">
        <div className="sc-cta-icon">
          <FaSeedling />
        </div>

        <div className="sc-cta-copy">
          <Eyebrow>LET'S GROW TOGETHER</Eyebrow>
          <h2>Have an Agricultural Project in Mind?</h2>
          <p>
            Talk to our team and find the right consultancy solution for your needs.
          </p>
        </div>

        <div className="sc-cta-actions">
          <a className="sc-btn sc-btn-light" href="/contact">
            Book a Consultation <FiArrowUpRight />
          </a>

          <a className="sc-btn sc-btn-ghost" href="/contact">
            Contact Us <FiArrowRight />
          </a>
        </div>
      </section>

    </main>
  );
}