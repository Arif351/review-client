import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DetailsService = () => {
    const { title, coverImg, about, details, price, rating, _id, review_1, review_2 } = useLoaderData();
    return (
        <div data-theme="dracula" className="card card-compact w-2/4 bg-base-100 shadow-xl mx-auto my-12">
            <figure><img src={coverImg} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold text-center">{title}</h2>
                <h2 className="card-title text-xl">{about}</h2>
                <p className='mb-3'>{details}</p>
                <hr />
                <div className="card-actions justify-around my-2">
                    <button className="badge badge-high--dark text-white justify-center">Pirce: ${price}</button>
                    <button className="badge badge-primary text-white justify-center">Ratings: {rating}</button>
                </div>
                <hr />
                <div className="flex flex-col w-full">
                    <h1 className='text-center text-2xl my-3'>Customer's Reviews:</h1>
                    <div className="grid h-48 card bg-base-300 rounded-box place-items-center">{review_1}</div>
                    <div className="divider"></div>
                    <div className="grid h-48 card bg-base-300 rounded-box place-items-center">{review_2}</div>
                </div>
                <div className="card-actions justify-around mt-3">
                    <button className="btn btn-outline">Request for Service</button>
                    <Link to='/login'><button className="btn btn-outline">Give us a review</button></Link>
                </div>
                <div>
                </div>
            </div>
        </div >
    );
};

export default DetailsService;