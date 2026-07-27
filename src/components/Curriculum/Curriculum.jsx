import "./Curriculum.css";
import {
  FaSun,
  FaBolt,
  FaShieldAlt,
  FaClipboardCheck,
  FaCalculator,
  FaDraftingCompass,
  FaSolarPanel,
  FaBatteryHalf,
  FaPlug,
  FaTools,
  FaCogs,
  FaWrench,
  FaHardHat,
  FaCertificate,
} from "react-icons/fa";

const modules = [
  {
    icon: <FaSun />,
    title: "Introduction to Renewable Energy",
    text: "Understanding the future of renewable energy and opportunities in the solar industry."
  },
  {
    icon: <FaBolt />,
    title: "Solar Fundamentals",
    text: "Learn how solar energy works and understand the major components of a solar power system."
  },
  {
    icon: <FaShieldAlt />,
    title: "Electrical Safety & Risk Assessment",
    text: "Learn safety procedures, hazard identification and safe installation practices."
  },
  {
    icon: <FaClipboardCheck />,
    title: "Site Survey & Energy Assessment",
    text: "Carry out professional site inspections and assess customer energy requirements."
  },
  {
    icon: <FaCalculator />,
    title: "Load Calculation",
    text: "Calculate electrical loads and correctly size solar systems."
  },
  {
    icon: <FaDraftingCompass />,
    title: "Solar System Design",
    text: "Design complete residential and commercial solar systems."
  },
  {
    icon: <FaSolarPanel />,
    title: "Solar Panel Installation",
    text: "Roof mounting, panel positioning and structural best practices."
  },
  {
    icon: <FaBatteryHalf />,
    title: "Battery Installation",
    text: "Lithium battery configuration, installation and protection."
  },
  {
    icon: <FaPlug />,
    title: "Inverter Installation",
    text: "Install and configure hybrid and off-grid inverter systems."
  },
  {
    icon: <FaTools />,
    title: "Electrical Wiring",
    text: "Cable sizing, circuit protection and professional wiring techniques."
  },
  {
    icon: <FaCogs />,
    title: "System Testing & Commissioning",
    text: "Test, configure and commission complete solar installations."
  },
  {
    icon: <FaWrench />,
    title: "Maintenance & Troublesbleshooting",
    text: "Identify faults, maintain systems and resolve common issues."
  },
  {
    icon: <FaHardHat />,
    title: "Live Practical Installation",
    text: "Work on a real solar installation project with experienced instructors."
  },
  {
    icon: <FaCertificate />,
    title: "Final Assessment & Certification",
    text: "Complete practical assessments and receive your BuiltRight Solar Installation Certificate."
  }
];

export default function Curriculum() {
  return (
    <section className="curriculum" id="curriculum">

      <div className="container">

        <span className="section-tag">
          OUR CURRICULUM
        </span>

        <h2>
          A Step-by-Step
          <span> Learning Journey</span>
        </h2>

        <p className="section-intro">
          Our one-month intensive programme combines classroom learning,
          practical workshops and live field installations to prepare you
          for real-world solar projects.
        </p>

        <div className="timeline">

          {modules.map((module, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-icon">
                {module.icon}
              </div>

              <div className="timeline-content">

                <h3>{module.title}</h3>

                <p>{module.text}</p>

              </div>

            </div>
          ))}

        </div>
        <div className="curriculum-finish">

    <h3>
        Ready to Begin Your Solar Journey?
    </h3>

    <p>
        Complete this intensive one-month programme and graduate with practical
        skills, industry knowledge and the confidence to install residential
        and commercial solar systems professionally.
    </p>

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