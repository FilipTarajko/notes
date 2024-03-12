<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'

import { useTablesStore } from "@/stores/tablesStore"
const tablesStore = useTablesStore();
</script>

<template>
  <main>
    <h1>This is the home/tables page</h1>
    <Tabs :default-value="tablesStore.currentlyOpenTableId + ''" class="max-w-full">
      <div class="flex gap-1">
        <ScrollArea class="border rounded-md max-w-fit whitespace-nowrap">
          <TabsList>
            <TabsTrigger @click="tablesStore.currentlyOpenTableId = table.id" v-for="table in tablesStore.tables"
              :value="table.id + ''">
              {{ table.name }}
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Button variant="outline" class="h-full" @click="tablesStore.createAndAddTable">
          <Icon icon="radix-icons:plus" class="h-[1.5rem] w-[1.5rem]" />
        </Button>
      </div>
      <TabsContent v-for="table in tablesStore.tables" :value="table.id + ''">
        <table class="w-full">
          <tr>
            <th v-for="_, columnIndex in table.columns">
              <Input v-model="table.columns[columnIndex].name" placeholder="column name" />
            </th>
            <th>
              <Button variant="outline" @click="tablesStore.createAndAddColumnToTable(table)">
                <Icon icon="radix-icons:plus" class="h-[1.5rem] w-[1.5rem]" />
              </Button>
            </th>
          </tr>
          <tr v-for="row in table.rows">
            <td v-for="_, fieldIndex in table.columns">
              <Input v-model="row.fields[fieldIndex]" />
            </td>
            <Button variant="destructive" class="w-full" @click="tablesStore.removeRowFromTable(row.id, table)">
              <Icon icon="radix-icons:trash" class="h-[1.5rem] w-[1.5rem]" />
            </Button>
          </tr>
        </table>
        <Button variant="outline" class="h-full" @click="tablesStore.createAndAddRowToTable(table)">
          <Icon icon="radix-icons:plus" class="h-[1.5rem] w-[1.5rem]" />
        </Button>
      </TabsContent>
    </Tabs>
  </main>
</template>