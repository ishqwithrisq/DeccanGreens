
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppFloat.css";

export default function WhatsAppFloat() {
  const phoneNumber = "919168689163";

  const message = encodeURIComponent(
    "Hello Deccan Greens! I would like to know more about your services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Deccan Greens on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
