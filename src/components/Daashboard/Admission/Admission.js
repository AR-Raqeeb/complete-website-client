import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { admissionContext, userContext } from "../../../App";
import Sidebar from "../../shared/Sidebar/Sidebar";
import Payment from "../Payment/Payment";

const Admission = () => {
  const [loggedUser, setLoggedUser] = useContext(userContext);
  const [admission,setAdmission]= useContext(admissionContext);
  const { register, handleSubmit, watch, errors } = useForm();

  const payment = (paymentId)=>{
    const admissionDetails = {
      course: admission[0].Title,
      userEmail: loggedUser.email,
      userName: loggedUser.displayName,
      price: admission[0]?.price,
      status: 'pending',
      trxId: paymentId,
    }
    
    fetch('http://localhost:3001/addAdmissions',{
        method: 'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify(admissionDetails)
    })
  }

  return (
    <section>
      <div className="container-fluid row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 offset-md-1">
              <div className="row">
                <div className="col-md-6">
                <h2 className='text-center'>Admission</h2>
              <form className="p-5">
                <div className="form-group">
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder='Name'
                    value={loggedUser.displayName}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    {...register("phone", { required: true })}
                    name="phone"
                    placeholder="Phone Number"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder='email'
                    value={loggedUser.email}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    {...register("course", { required: true })}
                    name="course"
                    placeholder="Course type"
                    value={admission[0]?.Title}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    {...register("price", { required: true })}
                    name="price"
                    placeholder="Price"
                    value={admission[0]?.price}
                    className="form-control"
                  />
                </div>
              </form>
              <Payment payment ={payment} />
                </div>
              </div>
          </div>
        </div>
    </section>
  );
};

export default Admission;
