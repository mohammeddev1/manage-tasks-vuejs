<template>
  <div
    ref="alert"
    class="fixed z-50 py-3 px-6 -translate-y-[200%] rounded-2xl left-1/2 -translate-x-1/2 top-2 bg-linear-to-r from-emerald-500 to-green-400 text-center text-white shadow-lg shadow-green-300 max-w-xs w-full transition-transform duration-300"
    role="alert"
    aria-live="assertive"
  >
    <p class="font-semibold text-base tracking-wide flex items-center justify-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 shrink-0 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
        <path
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12l2 2 4-4"
        />
      </svg>
      {{ alertMessage }}
    </p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'AlertModal',
  computed: {
    ...mapGetters(['showAlert', 'alertMessage']),
  },

  watch: {
    showAlert: {
      immediate: true,
      handler(newVal) {
        this.$nextTick(() => {
          const el = this.$refs.alert
          if (!el) return
          if (newVal) {
            el.classList.remove('-translate-y-[200%]')
            setTimeout(() => {
              el.classList.add('-translate-y-[200%]')
              setTimeout(() => {
                this.show_alert(false)
              }, 1500)
            }, 3000)
          } else {
            el.classList.add('-translate-y-[200%]')
          }
        })
      },
    },
  },
  methods: {
    ...mapMutations(['show_alert']),
  },
}
</script>
