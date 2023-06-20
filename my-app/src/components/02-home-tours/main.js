import React, { useEffect, useState } from 'react';
import Loading from "./loading"
import Tours from "./tours";
import { Button } from 'react-bootstrap';
const url = 'https://course-api.com/react-tours-project';
const Main = () => {
    const [loading, setLoading] = useState(false);
    const [tours, setTours] = useState([]);
    const removeTour = (id)=>{
        const newTours = tours.filter((tour)=> tour.id !==id);
        setTours(newTours);
    }
    const fetchTours = async() =>{
        setLoading(true)
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours); 
        } catch (error) {
            setLoading(true)
            console.log(error)
        }
    }
    useEffect(()=>{fetchTours()},[])
    if(loading){
        return(
            <div>
                <Loading />
            </div>
        )
    }
    if(tours.length===0){
        return(
            <main>
                <div className="title">
                    <h2>no tours left</h2>
                    <Button variant="info" onClick={()=>fetchTours()}>
                        Refresh
                    </Button>
                </div>
            </main>
        )
    }
  return (
    <div>
        <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
}
export default Main