import "./WhyBuiltRight.css";
import {
    FaSolarPanel,
    FaUserTie,
    FaHardHat,
    FaCertificate,
    FaBriefcase,
    FaTools
} from "react-icons/fa";

const features = [
    {
        icon: <FaSolarPanel />,
        title: "100% Practical Training",
        text: "Every participant gains hands-on experience through practical exercises and live installation activities."
    },
    {
        icon: <FaUserTie />,
        title: "Industry Experienced Trainers",
        text: "Learn from professionals with years of experience designing and installing solar systems."
    },
    {
        icon: <FaHardHat />,
        title: "Live Installation Projects",
        text: "Participate in real residential and commercial solar installations during training."
    },
    {
        icon: <FaCertificate />,
        title: "Professional Certification",
        text: "Receive a BuiltRight Solar Installation Certificate after successfully completing the programme."
    },
    {
        icon: <FaBriefcase />,
        title: "Career & Business Support",
        text: "Get guidance on employment opportunities and how to start your own solar installation business."
    },
    {
        icon: <FaTools />,
        title: "Industry Standard Equipment",
        text: "Train with professional tools, modern inverters, lithium batteries and quality solar panels."
    }
];

export default function WhyBuiltRight() {

    return (

        <section className="academy-benefits">

            <div className="container">

                <span className="section-tag">
                    WHY BUILTRIGHT SOLAR ACADEMY
                </span>

                <h2>
                    Learn From
                    <span> Industry Professionals</span>
                </h2>

                <p className="section-intro">
                    Our academy combines classroom learning with extensive practical sessions,
                    giving you the confidence and skills needed to install solar systems professionally.
                </p>

                <div className="benefits-grid">

                    {features.map((feature, index) => (

                        <div
                            className="benefit-card"
                            key={index}
                        >

                            <div className="benefit-icon">
                                {feature.icon}
                            </div>

                            <h3>{feature.title}</h3>

                            <p>{feature.text}</p>

                        </div>

                    ))}

                </div>

            </div>
            <div className="academy-highlight">

    <div className="highlight-text">

        <h3>Build Skills That Open Doors</h3>

        <p>
            Learn from experienced professionals, gain practical field
            experience and graduate with the confidence to work on real
            solar projects or start your own installation business.
        </p>

    </div>

    <div className="highlight-btn">

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