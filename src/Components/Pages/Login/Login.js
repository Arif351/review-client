import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { login, google } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire("You have succesfully logged in!", "Thank You");
                navigate(from, { replace: true })
                console.log(user);
                form.reset();

            })
            .catch(error => console.error(error));
    }

    const handleGoogle = () => {
        google(googleProvider)
            .then(result => {
                const user = result.user;
                Swal.fire("You have succesfully logged in!", "Thank You");
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(err => console.error(err));
    }
    const googleProvider = new GoogleAuthProvider();

    return (
        <div>
            <div className="hero  bg-base-200 content-center">
                <div className="hero-content w-2/3 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}>
                            <div className="card-body">
                                <h1 className="text-2xl font-bold text-center">Login Now</h1>
                                <hr />
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
                                    <label className="label">
                                        <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline">Login</button>
                                </div>
                                <h1 className='text-lg font-semibold my-2 text-orange-400-400'>Login with: <Link onClick={handleGoogle} className='text-sky-400 hover:text-sky-600' to='/signup'>Google</Link> </h1>
                                <h1 className='text-lg font-semibold my-2 text-orange-400-400'>New in this Website? <Link className='text-sky-400 hover:text-sky-600'>Signup</Link> </h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;