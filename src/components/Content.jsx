import React from "react";
import dataJSON from './db.json';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ["ไข่เจียว","กะเพรา","หมูกระเทียม"],
      count:dataJSON
    };
  }
  addTodoList() {
    const input = this.refs.todoList;
    // this.state.data.push({ list: input.value })
    this.setState({ data: [...this.state.data, input.value] });
    console.log(input.value);
  }
  inputChange(e){
    this.setState({data:[e.target.value]})
  }
  render() {
    return (
      <div className="App">
        <h2>Content</h2>
        <input type="text" ref="todoList" /> {/* รับค่ามาเก็บไว้ที่ ref */}
        <button onClick={() => this.addTodoList()}>ADD</button>{" "}
        {/* ส่งไปไว้ใน function */}
        <br />
        <div className="list-left">
           {this.state.data.map ((name, id) => <List name={name} no={id+1} />)}
        </div>
      </div>
    );
  }
}
  
class List extends React.Component {
  render() {
    return (
      <li className="list-tap" >
       { this.props.name }
      </li>
    
      
    )
  }
}
export default Content;