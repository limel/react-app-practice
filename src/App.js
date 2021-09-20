import './App.css';
import React, { Component } from 'react';
import Dropdown from './components/Dropdown';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Counter from './components/Counter/Counter';
import ColorPicker from 'components/ColorPicker/ColorPicker';
import Todolist from './components/TodoList';
import Feedback from './components/Feedback';
import Section from 'components/Section';
import img1 from './components/Section/img-1.jpg';
import img2 from './components/Section/img-2.jpg';
import img3 from './components/Section/img-3.png';
import Statistics from './components/Statistics/Statistics';
import Form from './components/Form';

import initialTodos from './todos.json';
import user from './user.json';
import colorPickerOptions from './colors.json';

export default class App extends Component {
  state = {
    todos: initialTodos,
    name: '',
    tag: '',
    good: 0,
    neutral: 0,
    bad: 0,
    experience: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // console.log(todoId);
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    //prevState => {todo}
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  handleFeedback = option => {
    this.setState(prefState => ({
      [option]: prefState[option] + 1,
    }));
  };

  formSubmitHandler = data => {
    this.setState(() => ({
      name: data.name,
      tag: data.tag,
      experience: data.experience,
    }));
  };

  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };

  render() {
    const { todos } = this.state;
    const options = Object.keys(this.state).slice(3, 6);
    console.log(options);
    console.log(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1 className="Title">My React road-map</h1>

        <Section color="rgba(8, 95, 110, 0.8)" img={img1}>
          <Container title="Please leave feedback">
            <Feedback options={options} onClickFeedback={this.handleFeedback} />
            <Statistics good={good} neutral={neutral} bad={bad} />
          </Container>
        </Section>

        <Section color="rgba(143, 22, 82, 0.8)" img={img2}>
          <Container title="Module 2">
            <Form onSubmit={this.formSubmitHandler} />
            <Todolist
              todos={todos}
              onDeleteTodo={this.deleteTodo}
              onToggleCompleted={this.toggleCompleted}
            />
            <Dropdown />
            <Counter initialValue={10} />
          </Container>
        </Section>

        <Section color="rgba(68, 51, 223, 0.8)" img={img3}>
          <Container title="Module 1">
            <ColorPicker options={colorPickerOptions} />
            <Profile
              avatar={user.avatar}
              name={user.name}
              tag={user.tag}
              location={user.location}
              stats={{ ...user.stats }}
            />
          </Container>
        </Section>
      </>
    );
  }
}
