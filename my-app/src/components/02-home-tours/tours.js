import React from 'react';
import Tour2 from "./tour2";
import "./style.scss"
const Tours = ({tours, removeTour}) => {
  return (
    <section className="tours">
        <div className='title-tours'>
           <h2 style={{textAlign:"center"}}>Our Tour</h2> 
           <div className='underline'></div>
          
        </div>
        <div className='tour-card'>
        {
                tours.map((tour) => {
                    return <Tour2 key={tour.id} {...tour} removeTour={removeTour} />
                })
        }
        </div>
    </section>
  )
}
export default Tours