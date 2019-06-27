import React, { Component } from 'react'

export default class Song extends Component {
    constructor() {
        super()
        this.state = {
            expanded: false
        }
    }
    render() {
        console.log(this.props.song)
        const { title } = this.props.song
        return (
            <div>
                {title}
            </div>
        )
    }
}
