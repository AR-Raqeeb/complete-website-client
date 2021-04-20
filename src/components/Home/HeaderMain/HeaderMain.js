import React from 'react';
import { Link } from 'react-router-dom';
import trainer from '../../../images/danceMaster.jpg';

const HeaderMain = () => {
    return (
        <div>
            <main style={{height:'750px', backgroundColor:'#f9faf0', overflowX:'hidden'}} className="row d-flex align-items-center">
            <div className="col-md-5 col-sm-6 col-12 offset-md-2">
                <h1 style={{color: '#3A4256', fontSize:'40px'}}>We Teach You To</h1>
                <h2 style={{color: '#0056B3', fontSize:'130px'}}> DANCE</h2>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestias vitae voluptas consequatur cupiditate beatae nesciunt accusantium provident illum animi repudiandae labore, reprehenderit ullam qui tempora suscipit doloremque adipisci hic!</p>
                <Link to="/appointment" className="btn btn-primary">Join Our School</Link>
            </div>
            <div className="ml-auto col-md-4 col-sm-6 col-12">
                <img src={trainer} alt="" className="img-fluid"/>
            </div>
        </main>
        </div>
    );
};

export default HeaderMain;