import React, { Component } from 'react';
import TodoList from './TodoList';

export default class Form extends Component {
  changeHandler = (e) => {
    this.props.setInputText(e.target.value);
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.setTodos({
      text: this.props.inputText,
      completed: false,
      id: Math.random() * 1000,
    });
    this.props.setInputText('');
  };
  render() {
    const { inputText, setInputText, todos, setTodos } = this.props;

    return (
      <form>
        <input type='text' onChange={this.changeHandler} value={inputText} />
        <button onClick={this.submitHandler}>Submit</button>
      </form>
    );
  }
}
