<script setup lang="ts">
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
  import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
  import { Input } from '@/components/ui/input'

  import { useTablesStore } from "@/stores/tablesStore"
  const tablesStore = useTablesStore();
</script>

<template>
  <main>
    <h1>This is the home/tables page</h1>
    <Tabs default-value="account" class="max-w-full">
      <ScrollArea class="border rounded-md max-w-fit whitespace-nowrap">


      <TabsList>
        <TabsTrigger v-for="table in tablesStore.tables" :value="table.name">
          {{ table.name }}
        </TabsTrigger>
      </TabsList>
      <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent v-for="table in tablesStore.tables" :value="table.name">
        <table class="w-full">
          <th v-for="_, columnIndex in table.columns">
            <Input v-model="table.columns[columnIndex]" placeholder="column name" />
          </th>
          <tr v-for="row in table.rows">
            <td v-for="_, fieldIndex in table.columns">
              <Input v-model="row.fields[fieldIndex]" />
            </td>
          </tr>
        </table>
      </TabsContent>
    </Tabs>
  </main>
</template>