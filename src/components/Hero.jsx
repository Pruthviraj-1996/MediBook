import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>Book Doctor Appointments Online</h1>

        <p>
          Find the best doctors and hospitals and
          book appointments within minutes.
        </p>

        <Link to="/hospitals">
          <button className="btn">
            Find Hospitals
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;