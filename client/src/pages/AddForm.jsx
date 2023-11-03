import React, { useState } from 'react'
import { useAuth } from '../hooks/auth';

const AddForm = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);

    const { addData } = useAuth()



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(name, price, file)

            await addData(name, price, file)

        } catch (error) {
            console.log(error)
        }
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }


    return (
        <div className='m-10 border border-black p-10 bg-black '>
            <form onSubmit={handleSubmit}>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input onChange={(e) => setName(e.target.value)} name='name' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">price</label>
                    <input onChange={(e) => setPrice(e.target.value)} type="number" name='price' id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div class="flex items-start mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">file</label>

                    <input onChange={handleFileChange} type="file" name='file' id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />


                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}

export default AddForm
