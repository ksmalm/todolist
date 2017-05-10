import React from 'react'
import Todo from './Todo'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default ({
  handleClick,
  handleDelete,
  todos
}) => {
  const list = todos.map((todo, index) =>
    <Todo
      handleClick={() => handleClick(todo, index)}
      handleDelete={() => handleDelete(todo, index)}
      key={index}
      todo={todo.item}
    />
  )
  return(
    <div className="wrapper">
      <ul>
        <CSSTransitionGroup
          transitionName="todo"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {list}
        </CSSTransitionGroup>
      </ul>
    </div>
  )
}
