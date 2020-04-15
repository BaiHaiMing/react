import React, { Component } from 'react'

export default class index extends Component {
    
    input = (e) =>{
      if(e.keyCode===13){
        let {add} = this.props;
        add(e.target.value)
        e.target.value = ""
      }
    }

    render() {
        return (
            <div>
                <input onKeyUp={this.input} type="text"/>
            </div>
        )
    }
}
