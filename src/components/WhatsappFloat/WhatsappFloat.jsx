import "./WhatsappFloat.css";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    // Meta Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact");
    }

  };

  return (
    <a
      href="https://wa.me/2349134991239?text=Hello%20BuiltRight%20Energy,%20I%20would%20like%20to%20register%20for%20the%20Solar%20Installation%20Academy."
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      onClick={handleWhatsAppClick}
    >
      <div className="whatsapp-pulse"></div>

      <div className="whatsapp-content">

        <div className="whatsapp-icon">
          <FaWhatsapp />
        </div>

        <div className="whatsapp-text">

          <span className="small-text">
            Need Help?
          </span>

          <span className="big-text">
            Chat with Admissions
          </span>

        </div>

      </div>

    </a>
  );
}