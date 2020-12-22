import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';
import { Link } from 'react-router-dom';
import s from './styles/Todos.module.css';

export default function Todos({status}) {
  const toDos = useSelector(state => state)
  return (
    <div className={s.box}>
      <span className={s.title}>{status}</span>
      {toDos.map(item => {
        var toDoLink = <Link style={{ textDecoration: 'none' }} key ={item.id} to={`/edit/${item.id}`}><Todo title={item.title} /></Link>
        return status === item.status ? toDoLink : null;
      })
      }
    </div>
  )     
};