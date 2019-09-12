import React, { Component } from 'react';

import store from './store/store'
import { ChangeItemAction , ClickItemAction , DeleteItemAction, GetList } from './store/createActions'
import ToDoListUI from './ToDoListUI'
import axios from 'axios'

export default class componentName extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this);
        this.changeItem = this.changeItem.bind(this);
        this.clickItem = this.clickItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.storeChange);
        // console.log(this.state)
    }
  render() {
    return (
      <ToDoListUI
      inputValue={this.state.inputValue} 
      changeItem={this.changeItem}
      clickItem={this.clickItem}
      item={this.state.item}
      deleteItem={this.deleteItem}
      />
    )
  }

  componentWillMount(){
    axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then ((ref) => {
      const data = ref.data;
      const action = GetList(data);
      store.dispatch(action);
    })
  }

  changeItem(e){
    const action = ChangeItemAction(e.target.value);
    store.dispatch(action);
  }

  clickItem(){
      const action = ClickItemAction();
      store.dispatch(action);
  }

  deleteItem(index){
    const action = DeleteItemAction(index)
    store.dispatch(action);
  }

  storeChange(){
      this.setState(store.getState)
  }
}
