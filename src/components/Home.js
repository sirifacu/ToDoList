import React from 'react';
import Todos from './Todos'

export default function Home() {
  return (
    <div style={{display: 'flex'}}>
      <Todos status='To Do' />
      <Todos status="In Progress" />
      <Todos status="Done" />
    </div>
  )
};