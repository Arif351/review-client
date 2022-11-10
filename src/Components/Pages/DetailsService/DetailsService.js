import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const DetailsService = () => {
    const { customer } = useContext(AuthContext);

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
                    <div className="grid h-32 card bg-base-300 rounded-box place-items-center">{review_1}</div>
                    <div className="divider"></div>
                    <div className="grid h-32 card bg-base-300 rounded-box place-items-center">{review_2}</div>
                </div>
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
                    {/* <input type="text" name='text' defaultValue={customer?.name} className="mb-2 input textarea-info w-6/12 max-w-xs" /> <br />
                    <input type="email" name='email' defaultValue={customer?.email} className="mb-2 input textarea-info w-6/12 max-w-xs" /> */}
                </form>
                <textarea className="textarea textarea-info  my-4" placeholder="Write your Review"></textarea>

                <div className="card-actions justify-around mt-3">
                    <button className="btn btn-outline">Request for Service</button>
                    <Link to='/login'><button className="btn btn-outline">Give us a review</button></Link>
                </div>

            </div>
        </div >
    );
};

export default DetailsService;