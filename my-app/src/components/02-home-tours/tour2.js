import React, {useState} from 'react'
import { Button, Card } from 'react-bootstrap'
import "./style.scss";
const Tour2 = ({id, image, info, name, price, removeTour}) => {
    const  [readMore, setReadMore] = useState(false);
  return (
    <Card className="card-dede" style={{ width: '18rem'}}>
    <Card.Img variant="top" src={image} alt={name} />
    <Card.Body className="card-body">
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      {readMore ? info :`${info.substring(0, 150)}...`}
                <Button variant='link' onClick={()=> setReadMore(!readMore)}>
                    {readMore ? 'show less' : ' read more'}
                </Button>
        <h5>${price}</h5>
      </Card.Text>
      <Button variant="primary" className="card-btn"  onClick={()=> removeTour(id)}>Not Interested</Button> 
    </Card.Body>
  </Card>
  )
}
export default Tour2