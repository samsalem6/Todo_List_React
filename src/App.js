import React ,{ Component } from 'react';  
import AddItems from './addItems/AddItems';
import './App.css';
import TodoList from './todoList/TodoList';

class App extends Component {
  state = {
    items : [
      {id: 1, name: "hamza", age: 23},
      {id: 2, name: "osama", age: 30},
      {id: 3, name: "salem", age: 25},
    ],
    message: "Faild"
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id 
    })
    this.setState({items})
  }
  addItems = (item) => {
    item.id = Math.random() * 10;
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }
  render() {
    return (
      
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
       <TodoList items={this.state.items} deleteItem={this.deleteItem} />
       <AddItems addItems={this.addItems}/>
      </div>
    );
  }
  
}

export default App;
