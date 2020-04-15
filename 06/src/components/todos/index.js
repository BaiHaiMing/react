import React, { Component } from 'react'
import List from "../list"
import Txt from "../txt"
export default class index extends Component {
    constructor(){
        super()
        this.state = {
            list:[]
        }
    }

    add = str =>{
        //console.log("todos",str)
        this.setState({
            list:[...this.state.list,str]
        }) 
    }

    render() {
        return (
            <div>
                <Txt add={this.add}/>
                <List  list={this.state.list}></List>
            </div>
        )
    }
}
