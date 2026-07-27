import "./WhoShouldAttend.css";
import {
  FaUserGraduate,
  FaBolt,
  FaHardHat,
  FaCogs,
  FaBriefcase,
  FaFemale,
  FaRocket,
} from "react-icons/fa";

const attendees = [
  {
    icon: <FaUserGraduate />,
    title: "Graduates",
    text: "Acquire practical renewable energy skills that improve your employability."
  },
  {
    icon: <FaBolt />,
    title: "NYSC Members",
    text: "Learn an in-demand technical skill during or after your service year."
  },
  {
    icon: <FaHardHat />,
    title: "Electricians",
    text: "Expand your expertise by becoming a certified solar installation professional."
  },
  {
    icon: <FaCogs />,
    title: "Engineers & Technicians",
    text: "Gain practical field experience in designing and installing solar systems."
  },
  {
    icon: <FaBriefcase />,
    title: "Career Changers",
    text: "Transition into Nigeria's rapidly growing renewable energy industry."
  },
  {
    icon: <FaFemale />,
    title: "Women in STEM",
    text: "Develop practical engineering skills and build a rewarding technical career."
  },
  {
    icon: <FaRocket />,
    title: "Entrepreneurs",
    text: "Start your own solar installation business and build a sustainable income."
  },
];

export default function WhoShouldAttend() {
  return (
    <section className="who-section" id="who">

      <div className="container">

        <span className="section-tag">
          WHO SHOULD ATTEND
        </span>

        <h2>
          This Training is Perfect
          <span> For You</span>
        </h2>

        <p className="section-intro">
          Whether you're looking for employment, upgrading your technical
          skills or planning to start your own solar business, this academy
          equips you with practical knowledge that employers and clients value.
        </p>

        <div className="who-grid">

          {attendees.map((person, index) => (

            <div className="who-card" key={index}>

              <div className="who-icon">
                {person.icon}
              </div>

              <h3>{person.title}</h3>

              <p>{person.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}