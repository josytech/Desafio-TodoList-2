import "./styles.css";
import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: black;
  font-family: cursive;
  text-shadow: 5px 5px 5px red;
  font-size: 30px;
  margin: 2vh;
`;

class App extends Component {
  state = {
    task: "",
    taskList: []
  };

  add = (event) => {
    const { taskList, task } = this.state;

    event.preventDefault();

    if (task === "") return;

    const newTask = {
      id: new Date(),
      text: task
    };

    this.setState({
      taskList: taskList.concat(newTask),
      task: ""
    });
    console.log(this.state.taskList);
  };

  remove = (id) => {
    const { taskList } = this.state;

    this.setState({
      taskList: taskList.filter((item) => item.id !== id)
    });
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Title>To Do List </Title>
        <form onSubmit={this.add}>
          <input onChange={this.handleChange} value={this.state.task} />
          <button onClick={this.add}>add</button>
          <ul>
            {this.state.taskList.map((item) => (
              <li key={item.id}>
                {item.text}
                <button onClick={() => this.remove(item.id)}> Remover </button>
              </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
