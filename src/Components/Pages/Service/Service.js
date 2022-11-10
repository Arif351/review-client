import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, coverImg, about, details, price, _id } = service;
    return (
        <div>
            <PhotoProvider>
                <div className="card w-96 bg-base-300 shadow-xl">
                    <figure>
                        <img src={coverImg} alt="" />
                        <PhotoView src={coverImg}>
                            <img src={coverImg} alt="" />
                        </PhotoView>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {title}
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>
                        <p>{about}</p>
                        <p>
                            {
                                details.length > 100 ?
                                    <p>{details.slice(0, 100) + '...'} <Link to={`/checkout/${_id}`}><div className="badge badge-primary">Read More</div>
                                    </Link> </p> : <p>{details}</p>
                            }
                        </p>
                        <div className="card-actions justify-between">

                            <button className="badge badge-high--dark text-white">Price: ${price}</button>
                            <Link to={`/checkout/${_id}`}><div className="btn btn-outline text-center mt-5">View Details</div></Link>
                        </div>
                    </div>
                </div>
            </PhotoProvider>
        </div>
    );
};

export default Service;