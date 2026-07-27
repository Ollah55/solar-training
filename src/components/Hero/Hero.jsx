import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">

    <div className="hero-right">

  <video
    className="hero-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

</div>
      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-left">

          <span className="hero-tag">
            BUILTRIGHT SOLAR INSTALLATION ACADEMY
          </span>

          <h1>
            Become a
            <span> Certified Solar Installer</span>
          </h1>

          <p>
            Learn practical solar installation skills, gain real field
            experience, and launch a rewarding career in Nigeria's rapidly
            growing renewable energy industry through intensive hands-on
            training led by experienced professionals.
          </p>

          <div className="hero-buttons">

            <a
              href="https://wa.me/2349134991239?text=Hi%20BuiltRight%20Energy,%20I%20want%20to%20enroll%20for%20the%20Solar%20Installation%20Academy."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Register Now
            </a>

            <a
              href="#curriculum"
              className="btn-outline"
            >
              Explore Curriculum
            </a>

          </div>

        </div>

      </div>

      <div className="hero-features">

        <div className="feature">
          <h3>1 Month</h3>
          <span>Intensive Practical Training</span>
        </div>

        <div className="feature">
          <h3>100%</h3>
          <span>Hands-on Installation</span>
        </div>

        <div className="feature">
          <h3>Industry</h3>
          <span>Experienced Trainers</span>
        </div>

        <div className="feature">
          <h3>Certificate</h3>
          <span>Issued on Completion</span>
        </div>

      </div>

    </section>
  );
}