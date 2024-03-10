import { type Ref } from 'vue'
import { defineStore } from 'pinia'
import {
  type Table
} from '../types/types'
import { useStorage } from '@vueuse/core'
import defaultTables from "./defaultTables.json"


export const useTablesStore = defineStore('tablesStore', () => {
  const tables: Ref<Table[]> = useStorage('tables', defaultTables)

  return {
    tables
  }
})
