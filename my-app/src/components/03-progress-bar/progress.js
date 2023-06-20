import React, { useState } from 'react'
import {Button, ButtonGroup, ProgressBar} from "react-bootstrap"


const Progress = () => {
  const [now, setNow] = useState(0);
 
  const handleIncrease = () => {
    if (now < 100) {
      setNow(now + 10);
    }
  }; 

   const handleDecrease = () => {
    if (now > 0) {
      setNow(now - 10);
    }
  };
  return (
    <div className='mt-5 p-5'> 
    <ProgressBar now={now} label={`${now}%`} />
    <Button variant="success" onClick={handleIncrease}>+</Button>
    <Button variant="danger" onClick={handleDecrease}>-</Button>

  {/* <ButtonGroup>
    <Button variant="success" onClick={() => setNow((prev) => prev + 10)}>+</Button>
    <Button variant="danger" onClick={() => setNow((prev) => prev - 10)}>-</Button>
  </ButtonGroup> */}
  </div>
  )
}

export default Progress;