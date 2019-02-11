import './VanillaTodo.css';

import React, { Component, Fragment } from 'react';

import UiTodoAdd from '../../components/ui/UiTodoAdd/UiTodoAdd';
import UiTodoList from '../../components/ui/UiTodoList/UiTodoList';
import UiTodoStatus from '../../components/ui/UiTodoStatus/UiTodoStatus';
import UiTodoSwitch from '../../components/ui/UiTodoSwitch/UiTodoSwitch';
import { Todo, TodoCategory } from '../../domains/todo.model';
import {
    editText, filterByCategoryAndText, getStatus, isTextFree, todoBuilder, toggleDone
} from '../../domains/todo.operators';
import { ApiService } from '../../shared/ApiService';

export interface IVanillaTodoState {
  todos: Todo[];
  filterEnabled: boolean;
  text: string;
  category: TodoCategory;
}

export class VanillaTodo extends Component<{}, IVanillaTodoState> {
  state: IVanillaTodoState = {
    todos: [],
    filterEnabled: false,
    text: '',
    category: 'all'
  };

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    ApiService.getTodos().then(({ data }) => this.setState({ todos: data }));
  }

  get filter() {
    return this.state.filterEnabled ? this.state.text : '';
  }

  add = (text: string) => {
    ApiService.addTodo(todoBuilder(text)).then(this.refresh);
  }

  get addDisabled() {
    return !isTextFree(this.state.todos, this.state.text);
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
    return filterByCategoryAndText(this.state.todos, this.state.category, this.filter);
  }

  filterEnabledChange = (filterEnabled: boolean) => this.setState({ filterEnabled });

  textChange = (text: string) => this.setState({ text });

  render() {
    return (
      <Fragment>
        <div className="top">
          <UiTodoAdd
            filterEnabled={this.state.filterEnabled}
            filterEnabledChange={this.filterEnabledChange}
            text={this.state.text}
            textChange={this.textChange}
            addDisabled={this.addDisabled}
            add={this.add} />
        </div>

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
