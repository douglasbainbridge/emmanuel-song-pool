import React, { Component } from 'react';
import './App.css';
import contentful from './config/contentful'

class App extends Component {
  constructor() {
    this.state = {
      contentLoading: true,
      content: {},
      error: ''
    }
  }

  componentDidMount() {
    contentful.getEntries({
      content_type: 'song',
      order: '-fields.date',
    })
      .then(content => {
        this.setState({
          content, contentLoading: false
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({ contentLoading: false, error: 'There was an error' })
      })
  }

  render() {
    return (
      <div>
        app
      </div>
    )
  }
}
export default App;