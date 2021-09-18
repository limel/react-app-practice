import React from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends React.Component {
  // old version
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //   };
  // }

  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // never used !!! this.satat.value = 6; !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // Основываясь От предыдущего передаем функицию с параметром prevState
    // Не основываясь от предыдущео передаем объект со значением который перезапишет state
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
