import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const { title, review_1, review_2 } = useLoaderData();
    return (
        <div className="card w-8/12 bg-base-100 shadow-xl mx-auto my-12">
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{title}</h2>
                <h3 className='text-center font-semibold text-2xl'><u>Reviews:</u></h3>
                <p>1: {review_1}</p> <br />
                <p>2: {review_2}</p>
                <div className="card-actions justify-center mt-5">
                    <button className="btn text-white">Give a Review</button>
                </div>
            </div>
        </div>
    );
};

export default Review;