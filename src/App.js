import React, { Component } from 'react';
import './App.css';
import contentful from './config/contentful'
import processContentful from './config/processContentful'
import List from './List'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      songs: [],
      error: ''
    }
  }

  componentDidMount() {
    contentful.getEntries({
      content_type: 'song',
      limit: 1000
    })
      .then(content => {
        const validatedContent = processContentful(content)
        if (validatedContent.length === 0) {
          this.setState({
            error: 'There was a problem loading, please try refreshing the page',
            loading: false
          })
        } else {
          this.setState({
            songs: validatedContent,
            loading: false
          })
        }

      })
      .catch(err => {
        console.log(err)
        this.setState({ loading: false, error: 'There was an error' })
      })
  }

  render() {
    if (this.state.loading) {
      return <div>Loading</div>
    }
    if (this.state.error) {
      return <div>{this.state.error}</div>
    }


    const callToWorshipDeclaration = this.state.songs.filter(s => s.flowCategories.includes('Call To Worship') && s.flowSubcategories.includes('Declaration & Praise'))
    const callToWorshipDraw = this.state.songs.filter(s => s.flowCategories.includes('Call To Worship') && s.flowSubcategories.includes('Drawing Near'))
    return (
      <div className="container">
        <List list={this.state.songs} />
        <h2>Call to Worship</h2>
        <List title="Declaration and Praise" list={callToWorshipDeclaration} />
        <List title="Drawing Near" list={callToWorshipDraw} />
      </div>


    )
  }
}
export default App;