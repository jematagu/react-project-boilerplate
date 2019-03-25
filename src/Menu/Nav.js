import React from 'react'
import { Link } from "react-router-dom";
export default (props) => {
  return (
      <Link to={props.path} className='nav' style={{ textDecoration: 'none' }}>{props.title}</Link >
  )
}
