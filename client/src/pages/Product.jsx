import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/auth'

const Product = () => {
    const { getProducts, addTOcart } = useAuth();
    const [products, setProducts] = useState([])



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                console.log(data)
                setProducts(data.data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        }

        fetchProducts()

    }, [])

    const hanldeAddCart = async (productId) => {
        await addTOcart(productId)

    }

    return (
        <div className='p-10 flex  gap-4'>

            {
                products.map((product, index) => {
                    return (
                        <div key={index} className='border p-2 border-black'>
                            <h1>{product.name}</h1>
                            <h1>price:{product.price}</h1>
                            <button className='border border-black rounded-lg p-2 bg-green-300 mt-4' onClick={() => {
                                hanldeAddCart(product._id)
                            }}>Add to Cart</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Product
