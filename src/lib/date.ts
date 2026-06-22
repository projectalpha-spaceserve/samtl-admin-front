import { DateRange } from "react-day-picker"


export function filterByDateRange<T extends Record<string, any>>(
    data: T[],
    dateRange: DateRange | undefined,
    field: keyof T
): T[] {

    if (!dateRange?.from && !dateRange?.to) {
        return data
    }

    return data.filter((item) => {

        const itemDate = new Date(item[field] as string)

        if (dateRange.from && itemDate < dateRange.from) {
            return false
        }

        if (dateRange.to && itemDate > dateRange.to) {
            return false
        }

        return true
    })
}