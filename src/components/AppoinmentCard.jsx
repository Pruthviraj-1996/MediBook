function AppointmentCard({
  appointment,
}) {
  return (
    <div className="card">
      <h3>{appointment.doctor}</h3>
      <p>{appointment.date}</p>
      <p>{appointment.time}</p>
      <p>{appointment.status}</p>
    </div>
  );
}

export default AppointmentCard;