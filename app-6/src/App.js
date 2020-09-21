import React, {Component} from 'react'
import './App.css';
import './ToDo';
import ToDo from './ToDo';
class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ''
    };

    this.addTask = this.addTask.bind(this);

  }
  inputTask(val){
    this.setState({input: val})
  }
  addTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    });
  }
  render() {
    let list = this.state.list.map((el, index) => {
      return <ToDo key={index} task={el}/>;
  });
  return (
    <div className= 'App'>
      <h1> My to-do list </h1>
      <div>
        <input
        value={this.state.input}
        placeholder= 'Enter new task'
        onChange={e => this.inputTask(e.target.value)}
        />
      </div>
    <button onClick={this.addTask}>Add</button>
    {list}
    </div>
  );
  }
}


export default App;
