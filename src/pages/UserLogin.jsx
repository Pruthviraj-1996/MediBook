function UserLogin() {
  return (
    <div className="form">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <button className="btn">
        Login
      </button>
    </div>
  );
}

export default UserLogin;