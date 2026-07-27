import "./CareerOpportunities.css";
import {
    FaBriefcase,
    FaRocket,
    FaMoneyBillWave,
    FaLeaf
} from "react-icons/fa";

const opportunities = [
    {
        icon: <FaBriefcase />,
        title: "Get Hired",
        text: "Build a rewarding career with EPC companies, renewable energy firms and engineering contractors."
    },
    {
        icon: <FaRocket />,
        title: "Start Your Own Business",
        text: "Launch your own solar installation company and build a profitable business serving homes and businesses."
    },
    {
        icon: <FaMoneyBillWave />,
        title: "Increase Your Income",
        text: "Solar installation is one of the fastest-growing technical professions with excellent earning potential."
    },
    {
        icon: <FaLeaf />,
        title: "Future-Proof Your Career",
        text: "Renewable energy continues to expand, creating long-term opportunities across Nigeria and Africa."
    }
];

export default function CareerOpportunities() {
    return (
        <section className="career">

            <div className="container">

                <span className="section-tag">
                    YOUR FUTURE STARTS HERE
                </span>

                <h2>
                    Launch Your Career in
                    <span> Solar Energy</span>
                </h2>

                <p className="section-intro">
                    Whether you want employment, entrepreneurship or an additional source of income,
                    our academy equips you with practical skills to succeed in the renewable energy industry.
                </p>

                <div className="career-grid">

                    {opportunities.map((item, index) => (

                        <div
                            className="career-card"
                            key={index}
                        >

                            <div className="career-icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.text}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}