import Vuex from 'vuex'
import Vue from 'vue';
import { Todo } from '@/domains/models';
import { addTodo, getTodos, removeTodo, updateTodo } from '@/services/todo.service';

Vue.use(Vuex);

interface TodoStore {
  tasks: Todo[];
  category: string;
}

// actions
export const ADD_TASK = 'addTask';
export const LOAD_TASKS = 'loadTasks';
export const UPDATE_TASK = 'updateTask';
export const REMOVE_TASK = 'removeTask';

// mutations
export const SET_TASKS = 'setTasks';
export const SET_CATEGORY = 'setCategory';

export const store = new Vuex.Store<TodoStore>({
  state: {
    tasks: [],
    category: 'all',
  },
  actions: {
    async [ADD_TASK]({ dispatch }, label: string) {
      await addTodo({
        id: 0,
        label,
        done: false,
      });
      await dispatch(LOAD_TASKS);
    },
    async [LOAD_TASKS]({ commit }) {
      commit('setTasks', await getTodos());
    },
    async [UPDATE_TASK]({ dispatch }, task: Todo) {
      await updateTodo(task);
      await dispatch(LOAD_TASKS);
    },
    async [REMOVE_TASK]({ dispatch }, task: Todo) {
      await removeTodo(task);
      await dispatch(LOAD_TASKS);
    }
  },
  mutations: {
    [SET_TASKS](state, tasks: Todo[]) {
      state.tasks = tasks;
    },
    [SET_CATEGORY](state, category: string) {
      state.category = category;
    }
  },
  getters: {
    filtredTasks: state => {
      if (state.category === 'active') {
        return state.tasks.filter(task => !task.done);
      }

      if (state.category === 'completed') {
        return state.tasks.filter(task => task.done);
      }

      return state.tasks;
    }
  }
});
