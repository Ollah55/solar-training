import "./Journey.css";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaClipboardCheck,
  FaBookOpen,
  FaTools,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaWhatsapp />,
    title: "Register",
    text: "Click the WhatsApp button and chat with our admissions team."
  },
  {
    icon: <FaPhoneAlt />,
    title: "Admission Call",
    text: "Receive information about the next training batch and requirements."
  },
  {
    icon: <FaClipboardCheck />,
    title: "Complete Registration",
    text: "Secure your slot and receive your onboarding details."
  },
  {
    icon: <FaBookOpen />,
    title: "Start Training",
    text: "Attend one month of intensive classroom and practical sessions."
  },
  {
    icon: <FaTools />,
    title: "Field Experience",
    text: "Work on real solar installations with experienced instructors."
  },
  {
    icon: <FaCertificate />,
    title: "Graduate",
    text: "Receive your BuiltRight Solar Installation Certificate."
  },
  {
    icon: <FaRocket />,
    title: "Launch Your Career",
    text: "Pursue employment, freelancing or start your own solar business."
  }
];

export default function Journey() {
  return (
    <section className="journey">

      <div className="container">

        <span className="section-tag">
          YOUR JOURNEY STARTS HERE
        </span>

        <h2>
          From Registration
          <span> To Certification</span>
        </h2>

        <p className="section-intro">
          We've designed a straightforward journey to help you become a confident and certified solar installer.
        </p>

        <div className="timeline">

  {steps.map((step, index) => (

    <div className="timeline-item" key={index}>

      <div className="timeline-circle">

        <span className="step-number">
          {index + 1}
        </span>

        <div className="timeline-icon">
          {step.icon}
        </div>

      </div>

      <div className="timeline-content">

        <h3>{step.title}</h3>

        <p>{step.text}</p>

      </div>

    </div>

  ))}

</div>

<div className="journey-cta">

    <div>

        <h3>
            Your Future Starts Here
        </h3>

        <p>
            One month of practical training can completely change your career.
            Join the next cohort and become a certified solar installer.
        </p>

    </div>

    <a
        href="https://wa.me/2349134991239?text=Hi%20BuiltRight,%20I%20want%20to%20register%20for%20the%20Solar%20Installation%20Academy."
        target="_blank"
        rel="noreferrer"
    >
        Register Now
    </a>

</div>
        

    <div>

        <h3>
            Your Solar Career Starts With One Message.
        </h3>

        <p>
            Join the next batch of the BuiltRight Solar Installation Academy
            and begin your journey towards becoming a professional solar
            installer with practical, industry-focused training.
        </p>

    </div>

    <a
        href="https://wa.me/2349134991239?text=Hello%20BuiltRight%20Energy,%20I%20want%20to%20join%20the%20Solar%20Installation%20Academy."
        target="_blank"
        rel="noreferrer"
    >
        <>
    <FaWhatsapp />
    Register Now
</>
    </a>

</div>

      <div className="journey-achievements">

    <div className="achievement">

        <h2>1 Month</h2>

        <span>Intensive Practical Training</span>

    </div>

    <div className="achievement">

        <h2>100%</h2>

        <span>Hands-on Installation</span>

    </div>

    <div className="achievement">

        <h2>Field Work</h2>

        <span>Real Project Experience</span>

    </div>

    <div className="achievement">

        <h2>Certificate</h2>

        <span>Issued After Completion</span>

    </div>

</div>

    </section>
  );
}