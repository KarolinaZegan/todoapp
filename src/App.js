import React, { Component } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

export default class App extends Component {
  state = {
    inputText: '',
    todos: [],
  };

  setTodos = (value) => {
    console.log('value w set', value);
    this.setState({
      todos: [...this.state.todos, value],
    });
  };

  setInputText = (value) => {
    this.setState({
      inputText: value,
    });
  };

  render() {
    return (
      <div className='App container'>
        <div className='row'>
          <div className='col-6'>
            <h1>My Todo List</h1>
            <Form
              inputText={this.state.inputText}
              todos={this.state.todos}
              setTodos={this.setTodos}
              setInputText={this.setInputText}
            />
            <TodoList todos={this.state.todos} setTodos={this.setTodos} />
          </div>
        </div>
      </div>
    );
  }
}
