import './VanillaTodo.css';

import React, { Component, Fragment } from 'react';

import UiTodoList from '../../components/ui/UiTodoList/UiTodoList';
import UiTodoStatus from '../../components/ui/UiTodoStatus/UiTodoStatus';
import UiTodoSwitch from '../../components/ui/UiTodoSwitch/UiTodoSwitch';
import { Todo, TodoCategory } from '../../domains/todo.model';
import { editText, getStatus, todoBuilder, toggleDone, filterByCategoryAndText } from '../../domains/todo.operators';
import { ApiService } from '../../shared/ApiService';

export interface IVanillaTodoState {
  todos: Todo[];
  category: TodoCategory;
}

export class VanillaTodo extends Component<{}, IVanillaTodoState> {
  state: IVanillaTodoState = {
    todos: [],
    category: 'all'
  };

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    ApiService.getTodos().then(({ data }) => this.setState({ todos: data }));
  }

  add = (text: string) => {
    ApiService.addTodo(todoBuilder(text)).then(this.refresh);
  }

  toggleDone = (todo: Todo) => {
    ApiService.updateTodo(toggleDone(todo)).then(this.refresh);
  }

  editText = (todo: Todo, text: string) => {
    if (text) {
      ApiService.updateTodo(editText(todo, text)).then(this.refresh);
    } else {
      this.remove(todo);
    }
  }

  remove = (todo: Todo) => {
    ApiService.removeTodo(todo).then(this.refresh);
  }

  get status() {
    return getStatus(this.state.todos);
  }

  selectCategory = (category: TodoCategory) => this.setState({ category });

  get todosFiltered() {
    return filterByCategoryAndText(this.state.todos, this.state.category, '');
  }

  render() {
    return (
      <Fragment>
        <UiTodoList
          toggleDone={this.toggleDone}
          remove={this.remove}
          editText={this.editText}
          todos={this.todosFiltered} />

        <div className="bottom">
          <UiTodoStatus status={this.status} />
          <UiTodoSwitch category={this.state.category} select={this.selectCategory} />
        </div>
      </Fragment>
    )
  }
}

export default VanillaTodo;
