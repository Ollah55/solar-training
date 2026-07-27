import "./CTA.css";
import { FaWhatsapp, FaArrowRight, FaBolt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="cta">

      <div className="cta-overlay"></div>

      <div className="container">

        <div className="cta-content">

          <span className="section-tag">
            🚀 LIMITED SLOTS AVAILABLE
          </span>

          <h2>
            Become a Certified
            <span> Solar Installer</span>
          </h2>

          <p>
            Join the next cohort of the BuiltRight Solar Installation Academy
            and gain practical skills that can open doors to employment,
            freelancing, and entrepreneurship in Nigeria's rapidly growing
            renewable energy sector.
          </p>

          <div className="cta-highlights">

            <div>
              <FaBolt />
              <span>1 Month Intensive Training</span>
            </div>

            <div>
              <FaBolt />
              <span>Hands-on Practical Sessions</span>
            </div>

            <div>
              <FaBolt />
              <span>Professional Certification</span>
            </div>

          </div>

          <div className="cta-buttons">

            <a
                href="https://wa.me/2349134991239?text=Hi%20BuiltRight%20Energy,%20I%20want%20to%20register%20for%20the%20Solar%20Installation%20Academy."
                target="_blank"
                rel="noreferrer"
                className="cta-primary"
                onClick={() => {

                    // Meta Pixel
                    if (typeof window !== "undefined" && window.fbq) {
                    window.fbq("track", "Lead");
                    }


                }}
                >
                <FaWhatsapp />
                <span>Register Now</span>
                </a>

            <a
              href="#hero"
              className="cta-secondary"
            >
              Learn More
              <FaArrowRight />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}