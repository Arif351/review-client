import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { title, price, _id } = useLoaderData();
    const { customer } = useContext(AuthContext);

    const handlePriceOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.name.value}`;
        const email = customer?.email || 'Unregister';
        const review = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name, email, review
        }
        console.log(order);
        fetch('https://account-20cf4.web.app/request', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Placed successfully.')
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <form onSubmit={handlePriceOrder}>
            <h2 className='text-4xl'>{title}</h2>
            <h4 className='text-3xl'>Price: {price}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name='name' type="text" placeholder="First Name" className="input input-bordered w-full" required />
                <input name='email' defaultValue={customer?.email} type="text" placeholder="email" className="input input-bordered w-full" readOnly required />
                <input name='phone' type="text" placeholder="phone" className="input input-bordered w-full" required />
            </div>
            <textarea name='message' className="textarea textarea-info h-24 w-full" placeholder="Message"></textarea>
            <button className="btn btn-outline btn-info">Order Place</button>
        </form>
    );
};

export default Checkout;