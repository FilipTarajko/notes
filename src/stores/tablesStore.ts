import { type Ref } from 'vue'
import { defineStore } from 'pinia'
import {
  type Table
} from '../types/types'
import { useStorage } from '@vueuse/core'
import defaultTables from "./defaultTables.json"


export const useTablesStore = defineStore('tablesStore', () => {
  const tables: Ref<Table[]> = useStorage('tables', defaultTables)
  const currentlyOpenTableId: Ref<number> = useStorage('currentlyOpenTableId', 1)

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

  function createAndAddRowToTable(table: Table) {
    let nextRowId = 1;
    for (let i = 0; i < table.rows.length; i++) {
      if (nextRowId <= table.rows[i].id) {
        nextRowId = table.rows[i].id + 1;
      }
    }
    table.rows.push({
      id: nextRowId,
      fields: []
    })
  }

  function createAndAddColumnToTable(table: Table) {
    table.columns.push("")
  }

  return {
    tables,
    currentlyOpenTableId,
    createAndAddTable,
    createAndAddRowToTable,
    createAndAddColumnToTable
  }
})
