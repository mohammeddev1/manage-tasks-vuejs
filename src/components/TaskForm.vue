<template>
  <div class="bg-white border-2 border-gray-200 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
    <h2 v-if="addTask" class="text-2xl font-bold text-gray-800 mb-6">Add New Task</h2>

    <h2 v-if="editTask" class="text-2xl font-bold text-gray-800 mb-6">Edit Task</h2>
    <form @submit.prevent class="space-y-6">
      <!-- Title Field -->
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
          Title <span class="text-red-500">*</span>
        </label>
        <input
          id="title"
          type="text"
          v-model="taskObject.taskTitle"
          placeholder="Enter task title"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
        <p ref="titleError" class="text-sm ml-1.5 mt-1 text-red-600 font-semibold"></p>
      </div>

      <!-- Description Field -->
      <div>
        <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          id="description"
          rows="4"
          v-model="taskObject.taskDescription"
          placeholder="Enter task description"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
        ></textarea>
      </div>

      <!-- Status Field -->
      <div>
        <label for="status" class="block text-sm font-medium text-gray-700 mb-2">
          Status <span class="text-red-500">*</span>
        </label>
        <select
          id="status"
          v-model="taskObject.taskStatus"
          class="w-full appearance-none px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
        >
          <option value="not-started">Not Started</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <!-- Form Actions -->
      <div class="flex gap-4 justify-end">
        <BaseButton
          @click="$router.push({ name: 'Home' })"
          class="border-gray-300 px-4 py-2.5 bg-gray-200 text-gray-800 hover:bg-gray-300"
          buttonContent="Cancel"
        />
        <div v-if="addTask">
          <BaseButton
            @click="add_task()"
            class="border-blue-500 px-4 py-2.5 bg-blue-600 text-white hover:bg-blue-800"
            buttonContent="Add Task"
          />
        </div>
        <div v-if="editTask">
          <BaseButton
            @click="edit()"
            class="border-green-500 px-4 py-2.5 bg-green-600 text-white hover:bg-green-800"
            buttonContent="edit task"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from './ui/BaseButton.vue'
import { mapActions } from 'vuex'
export default {
  name: 'TaskForm',
  components: {
    BaseButton,
  },

  props: {
    addTask: {
      type: Boolean,
    },
    editTask: {
      type: Boolean,
    },
    selectedTask: {
      type: Object,
    },
  },
  data() {
    return {
      taskObject: {
        taskTitle: '',
        taskDescription: '',
        taskStatus: 'not-started',
        createdAt: null,
        updatedAt: null,
      },
    }
  },

  watch: {
    selectedTask: {
      immediate: true,
      handler(newVal) {
        if (this.editTask && newVal) {
          this.taskObject = newVal
        }
      },
    },
  },

  methods: {
    ...mapActions(['addNewTask', 'edit_Task']),
    add_task() {
      const date = new Date().toLocaleString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })

      if (this.taskObject.taskTitle && this.taskObject.taskTitle.trim().length > 10) {
        this.addNewTask({ ...this.taskObject, id: crypto.randomUUID(), createdAt: date })
        this.$router.push({ name: 'Home' })
      } else {
        this.$refs.titleError.textContent = 'Task title is too short.'
      }
    },
    edit() {
      const date = new Date().toLocaleString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })

      if (this.taskObject.taskTitle && this.taskObject.taskTitle.trim().length > 10) {
        this.edit_Task({ ...this.taskObject, updatedAt: date })
        this.$router.push({ name: 'Home' })
      } else {
        if (this.$refs.titleError) {
          this.$refs.titleError.textContent = 'Task title is too short.'
        } else {
          console.log('title error refs not found')
        }
      }
    },
  },
}
</script>
