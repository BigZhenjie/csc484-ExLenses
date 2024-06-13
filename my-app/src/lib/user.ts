import { create } from 'zustand'

export const useUserStore = create<userStoreState>((set) => ({
  user: null,
  setUser: (user: userDetail) => set({ user })
}))

export const useDataStore = create<dataStoreState>((set) => ({
  data: null,
  setData: (data: BankData[] | null) => set({ data })
}))

export const useFilteredDataStore = create<filteredDataStoreState>((set) => ({
  filteredData: null,
  setFilteredData: (data: BankData[] | null) => set({ filteredData: data }) // Provide an initializer for the 'filteredData' property
}))