import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(
      state => ({
        count: state.count + 1
      }),
      () => {
        console.log('increment finished');
      }
    );
  }

  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">
            {this.state.count}
          </span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.querySelector('#root')
);
