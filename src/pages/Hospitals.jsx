import hospitals from "../data/hospitals";
import HospitalCard from "../components/HospitalCard";

function Hospitals() {
  return (
    <div>
      <h1 className="page-title">
        Hospitals
      </h1>

      <div className="grid grid-3">
        {hospitals.map((hospital) => (
          <HospitalCard
            key={hospital.id}
            hospital={hospital}
          />
        ))}
      </div>
    </div>
  );
}

export default Hospitals;