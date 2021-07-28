import React, { Component } from "react";
import "./App.css";
//import React, {useState} from 'react'
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./components/TodoItem";
import Summary from './components/Summary';

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
    isDone: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [newItem, ...this.state.items];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
    alert("You are deleting this item on your list!")
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    console.log(selectedItem);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };
  handleComplete = id => {
    const filteredItems = this.state.items.map((item) => item.id !== id);
      if(filteredItems.id === id){
        return{
          ...filteredItems, isDone: !filteredItems.isDone
        }
      }
      this.setState({
        items: filteredItems,
        id: id,
        isDone:true,
      });
      
  }
  render() {
    <TodoItem isDone = {this.state.isDone} />
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto cold-md-12 mt-4">
            <h3 className="text-capitalize text-center">MY TASK LIST</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
              handleComplete={this.state.handleComplete}
            />
            <div>Todos left: {this.state.items.filter(item => !item.completed).length}</div>
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleComplete={this.handleComplete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
