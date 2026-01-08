<template>
  <main class="max-w-6xl mx-auto">
    <StatisticsCards />
    <div
      class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-2 sm:px-4 mt-6 mb-4"
    >
      <h2 class="text-2xl font-bold text-gray-800">Tasks</h2>
      <div class="w-full md:w-1/3">
        <input
          type="text"
          @input="setSearchValue($event.target.value)"
          placeholder="Search with task title..."
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
      </div>
      <div class="flex gap-2 items-center">
        <label for="status_filter" class="text-lg">Filter By :</label>
        <select
          id="status_filter"
          @change="setFilterValue($event.target.value)"
          class="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-800"
        >
          <option value="">All Statuses</option>
          <option value="not-started">Not Started</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
    <TasksGrid />
  </main>
</template>

<script>
import StatisticsCards from '@/components/StatisticsCards.vue'
import TasksGrid from '@/components/TasksGrid.vue'
import { mapMutations } from 'vuex'
export default {
  components: {
    StatisticsCards,
    TasksGrid,
  },
  methods: {
    ...mapMutations(['setSearchValue', 'setFilterValue']),
  },
}
</script>
