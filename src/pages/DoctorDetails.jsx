import { useParams, Link } from "react-router-dom";
import doctors from "../data/doctors";

function DoctorDetails() {
  const { id } = useParams();

  const doctor = doctors.find(
    (d) => d.id === Number(id)
  );

  if (!doctor) {
    return <h2>Doctor not found.</h2>;
  }

  return (
    <div className="card">
      <h1>{doctor.name}</h1>

      <p>
        Specialization:
        {" "}{doctor.specialization}
      </p>

      <p>
        Experience:
        {" "}{doctor.experience} years
      </p>

      <p>
        Consultation Fee:
        {" "}₹{doctor.fee}
      </p>

      <p>
        Rating:
        {" "}⭐ {doctor.rating}
      </p>

      <Link to={`/book/${doctor.id}`}>
        <button className="btn">
          Book Appointment
        </button>
      </Link>
    </div>
  );
}

export default DoctorDetails;