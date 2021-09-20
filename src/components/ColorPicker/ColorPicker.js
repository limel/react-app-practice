import React, { Component } from 'react';
import classNames from 'classnames';
import s from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 1,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  // makeOptionClassName = index => {
  //   return  classNames([s.option], {
  //   [s.active]: index === this.state.activeOptionIdx,
  // });;

  //   // const optionClasses = [s.option];

  //   // if (index === this.state.activeOptionIdx) {
  //   //   optionClasses.push(s.active);
  //   // }

  //   // return optionClasses.join(' ');
  // };

  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;
    const { label } = options[activeOptionIdx];

    return (
      <div className={s.container}>
        <h2 className={s.title}>Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={classNames([s.option], {
                [s.active]: index === this.state.activeOptionIdx,
              })}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

// function ColorPicker({ options }) {}

export default ColorPicker;

// console.log(styles);
