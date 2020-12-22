import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../actions'
import s from './styles/AddTodo.module.css'

export default function AddTodo() {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    title: '',
    description: '',
    place: '',
    date: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  const validate = (input) => {
    let errors = {};
    if (!input.title) {
      errors.title = 'You must write a title';
    } 
    if(!input.description) {
      errors.description = 'You must write a description'
    } 
    if(!input.place) {
      errors.place = 'You must write a place'
    } 
    if(!input.date) {
      errors.date = 'You must write a date'
    } 
  
    return errors;
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(input))
    if(input.title !== '' && input.description !== '' && input.place !== '' && input.date !== ''){
      dispatch(addTodo(input));
      setInput({
        title: '',
        description: '',
        place: '',
        date: ''
      })
    }
  }

  return (
    <form onSubmit={onSubmit} className={`d-block ${s.form}`}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input className="form-control" id="title" type="text" name="title" value={input.title} onChange={handleInputChange} />
      </div>
      <span className="text-danger">{errors.title}</span>
      {errors.title ? <hr/> : null}

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea className="form-control" id="description" name='description' value={input.description} onChange={handleInputChange} />
      </div>
      <span className="text-danger">{errors.description}</span>
      {errors.description ? <hr/> : null}

      <div className="mb-3">
        <label className="form-label">Place</label>
        <input className="form-control" id="place" type="text" name="place" value={input.place} onChange={handleInputChange} />
      </div>
      <span className="text-danger">{errors.place}</span>
      {errors.place ? <hr/> : null}      

      <div className="mb-3">
        <label className="form-label">Date</label>
        <input className="form-control text-center" id="date" type="date" name="date" value={input.date} onChange={handleInputChange} />
      </div>
      <span className="text-danger">{errors.date}</span>
      {errors.date ? <hr/> : null}

      <button type="submit" className={`btn ${s.btnColor} mt-3`}>Add To Do</button>
    </form>
  )
};