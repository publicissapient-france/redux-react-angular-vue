import './Vanilla-todo.css';

import React, { Component, Fragment } from 'react';

import UiTodoList from '../../components/ui/Ui-todo-list/Ui-todo-list';
import { Todo } from '../../domains/todo.model';
import { editText, todoBuilder, toggleDone } from '../../domains/todo.operators';
import { ApiService } from '../../services/api.service';

export interface IVanillaTodoProps {
  todos: Todo[];
}

export class VanillaTodo extends Component<IVanillaTodoProps> {
  state: IVanillaTodoProps = {
    todos: []
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

  render() {
    return (
      <Fragment>
        <UiTodoList
          toggleDone={this.toggleDone}
          remove={this.remove}
          editText={this.editText}
          todos={this.state.todos}>
        </UiTodoList>
      </Fragment>
    )
  }
}

export default VanillaTodo;
