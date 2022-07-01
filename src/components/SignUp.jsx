import React from "react";

function SignUp() {
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label htmlFor="">Display Name</label>
        <input required type="text" />

        <label htmlFor="">Email</label>
        <input required type="email" />

        <label htmlFor="">Password</label>
        <input required type="password" />

        <label htmlFor="">Confirm Password</label>
        <input required type="password" />
      </form>
    </div>
  );
}

export default SignUp;
