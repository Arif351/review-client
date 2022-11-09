import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const AllServices = ({ eachService }) => {
    const { title, coverImg, about, details, price, _id, rating, review_1, review_2 } = eachService;
    return (
        <div>
            <div className="card w-96 bg-base-200 shadow-xl ">
                <figure>
                    <img src={coverImg} alt="" />
                    {/* <PhotoProvider>
                        <PhotoView src={coverImg}>
                            <img src={coverImg} alt="" />
                        </PhotoView>
                    </PhotoProvider> */}
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

                        <button className="badge badge-high--dark text-white">Pirce: ${price}</button>

                        <Link to={`/checkout/${_id}`}><button className="btn btn-outline mt-5">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServices;