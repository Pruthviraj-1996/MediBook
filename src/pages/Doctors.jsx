import { useParams } from "react-router-dom";
import doctors from "../data/doctors";
import DoctorCard from "../components/DoctorCard";

function Doctors() {
  const { id } = useParams();

  const filteredDoctors =
    doctors.filter(
      (doctor) =>
        doctor.hospitalId === Number(id)
    );

  return (
    <div>
      <h1 className="page-title">
        Doctors
      </h1>

      <div className="grid grid-3">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
          />
        ))}
      </div>
    </div>
  );
}

export default Doctors;