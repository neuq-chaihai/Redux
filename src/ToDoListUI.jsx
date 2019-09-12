
import 'antd/dist/antd.css';
import { Input, Button, List} from 'antd';
import React, { Component } from 'react'


export default class ToDoListUI extends Component {
  render() {
    return (
      <div>    
        <div>
            <Input placeholder={this.props.inputValue} style={{width: "40%", margin: "10px"}} onChange = {this.props.changeItem} value={this.props.inputValue} />
            <Button type={"primary"} onClick = {this.props.clickItem} >增加</Button>
        </div>
        <div style={{width: '45%',margin: "10px"}}>
            <List 
                bordered
                dataSource = {this.props.item}
                renderItem = {(item,index) =>(
                    <List.Item onClick={() => this.props.deleteItem(index)}>{item}</List.Item>
                )}
            />    
        </div>    
      </div>
    )
  }
}
