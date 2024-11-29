import React from 'react';
import ReactDOM from 'react-dom';


class TaskManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: '',
      taskStatus: 'no prazo',
      tasks: []
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }


  handleTitleChange(event) {
    this.setState({ taskTitle: event.target.value });
  }


  handleStatusChange(event) {
    this.setState({ taskStatus: event.target.value });
  }


  handleAddTask() {
    if (this.state.taskTitle.trim() !== '') {
      const newTask = {
        title: this.state.taskTitle,
        status: this.state.taskStatus
      };
      this.setState({
        tasks: [...this.state.tasks, newTask],
        taskTitle: '',
        taskStatus: 'no prazo'
      });
    }
  }


  render() {
    return (
      <div>
        <h1>Gerenciador de Tarefas</h1>
        <input
          type="text"
          placeholder="Título da Tarefa"
          value={this.state.taskTitle}
          onChange={this.handleTitleChange}
        />
        <select
          value={this.state.taskStatus}
          onChange={this.handleStatusChange}
        >
          <option value="atrasada">Atrasada</option>
          <option value="no prazo">No Prazo</option>
          <option value="próximo ao prazo">Próximo ao Prazo</option>
        </select>
        <button onClick={this.handleAddTask}>Adicionar Tarefa</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>  
              Titulo da Tarefa:{task.title}, Status da Tarefa:{task.status}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


ReactDOM.render(
  <TaskManager />,
  document.getElementById('root')
);
