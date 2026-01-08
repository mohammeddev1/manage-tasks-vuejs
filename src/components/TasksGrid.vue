<template>
  <div class="my-8 px-2 sm:px-4">
    <!-- Empty state -->
    <div
      v-if="!tasks || !tasks.length"
      class="flex flex-col items-center justify-center py-16 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 text-center"
    >
      <div class="w-14 h-14 rounded-md flex justify-center p-2 items-center bg-gray-200">
        <svg class="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          ></path>
        </svg>
      </div>
      <p class="text-lg font-semibold text-gray-700 mb-1">No tasks</p>
    </div>

    <!-- Tasks grid -->
    <div v-else class="grid gap-4 my-4 p-2 md:px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div
        v-for="(task, index) in tasks"
        :key="task.id || index"
        class="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition-shadow"
      >
        <!-- Card header -->
        <header class="mb-3">
          <h3 class="text-lg font-semibold text-gray-800 line-clamp-2">
            {{ task.taskTitle }}
          </h3>

          <!-- Status pill -->
          <span
            class="inline-flex items-center px-2.5 py-0.5 mt-2 rounded-full text-xs font-medium"
            :class="status(task.taskStatus).class"
          >
            {{ status(task.taskStatus).text }}
          </span>
        </header>

        <!-- info  -->
        <section class="text-xs text-gray-500 space-y-1 mb-4">
          <p v-if="task.createdAt">
            Created:
            <span class="font-medium text-gray-700">
              {{ task.createdAt }}
            </span>
          </p>
          <p v-if="task.updatedAt">
            Updated:
            <span class="font-medium text-gray-700">
              {{ task.updatedAt }}
            </span>
          </p>
        </section>

        <!-- Actions -->
        <footer class="flex justify-end gap-2 mt-auto">
          <!-- <BaseButton
            class="border-blue-300 px-3 py-1.5 bg-blue-100 text-blue-700 hover:bg-blue-200"
            buttonContent="Show"
          /> -->
          <BaseButton
            @click="$router.push({ name: 'EditTask', params: { taskId: task.id } })"
            class="px-3 py-1.5 bg-green-100 border-green-500 text-green-600 hover:bg-green-200"
            buttonContent="Edit"
          />
          <BaseButton
            @click="show(task.id)"
            class="border-red-300 px-3 py-1.5 bg-red-100 text-red-700 hover:bg-red-200"
            buttonContent="Delete"
          />
        </footer>
      </div>
    </div>
  </div>
  <ConfirmModal :taskId="taskId" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BaseButton from './ui/BaseButton.vue'
import ConfirmModal from './ConfirmModal.vue'
export default {
  name: 'TasksGrid',
  components: {
    BaseButton,
    ConfirmModal,
  },
  data() {
    return {
      taskId: null,
    }
  },
  computed: {
    ...mapGetters(['tasks']),
  },
  methods: {
    ...mapActions(['deleteTask', 'showConfirmAction']),
    show(id) {
      this.taskId = id
      this.showConfirmAction(true)
    },
    status(status) {
      if (!status) return 'Not set'
      switch (status) {
        case 'not-started':
          return { text: 'Not Started', class: 'bg-gray-100 text-gray-700' }
        case 'in-progress':
          return { text: 'In Progress', class: 'bg-blue-100 text-blue-700' }
        case 'completed':
          return { text: 'Completed', class: 'bg-green-100 text-green-700' }
        default:
          return status
      }
    },
  },
}
</script>
