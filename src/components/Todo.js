import React, { Component } from 'react';

export default class Todo extends Component {
  //events

  deleteHandler = () => {
    console.log('this.props.todo.id', this.props.key);
    // this.props.setTodos(
    //   this.props.todos.filter((el) => el.id !== this.props.todo.id)
    // );
  };

  render() {
    const { text } = this.props;

    return (
      <div className='todo container'>
        <input type='checkbox' />
        <li className='todo-item'>{text}</li>
        <button onClick={this.deleteHandler} className='remove-btn'>
          <i className='fa-solid fa-xmark'></i>
        </button>
      </div>
    );
  }
}
