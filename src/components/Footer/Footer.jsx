import "./Footer.css";

import logo from "../../assets/images/logo.png";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Company */}

          <div className="footer-about">

            <img
              src={logo}
              alt="BuiltRight Energy"
              className="footer-logo"
            />

            <p>
              BuiltRight Solar Installation Academy equips aspiring solar
              professionals with practical skills, real-world experience and
              industry knowledge for successful careers in renewable energy.
            </p>

            <div className="footer-social">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3>Quick Links</h3>

            <ul>

              <li><a href="#hero">Home</a></li>
              <li><a href="#curriculum">Curriculum</a></li>
              <li><a href="#faq">FAQs</a></li>
              

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3>Contact</h3>

            <ul className="footer-contact">

              <li>
                <FaWhatsapp />
                +234 913 499 1239
              </li>

              <li>
                <FaPhoneAlt />
                +234 904 999 1595
              </li>

              <li>
                <FaEnvelope />
                info@builtrightltd.com
              </li>

              <li>
                <FaMapMarkerAlt />
                Lagos, Nigeria
              </li>

            </ul>

          </div>

          {/* CTA */}

          <div>

            <h3>Ready to Start?</h3>

            <p>
              Join the next batch of the BuiltRight Solar Installation Academy
              and build a rewarding career in renewable energy.
            </p>

            <a
              href="https://wa.me/2349134991239?text=Hi%20BuiltRight,%20I%20want%20to%20register%20for%20the%20Solar%20Installation%20Academy."
              target="_blank"
              rel="noreferrer"
              className="footer-btn"
            >
              Register Now
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} BuiltRight Energy. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by BuiltRight Energy.
          </p>

        </div>

      </div>

    </footer>
  );
}