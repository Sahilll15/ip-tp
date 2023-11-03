import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/auth'

const Home = () => {

    const [cartItems, setCartItems] = useState([])

    const { cart } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await cart();
                // console.log('Data from cart:', data);
                setCartItems(data.data.cart);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    return (
        <div className='p-10 '>
            {/* <h1 className='text-black'>Home</h1> */}
            <button className='border border-black bg-red p-2 rounded-lg' onClick={() => {
                localStorage.removeItem('token')
                window.location.reload()
            }}>
                Logout
            </button>
            <div className='flex gap-4 mt-10'>

                {
                    cartItems.map((item, index) => {
                        return (
                            <div key={index} className='border p-2 border-black'>
                                <h1>{item.name}</h1>
                                <h1>{item.productId.name}</h1>
                                <h1>Quantity:{item.quantity}</h1>
                                <h1>Price:{item.productId.price}</h1>
                                {/* <button className='border border-black p-2 rounded-lg'>Add to Cart</button> */}
                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}

export default Home
