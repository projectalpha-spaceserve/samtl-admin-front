"use client"
import React, { use } from 'react'
import { useState } from 'react'
import { useRouter } from "next/navigation"

function Login() {

    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const isValid = formData.email && formData.password

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isValid) {
            router.replace('/organisations')
        }

    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev, [name]: value
        }))
    }


    return (
        <div className=' h-full gap-4 flex flex-col items-center justify-center '>

            <div className='flex flex-col gap-9 w-[80%] justify-center '>
                <div>
                    <h1>Hello again!</h1>
                    <p>Sign in to stay connected with your favourite events and updates.</p>
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={onChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                            placeholder='email adress'
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={onChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                            placeholder='email adress'
                        />
                    </div>
                    <button type="submit" className={`w-full ${isValid ? 'bg-[#561922] cursor-pointer' : 'bg-gray-300 cursor-not-allowed'} rounded-4xl p-3 text-white`}>sign in</button>
                </form>
            </div>


        </div >
    )
}

export default Login 