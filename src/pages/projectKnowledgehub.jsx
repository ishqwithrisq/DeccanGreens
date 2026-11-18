import React from "react";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiClipboard,
  FiDownload,
  FiFileText,
  FiGlobe,
  FiHome,
  FiMessageCircle,
  FiUsers,
  FiCalendar,
  FiLayers,
  FiTarget,
} from "react-icons/fi";
import { FaSeedling } from "react-icons/fa";

import "./projectKnowledgehub.css";
import pkHero from "../assets/images/pk_hero.png";

const image = (id, width = 850) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const collaborationAreas = [
  {
    title: "Home & Terrace Gardens",
    description:
      "Community gardens, kitchen gardens and balcony gardening solutions.",
    image: "photo-1416879595882-3373a0480b5b",
    icon: <FiHome />,
    tone: "mint",
  },
  {
    title: "Commercial Projects",
    description:
      "Greenhouses, hydroponics and nursery cultivation projects.",
    image: "photo-1500382017468-9049fed747ef",
    icon: <FiBriefcase />,
    tone: "gold",
  },
  {
    title: "Institutional Projects",
    description:
      "Projects for schools, colleges, offices and organizations.",
    image: "photo-1497366754035-f200968a6e72",
    icon: <FiUsers />,
    tone: "blue",
  },
  {
    title: "CSR Initiatives",
    description:
      "Sustainable agriculture and horticulture programmes for communities.",
    image: "photo-1472396961693-142e6e269027",
    icon: <FiGlobe />,
    tone: "lavender",
  },
];

const featuredProjects = [
  {
    label: "Home Gardening",
    title: "Urban Terrace Gardens",
    description:
      "A complete terrace garden solution for productive and beautiful spaces.",
    image: "photo-1492496913980-501348b61469",
    icon: <FiHome />,
  },
  {
    label: "Hydroponic Farming",
    title: "Hydroponic Farming Unit",
    description:
      "A practical demonstration of modern soilless cultivation.",
    image: "photo-1585320806297-9794b3e4eeae",
    icon: <FaSeedling />,
  },
  {
    label: "Institutional Project",
    title: "School Garden Project",
    description:
      "Hands-on learning support for a school growing project.",
    image: "photo-1500382017468-9049fed747ef",
    icon: <FiUsers />,
  },
];

const articles = [
  {
    category: "Hydroponics",
    title: "Getting Started with Hydroponics",
    description:
      "A beginner-friendly introduction to soilless cultivation.",
    image: "photo-1585320806297-9794b3e4eeae",
    icon: <FiLayers />,
  },
  {
    category: "Home Gardening",
    title: "Kitchen Gardens at Home",
    description:
      "Simple ideas for growing fresh food in everyday spaces.",
    image: "photo-1416879595882-3373a0480b5b",
    icon: <FiHome />,
  },
  {
    category: "Growing Tips",
    title: "Microgreens and Aromatic Plants",
    description:
      "Explore useful plants and practical growing methods.",
    image: "photo-1492496913980-501348b61469",
    icon: <FaSeedling />,
  },
  {
    category: "Sustainability",
    title: "Sustainable Farming for the Future",
    description:
      "Understand practices that support responsible growing.",
    image: "photo-1464226184884-fa280b87c399",
    icon: <FiGlobe />,
  },
];

const resources = [
  {
    title: "Project Report Templates",
    description: "Planning formats and project documentation.",
    icon: <FiFileText />,
    tone: "mint",
  },
  {
    title: "Hydroponics Setup Guide",
    description: "A practical resource for soilless cultivation.",
    icon: <FiBookOpen />,
    tone: "gold",
  },
  {
    title: "Crop Calendar",
    description: "Organize crop activities and seasonal planning.",
    icon: <FiCalendar />,
    tone: "blue",
  },
  {
    title: "Plant Care Checklist",
    description: "Useful reminders for routine plant care.",
    icon: <FiCheckCircle />,
    tone: "lavender",
  },
  {
    title: "Microgreens Guide",
    description: "Production basics and growing guidance.",
    icon: <FiClipboard />,
    tone: "mint",
  },
];

const highlights = [
  {
    icon: <FiTarget />,
    title: "Real Projects",
    subtitle: "& Case Studies",
    tone: "mint",
  },
  {
    icon: <FiBookOpen />,
    title: "Expert Articles",
    subtitle: "& Insights",
    tone: "gold",
  },
  {
    icon: <FiFileText />,
    title: "Practical Learning",
    subtitle: "Resources",
    tone: "blue",
  },
  {
    icon: <FiUsers />,
    title: "Community",
    subtitle: "Knowledge Sharing",
    tone: "lavender",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  action = "View All Projects",
  href = "#contact",
}) {
  return (
    <div className="pk-section-heading">
      <div className="pk-section-heading-copy">
        <span className="pk-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>

      <a className="pk-view-all" href={href}>
        {action}
        <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}

function HighlightStrip() {
  return (
    <div className="pk-highlight-strip" aria-label="Knowledge hub highlights">
      {highlights.map((item) => (
        <div className="pk-highlight" key={item.title}>
          <span className={`pk-highlight-icon ${item.tone}`}>
            {item.icon}
          </span>
          <b>
            {item.title}
            <small>{item.subtitle}</small>
          </b>
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ item }) {
  return (
    <article className="pk-card">
      <div className="pk-card-image">
        <img src={image(item.image, 750)} alt={item.title} loading="lazy" />
        <span className={`pk-card-icon ${item.tone}`}>{item.icon}</span>
      </div>

      <div className="pk-card-body">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <a href="#contact" className="pk-card-link">
          Explore Project <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function FeaturedProjectCard({ item }) {
  return (
    <article className="pk-featured-card">
      <div className="pk-featured-image">
        <img src={image(item.image, 800)} alt={item.title} loading="lazy" />
        <span>{item.label}</span>
      </div>

      <div className="pk-featured-copy">
        <span className="pk-featured-icon">{item.icon}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <a href="#contact">
          Read Case Study <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function ArticleCard({ item }) {
  return (
    <article className="pk-article-card">
      <div className="pk-article-image">
        <img src={image(item.image, 700)} alt={item.title} loading="lazy" />

        <span className="pk-article-icon">
          {item.icon}
        </span>
      </div>

      <div className="pk-article-copy">
        <span className="pk-article-category">{item.category}</span>

        <h3>{item.title}</h3>

        <p>{item.description}</p>

        <a href="#contact">
          Read Article <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function ResourceCard({ item }) {
  return (
    <article className="pk-resource-card">
      <span className={`pk-resource-icon ${item.tone}`}>
        {item.icon}
      </span>

      <h3>{item.title}</h3>
      <p>{item.description}</p>

      <a href="#contact">
        Download <FiDownload aria-hidden="true" />
      </a>
    </article>
  );
}

export default function ProjectKnowledgehub() {
  return (
    <main className="pk-page">

      {/* HERO SECTION */}
      <section className="pk-hero">
        <img
          className="pk-hero-image"
          src={pkHero}
          alt=""
          aria-hidden="true"
        />

        <div className="pk-hero-overlay" />

        <div className="pk-hero-copy">
          <span className="pk-eyebrow">
            PROJECTS & KNOWLEDGE HUB
          </span>

          <h1>
            Real Projects.
            <br />
            Practical Knowledge.
            <br />
            <em>Greater Impact.</em>
          </h1>

          <p>
            Explore our real-world projects, success stories and practical
            resources. Get useful information, insights and educational
            content to support better agricultural decisions.
          </p>

          <div className="pk-hero-actions">
            <a href="#projects" className="pk-btn pk-btn-primary">
              Explore Our Projects
              <FiArrowUpRight aria-hidden="true" />
            </a>

            <a href="#knowledge" className="pk-btn pk-btn-outline">
              <FiBookOpen aria-hidden="true" />
              Read Our Articles
            </a>
          </div>

          <div className="pk-hero-trust">
            <span><FiCheckCircle /> Practical solutions</span>
            <span><FiCheckCircle /> Expert knowledge</span>
            <span><FiCheckCircle /> Sustainable impact</span>
          </div>
        </div>

        <div className="pk-hero-note">
          <span><FaSeedling aria-hidden="true" /></span>
          <b>
            Knowledge in Action
            <br />
            for a Greener Tomorrow
          </b>
        </div>

        <span className="pk-hero-leaves" aria-hidden="true" />
      </section>

      {/* HIGHLIGHTS */}
      <HighlightStrip />

      {/* PROJECTS & PARTNERSHIPS */}
      <section className="pk-section" id="projects">
        <SectionHeading
          eyebrow="OUR PROJECTS"
          title="Building Sustainable Futures Together"
          description="We collaborate with farmers, institutions and organizations to design and implement agricultural and horticultural projects across different scales and locations."
          action="View All Projects"
        />

        <div className="pk-project-grid">
          {collaborationAreas.map((item) => (
            <ProjectCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="pk-featured-section">
        <div className="pk-section">
          <SectionHeading
            eyebrow="FEATURED PROJECTS"
            title="Making Ideas Grow in Real Life"
            description="A closer look at practical growing spaces and projects designed to create lasting value."
            action="View All Projects"
          />

          <div className="pk-featured-grid">
            {featuredProjects.map((item) => (
              <FeaturedProjectCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      {/* KNOWLEDGE HUB */}
      <section className="pk-section pk-knowledge" id="knowledge">
        <SectionHeading
          eyebrow="KNOWLEDGE HUB"
          title="Articles, Guides & Insights"
          description="Learn from expert articles, practical guides and real-world experiences to improve your agricultural knowledge and grow better."
          action="View All Articles"
          href="#knowledge"
        />

        <div className="pk-article-grid">
          {articles.map((item) => (
            <ArticleCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      {/* DOWNLOADABLE RESOURCES */}
      <section className="pk-resources-section">
        <div className="pk-section">
          <SectionHeading
            eyebrow="DOWNLOADABLE RESOURCES"
            title="Download Useful Resources"
            description="Access expert reports, templates, guides and other resources to help you plan, implement your projects and improve your practices."
            action="View All Resources"
            href="#resources"
          />

          <div className="pk-resource-grid" id="resources">
            {resources.map((item) => (
              <ResourceCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="pk-bottom-cta" id="contact">
        <div className="pk-cta-mark">
          <FaSeedling aria-hidden="true" />
        </div>

        <div className="pk-cta-copy">
          <span className="pk-eyebrow">LET'S WORK TOGETHER</span>

          <h2>Share Your Project or Ask a Question</h2>

          <p>
            Connect with Deccan Greens for project discussions, collaboration
            opportunities and practical agricultural knowledge.
          </p>
        </div>

        <div className="pk-cta-actions">
          <a href="/contact" className="pk-cta-light">
            Book a Consultation
            <FiArrowUpRight aria-hidden="true" />
          </a>

          <a
            href="https://wa.me/919168689163"
            target="_blank"
            rel="noreferrer"
            className="pk-cta-outline"
          >
            <FiMessageCircle aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>

        <img
          src={image("photo-1501004318641-b39e6451bec6", 1000)}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      </section>

    </main>
  );
}