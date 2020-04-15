import React, { Component } from 'react'

export default class index extends Component {
    render() {
        let {list} = this.props;
        return (
            <ul>
                {
                    list.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        )
    }
}
