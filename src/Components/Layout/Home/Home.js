import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Service from '../../Pages/Service/Service';
import Cover from '../Cover/Cover';

const Home = () => {
    const [services, setServices] = useState([]);
    const { loading } = useContext(AuthContext)
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    },
        [])
    if (loading) {
        return <button className="btn loading">loading</button>
    }
    return (

        <div>
            <Cover></Cover>
            <div className='mx-6 lg:ml-12 my-7'>
                <div className='text-center my-12'>
                    <h1 className='text-neutral text-3xl font-semibold'>Hey, Your Tax Guidance in Here!</h1>
                    <p className='text-neutral font-semibold'>Set your paper, calculator and take a easy solution of your tax!</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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
        </div>
    );
};

// https://i.ibb.co/4ZDYHyX/cover.jpg

export default Home;