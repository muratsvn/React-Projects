import React, { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import "./style.css"

const url = 'https://course-api.com/react-tabs-project'

const Tabs = () => {

    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJobs = async () => {
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false);
    }

    useEffect(() => {
        fetchJobs();
    },[]);

    if(loading){
        return(
            <section className='section loading'>
                <h1>Loading...</h1>
            </section>
        )
    }

    const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
    <div className="title">
      <h2>experience</h2>
      <div className="underline"></div>
    </div>
    <div className="btn-center">
        <div className='btn-container'>
            {
                jobs.map((item, i) => {
                    return(
                        <button key={item.id} onClick={() => setValue(i)}
                                 className={`job-btn ${i === value ? "active-btn" : ""}`}>
                            {item.company}
                        </button>
                    )
                })
            }
        </div>

        <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-dates'>{dates}</p>
        </article>

        {
            duties.map((duty, i) => {
                return(
                    <div key={i} className='job-desc'>
                        <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                        <p>{duty}</p>
                    </div>
                )
            })
        }
    </div>
    <button className='btnn' type='button'>more info</button>
    </section>  
  )
}

export default Tabs