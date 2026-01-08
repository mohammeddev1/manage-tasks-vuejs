<template>
  <TheNavbar />
  <AlertModal />

  <RouterView />
</template>

<script>
import { mapActions } from 'vuex'
import TheNavbar from './components/TheNavbar.vue'
import AlertModal from './components/AlertModal.vue'
export default {
  components: {
    TheNavbar,
    AlertModal,
  },
  methods: {
    ...mapActions(['showAlert']),
  },
}
</script>
