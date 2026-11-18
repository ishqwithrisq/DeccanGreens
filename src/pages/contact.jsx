import React, { useState } from "react";
import "./contact.css";
import { FaSeedling } from "react-icons/fa";
import hero from "../assets/images/contact.jpeg"
import {
  FiPhone,
  FiMessageCircle,
  FiMail,
  FiMapPin,
  FiClock,
  FiBookOpen,
  FiUsers,
  FiFileText,
  FiArrowUpRight,
  FiArrowRight,
  FiPlus,
  FiMinus,
  FiHeadphones,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";

const WHATSAPP_NUMBER = "919168689163";
const EMAIL_ADDRESS = "contact@deccangreen.com";

const LOCATION_URL =
  "https://www.google.com/maps/search/?api=1&query=Near+Monika+Hotel+Nanekarwadi+Chakan+Khed+Pune+Maharashtra+410501";

const contactCards = [
  {
    icon: FiPhone,
    title: "Call Us",
    lines: ["+91 91686 89163", "10 AM to 6 PM", "Monday to Sunday"],
    href: "tel:+919168689163",
    action: "Call Now",
  },
  {
    icon: FiMessageCircle,
    title: "WhatsApp",
    lines: ["+91 91686 89163", "Chat with our team", "Get quick assistance"],
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    action: "Chat Now",
    external: true,
  },
  {
    icon: FiMail,
    title: "Email Us",
    lines: [EMAIL_ADDRESS, "We usually respond", "within 24 hours"],
    href: `mailto:${EMAIL_ADDRESS}`,
    action: "Send Email",
  },
  {
    icon: FiMapPin,
    title: "Our Location",
    lines: [
      "Near Monika Hotel, Nanekarwadi",
      "Chakan, Khed, Pune",
      "Maharashtra 410501",
    ],
    href: LOCATION_URL,
    action: "Get Directions",
    external: true,
  },
];

const services = [
  { icon: FiCheckCircle, title: "Consultancy & Project Support" },
  { icon: FiUsers, title: "Training & Capacity Building" },
  { icon: FiGlobe, title: "Plants & Products Information" },
  { icon: FiBookOpen, title: "E-Books & Digital Resources" },
  { icon: FiFileText, title: "Partnerships & Collaborations" },
  { icon: FiHeadphones, title: "General Enquiries" },
];

const faqs = [
  {
    question: "How can I get consultancy for my project?",
    answer:
      "Submit your requirements through the enquiry form or contact us on WhatsApp. Our team will understand your project needs and guide you through the next steps.",
  },
  {
    question: "How do I enrol for a training program?",
    answer:
      "Select Training in the enquiry form and mention the subject you are interested in. We will share the available program details, format and registration information.",
  },
  {
    question: "How can I buy plants or farm inputs?",
    answer:
      "Tell us which products or materials you need. Our team can help you check availability, specifications and suitable options.",
  },
  {
    question: "Do you provide project support or partnerships?",
    answer:
      "Yes. We support suitable projects and welcome collaborations. Share your idea through the enquiry form and our team will get in touch to discuss the possibilities.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="cu-section-heading">
      <span className="cu-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    interest: "",
    requirement: "",
    consent: false,
  });
  const [openFaq, setOpenFaq] = useState(0);
  const [formMessage, setFormMessage] = useState("");

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Deccan Greens Enquiry - ${formData.interest}`
    );
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
        `Mobile Number: ${formData.mobile}\n` +
        `Email Address: ${formData.email}\n` +
        `Enquiry Type: ${formData.interest}\n\n` +
        `Requirement / Message:\n${formData.requirement}\n\n` +
        `Consent: ${formData.consent ? "Yes" : "No"}`
    );

    setFormMessage("Your email app will open with your enquiry details.");
    window.location.href =
      `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="cu-page">
      {/* HERO */}
      <section className="cu-hero">
             <img
          className="cu-hero-image"
          src={hero}
          alt="Agriculture"
        />
        <div className="cu-hero-overlay" />

        <div className="cu-hero-copy">
          <span className="cu-eyebrow">CONTACT US</span>
          <h1>
            Let’s Grow
            <br />
            <em>Together.</em>
          </h1>
          <p className="cu-hero-description">
            Have a question, project idea or need expert guidance? We are here
            to help you with practical solutions for agriculture, horticulture
            and sustainable growing.
          </p>

          <div className="cu-hero-points">
            <div><FiClock /><b>Quick Response</b></div>
            <div><FiCheckCircle /><b>Expert Guidance</b></div>
            <div><FaSeedling /><b>Practical Solutions</b></div>
          </div>

          <a href="#enquiry" className="cu-hero-button">
            Get in Touch <FiArrowUpRight />
          </a>
        </div>

        <div className="cu-hero-note">
          <FaSeedling />
          <b>Connect Today<br />for a Greener<br />Tomorrow</b>
        </div>
        <span className="cu-hero-decoration" aria-hidden="true">❧</span>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="cu-contact-cards" aria-label="Contact information">
        {contactCards.map((card) => {
          const Icon = card.icon;
          return (
            <article className="cu-contact-card" key={card.title}>
              <span className="cu-contact-icon"><Icon /></span>
              <div className="cu-contact-card-content">
                <h3>{card.title}</h3>
                <div className="cu-contact-lines">
                  {card.lines.map((line) => <span key={line}>{line}</span>)}
                </div>
                <a
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                >
                  {card.action}<FiArrowUpRight />
                </a>
              </div>
            </article>
          );
        })}
      </section>

      {/* ENQUIRY */}
      <section className="cu-enquiry-section" id="enquiry">
        {/* Left image banner — retained from the original layout */}
        <div className="cu-enquiry-banner">
          <img
            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1100&q=85"
            alt="Healthy plants growing in a greenhouse"
            loading="lazy"
          />
          <div className="cu-enquiry-overlay" />
          <div className="cu-enquiry-banner-copy">
            <span className="cu-eyebrow">SEND US A MESSAGE</span>
            <h2>Enquire About<br />Our Services</h2>
            <p>Fill out the form and our team will get back to you with the right information and guidance for your requirements.</p>
            <ul>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.title}>
                    <span><Icon /></span>
                    {service.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Form panel — only its styling is updated to match the reference */}
        <div className="cu-form-panel">
          <div className="cu-form-heading">
            <h2>Send an Enquiry</h2>
            <p>
              Share your details and requirements. Our team will get back to
              you soon.
            </p>
          </div>

          <form className="cu-form" onSubmit={handleSubmit}>
            <div className="cu-form-grid">
              <div className="cu-form-field">
                <label htmlFor="cu-full-name">
                  Full Name <span className="cu-required">*</span>
                </label>
                <input
                  id="cu-full-name"
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={updateField}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="cu-form-field">
                <label htmlFor="cu-mobile">
                  Mobile Number <span className="cu-required">*</span>
                </label>
                <input
                  id="cu-mobile"
                  type="tel"
                  name="mobile"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.mobile}
                  onChange={updateField}
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[+]?[0-9 ()-]{10,16}"
                  required
                />
              </div>

              <div className="cu-form-field">
                <label htmlFor="cu-email">
                  Email Address <span className="cu-required">*</span>
                </label>
                <input
                  id="cu-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={updateField}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="cu-form-field">
                <label htmlFor="cu-interest">
                  Enquiry Type <span className="cu-required">*</span>
                </label>
                <select
                  id="cu-interest"
                  name="interest"
                  value={formData.interest}
                  onChange={updateField}
                  required
                >
                  <option value="">Select enquiry type</option>
                  <option value="Consultancy">Consultancy</option>
                  <option value="Training">Training</option>
                  <option value="Gardening">Gardening</option>
                  <option value="Products">Products</option>
                  <option value="Digital Resources">Digital Resources</option>
                  <option value="Partnerships">Partnerships</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              <div className="cu-form-field cu-form-field-full">
                <label htmlFor="cu-requirement">
                  Requirement / Message <span className="cu-required">*</span>
                </label>
                <textarea
                  id="cu-requirement"
                  name="requirement"
                  rows="4"
                  placeholder="Tell us about your requirement, project or question..."
                  value={formData.requirement}
                  onChange={updateField}
                  required
                />
              </div>

              <label className="cu-consent cu-form-field-full">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={updateField}
                  required
                />
                <span>
                  I agree to be contacted by Deccan Greens regarding my enquiry.
                </span>
              </label>

              <div className="cu-form-field-full">
                <button className="cu-submit-btn" type="submit">
                  Submit Enquiry <FiArrowRight />
                </button>
                {formMessage && (
                  <p className="cu-form-message" role="status">{formMessage}</p>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* LOCATION */}
      <section className="cu-location-section" aria-label="Our location and contact details">
        <div className="cu-map-panel">
          <iframe
            title="Deccan Greens office location map"
            src="https://www.google.com/maps?q=Near+Monika+Hotel,+Nanekarwadi,+Chakan,+Khed,+Pune,+Maharashtra+410501&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            className="cu-map-link"
            href={LOCATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Map <FiArrowUpRight />
          </a>
        </div>

        <div className="cu-office-card">
          <FaSeedling className="cu-office-decoration" aria-hidden="true" />
          <div className="cu-office-heading">
            <span className="cu-office-pin"><FiMapPin /></span>
            <div>
              <h2>Our Office Address</h2>
              <p className="cu-office-address">
                Near Monika Hotel, Nanekarwadi,<br />
                Chakan, Khed, Pune,<br />
                Maharashtra 410501.
              </p>
            </div>
          </div>

          <div className="cu-office-contacts">
            <a href="tel:+919168689163">
              <FiPhone />
              <span><b>Call Us</b><small>+91 91686 89163</small></span>
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`}>
              <FiMail />
              <span><b>Email Us</b><small>{EMAIL_ADDRESS}</small></span>
            </a>
          </div>

          <a
            className="cu-directions-btn"
            href={LOCATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions <FiArrowRight />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="cu-faq-section">
        <div className="cu-faq-heading">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Find quick answers to common questions about our services, training and collaborations."
          />
          <a href="#enquiry" className="cu-faq-contact-link">
            View All FAQs <FiArrowRight />
          </a>
        </div>

        <div className="cu-faq-list">
          {faqs.map((faq, index) => (
            <article
              className={`cu-faq-item ${openFaq === index ? "is-open" : ""}`}
              key={faq.question}
            >
              <button
                type="button"
                aria-expanded={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <span className="cu-faq-question">{faq.question}</span>
                <b>{openFaq === index ? <FiMinus /> : <FiPlus />}</b>
              </button>
              {openFaq === index && <p>{faq.answer}</p>}
            </article>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="dg-cta" id="contact">
        <div className="dg-cta-mark"><FaSeedling /></div>
        <div className="dg-cta-copy">
          <span className="cu-eyebrow">READY TO START?</span>
          <h2>Let's Create a Greener Tomorrow.</h2>
          <p>
            Whether you need expert advice, training, quality products or want
            to collaborate on a project, we are just a message away.
          </p>
          <div className="dg-cta-actions">
            <a className="dg-cta-button" href="#enquiry">
              Book a Consultation <FiArrowRight />
            </a>
            <a
              className="dg-cta-outline"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Our Team <FiMessageCircle />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
