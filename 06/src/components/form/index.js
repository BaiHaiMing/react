import React, { Component } from 'react'


export default class index extends Component {
    render() {
        return (
            <form>
                <label htmlFor="hobby">用户名：</label>
                <input id="username" type="text" defaultValue="hello"/> 
                <input id="hobby" type="checkbox" defaultChecked/>
            </form>
        )
    }
}





//可以使用受控组件的方式解决 ———— 让react的状态成为唯一的数据源
// export default class index extends Component {
//     constructor(){
//         super()
//         this.state = {
//             value:""
//         }
//     }
//     handleChange = (e)=>{
//         this.setState({value:e.target.value})
//     }
//     render() {
//         return (
//             <form>
//                <input type="text" value={this.state.value} onChange={this.handleChange}/> 
//             </form>
//         )
//     }
// }
