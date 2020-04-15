import React, { Component } from 'react'
import axios from "axios"
export default class index extends Component {
    constructor(){
        super()
        this.state = {
            list:[],
            name:"", //定义input框的name属性
            age:0    //定义input框的age属性
        }
        //这个是初始化的时候就会对事件函数内部的this(undefined) ==> 当前组件
        this.handle = this.handle.bind(this)
    }
    componentDidMount(){ //钩子函数内部的this是指向组件
        this.getData()
    }
    getData(){
        axios.get("http://localhost:4000/list").then(res=>{
            if(res.status === 200){
                this.setState({list:res.data})
            }
        })
    }
    handle(e){
        // console.log(this)
        if(e.keyCode === 13){
            this.add()
        }
    }
    add = ()=>{
        let {name,age} = this.state;
        //mock的添加数据通过post请求方式添加的
        axios.post("http://localhost:4000/list",{
            name,
            age
        },{
            headers:{
                "content-type":"application/json"
            }
        }).then(res=>{
            //清空状态目的就是让输入框内部的值为空
            this.setState({name:"",age:0})
            // 请求请求mock数据
            this.getData()
        })
    }
    input = e => {
        // console.log(e.target.id)
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render() {
        let {list,name,age} = this.state;
        return (
            <div>
                <input id="name" value={name} onChange={this.input} onKeyUp={this.handle} type="text"/>
                <input id="age" value={age} onChange={this.input} onKeyUp={this.handle} type="number" />
                <ul>
                    {
                        list.map((item)=>{
                            return <li key={item.id}>{item.name} : {item.age}</li>
                        })
                    }
                </ul>
                 <button onClick={this.add}>添加数据</button>       
            </div>
        )
    }
}
