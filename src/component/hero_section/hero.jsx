import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* LEFT CONTENT */}
      <div className="hero-content">

        <div className="badge">
          ● Smart Healthcare Management
        </div>

        <h1>
          Better Healthcare.
          <br />
          <span>Smarter Management.</span>
        </h1>

        <p>
          Great Mind is a modern hospital management system designed
          to connect patients, doctors, and nurses in one simple and
          secure platform.
        </p>

        <div className="hero-buttons">
          <a href="#login" className="primary-btn">
            Get Started →
          </a>

          <a href="#about" className="secondary-btn">
            Learn More
          </a>
        </div>

        <div className="hero-stats">

          <div>
            <strong>24/7</strong>
            <span>Healthcare Access</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Secure System</span>
          </div>

          <div>
            <strong>3+</strong>
            <span>User Roles</span>
          </div>

        </div>
      </div>


      {/* RIGHT DASHBOARD */}
      <div className="hero-card">

        <div className="card-top">
          <div>
            <span>Today's Overview</span>
            <h3>Hospital Dashboard</h3>
          </div>

          <div className="online">
            ● Live
          </div>
        </div>


        {/* HEALTH STATUS */}
        <div className="health-card">

          <div className="heart">
            ♡
          </div>

          <div>
            <small>Patient Monitoring</small>
            <h3>Healthy & Stable</h3>
          </div>

        </div>


        {/* DASHBOARD NUMBERS */}
        <div className="dashboard-grid">

          <div className="mini-card">
            <span>Patients</span>
            <strong>248</strong>
            <small>+12 today</small>
          </div>

          <div className="mini-card">
            <span>Doctors</span>
            <strong>36</strong>
            <small>Available</small>
          </div>

          <div className="mini-card">
            <span>Appointments</span>
            <strong>84</strong>
            <small>Today</small>
          </div>

          <div className="mini-card">
            <span>Emergencies</span>
            <strong>07</strong>
            <small>Active</small>
          </div>

        </div>


        {/* APPOINTMENT */}
        <div className="appointment">

          <div className="doctor-avatar">
            DR
          </div>

          <div>
            <strong>Dr. Mayowa Uzumaki</strong>
            <span>Cardiology • 10:30 AM</span>
          </div>

          <button>
            View
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;