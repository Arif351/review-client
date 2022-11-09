import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, coverImg, about, details, price } = service;
    return (
        <div>
            <div className="card w-96 bg-base-200 shadow-xl">
                <figure><img src={coverImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>{about}</p>
                    <p>
                        {
                            details.length > 100 ?
                                <p>{details.slice(0, 100) + '...'} <Link><div className="badge badge-primary">Read More</div>
                                </Link> </p> : <p>{details}</p>
                        }


                    </p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-high--dark">Pirce: ${price}</div>
                        <div className="btn btn-outline">Request Service</div>
                        {/* <div className="badge badge-outline">Products</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;