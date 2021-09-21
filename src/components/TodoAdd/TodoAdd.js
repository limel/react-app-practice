import React, { Component } from 'react';
import s from './TodoAdd.module.css';

export class TodoAdd extends Component {
  state = {
    message: '',
  };

  handelChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);
    console.log(this.state);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <textarea
          className={s.textarea}
          value={this.state.message}
          onChange={this.handelChange}
        ></textarea>
        <button type="submit">add</button>
      </form>
    );
  }
}

export default TodoAdd;
