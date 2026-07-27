import "./FAQ.css";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Do I need previous solar experience?",
    answer:
      "No. This training is beginner-friendly and suitable for anyone willing to learn.",
  },
  {
    question: "How long is the training?",
    answer:
      "The Solar Installation Academy runs for one month, combining classroom learning with intensive practical sessions.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Participants who successfully complete the programme will receive a BuiltRight Solar Installation Academy Certificate.",
  },
  {
    question: "Is the training practical?",
    answer:
      "Absolutely. You'll work with real solar panels, batteries, inverters, electrical wiring and complete practical installations.",
  },
  {
    question: "Who can attend?",
    answer:
      "Graduates, NYSC members, electricians, engineers, technicians, entrepreneurs, women in STEM and anyone interested in building a career in renewable energy.",
  },
  {
    question: "How do I register?",
    answer:
      "Simply click any Register Now button on this page to chat with our admissions team via WhatsApp.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq">

      <div className="container">

        <span className="section-tag">
          FREQUENTLY ASKED QUESTIONS
        </span>

        <h2>
          Have
          <span> Questions?</span>
        </h2>

        <p className="section-intro">
          Here are answers to some of the most common questions about the
          BuiltRight Solar Installation Academy.
        </p>

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggle(index)}
              >

                <span>{faq.question}</span>

                <FaChevronDown />

              </button>

              <div className="faq-answer">

                <p>{faq.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}