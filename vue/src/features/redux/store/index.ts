import Vuex from 'vuex'
import Vue from 'vue';
import { Todo, TodoStore } from '@/domains/models';
import { addTodo, getTodos, removeTodo, updateTodo } from '@/services/todo.service';

Vue.use(Vuex);

// actions
export const ADD_TODO = 'addTodo';
export const LOAD_TODOS = 'loadTodos';
export const UPDATE_TODO = 'updateTodo';
export const REMOVE_TODO = 'removeTodo';

// mutations
export const SET_TODOS = 'setTodos';
export const SET_CATEGORY = 'setCategory';

// getters
export const FILTRED_TODOS = 'filtredTodos';

export const store = new Vuex.Store<TodoStore>({
  state: {
    todos: [],
    category: 'all',
  },
  actions: {
    async [ADD_TODO]({ dispatch }, label: string) {
      await addTodo({
        id: 0,
        label,
        done: false,
      });
      await dispatch(LOAD_TODOS);
    },
    async [LOAD_TODOS]({ commit }) {
      commit(SET_TODOS, await getTodos());
    },
    async [UPDATE_TODO]({ dispatch }, todo: Todo) {
      await updateTodo(todo);
      await dispatch(LOAD_TODOS);
    },
    async [REMOVE_TODO]({ dispatch }, todo: Todo) {
      await removeTodo(todo);
      await dispatch(LOAD_TODOS);
    }
  },
  mutations: {
    [SET_TODOS](state, todos: Todo[]) {
      state.todos = todos;
    },
    [SET_CATEGORY](state, category: string) {
      state.category = category;
    }
  },
  getters: {
    [FILTRED_TODOS]: state => {
      if (state.category === 'active') {
        return state.todos.filter(todo => !todo.done);
      }

      if (state.category === 'completed') {
        return state.todos.filter(todo => todo.done);
      }

      return state.todos;
    }
  }
});
