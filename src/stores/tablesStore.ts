import { type Ref } from 'vue'
import { defineStore } from 'pinia'
import {
  type Table
} from '../types/types'
import { useStorage } from '@vueuse/core'
import defaultTables from "./defaultTables.json"


export const useTablesStore = defineStore('tablesStore', () => {
  const tables: Ref<Table[]> = useStorage('tables', defaultTables)

  function createAndAddTable() {
    let nextTableId = 1;
    for (let i = 0; i < tables.value.length; i++) {
      if (nextTableId <= tables.value[i].id) {
        nextTableId = tables.value[i].id + 1;
      }
    }
    tables.value.push({
      id: nextTableId,
      name: "new table",
      columns: [],
      rows: []
    })
  }

  return {
    tables,
    createAndAddTable
  }
})
