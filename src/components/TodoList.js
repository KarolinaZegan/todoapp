import React, { Component } from 'react';
//Import components
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    const { todos, setTodos } = this.props;
    console.log('todos', todos);
    return (
      <div className='todo-container'>
        <ul className='todo-list'>
          {todos.map((todo) => (
            <Todo
              text={todo.text}
              key={todo.id}
              setTodos={setTodos}
              todos={todos}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}
