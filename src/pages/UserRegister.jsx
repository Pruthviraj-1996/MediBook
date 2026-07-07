function UserRegister() {
  return (
    <div className="form">
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Name"
      />

      <input
        type="email"
        placeholder="Email"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <button className="btn">
        Register
      </button>
    </div>
  );
}

export default UserRegister;