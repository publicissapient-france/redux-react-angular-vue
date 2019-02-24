import React, {Component, Fragment} from 'react';

import {UiTodoAdd, UiTodoCategory, UiTodoList, UiTodoStatus} from '../../components/ui';
import {
  filterByCategory, getStatus, Todo, todoBuilder, TodoCategory, toggleDone
} from '../../domains';
import * as  RestService from '../../shared/RestService';
import styles from './VanillaTodo.module.css';

export interface IVanillaTodoState {
  todos: Todo[];
  text: string;
  category: TodoCategory;
}

export class VanillaTodo extends Component<{}, IVanillaTodoState> {
  state: IVanillaTodoState = {
    todos: [],
    text: '',
    category: 'all'
  };

  get todosFiltered() {
    return filterByCategory(this.state.todos, this.state.category);
  }

  get status() {
    return getStatus(this.state.todos);
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    RestService.getTodos().then(({data}) => this.setState({todos: data}));
  }

  add = (text: string) => {
    RestService.addTodo(todoBuilder(text)).then(this.refresh);
    this.setState({text: ''});
  }

  toggleDone = (todo: Todo) => {
    RestService.updateTodo(toggleDone(todo)).then(this.refresh);
  }

  remove = (todo: Todo) => {
    RestService.removeTodo(todo.id).then(this.refresh);
  }

  textChange = (text: string) => this.setState({text});

  selectCategory = (category: TodoCategory) => this.setState({category});

  render() {
    return (
      <Fragment>
        <div className={styles['top']}>
          <UiTodoAdd
            text={this.state.text}
            textChange={this.textChange}
            add={this.add}/>
        </div>

        <UiTodoList
          toggleDone={this.toggleDone}
          remove={this.remove}
          todos={this.todosFiltered}/>

        <div className={styles['bottom']}>
          <UiTodoStatus status={this.status}/>
          <UiTodoCategory category={this.state.category} select={this.selectCategory}/>
        </div>
      </Fragment>
    );
  }
}

export default VanillaTodo;
