import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
  <footer className="footer">
    <span className="todo-count">
      <strong>{props.remaining}</strong> 
		  {props.remaining === 1 ? ' todo restant' : ' todos restants'}
    </span>
    <ul className="filters">
      <li><Link to="/">Tous</Link></li>
      {' '}
      <li><Link to="/active">En cours</Link></li>
      {' '}
      <li><Link to="/completed">Fait</Link></li>
    </ul>
  </footer>
