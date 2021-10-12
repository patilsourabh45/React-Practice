import create from 'zustand'
import { devtools} from 'zustand/middleware'
import {dataSource} from './Datasource'

let peopleStore = (set) => ({
  people: (dataSource)
})

peopleStore = devtools(peopleStore)

export const usePeopleStore = create(peopleStore)