<template>
  <div class="mt-6">
    <TaskForm :addTask="true" />
  </div>
</template>
<script>
import TaskForm from '@/components/TaskForm.vue'

export default {
  components: {
    TaskForm,
  },
}
</script>
