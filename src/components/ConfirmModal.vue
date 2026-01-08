<template>
  <div
    v-if="showConfirm"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300"
  >
    <div
      ref="confirmModal"
      class="bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 transform transition-all duration-300 scale-95"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
    >
      <div class="p-6">
        <!-- Icon and Message -->
        <div class="flex flex-col justify-center items-center gap-4 mb-6">
          <div class="shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div class="flex-1 text-center">
            <h3 id="confirm-title" class="text-2xl font-semibold text-gray-800 mb-2">
              Delete Task
            </h3>
            <p class="text-base text-gray-600 leading-relaxed">
              Are you sure you want to Delete Task?
            </p>
          </div>
        </div>

        <div class="flex justify-center gap-3">
          <BaseButton
            @click="show_confirm(false)"
            buttonContent="No Cancel"
            class="px-4 py-2 bg-green-100 border-green-300 text-green-700 hover:bg-green-200"
          />
          <BaseButton
            @click="deleteTask(taskId)"
            buttonContent="Yes delete"
            class="px-4 py-2 bg-red-100 border-red-500 text-red-700 hover:bg-red-200"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from './ui/BaseButton.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'ConfirmModal',
  components: {
    BaseButton,
  },
  props: {
    taskId: {
      type: String,
    },
  },
  computed: {
    ...mapGetters(['showConfirm']),
  },

  methods: {
    ...mapMutations({
      show_confirm: 'showConfirm',
    }),
    ...mapActions(['deleteTask']),
  },
}
</script>
