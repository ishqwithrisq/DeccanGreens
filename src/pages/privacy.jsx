
import React from "react";
import { Link } from "react-router-dom";
import {
  FiShield,
  FiLock,
  FiUser,
  FiDatabase,
  FiGlobe,
  FiMail,
  FiArrowLeft,
} from "react-icons/fi";
import "./privacy.css";

export default function PrivacyPolicy() {
  const lastUpdated = "November 2026";

  return (
    <main className="privacy-page">

      {/* Hero */}
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          <div className="privacy-icon">
            <FiShield />
          </div>

          <span className="privacy-label">LEGAL & PRIVACY</span>

          <h1>
            Privacy <span>Policy</span>
          </h1>

          <p>
            Your privacy matters to us. Learn how Deccan Green
            collects, uses, protects, and manages your personal
            information when you interact with our website and services.
          </p>

          <div className="privacy-updated">
            Last Updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="privacy-container">

        {/* Introduction */}
        <div className="privacy-intro">
          <h2>Your Trust, Our Responsibility</h2>

          <p>
            Deccan Green respects your privacy and is committed
            to protecting your personal information. This Privacy
            Policy explains how information may be collected,
            processed, stored, and used when you visit our website,
            contact us, enroll in training programs, purchase
            products, or use our digital resources.
          </p>

          <p>
            By accessing or using our website, you acknowledge
            that you have read this Privacy Policy.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="privacy-sections">

          <article className="privacy-section">
            <div className="privacy-section-icon">
              <FiUser />
            </div>

            <div>
              <h3>1. Information We Collect</h3>

              <p>
                We may collect the following categories of
                information depending on how you interact with
                our website and services:
              </p>

              <ul>
                <li>
                  <strong>Personal Information:</strong> Name,
                  email address, phone number, and contact details
                  provided through forms or inquiries.
                </li>

                <li>
                  <strong>Enrollment Information:</strong> Details
                  submitted when registering for courses,
                  workshops, training programs, or events.
                </li>

                <li>
                  <strong>Order Information:</strong> Delivery
                  address, billing details, and product-related
                  information when purchasing products or digital
                  resources.
                </li>

                <li>
                  <strong>Technical Information:</strong> Browser
                  type, device information, IP address, and
                  website usage data where collected.
                </li>

                <li>
                  <strong>Communication Information:</strong>
                  Messages, inquiries, feedback, and information
                  shared through email, telephone, or website forms.
                </li>
              </ul>
            </div>
          </article>

          <article className="privacy-section">
            <div className="privacy-section-icon">
              <FiDatabase />
            </div>

            <div>
              <h3>2. How We Use Your Information</h3>

              <p>
                Information collected may be used for the
                following purposes:
              </p>

              <ul>
                <li>Responding to inquiries and customer requests.</li>
                <li>Providing agricultural consultancy services.</li>
                <li>Managing course registrations and training programs.</li>
                <li>Processing product orders and deliveries.</li>
                <li>Providing access to digital resources and services.</li>
                <li>Sending important service-related communications.</li>
                <li>Improving website functionality and user experience.</li>
                <li>Maintaining records and fulfilling legal obligations.</li>
                <li>Preventing fraud, misuse, and unauthorized access.</li>
              </ul>
            </div>
          </article>

          <article className="privacy-section">
            <div className="privacy-section-icon">
              <FiGlobe />
            </div>

            <div>
              <h3>3. Cookies and Website Analytics</h3>

              <p>
                Our website may use cookies and similar technologies
                to improve functionality, understand visitor behavior,
                remember preferences, and enhance user experience.
              </p>

              <p>
                You may manage or disable cookies through your
                browser settings. Disabling certain cookies may
                affect the functionality of some website features.
              </p>
            </div>
          </article>

          <article className="privacy-section">
            <div className="privacy-section-icon">
              <FiLock />
            </div>

            <div>
              <h3>4. Data Security</h3>

              <p>
                Deccan Green takes reasonable measures to protect
                personal information against unauthorized access,
                disclosure, alteration, misuse, or destruction.
              </p>

              <p>
                However, no method of electronic transmission
                or storage is completely secure. We cannot guarantee
                absolute security of information transmitted
                through the internet.
              </p>
            </div>
          </article>

          <article className="privacy-section">
            <div className="privacy-section-icon">
              <FiDatabase />
            </div>

            <div>
              <h3>5. Sharing of Information</h3>

              <p>
                We do not sell personal information to third parties.
                Information may be shared when reasonably necessary
                for the following purposes:
              </p>

              <ul>
                <li>
                  With service providers supporting website hosting,
                  payment processing, communication, or delivery.
                </li>

                <li>
                  With delivery partners for fulfilling product orders.
                </li>

                <li>
                  When required by applicable laws, regulations,
                  legal proceedings, or government authorities.
                </li>

                <li>
                  To protect the rights, safety, property,
                  or legitimate interests of Deccan Green or users.
                </li>
              </ul>
            </div>
          </article>

          <article className="privacy-section">
            <div className="privacy-section-icon">
              <FiGlobe />
            </div>

            <div>
              <h3>6. Third-Party Services and Links</h3>

              <p>
                Our website may contain links to external websites
                or use third-party services such as payment gateways,
                social media platforms, analytics tools, or
                communication services.
              </p>

              <p>
                These third parties may operate under their own
                privacy policies. Deccan Green is not responsible
                for the privacy practices or content of external
                websites and services.
              </p>
            </div>
          </article>

          <article className="privacy-section">
            <div className="privacy-section-icon">
              <FiLock />
            </div>

            <div>
              <h3>7. Data Retention</h3>

              <p>
                Personal information may be retained for as long
                as necessary to provide services, maintain records,
                fulfill contractual obligations, resolve disputes,
                and comply with applicable legal requirements.
              </p>

              <p>
                When information is no longer required, it may
                be securely deleted or anonymized, subject to
                applicable retention requirements.
              </p>
            </div>
          </article>

          <article className="privacy-section">
            <div className="privacy-section-icon">
              <FiUser />
            </div>

            <div>
              <h3>8. Your Privacy Rights</h3>

              <p>
                Subject to applicable laws, you may request:
              </p>

              <ul>
                <li>Access to personal information held about you.</li>
                <li>Correction of inaccurate or incomplete information.</li>
                <li>Deletion of personal information where applicable.</li>
                <li>Withdrawal of consent where processing relies on consent.</li>
                <li>Information regarding how your data is processed.</li>
              </ul>

              <p>
                Requests may be submitted through the contact
                information provided below.
              </p>
            </div>
          </article>

          <article className="privacy-section">
            <div className="privacy-section-icon">
              <FiShield />
            </div>

            <div>
              <h3>9. Children's Privacy</h3>

              <p>
                Our website is not specifically directed toward
                children for independent commercial transactions.
                Where services involve minors, personal information
                should be provided or authorized by a parent,
                guardian, or legally appropriate representative,
                where required by applicable law.
              </p>
            </div>
          </article>

          <article className="privacy-section">
            <div className="privacy-section-icon">
              <FiLock />
            </div>

            <div>
              <h3>10. Changes to This Privacy Policy</h3>

              <p>
                Deccan Green may update this Privacy Policy
                periodically to reflect changes in our services,
                operational practices, or applicable legal
                requirements.
              </p>

              <p>
                Updates will be published on this page with
                a revised last-updated date.
              </p>
            </div>
          </article>

        </div>

        {/* Contact Card */}
        <div className="privacy-contact-card">
          <div className="privacy-contact-icon">
            <FiMail />
          </div>

          <div className="privacy-contact-content">
            <span>HAVE A PRIVACY QUESTION?</span>
            <h2>We're Here to Help.</h2>

            <p>
              If you have questions, concerns, or requests
              regarding your personal information, contact us.
            </p>

            <a href="mailto:contact@deccangreen.com">
              contact@deccangreen.com
            </a>

            <p className="privacy-contact-phone">
              +91 91668 89163
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="privacy-back">
          <Link to="/">
            <FiArrowLeft />
            Back to Home
          </Link>
        </div>

      </section>
    </main>
  );
}
