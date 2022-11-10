import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Service from '../../Pages/Service/Service';
import Cover from '../Cover/Cover';

const Home = () => {
    const [services, setServices] = useState([]);
    const { loading } = useContext(AuthContext)
    useEffect(() => {
        fetch('https://account-20cf4.web.app/services')
            .then(res => res.json())
            .then(data => setServices(data))

    },
        [])
    if (loading) {
        return <button className="btn loading">loading</button>
    }
    return (

        <div>
            <Cover></Cover>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-6'>
                <div data-theme="winter" className=" card w-11/12 bg-base-100 shadow-xl mx-auto my-6">
                    <div className="card-body">
                        <div className="card-actions">
                        </div>
                        <h1 className='text-center text-3xl my-3 font-semibold'>Hi, I am Lee, Your Account Helper!</h1>
                        <hr />
                        <p className='text-start mx-3'>
                            If an in-depth relationship is fundamental to business success and the sales account manager is responsible for managing the account, why then are account managers shifted from one account to another every year? How are account managers expected to deliver their sales quotas when they are not given the time to develop the depth of relationship needed to drive mutual long-term business value?

                            If we value sales performance and we value our customers, then the approach to account management of those customers surely must focus on longevity?

                            Of course, there are legitimate reasons for the change of account managers (people leave, get promoted, take other roles within the company) but the focus of this post is how companies change account managers with little or no justification, on the whim of a sales manager or director.
                        </p>
                    </div>
                </div>
                <div data-theme="winter" className="card w-11/12 bg-base-100 shadow-xl mx-auto my-6">
                    <div className="card-body">
                        <div className="card-actions">
                        </div>
                        <h1 className='text-center text-3xl my-3 font-semibold'>Necessity of an accountant!</h1>
                        <hr />
                        <p className='text-start mx-3'>
                            Having an accountant is one of the fundamental  factors for a company to be successful., Through good accounting, the businees can acurately  measure the results of the business _ and effectiveness the strategies that are being implemented. on the other hand, it enables compliance with all tax regulations that are required of a business.

                            Accounting provides the necessary information that supports the decision-making process  in a business, with regards to  planning and control. Therefore it is vital to have order and control, together with the services of a professional to organize the financial and business structures, operationally speaking.

                            An accountant is essential because financial activity suffers innumerable and complex changes which is very important to have the assistance of a person who possesses knowledge of the subject and also is constantly updating it.
                        </p>
                    </div>
                </div>
            </div>


            <div className='mx-6 lg:ml-2 my-7'>
                <div className='text-center my-12'>
                    <h1 className='text-neutral text-3xl font-semibold'>Hey, Your Tax Guidance in Here!</h1>
                    <p className='text-neutral font-semibold'>Set your paper, calculator and take a easy solution of your tax!</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
                <div className='text-center my-12 '>
                    <Link to='/allservices'><button className="btn btn-outline">See All Services</button></Link>
                </div>
            </div>
        </div>
    );
};

// https://i.ibb.co/4ZDYHyX/cover.jpg

export default Home;