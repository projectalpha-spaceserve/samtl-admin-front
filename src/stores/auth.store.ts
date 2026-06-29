import { create } from "zustand"

type User = {
    id: string
    name: string
    lastName: string
    role: "super_admin" | "admin" | "user"
}

type AuthStore = {
    user: User | null

    setUser: (user: User) => void

    hasRole: (role: string) => boolean
}

export const useAuthStore = create<AuthStore>((set, get) => ({
    user: {
        id: "1",
        name: "Philip",
        lastName: "Adegoke",
        role: "super_admin"
    },

    setUser: (user) => set({
        user
    }),

    hasRole: (role) => {
        const user = get().user
        return user?.role === role
    }

}))