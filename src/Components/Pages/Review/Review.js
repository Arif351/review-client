import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Review = () => {
    const { customer } = useContext(AuthContext)
    const { title, review_1, review_2 } = useLoaderData();
    return (
        <div data-theme="dracula" className="card card-compact w-2/4 bg-base-100 shadow-xl mx-auto my-12">
            <form>
                <div className="card-body">
                    <h1 className="text-2xl font-bold text-center">Write Your Review</h1>
                    <hr />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={customer?.name} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='url' defaultValue={customer?.url} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={customer?.email} className="input input-bordered" required />
                    </div>
                </div>
                <textarea className="textarea textarea-info w-9/12 text-center my-4 mx-5" placeholder="Write your Review"></textarea>
            </form>

        </div>
    );
};

export default Review;