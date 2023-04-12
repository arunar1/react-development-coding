import React, { Component } from 'react'

import './Form.css'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic:'react'
        }
    }

    handlerUserNameChange = (event) => {
        this.setState({
            username: event.target.value


        })

    }
    handlerCommentChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }


    render() {
        return (
            <div>
                <form>
                    <label>UserName:</label>
                    <input type='text' value={this.state.username} onChange={this.handlerUserNameChange} />
                    <p>{this.state.username}</p>
                    <label>comments</label>
                    <textarea value={this.state.comments} onChange={this.handlerCommentChange}></textarea>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="anguler">Angular</option>
                        <option value="vue">Vue</option>
                    </select>



                </div>
                <button type='submit'>submit</button>

                </form>
            </div>
        )
    }
}
export default Form
