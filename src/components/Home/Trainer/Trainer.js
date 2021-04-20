import React from 'react';
import trainer1 from '../../../images/hiphop.jpg';
import trainer2 from '../../../images/ballet.jpg';
import trainer3 from '../../../images/freestyle.jpg';
import './Trainer.css';
const trainers = [
    {
      name: "Les Twins",
      from: "California",
      img: trainer1,
    },
    {
      name: "Ema Winslet",
      from: "California",
      img: trainer2,
    },
    {
      name: "Fik Shun",
      from: "California",
      img: trainer3,
    },
  ];
const Trainer = () => {
    return (
        <section className="trainer container my-5 py-5">
      <div className="container">
        <div className="section-header text-center">
          <h1 className='text-info'>
            Our Trainers
          </h1>
        </div>
        <div className="card-deck mt-2">
          {trainers.map(trainer => (
            <div className="card shadow-sm">
              <div className="d-flex justify-content-center m-3">
                <img className="mx-3 img-fluid" src={trainer.img} alt="" />
              </div>
              <div className="card-body">
                <p className="card-text text-center">{trainer.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Trainer;