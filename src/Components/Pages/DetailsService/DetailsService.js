import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsService = () => {
    const { title, coverImg, about, details, price, _id } = useLoaderData();
    return (
        <div className="card card-compact w-2/4 bg-base-100 shadow-xl mx-auto my-12">
            <figure><img src={coverImg} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold text-center">{title}</h2>
                <h2 className="card-title text-xl">{about}</h2>
                <p>{details}</p>
                <div className="card-actions justify-between">
                    <button className="badge badge-high--dark text-white">Pirce: ${price}</button>
                    <button className="btn btn-outline">Request for Service</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsService;