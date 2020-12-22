import React from 'react';
import s from './styles/Todo.module.css'

export function Todo({title}) {
  return (
    <div className={s.todoWrapper}>
      <span className={s.todoTitle}>{title}</span>
    </div>
  )
};

export default Todo;