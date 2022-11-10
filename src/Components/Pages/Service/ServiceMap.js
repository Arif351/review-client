import React, { useEffect, useState } from 'react';
import AllServices from './AllServices';

const ServiceMap = () => {
    const [allservices, setAllservices] = useState([]);
    useEffect(() => {
        fetch('https://account-server.vercel.app/allServices')
            .then(res => res.json())
            .then(data => setAllservices(data))
    }, [])

    return (
        <div className='mx-2 lg:ml-8 my-7'>
            <div className='text-center my-12'>
                <h1 className='text-neutral text-3xl font-semibold'>Hey, Your Tax Guidance in Here!</h1>
                <p className='text-neutral font-semibold'>Set your paper, calculator and take a easy solution of your tax!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    allservices.map(eachService => <AllServices
                        key={eachService._id}
                        eachService={eachService}
                    ></AllServices>)
                }
            </div>
        </div>
    );
};

export default ServiceMap;