import { create } from "zustand"
import { persist } from "zustand/middleware"


interface OrganizationStore {

    organization: string | null

    setOrganization: (org: string) => void

    clearOrganization: () => void

}

export const useOrganizationStore =
    create<OrganizationStore>()(
        persist(

            (set) => ({

                organization: null,

                setOrganization: (org) => {

                    set({
                        organization: org
                    })

                },

                clearOrganization: () => {

                    set({
                        organization: null
                    })

                }

            }),


            {
                name: "selected-organization"
            }
        )
    )