import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
  state = {
    status: {
      count: 0,
      lit: true
    }
  };

  increment = () => {
    this.setState({
      status: {
        ...this.state.status,
        count: this.state.status.count + 1
      }
    });
  };

  decrement = () => {
    this.setState({
      status: {
        ...this.state.status,
        count: this.state.status.count - 1
      }
    });
  };

  toggle = () => {
    this.setState(state => ({
      status: {
        ...state.status,
        lit: !state.status.lit
      }
    }));
  };

  render() {
    const { lit, count } = this.state.status;

    return (
      <div className={`counter ${lit ? '' : 'dark'}`}>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <button onClick={this.toggle}>
          Light/Dark
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.querySelector('#root')
);
