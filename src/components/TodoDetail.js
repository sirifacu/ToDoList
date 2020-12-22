import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {toDone, toInProgress, removeTodo} from '../actions';
import { Link } from 'react-router-dom';
import s from './styles/TodoDetail.module.css';

export default function TodoDetail({ match }) {
  const toDos = useSelector(state => state)
  const dispatch = useDispatch()

  const id = match.params.id;

  for(var i = 0; i < toDos.length; i++){
    if(parseInt(toDos[i].id) === parseInt(id)){
      var toDo = toDos[i];
    }
  }

  return (

    <div>
      {toDo ? 
        <div>
          <h2 className={`${s.title}`}>Detail</h2>
          <div className="row d-flex justify-content-center">
            <div className={`col-2 ${s.leftItem}`}>To Do</div> <div className={`col-2 ${s.rightItem}`}>{toDo.title}</div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className={`col-2 ${s.leftItem}`}>Description</div> <div className={`col-2 ${s.rightItem}`}>{toDo.description}</div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className={`col-2 ${s.leftItem}`}>Place</div> <div className={`col-2 ${s.rightItem}`}>{toDo.place}</div>
          </div>
          <div className="row d-flex justify-content-center mb-5">
            <div className={`col-2 ${s.leftItem} ${s.borderBot}`}>Date</div> <div className={`col-2 ${s.rightItem} ${s.borderBot}`}>{toDo.date}</div>
          </div>

          <div className="d-inline-block">
            <button className="btn btn-outline-success mx-2" onClick={() => {dispatch(toDone(toDo.id))}}>Done</button>
            <button className="btn btn-outline-primary mx-2" onClick={() => {dispatch(toInProgress(toDo.id))}}>In Progress</button>
            <button className="btn btn-outline-danger mx-2" onClick={() => {dispatch(removeTodo(toDo.id))}}>Remove</button>
          </div>

          <div className="d-block">
            <Link to='/' className={`btn btn-primary mt-5 ${s.btnCustom}`}>Volver</Link>
          </div>
        </div>

         : <h1>To do not found.</h1>
      }
      
    </div>
  )
};