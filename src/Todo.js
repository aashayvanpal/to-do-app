import React from 'react'

class Todo extends React.Component {
    constructor() {
        super()
        this.state = {
            task: '',
            taskList: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit clicked")

        const task = { 'id': new Date().getTime(), 'name': this.state.task }
        this.setState({ taskList: [...this.state.taskList, task] })
        console.log('this.state', this.state)
    }

    handleChange = (e) => {
        // console.log("handle change")
        this.setState({ task: e.target.value })
        // console.log(e.target.value)
    }

    deleteTask = (task) => {
        console.log("Delete task:", task)
        const taskList = this.state.taskList.filter(singletask => singletask.id !== task.id)
        this.setState({ taskList })
    }
    render() {
        return (
            <div>
                <h1> Task Component</h1>
                <h1> Enter Task </h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.task} onChange={this.handleChange} />
                    <input text="Add task" type="submit" />
                </form>

                <h1>Total Tasks - {this.state.taskList.length} </h1>
                <ul>
                    {this.state.taskList.map(task => {
                        return (<li key={task.id}>{task.name} <button onClick={() => this.deleteTask(task)}>delete</button></li>)
                    })}
                </ul>

            </div >
        )
    }
}

export default Todo