import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <h2 className="page-title">
          Why Choose MediBook?
        </h2>

        <div className="grid grid-3">
          <div className="card">
            <h3>100+ Doctors</h3>
            <p>
              Experienced doctors from multiple
              hospitals.
            </p>
          </div>

          <div className="card">
            <h3>Instant Booking</h3>
            <p>
              Book appointments in a few clicks.
            </p>
          </div>

          <div className="card">
            <h3>Trusted Hospitals</h3>
            <p>
              Verified hospitals and specialists.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;