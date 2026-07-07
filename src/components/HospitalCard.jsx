import { Link } from "react-router-dom";

function HospitalCard({ hospital }) {
  return (
    <div className="card">
      <h2>{hospital.name}</h2>
      <p>{hospital.city}</p>
      <p>{hospital.address}</p>
      <p>⭐ {hospital.rating}</p>

      <Link to={`/doctors/${hospital.id}`}>
        <button className="btn">
          View Doctors
        </button>
      </Link>
    </div>
  );
}

export default HospitalCard;