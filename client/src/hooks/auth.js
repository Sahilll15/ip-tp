import axios from "axios"


const useAuth = () => {

    const register = async (email, password) => {
        try {
            const res = await axios.post('http://localhost:4000/api/v1/users/register', {
                email: email,
                password: password
            })

            console.log(res)
            if (res.status === 201) {
                alert(res.data.message)
            }
        } catch (error) {
            console.log(error)

        }
    }

    const login = async (email, password) => {
        try {
            const res = await axios.post('http://localhost:4000/api/v1/users/login', {
                email: email,
                password: password
            })

            console.log(res)
            if (res.status === 200) {
                alert(res.data.message)
                localStorage.setItem('token', res.data.token)
                return res
                // window.location.href = '/'

            }
        } catch (error) {
            console.log(error)

        }
    }


    const cart = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/v1/cart/get/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            return res
        } catch (error) {
            console.log(error)
        }
    }


    const getProducts = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/v1/product/get', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            return res
        } catch (error) {
            console.log(error)
        }
    }


    const addTOcart = async (productId) => {
        try {
            const res = await axios.post(`http://localhost:4000/api/v1/cart/create/${productId}`, {
                quantity: 1
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            return res
        } catch (error) {
            console.log(error)
        }
    }

    const addData = async (name, price, file) => {
        try {

            // const formData=new FormData();

            // formData.append('name',name)
            // formData.append('price',price)
            // formData.append('file',file)
            const res = await axios.post(`http://localhost:4000/api/v1/product/create`, {
                name: name,
                price: price,
                file: file
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    return {
        register,
        login,
        cart,
        getProducts,
        addTOcart,
        addData
    }

}


export {
    useAuth
}