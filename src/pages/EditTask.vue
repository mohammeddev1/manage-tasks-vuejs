<template>
  <div class="mt-6">
    <TaskForm :editTask="true" :selectedTask="task" />
  </div>
</template>
<script>
import TaskForm from '@/components/TaskForm.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    TaskForm,
  },
  data() {
    return {
      parameterId: null,
      task: {},
    }
  },
  computed: {
    ...mapGetters(['getTaskWithId']),
  },
  watch: {
    '$route.params.taskId': {
      immediate: true,
      handler() {
        this.getTask()
      },
    },
  },
  methods: {
    getTask() {
      const id = this.$route.params.taskId
      if (id) {
        this.parameterId = id
        this.task = this.getTaskWithId(id)
        if (!this.task) this.$router.push({ name: 'Home' })
      } else {
        this.$router.push({ name: 'Home' })
      }
    },
  },
}
</script>
