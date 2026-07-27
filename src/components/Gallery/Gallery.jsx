import "./Gallery.css";

import training1 from "../../assets/images/training1.jpg";
import training2 from "../../assets/images/training2.jpg";
import training3 from "../../assets/images/training3.jpg";
import training4 from "../../assets/images/training4.jpg";
import training5 from "../../assets/images/training5.jpg";
import training6 from "../../assets/images/training6.jpg";

const galleryImages = [
  {
    image: training1,
    title: "Practical Solar Installation",
    className: "large",
  },
  {
    image: training2,
    title: "Technical Team",
    className: "medium",
  },
  {
    image: training3,
    title: "Battery Installation",
    className: "tall",
  },
  {
    image: training4,
    title: "Certificate Presentation",
    className: "medium",
  },
  {
    image: training5,
    title: "Classroom Sessions",
    className: "medium",
  },
  {
    image: training6,
    title: "Panel Installation",
    className: "wide",
  },
];

export default function Gallery() {
  return (
    <section className="gallery">

      <div className="container">

        <span className="section-tag">
          LEARNING EXPERIENCE
        </span>

        <h2>
          Learn Through
          <span> Real Practical Sessions</span>
        </h2>

        <p className="section-intro">
          At BuiltRight Solar Installation Academy, learning goes beyond the
          classroom. You'll work with real solar equipment, participate in live
          installations and gain practical experience that prepares you for the
          field.
        </p>

        <div className="gallery-grid">

          {galleryImages.map((item, index) => (

            <div
              key={index}
              className={`gallery-card ${item.className}`}
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div className="gallery-overlay">

                <h3>{item.title}</h3>

              </div>

            </div>

          ))}

        </div>

        <div className="gallery-banner">

          <div>

            <h3>
              Learn by Doing, Not Just Watching.
            </h3>

            <p>
              Every participant works with real solar panels, batteries,
              inverters and installation tools under the supervision of
              experienced instructors.
            </p>

          </div>

          <a
            href="https://wa.me/2349134991239?text=Hi%20BuiltRight%20Energy,%20I%20want%20to%20register%20for%20the%20Solar%20Installation%20Academy."
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