import "./Certification.css";
// import certificateImg from "../../assets/images/certificate.jpg";
import { FaCheckCircle } from "react-icons/fa";

const benefits = [
  "BuiltRight Solar Installation Certificate",
  "Hands-on Practical Experience",
  "Live Installation Project Exposure",
  "Career Guidance & Mentorship",
  "Business Startup Insight",
  "Industry Best Practices",
];

export default function Certification() {
  return (
    <section className="certification">

      <div className="container certification-wrapper">

        

        <div className="certification-content">

          <span className="section-tag">
            CERTIFICATION & CAREER
          </span>

          <h2>
            Graduate With
            <span> Confidence</span>
          </h2>

          <p>
            Complete the one-month programme with practical experience,
            industry knowledge and the confidence to pursue employment,
            freelance opportunities or build your own solar business.
          </p>

          <ul>

            {benefits.map((item, index) => (
              <li key={index}>
                <FaCheckCircle />
                {item}
              </li>
            ))}

          </ul>

          <a
            href="https://wa.me/2349134991239?text=Hi%20BuiltRight%20Energy,%20I%20want%20to%20register%20for%20the%20Solar%20Installation%20Academy."
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Register Now
          </a>

        </div>

      </div>

    </section>
  );
}