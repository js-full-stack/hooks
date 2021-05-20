import { Component } from "react";

export default class Counter extends Component {
  state = {
    counterA: 0,
    counterB: 0,
  };

  handleCounterAIncrement = () => {
    this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
  };

  handleCounterBIncrement = () => {
    this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
  };

  componentDidMount() {
    const { counterA, counterB } = this.state;
    const totalClicks = counterA + counterB;

    document.title = `Кликнули ${totalClicks} раз`;
  }

  componentDidUpdate(prevProps, prevState) {
    const { counterA, counterB } = this.state;

    if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
      const totalClicks = counterA + counterB;

      document.title = `Кликнули ${totalClicks} раз`;
    }
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.handleCounterAIncrement}>
          Кликнули counterA {this.state.counterA} раз
        </button>

        <button type="button" onClick={this.handleCounterBIncrement}>
          Кликнули counterB {this.state.counterB} раз
        </button>
      </>
    );
  }
}
