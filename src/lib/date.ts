export function filterByDateRange<T extends Record<string, any>>(
    data: T[],
    dateRange: { from?: Date; to?: Date },
    field: keyof T
): T[] {
    const { from, to } = dateRange

    if (!from && !to) return data

    return data.filter((item) => {
        const itemDate = new Date(item[field] as string)

        if (from && itemDate < from) return false
        if (to && itemDate > to) return false

        return true
    })
}