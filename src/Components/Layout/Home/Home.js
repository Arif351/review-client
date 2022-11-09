import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Pages/Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    },
        [])
    return (
        <div className='mx-5 my-7'>
            <div className='text-center my-12'>
                <h1 className='text-neutral text-3xl font-semibold'>Hey, Your Tax Guidance in Here!</h1>
                <p className='text-neutral font-semibold'>Set your paper, calculator and take a easy solution of your tax!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='text-center my-12 '>
                <Link to='/allservices'><button className="btn btn-outline">See All Services</button></Link>
            </div>
        </div>
    );
};

// https://i.ibb.co/4ZDYHyX/cover.jpg

export default Home;