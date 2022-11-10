import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, url, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire("You have succesfully logged in!", "Thank You");
                navigate(from, { replace: true })
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error));

    }

    return (
        <div>
            <div className="hero  bg-base-200 content-center">
                <div className="hero-content w-2/3 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignup}>
                            <div className="card-body">
                                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                                <hr />
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" name='url' placeholder="Your Photo url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline">Sign Up</button>
                                </div>
                                <h1 className='text-lg font-semibold my-3 text-orange-400-400'>Already have an Account?
                                    <Link className='text-sky-400 hover:text-sky-600' to='/login'>Login</Link>
                                </h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;