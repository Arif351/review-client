import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Review = () => {
    const { customer } = useContext(AuthContext)
    const { title, review_1, review_2, _id } = useLoaderData();

    const handleReview = (e) => {
        e.prvevntDefault();
        const form = e.target;
        const name = `${form.name.value}`
        const email = customer?.email;
        const review = form.review.value;
        console.log(name, email, review);

        const customerReview = {
            service: _id,
            serviceName: title,
            email,
            name,
            review
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customerReview)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))

    }
    return (
        <div data-theme="dracula" className="card card-compact w-2/4 bg-base-100 shadow-xl mx-auto my-12">
            <form onSubmit={handleReview}>
                <div className="card-body">
                    <h1 className="text-2xl font-bold text-center">Write Your Review</h1>
                    <hr />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' className="input input-bordered text-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="url" name='url' className="input input-bordered text-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={customer?.email} className="input input-bordered" />
                    </div>
                </div>
                <textarea name='review' className="textarea textarea-info w-9/12 my-4 mx-5" placeholder="Write your Review" required></textarea>
                <Link><button className="btn btn-outline my-4 ml-5">Give review</button></Link>
            </form>
        </div>
    );
};

export default Review;