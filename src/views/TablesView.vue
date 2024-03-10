<script setup lang="ts">
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
  import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

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
        {{ table.id }}
      </TabsContent>
    </Tabs>
  </main>
</template>