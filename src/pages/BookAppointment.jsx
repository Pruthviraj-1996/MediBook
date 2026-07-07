import { useParams } from "react-router-dom";
import doctors from "../data/doctors";

function BookAppointment() {
  const { id } = useParams();

  const doctor = doctors.find(
    (d) => d.id === Number(id)
  );

  return (
    <div className="form">
      <h2>Book Appointment</h2>

      <br />

      <p>
        Doctor:
        {" "}{doctor?.name}
      </p>

      <input
        type="text"
        placeholder="Patient Name"
      />

      <input
        type="email"
        placeholder="Email"
      />

      <input type="date" />

      <input type="time" />

      <button className="btn">
        Book Now
      </button>
    </div>
  );
}

export default BookAppointment;