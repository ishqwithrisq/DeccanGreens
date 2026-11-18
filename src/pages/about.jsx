
import React from "react";
import {
  FaFlask,
  FaLeaf,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaBullseye,
  FaCompass,
  FaUsers,
  FaTractor,
  FaBuilding,
  FaCity,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBookOpen,
  FaGlobe,
} from "react-icons/fa6";
import { FaSeedling } from "react-icons/fa";

import "./about.css";
import OurStory from "../assets/images/Our_Story.png";


const photo = (id, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;



const values = [
  {
    icon: FaFlask,
    title: "Scientific Thinking",
    text: "Sound agricultural and horticultural principles.",
  },
  {
    icon: FaSeedling,
    title: "Practical Solutions",
    text: "Approaches suited to local conditions and resources.",
  },
  {
    icon: FaHandshake,
    title: "Quality & Reliability",
    text: "Dependable products and responsible service delivery.",
  },
  {
    icon: FaLeaf,
    title: "Sustainability",
    text: "Efficient use of water, nutrients, energy and natural resources.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    text: "Appropriate technologies and new opportunities.",
  },
  {
    icon: FaChartLine,
    title: "Entrepreneurship",
    text: "Viable agricultural and horticultural enterprises.",
  },
];

const audiences = [
  {
    title: "Farmers & FPOs",
    text: "Practical guidance, training and resources for farmers and producer organisations.",
    image: "photo-1500382017468-9049fed747ef",
    icon: FaTractor,
  },
  {
    title: "Agribusiness & Startups",
    text: "Support for agri businesses, startups and entrepreneurs building new opportunities.",
    image: "photo-1464226184884-fa280b87c399",
    icon: FaChartLine,
  },
  {
    title: "Urban Growers",
    text: "Solutions for gardeners, urban growers and people building green spaces.",
    image: "photo-1416879595882-3373a0480b5b",
    icon: FaCity,
  },
  {
    title: "Institutions & Organizations",
    text: "Collaborative programmes for institutions, CSR initiatives and community partners.",
    image: "photo-1472396961693-142e6e269027",
    icon: FaBuilding,
  },
];

const principles = [
  {
    icon: FaBookOpen,
    title: "Knowledge",
    text: "Scientific knowledge made useful.",
  },
  {
    icon: FaUsers,
    title: "Practical Skills",
    text: "Applied learning and hands-on experience.",
  },
  {
    icon: FaHandshake,
    title: "Quality Resources",
    text: "Reliable materials and solutions.",
  },
  {
    icon: FaLeaf,
    title: "Sustainability",
    text: "Responsible use of resources.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    text: "Appropriate technology and new ideas.",
  },
];

export default function About() {
  return (
    <main className="deccan-about">

      {/* HERO SECTION */}
      <section className="da-hero">
        <img
          className="da-hero-image"
          src={photo("photo-1497250681960-ef046c08a56e", 1800)}
          alt="Lush green plants in a greenhouse"
        />

        <div className="da-hero-overlay" />

        <div className="da-hero-content">
          <span className="da-eyebrow">
            ABOUT DECCAN GREENS
          </span>

          <h1>
            Growing Knowledge.
            <br />
            <em>Creating Opportunities.</em>
          </h1>

          <p className="da-hero-lead">
            An integrated agricultural knowledge and solutions company focused on real challenges in rural and urban agriculture.
          </p>

          <p className="da-hero-description">
            At Deccan Greens, we combine practical knowledge, hands-on training, quality materials and innovative digital resources to support farmers, agri-entrepreneurs, institutions and home growers in building a more sustainable future.
          </p>

          <div className="da-hero-actions">
            <a className="da-primary-btn" href="#story">
              Our Journey <FaArrowRight />
            </a>
            
          </div>

        </div>
    
      </section>

      {/* OUR STORY */}
      <section className="da-story da-container" id="story">
        <div className="da-story-image">
          <img
            src={OurStory}
            alt="A young green plant growing in rich soil"
            loading="lazy"
          />

          <div className="da-image-caption">
            Practical<br/> 
            Solutions for
            <br />
            a Greener
            <br />
            Tomorrow
          </div>
        </div>

        <div className="da-story-copy">
          <span className="da-eyebrow">OUR STORY</span>

          <h2>
            From Real Challenges
            <br />
            <em style={{color: "#4f823b"}}>to Real Solutions</em>
          </h2>

          <p>
            Deccan Greens was founded with a simple belief agricultural knowledge should be practical, accessible and useful for everyone. We started with a focus on solving real challenges faced by farmers, urban growers and agri-entrepreneurs through consultancy, training, quality materials and digital resources.
          </p>


          <div className="da-story-highlight">
            <span><FaSeedling /></span>
            <p>
              Today, we continue to work towards creating opportunities, promoting sustainable practices and supporting individuals and organizations in their agricultural journey.
            </p>
          </div>
        </div>
      </section>

      {/* VISION, MISSION & PHILOSOPHY */}
      <section className="da-pillars da-container">
        <article className="da-pillar vision">
          <span><FaBullseye /></span>
          <h3>Our Vision</h3>
          <p>
            To become a trusted and innovative agricultural knowledge and solutions partner, enabling productive. sustainable and technology-driven growth across rural and urban communities.
          </p>
        </article>

        <article className="da-pillar mission">
          <span><FaCompass /></span>
          <h3>Our Mission</h3>
          <p>
            To empower growers and agri-entrepreneurs through practical guidance, skill development. quality resources and accessible technologies that support informed decisions and sustainable progress.
          </p>
        </article>

        <article className="da-pillar philosophy">
          <span><FaLeaf /></span>
          <h3>Our Philosophy</h3>
          <b>Knowledge Should Lead to Action</b>
          <p>
            Agricultural information becomes valuable when it solves a problem, improves a practice or creates an opportunity. We connect knowledge with real-world application and help people move from ideas to practical action.
          </p>
        </article>
      </section>

      {/* CORE VALUES */}
      <section className="da-values da-container">
        <div className="da-section-title">
          <span className="da-eyebrow">OUR CORE VALUES</span>
          <h2>Principles That Guide Us</h2>
        </div>

        <div className="da-values-grid">
          {values.map(({ icon: Icon, title, text }) => (
            <article className="da-value" key={title}>
              <span><Icon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="da-audience da-container">
        <div className="da-audience-feature">
          <img
            src={photo("photo-1500382017468-9049fed747ef", 1000)}
            alt="Green crops growing in an agricultural field"
            loading="lazy"
          />

          <div className="da-audience-feature-shade" />

          <div className="da-audience-feature-copy">
            <h2>Different<br/> People. Shared <br/>Growth.</h2>
            <p>
              We work with a wide range of individuals and organizations who are passionate about agriculture, horticulture and sustainable growth.
            </p>
          </div>
        </div>

        <div className="da-audience-content">
          <div className="da-section-title">
            <span className="da-eyebrow">WHO WE SERVE</span>
            <h2>Tailored Support for <br/>Different Needs</h2>
          </div>

          <div className="da-audience-grid">
            {audiences.map(({ icon: Icon, ...item }) => (
              <article className="da-audience-card" key={item.title}>
                <div className="da-audience-image">
                  <img
                    src={photo(item.image, 600)}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>

                <div className="da-audience-card-copy">
                  <span className="da-audience-icon">
                    <Icon />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="da-practice">
        <div className="da-container">
          <div className="da-section-title">
            <span className="da-eyebrow">OUR APPROACH</span>
            <h2>Knowledge to Practice</h2>
            <p>
              We combine consultancy, training, quality materials and digital resources<br/> to create practical and sustainable solutions for real-world challenges.
            </p>
          </div>

          <div className="da-practice-grid">
            {principles.map(({ icon: Icon, title, text }) => (
              <article className="da-practice-item" key={title}>
                <span><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — MATCHING HOMEPAGE CTA */}
      <section className="da-cta" id="contact">
        <div className="da-cta-mark">
          <FaSeedling />
        </div>
      
        <div className="da-cta-copy">
          <span className="cu-eyebrow">
            READY TO START?
          </span>
      
          <h2>
            Let's Create a Greener Tomorrow.
          </h2>
          <p>Whether you need expert advice, training, quality products or want to collaborate on a project, we are just a message away.</p>
      
          <div className="da-cta-actions">
            <a className="da-cta-button" href="#enquiry">
              Book a Consultation <span>→</span>
            </a>
      
            <a className="da-cta-outline" href="/#contact" target="_blank" rel="noopener noreferrer">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
