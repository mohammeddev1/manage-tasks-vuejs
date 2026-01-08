<template>
  <nav class="bg-white w-full shadow">
    <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex items-center gap-1">
        <div
          class="bg-blue-600 md:w-12 md:h-10 rounded-lg flex justify-center items-center text-white p-1"
        >
          <span>Tasks</span>
        </div>
        <router-link :to="{ name: 'Home' }" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-xl text-heading font-semibold whitespace-nowrap"
            >Manage Tasks</span
          >
        </router-link>
      </div>
      <div>
        <BaseButton
          @click="$router.push({ name: 'AddNewTask' })"
          class="bg-blue-500 px-4 py-2.5 hover:bg-blue-700 text-white"
          buttonContent="add task"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import BaseButton from './ui/BaseButton.vue'
export default {
  components: {
    BaseButton,
  },
}
</script>
