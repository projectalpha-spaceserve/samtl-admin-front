"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useToastAlert } from "@/constants/toast-provider"


interface OnboardingModalProps {
    open: boolean
    onClose: () => void
    buttonText?: string
}


const OnboardingModal = ({ open, onClose, buttonText }: OnboardingModalProps) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const isValid = formData.email && formData.password
    const { showToast } = useToastAlert();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isValid) {
            showToast(
                "error", "Please fill all fields"
            )
            return
        }

        showToast(
            "success",
            "Admin added successfully!"
        )

        console.log(
            "Form submitted:",
            formData
        )
        setFormData({
            email: '',
            password: ''
        })
        onClose()
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev, [name]: value
        }))
    }

    if (!open) return null
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md z-50">

            <Card className="w-[420px] shadow-xl">

                <CardHeader>
                    <CardTitle>
                        Add Admin
                    </CardTitle>

                    <CardDescription>
                        enter the details of the admin you want to add.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">

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
                        <button type="submit" className={`w-full ${isValid ? 'bg-[#561922] cursor-pointer' : 'bg-gray-300 cursor-not-allowed'} rounded-4xl p-3 text-white`}>
                            {buttonText || ' use'}
                        </button>
                    </form>
                </CardContent>
            </Card>
        </div>

    )

}


export default OnboardingModal