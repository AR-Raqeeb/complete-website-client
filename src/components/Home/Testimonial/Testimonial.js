import axios from "axios";
import React, { useEffect, useState } from "react";
import './Testimonial.css';

const Testimonial = () => {
  const [reviews,setReviews]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/reviews')
  .then(response=> {
    setReviews(response.data);
  })
  .catch(error=>{
    console.log(error);
  })
  },[])
  return (
    <section className="testimonials container my-5 py-5">
      <div className="container">
        <div className="section-header text-center">
          <h5 style={{color: '#3A4256', fontSize:'50px', marginBottom:'20px'}} className="text-info text-uppercase">Testimonial</h5>
          <h1 style={{color: '#3A4256', fontSize:'30px'}}>
            What Our Dancers Say{" "}
          </h1>
        </div>
        <div className="card-deck mt-5">
          {reviews.map(review => (
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="card-text text-center">{review.Description}</p>
              </div>
              <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={review.img} alt="" width="60" />
                <div>
                  <h6 className="text-primary">{review.User}</h6>
                  <p className="m-0">{review.Address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
