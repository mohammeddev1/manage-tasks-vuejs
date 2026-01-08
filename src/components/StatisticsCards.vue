<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-2 sm:p-6">
    <!-- All Tasks Card -->
    <div class="bg-white rounded-lg p-6 border-l-4 border-blue-500 shadow duration-300">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-600 text-sm font-medium uppercase tracking-wide">All Tasks</p>
          <p class="text-3xl font-bold text-gray-800 mt-2">{{ allTasks }}</p>
        </div>
        <div class="bg-blue-100 rounded-full p-4">
          <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Completed Tasks Card -->
    <div class="bg-white rounded-lg p-6 border-l-4 border-green-500 shadow duration-300">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-600 text-sm font-medium uppercase tracking-wide">Completed</p>
          <p class="text-3xl font-bold text-gray-800 mt-2">{{ completedTasks }}</p>
        </div>
        <div class="bg-green-100 rounded-full p-4">
          <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- In Progress Tasks Card -->
    <div class="bg-white rounded-lg p-6 border-l-4 border-yellow-500 shadow duration-300">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-600 text-sm font-medium uppercase tracking-wide">In Progress</p>
          <p class="text-3xl font-bold text-gray-800 mt-2">{{ progressTasks }}</p>
        </div>
        <div class="bg-yellow-100 rounded-full p-4">
          <svg
            class="w-8 h-8 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Not Started Tasks Card -->
    <div class="bg-white rounded-lg p-6 border-l-4 border-gray-500 shadow duration-300">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-600 text-sm font-medium uppercase tracking-wide">Not Started</p>
          <p class="text-3xl font-bold text-gray-800 mt-2">{{ notStartTasks }}</p>
        </div>
        <div class="bg-gray-100 rounded-full p-4">
          <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'StatisticsCards',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['allTasks', 'completedTasks', 'progressTasks', 'notStartTasks']),
  },
}
</script>
