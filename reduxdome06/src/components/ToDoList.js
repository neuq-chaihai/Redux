import React from 'react';
import {Input, Button, List} from 'antd';
import 'antd/dist/antd.css';
import store from '../store/store'

const ToDoList = () => {
    let data = store.getState();
    return (
        <div>
            <div>
                <Input placeholder={data.InputValue} style={{width: "44%", margin: "0 10px"}} />
                <Button type="primary">增加</Button>
                
            </div>
            <List
                style={{width: "50%", marginLeft:"10px"}}
                bordered
                dataSource={data.item}
                renderItem = {(item, index) =>(
                    <List.Item key={index}>{item}</List.Item>
                )}
            />
        </div>
    )
}

export default ToDoList;