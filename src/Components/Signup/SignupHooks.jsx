import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

const SignupHooks = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`email: ${email}, password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Почта</span>
        <input
          autoComplete="off"
          type="email"
          name="email"
          onChange={handleChangeEmail}
          value={email}
        />
      </label>

      <label>
        <span>Пароль</span>
        <input
          autoComplete="off"
          type="password"
          name="password"
          onChange={handleChangePassword}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default SignupHooks;
