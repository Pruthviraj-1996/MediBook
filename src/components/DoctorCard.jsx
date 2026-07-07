import { Link } from "react-router-dom";

function DoctorCard({ doctor }) {
  return (
    <div className="card">
      <h2>{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <p>{doctor.experience} Years</p>
      <p>₹{doctor.fee}</p>
      <p>⭐ {doctor.rating}</p>

      <Link to={`/doctor/${doctor.id}`}>
        <button className="btn">
          View Profile
        </button>
      </Link>
    </div>
  );
}

export default DoctorCard;