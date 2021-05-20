import { Component } from "react";

export default class SignupFormClasses extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <label>
          <span>Почта</span>
          <input
            autoComplete="off"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>

        <label>
          <span>Пароль</span>
          <input
            autoComplete="off"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    );
  }
}
