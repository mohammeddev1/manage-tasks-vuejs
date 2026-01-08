import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    showAlert: false,
    alertMessage: '',
    showConfirm: false,
    searchValue: '',
    filterValue: '',
  },

  getters: {
    tasks(state) {
      let filteredTasks = state.tasks

      if (state.searchValue) {
        const searchLower = state.searchValue.trim().toLowerCase()
        filteredTasks = filteredTasks.filter((task) =>
          task.taskTitle.toLowerCase().includes(searchLower),
        )
      }

      if (state.filterValue) {
        console.log(state.filterValue)

        filteredTasks = filteredTasks.filter((task) => task.taskStatus === state.filterValue)
      }

      return filteredTasks
    },

    showAlert(state) {
      return state.showAlert
    },
    showConfirm(state) {
      return state.showConfirm
    },
    alertMessage(state) {
      return state.alertMessage
    },

    allTasks(state) {
      return state.tasks.length
    },
    getTaskWithId: (state) => (id) => {
      return state.tasks.find((task) => task.id == id)
    },
    completedTasks(state) {
      const completed = state.tasks.filter((task) => task.taskStatus == 'completed')
      return completed.length
    },
    progressTasks(state) {
      const inProgress = state.tasks.filter((task) => task.taskStatus == 'in-progress')

      return inProgress.length
    },
    notStartTasks(state) {
      const notStart = state.tasks.filter((task) => task.taskStatus == 'not-started')
      return notStart.length
    },
  },

  mutations: {
    add_new_task(state, newTask) {
      if (newTask) {
        state.tasks.push(newTask)
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      }
    },
    edit_task(state, editTask) {
      console.log('from mutation ', editTask)

      const index = state.tasks.findIndex((task) => task.id == editTask.id)
      console.log('index from mutation', index)

      if (index < 0) {
        console.error('index not found from edit_task mutation')
        return
      }
      state.tasks.splice(index, 1, editTask)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    delete_task(state, id) {
      const index = state.tasks.findIndex((t) => t.id == id)
      if (index < 0) {
        console.error('index not found from edit_task mutation')
        return
      }
      state.tasks.splice(index, 1)

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    setSearchValue(state, value) {
      state.searchValue = value
    },
    setFilterValue(state, value) {
      state.filterValue = value
      console.log(state.filterValue)
    },
    show_alert(state, value) {
      state.showAlert = value
    },
    alert_message(state, message) {
      state.alertMessage = message
    },
    showConfirm(state, value) {
      state.showConfirm = value
    },
  },

  actions: {
    addNewTask({ commit }, newTask) {
      if (newTask) {
        commit('add_new_task', newTask)
        commit('show_alert', true)
        commit('alert_message', 'task Added Success.')
      }
    },

    edit_Task({ commit }, editTask) {
      if (editTask) {
        commit('edit_task', editTask)
        commit('show_alert', true)
        commit('alert_message', 'task Updated Success.')
      }
    },

    showConfirmAction({ commit }, value) {
      commit('showConfirm', value)
    },

    deleteTask({ commit }, id) {
      commit('delete_task', id)
      commit('showConfirm', false)
      commit('show_alert', true)
      commit('alert_message', 'task deleted Success.')
    },
  },
})
