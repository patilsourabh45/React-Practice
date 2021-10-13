import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { dataSource } from './Datasource'

let peopleStore = (set) => ({
  people: (dataSource)
})

peopleStore = devtools(peopleStore)

const usePeopleStore = create(peopleStore)

export default usePeopleStore;