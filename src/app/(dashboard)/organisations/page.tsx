"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useOrganizationStore } from "@/stores/org-store"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"

import {
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group"

import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"

import {
    Building2
} from "lucide-react"

export default function SelectOrganization() {

    const router = useRouter()

    const [selectedOrg, setSelectedOrg] = useState("")


    const setOrganization =
        useOrganizationStore(
            (state) => state.setOrganization
        )

    function handleContinue() {
        if (!selectedOrg) return

        setOrganization(selectedOrg)

        router.push("/dashboard")
    }

    return (

        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md z-50">
            <Card className="w-[420px] shadow-xl">

                <CardHeader>

                    <CardTitle>
                        Select Organization
                    </CardTitle>

                    <CardDescription>
                        Choose the organization you want to manage tickets for
                    </CardDescription>

                </CardHeader>


                <CardContent className="space-y-6">

                    <RadioGroup
                        value={selectedOrg}
                        onValueChange={setSelectedOrg}
                        className="space-y-4"
                    >

                        <div className="
                            flex items-center gap-4 
                            border rounded-lg 
                            p-4
                            cursor-pointer
                            hover:bg-muted
                            hover:shadow-xl
                        ">

                            <RadioGroupItem
                                value="Hillpost"
                                id="Hillpost"
                            />

                            <Building2 size={22} />

                            <Label
                                htmlFor="Hillpost"
                                className="cursor-pointer"
                            >
                                Hillpost
                            </Label>

                        </div>


                        <div className="
                            flex items-center gap-4 
                            border rounded-lg 
                            p-4
                            cursor-pointer
                            hover:bg-muted
                        ">

                            <RadioGroupItem
                                value="SAMTL"
                                id="SAMTL"
                            />

                            <Building2 size={22} />

                            <Label
                                htmlFor="SAMTL"
                                className="cursor-pointer hover:underline"
                            >
                                SAMTL
                            </Label>
                        </div>

                    </RadioGroup>

                    <Button
                        className="w-full bg-[#561922] hover:bg-[#3a121a] text-white"
                        disabled={!selectedOrg}
                        onClick={handleContinue}
                    >

                        Continue

                    </Button>


                </CardContent>


            </Card>


        </div>


    )

}