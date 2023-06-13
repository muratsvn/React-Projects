import React from 'react'
import { Button } from 'react-bootstrap'
import "./style.scss";

const Tour = ({id, image, info, name, price, removeTour}) => {
  return (
    <article className='single-tour'>
        <img src={image} alt={name} />
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
                <h4>${price}</h4>
            </div>
            <p>{info}</p>
           <Button variant="primary" onClick={()=>removeTour(id)}>Not Interested</Button> 
        </footer>
    </article>
  )
}
export default Tour