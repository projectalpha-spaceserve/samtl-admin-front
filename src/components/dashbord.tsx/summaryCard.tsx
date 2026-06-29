import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Wallet } from "lucide-react"

type Props = {
    totalTickets: number
    income?: number
    expenses?: number
}



export default function SummaryCards({ totalTickets, income, expenses }: Props) {
    return (
        <div className="grid gap-4 md:grid-cols-3">


            <Card className="hover:bg-muted/60 transition">
                <CardHeader className="flex flex-row items-center justify-between hover:shadow-md transition-shadow">
                    <CardTitle>Total Tickets</CardTitle>
                    <Wallet className="w-5 h-5" />
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">
                        {totalTickets}
                    </p>
                </CardContent>
            </Card>

        </div>
    )
}