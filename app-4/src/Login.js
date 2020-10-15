import React, {Component} from 'react'

export default class Login extends Component {
    constructor (){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleUsernameChange(name){
        this.setState({ username: name })
    }
    handlePasswordChange(pass){
        this.setState({ password: pass })
    }
    handleLogin = () => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render () {
        return (
            <div className="App">
            <input type='text' onChange={e => this.handleUsernameChange(e.target.value)}/>
            <input type='password' onChange={e => this.handlePasswordChange(e.target.value)}/>
            <button onClick={this.handleLogin}>Login</button>
          </div> 
        )
    }
}